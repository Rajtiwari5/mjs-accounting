// Turns every page into a static HTML file (dist/index.html, dist/aboutus.html, ...) with its own
// <title>, description, canonical URL and structured data, then writes dist/sitemap.xml.
// Search engines, social link previews and AI crawlers get the full content without running JavaScript.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

process.env.NODE_ENV ??= "production"; // render with React's production build, same as the browser bundle

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, renderHeadTags, PAGE_TO_PATH, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
const HEAD_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
const EMPTY_ROOT = '<div id="root"></div>';

if (!HEAD_BLOCK.test(template) || !template.includes(EMPTY_ROOT)) {
  throw new Error("dist/index.html is missing the <!--seo:start-->...<!--seo:end--> block or an empty #root div");
}

for (const [page, urlPath] of Object.entries(PAGE_TO_PATH)) {
  const appHtml = render(page);
  if (!appHtml.includes("<h1")) throw new Error(`Pre-rendered page "${page}" has no <h1>`);

  // Replacer functions keep "$" characters in the content from being treated as patterns.
  const html = template
    .replace(HEAD_BLOCK, () => renderHeadTags(page))
    .replace(EMPTY_ROOT, () => `<div id="root">${appHtml}</div>`);

  const file = urlPath === "/" ? "index.html" : `${urlPath.slice(1)}.html`;
  fs.writeFileSync(path.join(distDir, file), html);
  console.log(`prerendered ${urlPath.padEnd(10)} -> dist/${file} (${(html.length / 1024).toFixed(1)} kB)`);
}

const lastmod = new Date().toISOString().slice(0, 10);
const urls = Object.values(PAGE_TO_PATH)
  .map((urlPath) => `  <url>\n    <loc>${SITE_URL}${urlPath}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
  .join("\n");
fs.writeFileSync(
  path.join(distDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`wrote dist/sitemap.xml (${Object.keys(PAGE_TO_PATH).length} URLs)`);

fs.rmSync(ssrDir, { recursive: true, force: true });
