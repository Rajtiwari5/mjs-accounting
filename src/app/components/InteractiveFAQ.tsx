import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Search, HelpCircle, FileText, TrendingUp, Shield, BookOpen } from "lucide-react";

const FAQS_DATA = [
  {
    category: "VAT",
    q: "What is the VAT registration threshold in the UAE?",
    a: "Mandatory VAT registration is required for businesses with taxable supplies and imports exceeding AED 375,000 per annum. Voluntary registration is available for businesses exceeding AED 187,500.",
  },
  {
    category: "Corporate Tax",
    q: "How does the UAE 9% Corporate Tax work for businesses?",
    a: "Corporate Tax is levied at 0% on taxable income up to AED 375,000 and 9% on taxable income exceeding AED 375,000. All UAE businesses and commercial entities must register for Corporate Tax with the Federal Tax Authority (FTA).",
  },
  {
    category: "Corporate Tax",
    q: "Are Free Zone entities exempt from Corporate Tax?",
    a: "Qualifying Free Zone Entities (QFZE) can benefit from 0% Corporate Tax on qualifying income, provided they meet strict compliance requirements, maintain adequate substance in the UAE, and satisfy transfer pricing documentation rules.",
  },
  {
    category: "VAT",
    q: "How do you assist with FTA VAT Penalty Reconsiderations?",
    a: "We analyze the root cause of the penalty, assemble supporting documentation and financial evidence, and submit a formal Reconsideration Application to the FTA within statutory timelines to seek penalty waiver or reduction.",
  },
  {
    category: "Accounting",
    q: "What accounting standards do you follow for UAE financial statements?",
    a: "Our Accountants prepare financial statements in strict accordance with International Financial Reporting Standards (IFRS) and IFRS for SMEs, as mandated by UAE Commercial Companies Law.",
  },
  {
    category: "Advisory",
    q: "What is Economic Substance Regulations (ESR) compliance?",
    a: "ESR requires UAE entities carrying out 'Relevant Activities' (e.g. Headquarters, Holding, Banking, Distribution & Service Centre) to maintain economic substance in the UAE and file annual notifications and reports.",
  },
  {
    category: "Advisory",
    q: "What is In-Country Value (ICV) Certification?",
    a: "ICV certification evaluates a company's contribution to the UAE economy. Obtaining a certified ICV score gives suppliers a competitive advantage when bidding for UAE government and semi-government tenders.",
  },
  {
    category: "General",
    q: "Where is the MJS office located in Dubai?",
    a: "Our primary office is at Garhoud Views Building, Near GGICO Metro Station, Al Garhoud, Dubai, UAE. We welcome client meetings in person or via virtual consultation.",
  },
];

export function InteractiveFAQ() {
  const [query, setQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const categories = ["All", "VAT", "Corporate Tax", "Accounting", "Advisory", "General"];

  const filtered = FAQS_DATA.filter((faq) => {
    const matchesCat = selectedCat === "All" || faq.category === selectedCat;
    const matchesSearch =
      faq.q.toLowerCase().includes(query.toLowerCase()) ||
      faq.a.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-red-600" />
            <span className="text-red-600 text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
              <HelpCircle size={14} />
              Regulatory Knowledge Base
            </span>
            <div className="h-px w-8 bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Answers to common queries regarding UAE VAT rules, Corporate Tax registration, IFRS accounting, and FTA compliance.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions (e.g. VAT refund, Corporate Tax 9%, IFRS)..."
              className="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500/20 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCat === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm bg-white rounded-xl border border-slate-200">
              No matching questions found for "{query}".
            </div>
          ) : (
            filtered.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl border transition-all ${
                    isOpen ? "border-red-600 shadow-md ring-1 ring-red-500/20" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-1 rounded shrink-0">
                        {faq.category}
                      </span>
                      <span className="font-bold text-slate-900 text-sm sm:text-base font-serif">
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-red-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
