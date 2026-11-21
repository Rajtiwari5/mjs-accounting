// Single source of truth for URLs, page titles/descriptions and structured data.
// Used by the app (client-side head updates) and by scripts/prerender.mjs (static HTML per page).
import { NEWS_ARTICLES, type NewsArticle } from "./data/newsData";

export type Page = "home" | "about" | "services" | "updates" | "contact";

/** A page, or a single article inside "updates" (served at /updates/<slug>). */
export interface Route {
  page: Page;
  articleSlug?: string;
}

export const SITE_URL = "https://www.mjsaudit.com";

export const PAGE_TO_PATH: Record<Page, string> = {
  home: "/",
  about: "/aboutus",
  services: "/services",
  updates: "/updates",
  contact: "/contact",
};

// Alternate paths still open the right page; vercel.json 308-redirects them to the canonical path.
export const PATH_TO_PAGE: Record<string, Page> = {
  "/": "home",
  "/home": "home",
  "/aboutus": "about",
  "/about": "about",
  "/about-us": "about",
  "/services": "services",
  "/updates": "updates",
  "/news": "updates",
  "/contact": "contact",
  "/contactus": "contact",
  "/contact-us": "contact",
};

export function articlePath(slug: string): string {
  return `/updates/${slug}`;
}

export function getArticle(slug?: string | null): NewsArticle | undefined {
  return slug ? NEWS_ARTICLES.find((article) => article.slug === slug) : undefined;
}

export function routePath(route: Route): string {
  return route.articleSlug ? articlePath(route.articleSlug) : PAGE_TO_PATH[route.page];
}

/** Maps a URL path to a route, or null if no page or article lives there. */
export function routeFromPath(pathname: string): Route | null {
  const raw = pathname.toLowerCase();
  const path = raw === "/" ? "/" : raw.replace(/\/+$/, "");
  const page = PATH_TO_PAGE[path];
  if (page) return { page };
  const match = path.match(/^\/updates\/([a-z0-9-]+)$/);
  if (match && getArticle(match[1])) return { page: "updates", articleSlug: match[1] };
  return null;
}

/** Every URL that gets its own pre-rendered HTML file and sitemap entry. */
export const ROUTES: Route[] = [
  ...(Object.keys(PAGE_TO_PATH) as Page[]).map((page) => ({ page })),
  ...NEWS_ARTICLES.map((article) => ({ page: "updates" as const, articleSlug: article.slug })),
];

export const BUSINESS = {
  name: "MJS Accounting & Auditing L.L.C",
  legalName: "M J S Accounting And Auditing L.L.C",
  alternateNames: [
    "MJS Accounting and Auditing LLC",
    "M J S Accounting And Auditing LLC",
    "MJS Accounting & Auditing",
    "MJS Audit",
  ],
  phone: "+971561529421",
  email: "info@mjsaudit.com",
  streetAddress: "Office No. M02-038, Sama Residence M-02, 28th Street, Al Nahda 1",
  locality: "Dubai",
  country: "AE",
  foundingYear: "2023",
  sameAs: [
    "https://www.linkedin.com/company/mjsaudit/",
    "https://www.instagram.com/mjsaudit/",
    "https://www.facebook.com/mjsaudit/",
    "https://x.com/MJSAudit",
  ],
  services: [
    "Accounting & Bookkeeping",
    "VAT Compliance & Advisory",
    "Corporate Tax Services",
    "Internal Audit & Governance",
    "Business Advisory & ESR",
  ],
};

interface PageSeo {
  title: string;
  description: string;
  /** Short name used in breadcrumbs */
  name: string;
  schemaType: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}

export const PAGE_SEO: Record<Page, PageSeo> = {
  home: {
    title: "MJS Accounting & Auditing LLC | Accounting & Tax Firm in Dubai",
    description:
      "MJS Accounting & Auditing L.L.C is a Dubai accounting firm for bookkeeping, VAT registration and returns, Corporate Tax, internal audit and business advisory.",
    name: "Home",
    schemaType: "WebPage",
  },
  about: {
    title: "About Us | MJS Accounting & Auditing LLC, Dubai",
    description:
      "M J S Accounting & Auditing L.L.C is a Dubai-based accounting and taxation firm helping UAE businesses stay compliant, improve financial performance and grow.",
    name: "About Us",
    schemaType: "AboutPage",
  },
  services: {
    title: "Accounting, VAT & Corporate Tax Services in Dubai | MJS",
    description:
      "Bookkeeping, VAT compliance, Corporate Tax registration and returns, internal audit, ESR, AML and company formation for UAE mainland and free zone businesses.",
    name: "Services",
    schemaType: "WebPage",
  },
  updates: {
    title: "UAE VAT & Corporate Tax Updates | MJS Accounting & Auditing",
    description:
      "Plain-English briefings on the latest UAE FTA decisions, Cabinet decisions and Ministry of Finance changes to VAT, Corporate Tax and e-invoicing, from MJS.",
    name: "Updates",
    schemaType: "CollectionPage",
  },
  contact: {
    title: "Contact MJS Accounting & Auditing LLC | Dubai Office",
    description:
      "Contact MJS Accounting & Auditing in Al Nahda, Dubai. Call or WhatsApp +971 56 152 9421 or email info@mjsaudit.com for an accounting, VAT or tax consultation.",
    name: "Contact",
    schemaType: "ContactPage",
  },
};

