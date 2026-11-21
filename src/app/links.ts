import type { MouseEvent } from "react";

/**
 * Props for a real <a href> link: search engines can follow it and visitors can open it in a new tab,
 * while a normal click is handled inside the app without a page reload.
 */
export function spaLink(href: string, onNavigate: () => void) {
  return {
    href,
    onClick: (e: MouseEvent<HTMLAnchorElement>) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      onNavigate();
    },
  };
}
