// Single source of truth for URLs, page titles/descriptions and structured data.
// Used by the app (client-side head updates) and by scripts/prerender.mjs (static HTML per page).

export type Page = "home" | "about" | "services" | "updates" | "contact";

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
  phoneDisplay: "+971 56 152 9421",
  phone2: "+971545784786",
  phone2Display: "+971 54 578 4786",
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

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function structuredData(page: Page) {
  const url = canonicalUrl(page);
  const seo = PAGE_SEO[page];

  const organization = {
    "@type": "AccountingService",
    "@id": ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    alternateName: BUSINESS.alternateNames,
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
    image: `${SITE_URL}/og-image.png`,
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
    "@type": seo.schemaType,
    "@id": `${url}#webpage`,
    url,
    name: seo.title,
    description: seo.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
  };

  const graph: Record<string, unknown>[] = [organization, website, webPage];

  if (page !== "home") {
    webPage.breadcrumb = { "@id": `${url}#breadcrumb` };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: PAGE_SEO.home.name, item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: seo.name, item: url },
      ],
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
export function renderHeadTags(page: Page): string {
  const { title, description } = PAGE_SEO[page];
  const url = canonicalUrl(page);
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const jsonLd = JSON.stringify(structuredData(page)).replace(/</g, "\\u003c");

  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join("\n    ");
}

/** Keeps <head> in sync when the visitor switches pages inside the app. */
export function applyPageHead(page: Page): void {
  const { title, description } = PAGE_SEO[page];
  const url = canonicalUrl(page);

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