export function canonicalUrl(page: Page): string {
  return SITE_URL + PAGE_TO_PATH[page];
}

// ─── Article helpers ──────────────────────────────────────────────────────────

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

/** "September 28, 2026" -> "2026-09-28"; null if the date is not in that format. */
export function articleIsoDate(date: string): string | null {
  const match = date.trim().match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  const month = match ? MONTHS.indexOf(match[1].toLowerCase()) + 1 : 0;
  if (!match || month === 0) return null;
  return `${match[3]}-${String(month).padStart(2, "0")}-${match[2].padStart(2, "0")}`;
}

/** Article title without a leading emoji, for <title>, link previews and structured data. */
export function plainTitle(title: string): string {
  return title.replace(/^[^\p{L}\p{N}]+/u, "").trim();
}

/** Trims text to a search-snippet length at a word boundary. */
function shorten(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.–-]+$/, "") + "…";
}

const absoluteUrl = (src: string) => (/^https?:\/\//.test(src) ? src : SITE_URL + src);

// ─── Head tags & structured data ──────────────────────────────────────────────

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const DEFAULT_IMAGE = {
  url: `${SITE_URL}/og-image.png`,
  alt: "MJS Accounting & Auditing L.L.C, accounting, VAT and Corporate Tax firm in Dubai",
  width: 1200,
  height: 630,
};

interface HeadData {
  title: string;
  description: string;
  url: string;
  type: "website" | "article";
  image: string;
  imageAlt: string;
  imageSize?: { width: number; height: number };
  published?: string;
  section?: string;
}

function headData(route: Route): HeadData {
  const article = getArticle(route.articleSlug);
  if (article) {
    return {
      title: plainTitle(article.title),
      description: shorten(article.excerpt),
      url: SITE_URL + articlePath(article.slug),
      type: "article",
      image: absoluteUrl(article.image),
      imageAlt: plainTitle(article.title),
      published: articleIsoDate(article.date) ?? undefined,
      section: article.category,
    };
  }
  const { title, description } = PAGE_SEO[route.page];
  return {
    title,
    description,
    url: canonicalUrl(route.page),
    type: "website",
    image: DEFAULT_IMAGE.url,
    imageAlt: DEFAULT_IMAGE.alt,
    imageSize: { width: DEFAULT_IMAGE.width, height: DEFAULT_IMAGE.height },
  };
}

export function structuredData(route: Route) {
  const head = headData(route);
  const article = getArticle(route.articleSlug);

  const organization = {
    "@type": "AccountingService",
    "@id": ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    alternateName: BUSINESS.alternateNames,
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
    image: DEFAULT_IMAGE.url,
    description:
      "Dubai-based accounting, auditing and tax firm providing accounting and bookkeeping, VAT compliance, UAE Corporate Tax, internal audit and business advisory services.",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: BUSINESS.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.locality,
      addressCountry: BUSINESS.country,
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        contactType: "customer service",
        areaServed: "AE",
      },
    ],
    knowsAbout: [
      "Accounting",
      "Bookkeeping",
      "UAE VAT",
      "UAE Corporate Tax",
      "Internal Audit",
      "Economic Substance Regulations",
      "AML Compliance",
      "Company Formation in the UAE",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accounting, Tax and Advisory Services",
      itemListElement: BUSINESS.services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service },
      })),
    },
    sameAs: BUSINESS.sameAs,
  };

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: "MJS Accounting & Auditing",
    alternateName: ["MJS Audit", BUSINESS.legalName],
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };

  const webPage: Record<string, unknown> = {
    "@type": article ? "WebPage" : PAGE_SEO[route.page].schemaType,
    "@id": `${head.url}#webpage`,
    url: head.url,
    name: head.title,
    description: head.description,
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en",
  };
  if (!article) webPage.about = { "@id": ORG_ID };

  const graph: Record<string, unknown>[] = [organization, website, webPage];
  const breadcrumb = [{ name: PAGE_SEO.home.name, url: `${SITE_URL}/` }];

  if (article) {
    const published = articleIsoDate(article.date);
    if (!published) {
      throw new Error(`Article "${article.slug}" has date "${article.date}"; expected a format like "September 28, 2026"`);
    }
    graph.push({
      "@type": "Article",
      "@id": `${head.url}#article`,
      headline: head.title,
      description: head.description,
      image: [head.image],
      datePublished: published,
      dateModified: published,
      author: /^MJS\b/i.test(article.author)
        ? { "@type": "Organization", name: article.author, url: `${SITE_URL}/` }
        : { "@type": "Person", name: article.author, worksFor: { "@id": ORG_ID } },
      publisher: { "@id": ORG_ID },
      mainEntityOfPage: { "@id": `${head.url}#webpage` },
      isPartOf: { "@id": WEBSITE_ID },
      articleSection: article.category,
      inLanguage: "en",
    });
    breadcrumb.push(
      { name: PAGE_SEO.updates.name, url: canonicalUrl("updates") },
      { name: head.title, url: head.url },
    );
  } else if (route.page !== "home") {
    breadcrumb.push({ name: PAGE_SEO[route.page].name, url: head.url });
  }

  if (breadcrumb.length > 1) {
    webPage.breadcrumb = { "@id": `${head.url}#breadcrumb` };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${head.url}#breadcrumb`,
      itemListElement: breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Per-page <head> tags, injected at build time by scripts/prerender.mjs. */
export function renderHeadTags(route: Route): string {
  const head = headData(route);
  const e = escapeHtml;
  const jsonLd = JSON.stringify(structuredData(route)).replace(/</g, "\\u003c");

  return [
    `<title>${e(head.title)}</title>`,
    `<meta name="description" content="${e(head.description)}" />`,
    `<link rel="canonical" href="${head.url}" />`,
    `<meta property="og:type" content="${head.type}" />`,
    `<meta property="og:url" content="${head.url}" />`,
    `<meta property="og:title" content="${e(head.title)}" />`,
    `<meta property="og:description" content="${e(head.description)}" />`,
    `<meta property="og:image" content="${e(head.image)}" />`,
    ...(head.imageSize
      ? [
          `<meta property="og:image:width" content="${head.imageSize.width}" />`,
          `<meta property="og:image:height" content="${head.imageSize.height}" />`,
        ]
      : []),
    `<meta property="og:image:alt" content="${e(head.imageAlt)}" />`,
    ...(head.published ? [`<meta property="article:published_time" content="${head.published}" />`] : []),
    ...(head.section ? [`<meta property="article:section" content="${e(head.section)}" />`] : []),
    `<meta name="twitter:title" content="${e(head.title)}" />`,
    `<meta name="twitter:description" content="${e(head.description)}" />`,
    `<meta name="twitter:image" content="${e(head.image)}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join("\n    ");
}

/** Last-modified date for the sitemap: the article's date, or null to use the build date. */
export function routeLastmod(route: Route): string | null {
  const article = getArticle(route.articleSlug);
  return article ? articleIsoDate(article.date) : null;
}

/** Keeps <head> in sync when the visitor moves between pages inside the app. */
export function applyPageHead(route: Route): void {
  const { title, description, url } = headData(route);

  document.title = title;

  const upsert = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
    let el = document.head.querySelector<HTMLElement>(selector);
    if (!el) {
      el = create();
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };
  const meta = (key: "name" | "property", name: string) => () => {
    const el = document.createElement("meta");
    el.setAttribute(key, name);
    return el;
  };

  upsert('meta[name="description"]', meta("name", "description"), "content", description);
  upsert(
    'link[rel="canonical"]',
    () => {
      const el = document.createElement("link");
      el.rel = "canonical";
      return el;
    },
    "href",
    url,
  );
  upsert('meta[property="og:url"]', meta("property", "og:url"), "content", url);
  upsert('meta[property="og:title"]', meta("property", "og:title"), "content", title);
  upsert('meta[property="og:description"]', meta("property", "og:description"), "content", description);
  upsert('meta[name="twitter:title"]', meta("name", "twitter:title"), "content", title);
  upsert('meta[name="twitter:description"]', meta("name", "twitter:description"), "content", description);
}
