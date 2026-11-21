// Build-time entry used by scripts/prerender.mjs to turn each page into static HTML.
import { renderToString } from "react-dom/server";
import App from "./app/App";
import { type Page, PAGE_TO_PATH, SITE_URL, renderHeadTags } from "./app/seo";

export function render(page: Page): string {
  return renderToString(<App initialPage={page} />);
}

export { PAGE_TO_PATH, SITE_URL, renderHeadTags };
