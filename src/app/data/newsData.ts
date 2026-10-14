export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  commentsCount: number;
  featured?: boolean;
  content: {
    summary: string;
    sections: {
      heading: string;
      paragraphs: string[];
      bulletPoints?: string[];
    }[];
    takeaways: string[];
    regulatoryRefs: string[];
  };
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-sbr-2029",
    slug: "uae-small-business-relief-extended-2029",
    title: "📢 Small Business Relief Extended Until 31 December 2029: Ministerial Decision No. 131 of 2026",
    author: "MJS Tax Advisory",
    date: "August 8, 2026",
    category: "Corporate Tax & Relief",
    readTime: "4 min read",
    commentsCount: 0,
    featured: true,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&h=600&fit=crop&auto=format",
    excerpt: "Big Relief for UAE Small Businesses! Ministerial Decision No. 131 of 2026 has officially extended Small Business Relief until 31 December 2029. Revenue threshold of AED 3 million or less continues to qualify for 0% tax liability.",
    content: {
      summary: "The UAE Ministry of Finance has issued Ministerial Decision No. 131 of 2026, amending Ministerial Decision No. 73 of 2023 on Small Business Relief under Federal Decree-Law No. 47 of 2022. This decision officially extends the AED 3,000,000 revenue threshold for Small Business Relief to subsequent tax periods ending on or before 31 December 2029.",
      sections: [
        {
          heading: "1. Overview of Ministerial Decision No. 131 of 2026",
          paragraphs: [
            "The Minister of State for Financial Affairs, Mohamed bin Hadi Al Hussaini, issued Ministerial Decision No. 131 of 2026 on 29 July 2026 (15 Safar 1448 H), amending Clause (2) of Article (2) of Ministerial Decision No. 73 of 2023 on Small Business Relief.",
            "The amended clause confirms that the revenue threshold set out in Clause (1) of Article (2) (AED 3,000,000) shall apply to Tax Periods commencing on or after 1 June 2023 and continue to apply to subsequent Tax Periods that end on or before 31 December 2029."
          ]
        },
        {
          heading: "2. Key Benefits for Eligible UAE Businesses",
          paragraphs: [
            "This extension gives UAE small businesses greater certainty, more breathing room, and additional time to focus on growth while managing Corporate Tax obligations efficiently:"
          ],
          bulletPoints: [
            "No Taxable Income & No Tax Liability for the relevant tax period where Small Business Relief is elected and applicable.",
            "Simplified Corporate Tax Compliance: Significantly reduced record-keeping and transfer pricing documentation requirements.",
            "Longer Horizon: Extended relief for tax periods through 31 December 2029 (extending beyond the previous 31 December 2026 threshold)."
          ]
        },
        {
          heading: "3. How MJS Accounting & Auditing Can Help Your Business",
          paragraphs: [
            "To benefit from Small Business Relief, eligible businesses must make a formal election in their Corporate Tax return filed with the Federal Tax Authority (FTA).",
            "Our team of Accountants & Tax Consultants at MJS Accounting & Auditing conducts revenue threshold verifications, evaluates election eligibility, and ensures seamless FTA return filing for your company."
          ]
        }
      ],
      takeaways: [
        "Small Business Relief is extended until 31 December 2029 for entities with revenue ≤ AED 3 Million.",
        "Electing SBR results in 0% Corporate Tax liability and simplified tax reporting.",
        "Formal election must be made within the official FTA Corporate Tax return filing."
      ],
      regulatoryRefs: [
        "Ministerial Decision No. 131 of 2026 (issued 29 July 2026)",
        "Ministerial Decision No. 73 of 2023 on Small Business Relief",
        "Federal Decree-Law No. 47 of 2022 on Corporate & Business Taxation"
      ]
    }
  },
  {
    id: "news-1",
    slug: "uae-tax-penalty-update-explained",
    title: "UAE Tax Penalty Update Explained: What Cabinet Decision No. 129 of 2025 Changes for Businesses",
    author: "Manish",
    date: "July 25, 2026",
    category: "Tax & Compliance",
    readTime: "5 min read",
    commentsCount: 0,
    featured: true,
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1000&h=600&fit=crop&auto=format",
    excerpt: "The UAE Cabinet has approved a substantial revision to the country's administrative tax penalty regime. Cabinet Decision No. 129 of 2025 amends the penalty framework first introduced under Cabinet Decision No. 40 of 2017...",
    content: {
      summary: "The UAE Federal Tax Authority (FTA) and Ministry of Finance have updated administrative penalties for Value Added Tax (VAT), Corporate Tax, and Excise Tax under Cabinet Decision No. 129 of 2025. This article analyzes the legal amendments, penalty reduction tiers, and required risk-mitigation steps for UAE finance executives.",
      sections: [
        {
          heading: "1. Overview of Cabinet Decision No. 129 of 2025",
          paragraphs: [
            "The UAE Cabinet approved Cabinet Decision No. 129 of 2025, introducing pivotal modifications to administrative penalties imposed for tax law violations across the United Arab Emirates. This Decision updates Cabinet Decision No. 40 of 2017 and Decision No. 49 of 2021, aligning penalty structures with the mature phase of the UAE Corporate Tax and VAT environment.",
            "The objective of the revised framework is to encourage voluntary compliance, reduce punitive burdens on compliant taxpayers who proactively correct errors, and enforce strict deterrence against deliberate non-registration or late filings."
          ],
        },
        {
          heading: "2. Key Amendments & Revised Penalty Tiers",
          paragraphs: [
            "The updated decision introduces restructured penalty Tiers for common administrative infractions:",
          ],
          bulletPoints: [
            "Voluntary Disclosures (VD): Fixed percentage penalties for voluntary disclosures submitted prior to FTA audit notification have been substantially recalibrated to reward early reporting.",
            "Late Corporate Tax Registration: Fixed administrative penalty of AED 10,000 applies to entities that fail to submit their Corporate Tax registration applications within statutory deadlines specified by FTA Decisions.",
            "Late Tax Payment Interest: Monthly interest on outstanding tax amounts now compounds at a revised monthly rate of 1% (down from 2%), capped at a maximum threshold to prevent snowballing liabilities.",
            "Failure to Keep Records: Initial penalty of AED 10,000 for first-time failure to maintain proper accounting records, increasing to AED 20,000 for repeated infractions within 24 months."
          ]
        },
        {
          heading: "3. Redetermination & Waiver Opportunities",
          paragraphs: [
            "Taxpayers who were previously assessed administrative penalties under earlier decisions may qualify for penalty redetermination or waiver schemes provided specific conditions are fulfilled before the statutory deadline.",
            "Our tax advisory team at MJS Accounting & Auditing assists entities in evaluating their eligibility for penalty waivers, drafting formal FTA redetermination applications, and conducting retrospective reviews of VAT and Corporate Tax records."
          ]
        }
      ],
      takeaways: [
        "Audit your Corporate Tax registration status immediately to avoid the AED 10,000 late penalty.",
        "Submit Voluntary Disclosures (VD) before receiving an official FTA audit notice to minimize percentage-based penalties.",
        "Maintain robust IFRS-compliant accounting books and VAT audit trails for a minimum of 5 years (7 years for real estate)."
      ],
      regulatoryRefs: [
        "Cabinet Decision No. 129 of 2025 on Administrative Penalties",
        "Cabinet Decision No. 49 of 2021 & Decision No. 40 of 2017",
        "Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses"
      ]
    }
  },
  {
    id: "news-2",
    slug: "uae-einvoicing-phase-1-readiness",
    title: "UAE eInvoicing Phase 1: A Practitioner’s Perspective on Business Readiness",
    author: "Kiran",
    date: "July 23, 2026",
    category: "Digital Transformation & Tax",
    readTime: "6 min read",
    commentsCount: 0,
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&auto=format",
    excerpt: "The UAE eInvoicing mandate came from awareness to consideration for businesses with annual revenue exceeding AED 50 million. As an MoF pre-approved ASP advisor, we've sat across the table with finance teams preparing for Phase 1...",
    content: {
      summary: "The UAE Ministry of Finance (MoF) and Federal Tax Authority (FTA) are launching the mandatory national e-Invoicing system based on the Peppol Continuous Transaction Controls (CTC) model. This practitioner guide explores ERP readiness, data validation, and Phase 1 compliance strategies.",
      sections: [
        {
          heading: "1. The UAE eInvoicing Framework Explained",
          paragraphs: [
            "The UAE Ministry of Finance has officially mandated a structured electronic invoicing system utilizing the internationally recognized Peppol network model. Under this regime, standard paper or PDF invoices will no longer satisfy VAT deduction requirements for B2B and B2G transactions.",
            "Invoices must be generated in standardized structured XML syntax (UBL 2.1 format) and routed through Accredited Service Providers (ASPs) for real-time validation by the FTA central tax platform prior to buyer delivery."
          ]
        },
        {
          heading: "2. Critical Deadlines for Phase 1 Enterprises",
          paragraphs: [
            "Phase 1 targets large-scale businesses with annual revenues exceeding AED 50 Million. Key milestones include:",
          ],
          bulletPoints: [
            "30 October 2026: Mandatory appointment of an MoF Accredited Service Provider (ASP).",
            "Q4 2026: Completion of ERP data field mapping and sandbox integration testing.",
            "July 2027: Full mandatory live transmission for all Phase 1 B2B and B2G tax invoices."
          ]
        },
        {
          heading: "3. Common ERP & Integration Pitfalls to Avoid",
          paragraphs: [
            "During client readiness audits, MJS Accounting & Auditing frequently encounter gaps such as missing TRNs (Tax Registration Numbers) in master data, incorrect line-item VAT code logic, and lack of support for real-time API response handling in legacy ERP software.",
            "Our technology advisory practice works directly with your internal IT and finance teams to audit ERP data structures, configure ASP middleware connectors, and ensure seamless compliance."
          ]
        }
      ],
      takeaways: [
        "Select your MoF Accredited Service Provider (ASP) well before the October 2026 deadline.",
        "Cleanse customer & vendor master data to verify valid 15-digit UAE TRNs.",
        "Ensure your ERP system (SAP, Oracle, Dynamics, Zoho, Tally) can generate UBL 2.1 XML invoices."
      ],
      regulatoryRefs: [
        "UAE Ministry of Finance E-Invoicing System Announcement",
        "Federal Decree-Law No. 8 of 2017 on Value Added Tax (VAT)"
      ]
    }
  },
  {
    id: "news-3",
    slug: "uae-einvoicing-guide-2026",
    title: "UAE eInvoicing Guide 2026 – Everything Businesses, CFOs & ERP Teams Need to Know",
    author: "Vikash",
    date: "July 21, 2026",
    category: "E-Invoicing & ERP Integration",
    readTime: "7 min read",
    commentsCount: 0,
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=600&fit=crop&auto=format",
    excerpt: "eInvoicing UAE compliance is not an optional software upgrade businesses and CFOs can push to next quarter. It's a legal mandate with fixed official deadlines, penalties, and a phased rollout that has already started moving faster...",
    content: {
      summary: "A comprehensive executive blueprint for CFOs, controllers, and IT directors preparing for the UAE E-Invoicing mandate. Covers technical specifications, clearance mechanics, tax audit impact, and vendor selection criteria.",
      sections: [
        {
          heading: "1. Why PDF Invoices Are No Longer Compliant",
          paragraphs: [
            "Historically, many UAE companies emailed PDF attachments or printed paper invoices to document sales transactions. Under the new e-Invoicing regulation, static PDFs do not qualify as structured electronic invoices.",
            "Every invoice, credit note, and debit note must be created electronically as structured XML data, cryptographically signed, and verified via Peppol Access Points."
          ]
        },
        {
          heading: "2. The 5-Step eInvoicing Implementation Roadmap",
          paragraphs: [
            "MJS Accounting & Auditing recommends a structured 5-step approach to safeguard your business from operational disruption:",
          ],
          bulletPoints: [
            "Step 1: Gap Analysis & Transaction Mapping – Identify all billing touchpoints, POS systems, and manual invoice channels.",
            "Step 2: Master Data Sanitation – Audit vendor and buyer tax IDs, address formats, and currency codes.",
            "Step 3: ASP Middleware Partner Selection – Evaluate accredited vendors based on security SLAs and ERP API compatibility.",
            "Step 4: End-to-End System Testing – Perform live sandbox simulation of invoice transmission and FTA confirmation receipts.",
            "Step 5: Staff Training & Policy Documentation – Train accounting staff on handling rejected invoice errors and exception logs."
          ]
        }
      ],
      takeaways: [
        "Do not delay ERP readiness testing until 2027; ASP onboarding takes 3-6 months.",
        "Verify that credit notes and debit notes follow the exact same XML CTC structure.",
        "MJS Accounting & Auditing provides end-to-end eInvoicing readiness auditing and ASP selection assistance."
      ],
      regulatoryRefs: [
        "FTA Public Clarifications on Electronic Invoicing TDR-001",
        "Peppol Network Specifications for UAE Jurisdiction"
      ]
    }
  },
  {
    id: "news-4",
    slug: "uae-corporate-tax-registration-relief-2026",
    title: "UAE Corporate Tax Registration & Small Business Relief: 2026 Executive Summary",
    author: "Manish",
    date: "July 18, 2026",
    category: "Corporate Tax",
    readTime: "5 min read",
    commentsCount: 0,
    featured: false,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1000&h=600&fit=crop&auto=format",
    excerpt: "Navigating the 9% UAE Corporate Tax regime requires precise calculation of taxable income, understanding Qualifying Free Zone Person (QFZP) status, and adhering to transfer pricing master file documentation thresholds...",
    content: {
      summary: "An essential regulatory update on UAE Corporate Tax filing obligations, Small Business Relief under Ministerial Decision No. 73, and Transfer Pricing compliance thresholds for UAE businesses.",
      sections: [
        {
          heading: "1. Corporate Tax Filing Timelines & Rules",
          paragraphs: [
            "Under Federal Decree-Law No. 47 of 2022, all juridical entities incorporated in the UAE (Mainland and Free Zone) are subject to Corporate Tax. Tax returns and tax payments are strictly due within 9 months following the close of the financial year.",
            "For entities with a financial year ending 31 December 2024, the deadline for filing the Corporate Tax return and settling any tax liability is 30 September 2025."
          ]
        },
        {
          heading: "2. Small Business Relief Thresholds (AED 3,000,000)",
          paragraphs: [
            "Resident taxable persons with gross revenue equal to or below AED 3,000,000 in the relevant tax period and previous tax periods can elect to be treated as having no taxable income, simplifying reporting and tax burdens."
          ]
        }
      ],
      takeaways: [
        "Free Zone companies must maintain audited financial statements to preserve 0% QFZP status.",
        "Small Business Relief requires a formal election in the Corporate Tax return.",
        "Contact MJS Accounting & Auditing to compute taxable income and file returns seamlessly."
      ],
      regulatoryRefs: [
        "Ministerial Decision No. 73 of 2023 on Small Business Relief",
        "Cabinet Decision No. 55 of 2023 on Determining Qualifying Income for Free Zone Persons"
      ]
    }
  }
];
