import type { NewsArticle } from "./newsData";

// Summaries transcribed from the supplied MJS materials and checked against
// the FTA publications linked below. The source PDF is preserved unchanged.
export const VAT_UPDATES: NewsArticle[] = [
  {
    id: "news-fta-17-2026",
    slug: "fta-decision-17-2026-employee-expenses-input-tax",
    title: "FTA Decision No. 17 of 2026: Recovery of Input Tax on Employee Expenses",
    author: "MJS Tax Advisory",
    date: "September 28, 2026",
    category: "VAT & Input Tax",
    readTime: "6 min read",
    commentsCount: 0,
    featured: true,
    image: "/updates/fta-decision-17-2026-employee-expenses.png",
    effectiveDate: "1 October 2026",
    excerpt: "Input tax may be recoverable on six categories of employee expenses, including transport, accommodation, mobile services and parking, subject to specific conditions. Read the requirements and download the FTA-published PDF.",
    document: {
      title: "FTA Decision No. 17 of 2026",
      url: "/documents/fta-decision-17-2026-employee-expenses.pdf",
      fileName: "FTA-Decision-No-17-of-2026-Employee-Expenses.pdf",
      note: "FTA-published English document, labelled unofficial translation. Original supplied PDF, 4 pages.",
      previewPages: [1, 2, 3, 4].map((page) => `/documents/fta-decision-17-2026-page-${page}.png`),
    },
    sources: [
      {
        label: "FTA publication: Decision No. 17 of 2026",
        url: "https://tax.gov.ae/en/content/fta.decision.no.17.of.2026.on.cases.and.conditions.for.input.tax.recovery.on.employee.expenses.aspx",
      },
    ],
    graphics: [
      {
        src: "/updates/fta-decision-17-2026-employee-expenses.png",
        alt: "MJS overview of six employee expense categories: transportation, food and beverages, operational accommodation, new employee accommodation, mobile and internet services, and parking.",
        caption: "MJS employee-expense overview. Read the category-specific conditions below and the source PDF before applying the rules.",
      },
    ],
    editorialNote: "This MJS summary is for general information. Recovery is conditional, not automatic. Refer to the complete legislation and the source document for interpretation and application.",
    content: {
      summary: "Issued on 9 September 2026 and effective from 1 October 2026, FTA Decision No. 17 of 2026 specifies cases and conditions for recovering input tax on goods or services provided to employees free of charge. It applies where there is a contractual obligation or documented policy under Article 53(1)(c)(2) of the VAT Executive Regulation. Each expense category has its own requirements, all of which must be met.",
      sections: [
        {
          heading: "1. Employee transportation",
          paragraphs: ["Input tax on transportation expenses may be recovered where all three conditions apply:"],
          bulletPoints: [
            "Transport is only between the employee’s residence and workplace, to clients’ premises, or for another purpose directly related to job duties.",
            "The service is not used for the employee’s personal benefit.",
            "The employee cannot choose a cash allowance or financial compensation instead of the transport service.",
          ],
        },
        {
          heading: "2. Food and beverages",
          paragraphs: ["This category concerns employees living in remote, distant or isolated areas. All of the following are required:"],
          bulletPoints: [
            "The employee’s residence is in a remote, distant or isolated area.",
            "Suitable food preparation services or facilities are unavailable at the residence or workplace, as applicable, and there are no nearby restaurants or facilities where food and beverages can easily be obtained.",
            "The provision is directly connected to the work period or the residence period required by the job.",
            "The employee cannot choose a cash allowance instead of the food and beverages.",
          ],
        },
        {
          heading: "3. Accommodation required for work",
          paragraphs: ["Accommodation must meet operational needs rather than form part of ordinary employee benefits or compensation. All of these conditions apply:"],
          bulletPoints: [
            "The employee cannot choose cash or financial compensation instead of accommodation.",
            "The accommodation is linked to operational requirements and is not part of ordinary benefits or compensation arrangements.",
            "The work requires the employee to live near the workplace, work site or client’s location.",
            "It is exclusively for the relevant employee, without family residence or other personal use, except where permanent residence near the workplace is required and it becomes the employee’s usual residence.",
            "The accommodation and its fittings are proportionate to job requirements and basic residential needs, without significant recreational or personal features beyond the work purpose.",
          ],
        },
        {
          heading: "4. Temporary accommodation for new employees",
          paragraphs: ["The decision separately covers accommodation for new employees where both conditions are satisfied:"],
          bulletPoints: [
            "The accommodation is temporary and provided for no longer than 30 days.",
            "It is proportionate to the job requirements and basic residential needs.",
          ],
        },
        {
          heading: "5. Mobile phones, airtime, data and home internet",
          paragraphs: ["Phones, airtime, data packages and home internet through a modem or router may qualify where all of the following apply:"],
          bulletPoints: [
            "They are necessary for job duties, including work outside normal hours, remote work or work-related communications.",
            "Use is for work, with any personal use incidental and insignificant rather than the main purpose.",
            "A documented internal policy defines permitted use and the consequences of unauthorised use.",
            "Reasonable monitoring verifies compliance, and relevant records and justifications for unauthorised use are retained.",
          ],
        },
        {
          heading: "6. Employee parking",
          paragraphs: ["Input tax on fees for parking spaces allocated to employees may be recovered where all three conditions are met:"],
          bulletPoints: [
            "The fees are solely for business purposes and directly connected to job duties, business visits or related assignments.",
            "A documented internal policy specifies when parking fees may be reimbursed and the applicable approval process.",
            "Payment evidence is retained, such as receipts showing the date, time, fee amount and tax paid.",
          ],
        },
        {
          heading: "How this relates to Cabinet Decision No. 149 of 2026",
          paragraphs: ["Cabinet Decision No. 149 of 2026 amended the employee-benefit provisions in Article 53. Decision No. 17 supplies the specific cases and conditions for the contractual-obligation or documented-policy route. A policy alone does not establish recovery: the applicable category requirements must also be satisfied."],
        },
      ],
      takeaways: [
        "Review employee expense policies and contracts against the relevant category, with effect from 1 October 2026.",
        "Check cash-alternative restrictions for transport, food and beverages, and operational accommodation.",
        "Track the 30-day limit for new employee accommodation and retain business-use and payment evidence.",
        "For mobile and internet costs, document permitted use, monitoring and any unauthorised-use records.",
      ],
      regulatoryRefs: [
        "FTA Decision No. 17 of 2026, Articles 1–3",
        "Cabinet Decision No. 52 of 2017, Article 53(1)(c)(2), as amended",
        "Cabinet Decision No. 149 of 2026",
      ],
    },
  },
  {
    id: "news-cabinet-149-2026",
    slug: "cabinet-decision-149-2026-vat-executive-regulation",
    title: "Cabinet Decision No. 149 of 2026: VAT Executive Regulation Amendment Review",
    author: "MJS Tax Advisory",
    date: "September 8, 2026",
    category: "VAT & Input Tax",
    readTime: "5 min read",
    commentsCount: 0,
    featured: true,
    image: "/updates/cabinet-decision-149-2026-review-1.png",
    effectiveDate: "1 October 2026; revised Article 55 rules from the first Tax Year commencing after 1 October 2027",
    excerpt: "A review of VAT amendments covering profit margin, healthcare goods, employee benefits, input tax apportionment, composite supplies and cash payments, with a separate commencement date for the revised Article 55 rules.",
    sources: [
      {
        label: "FTA-hosted VAT Executive Regulation, including the September 2026 amendments (English PDF; unofficial translation)",
        url: "https://tax.gov.ae/Datafolder/Files/Legislation/2026/Law-No-8-of-2017-and-its-amendments--09-2026.pdf",
      },
    ],
    graphics: [1, 2, 3].map((page) => ({
      src: `/updates/cabinet-decision-149-2026-review-${page}.png`,
      alt: `MJS Cabinet Decision No. 149 of 2026 amendment comparison, page ${page} of 3. A readable summary of the changes follows.`,
      caption: `MJS amendment review — page ${page} of 3.`,
    })),
    editorialNote: "The supplied MJS review is a summary, not the government decision. Its reference to awaiting FTA employee-benefit conditions predates Decision No. 17 of 2026; those conditions are now covered in our companion update. Refer to the full legislation for application.",
    content: {
      summary: "Cabinet Decision No. 149 of 2026 amends the UAE VAT Executive Regulation on profit margin, zero-rating, employee expenses, input tax recovery, apportionment, capital assets, credit notes and composite supplies. The general effective date is 1 October 2026. The revised Article 55 apportionment provisions apply from the first Tax Year commencing after 1 October 2027.",
      sections: [
        {
          heading: "Part A — Profit margin, healthcare goods and the outside-the-State test",
          paragraphs: ["The MJS comparison identifies the following changes to existing provisions:"],
          bulletPoints: [
            "Article 29(5): The profit-margin purchase-price calculation excludes costs or fees with non-recoverable input tax under Article 54. Review used-goods and profit-margin calculations.",
            "Article 41(4): The separate drugs and medical-equipment categories are consolidated into medical products specified by Cabinet decision. Check the applicable Cabinet list when classifying supplies.",
            "Article 52(2): The short-presence test is expressed as less than 30 days, replacing less than a month; presence must still be unconnected with the supply.",
          ],
        },
        {
          heading: "Part A — Employee benefits and accommodation",
          paragraphs: ["Article 53 distinguishes the legal-obligation route from the contractual-obligation or documented-policy route."],
          bulletPoints: [
            "Article 53(1)(c)(1): The labour-legislation provision expressly includes financial and non-financial free zones. Employer accommodation is excluded from this route unless it is mandatory under Ministry of Human Resources and Emiratisation decisions or directives.",
            "Article 53(1)(c)(2): A contractual obligation or documented policy must meet the cases and conditions specified by the FTA. Decision No. 17 of 2026 now sets out those conditions for six employee-expense categories.",
          ],
        },
        {
          heading: "Part A — Input tax apportionment: a later commencement date",
          paragraphs: ["The amended Article 55(6), Article 55(7) and new Article 55(19) apply from the first Tax Year commencing after 1 October 2027. Businesses should establish the commencement date for their own Tax Year before changing their calculation."],
          bulletPoints: [
            "Article 55(6): Full recovery, non-recovery and mixed-use allocation remain distinct. A separate mixed-use rule is introduced for Government Entities and Charities.",
            "Article 55(7): For other taxable persons, the standard recovery percentage changes from an input-tax-based calculation to qualifying supplies under Article 54(1) divided by the total value of supplies. Capital Asset supplies and Article 48 reverse-charge receipts are excluded.",
            "Article 55(19): Government Entities and Charities use a dedicated input-tax ratio: recoverable input tax under Article 54(1)/Article 57 divided by total recoverable and non-recoverable input tax for the period.",
          ],
        },
        {
          heading: "Part A — Capital assets and tax credit notes",
          paragraphs: [],
          bulletPoints: [
            "Article 57(1): The AED 5,000,000 threshold excluding VAT remains unchanged, together with useful-life thresholds of 10 years for buildings and 5 years for other assets. The wording is aligned with the Capital Asset Scheme references.",
            "Article 60(1)(a): The words ‘Tax Credit Note’ must appear on the credit note. The amendment corrects the earlier reference to an invoice.",
          ],
        },
        {
          heading: "Part B — New composite-supply and cash-payment provisions",
          paragraphs: [],
          bulletPoints: [
            "New Article 4(6): Interconnected components that cannot be separated in economic substance cannot be treated as multiple supplies. They are treated as one composite supply according to the principal component. Review bundled contracts and document the analysis.",
            "New Article 54(3): Input tax recovery is restricted for supplies above a value specified by Ministerial decision where payment is made or intended in cash, subject to that decision’s controls. The amendment itself does not specify a numeric threshold; check the applicable Ministerial decision before applying a limit.",
            "New Article 55(19): The dedicated Government Entity and Charity apportionment mechanism follows the later Article 55 commencement date described above.",
          ],
        },
      ],
      takeaways: [
        "Review employee-benefit policies alongside FTA Decision No. 17 of 2026.",
        "Prepare apportionment models for the applicable Tax Year after 1 October 2027; do not apply that change from the general 2026 effective date.",
        "Review composite contracts, profit-margin calculations and payment controls against the relevant provisions.",
        "Use the supplied three-page MJS comparison as a reference alongside the government text.",
      ],
      regulatoryRefs: [
        "Cabinet Decision No. 149 of 2026, issued 1 September 2026",
        "Cabinet Decision No. 52 of 2017 on the VAT Executive Regulation, as amended",
        "Federal Decree-Law No. 8 of 2017 on VAT, as amended",
        "FTA Decision No. 17 of 2026 on employee expenses",
      ],
    },
  },
];
