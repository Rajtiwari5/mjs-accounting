import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, ChevronRight, BookOpen, FileText, Shield, TrendingUp, Building2, HelpCircle } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: "home" | "about" | "services" | "updates" | "contact", serviceId?: string) => void;
}

const SEARCH_ITEMS = [
  { type: "Service", title: "Accounting & Bookkeeping", desc: "Financial accounting, bookkeeping, payroll WPS & MIS reports", id: "accounting", category: "services" },
  { type: "Service", title: "VAT Compliance & Registration", desc: "VAT filing, returns, refunds, FTA reconsiderations", id: "vat", category: "services" },
  { type: "Service", title: "Corporate Tax Advisory", desc: "Impact assessment, tax registration, returns, 9% CT compliance", id: "corporate-tax", category: "services" },
  { type: "Service", title: "Internal Audit & Risk Controls", desc: "Governance, risk assessment, compliance reviews", id: "internal-audit", category: "services" },
  { type: "Service", title: "Business Advisory & Company Formation", desc: "Free zone setup, AML compliance, ESR, ICV certification", id: "advisory", category: "services" },
  { type: "Update", title: "Small Business Relief Extended (Dec 2029)", desc: "Ministerial Decision No. 131 of 2026 extending 0% tax threshold", id: "sbr-update", category: "updates" },
  { type: "Update", title: "UAE Tax Penalty Update (Cabinet Decision 129)", desc: "Voluntary disclosures and revised penalty tiers", id: "penalty-update", category: "updates" },
  { type: "Update", title: "UAE eInvoicing Phase 1 Mandate", desc: "Peppol continuous transaction controls & ERP integration", id: "einvoicing-update", category: "updates" },
  { type: "FAQ", title: "VAT Registration Requirements in UAE", desc: "Thresholds: AED 375,000 mandatory, AED 187,500 voluntary", id: "faq-vat", category: "contact" },
  { type: "FAQ", title: "Corporate Tax Deadlines & Rates", desc: "0% below AED 375k profit, 9% above AED 375k profit", id: "faq-ct", category: "contact" },
  { type: "Contact", title: "Office Location & Direct Contacts", desc: "Sama Residence M-02, Al Nahda 1, Dubai, UAE", id: "location", category: "contact" },
];

export function SearchModal({ isOpen, onClose, onNavigate }: SearchModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50/80">
            <Search size={20} className="text-slate-400" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, tax rules, VAT guidelines, office details..."
              className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm font-medium focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-[380px] overflow-y-auto p-4 space-y-2 divide-y divide-slate-100">
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-sm">
                No matching services or tax guidelines found for "{query}".
              </div>
            ) : (
              filtered.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onClose();
                    onNavigate(item.category as any, item.id);
                  }}
                  className="w-full text-left p-3.5 rounded-xl hover:bg-red-50/50 transition-colors flex items-center justify-between group pt-3"
                >
                  <div className="space-y-1 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded group-hover:bg-red-100 group-hover:text-red-700 transition-colors">
                        {item.type}
                      </span>
                      <span className="text-sm font-bold text-slate-800 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">{item.desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all shrink-0" />
                </button>
              ))
            )}
          </div>

          <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
            <span>MJS Search & Quick Discovery</span>
            <span>Press ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
