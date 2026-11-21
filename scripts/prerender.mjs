// Turns every page and article into a static HTML file (dist/index.html, dist/aboutus.html,
// dist/updates/<slug>.html, ...) with its own <title>, description, canonical URL and structured data,
// then writes dist/sitemap.xml. Search engines, social link previews and AI crawlers get the full
// content without running JavaScript.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

process.env.NODE_ENV ??= "production"; // render with React's production build, same as the browser bundle

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, renderHeadTags, ROUTES, SITE_URL, routeLastmod, routePath } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
const HEAD_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
const EMPTY_ROOT = '<div id="root"></div>';

if (!HEAD_BLOCK.test(template) || !template.includes(EMPTY_ROOT)) {
  throw new Error("dist/index.html is missing the <!--seo:start-->...<!--seo:end--> block or an empty #root div");
}

const paths = ROUTES.map(routePath);
if (new Set(paths).size !== paths.length) throw new Error(`Duplicate URLs in ROUTES: ${paths.join(", ")}`);

for (const route of ROUTES) {
  const urlPath = routePath(route);
  const appHtml = render(route);
  if (!appHtml.includes("<h1")) throw new Error(`Pre-rendered ${urlPath} has no <h1>`);
  if (route.articleSlug && !appHtml.includes('aria-label="Breadcrumb"')) {
    throw new Error(`Pre-rendered ${urlPath} did not render the article page`);
  }

  // Replacer functions keep "$" characters in the content from being treated as patterns.
  const html = template
    .replace(HEAD_BLOCK, () => renderHeadTags(route))
    .replace(EMPTY_ROOT, () => `<div id="root">${appHtml}</div>`);

  const file = urlPath === "/" ? "index.html" : `${urlPath.slice(1)}.html`;
  const outPath = path.join(distDir, file);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`prerendered ${urlPath} -> dist/${file} (${(html.length / 1024).toFixed(1)} kB)`);
}

const buildDate = new Date().toISOString().slice(0, 10);
const urls = ROUTES.map(
  (route) =>
    `  <url>\n    <loc>${SITE_URL}${routePath(route)}</loc>\n    <lastmod>${routeLastmod(route) ?? buildDate}</lastmod>\n  </url>`,
).join("\n");
fs.writeFileSync(
  path.join(distDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`wrote dist/sitemap.xml (${ROUTES.length} URLs)`);

fs.rmSync(ssrDir, { recursive: true, force: true });
