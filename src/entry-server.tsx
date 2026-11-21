// Build-time entry used by scripts/prerender.mjs to turn each page and article into static HTML.
import { renderToString } from "react-dom/server";
import App from "./app/App";
import { type Route, ROUTES, SITE_URL, renderHeadTags, routeLastmod, routePath } from "./app/seo";

export function render(route: Route): string {
  return renderToString(<App initialRoute={route} />);
}

export { ROUTES, SITE_URL, renderHeadTags, routeLastmod, routePath };
