import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  ShoppingCart,
  Factory,
  Hotel,
  TrendingUp,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface IndustryHubProps {
  onConsultationRequest: () => void;
}

const INDUSTRIES_DATA = [
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    icon: Factory,
    desc: "Cost accounting, inventory valuation under IFRS, ICV (In-Country Value) score optimization, and Corporate Tax structuring for manufacturing plants.",
    challenges: [
      "Complex Bill of Materials (BOM) inventory valuation",
      "In-Country Value (ICV) score optimization for government tenders",
      "Customs duties & import/export VAT reconciliation",
    ],
    metric: "AED 2M+",
    metricLabel: "Average Inventory Audit Scope",
  },
  {
    id: "realestate",
    name: "Real Estate & Construction",
    icon: Building2,
    desc: "Property VAT classification (residential vs commercial), escrow account audits, joint venture financial reporting, and capital gains tax planning.",
    challenges: [
      "Mixed-use property VAT input recovery calculations",
      "RERA compliance & Escrow account financial reporting",
      "Subcontractor retention & retention VAT accounting",
    ],
    metric: "100%",
    metricLabel: "RERA Audit Compliance",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    icon: ShoppingCart,
    desc: "POS integration, multi-channel VAT reconciliation, inventory shrinkage controls, and high-frequency transaction bookkeeping.",
    challenges: [
      "High volume daily POS & gateway sales reconciliation",
      "Cross-border e-commerce VAT and GCC supply rules",
      "Promotional discount & gift voucher VAT accounting",
    ],
    metric: "50,000+",
    metricLabel: "Monthly Transactions Processed",
  },
  {
    id: "hospitality",
    name: "Hospitality & Restaurants",
    icon: Hotel,
    desc: "Food & beverage cost accounting, service charge VAT rules, municipal tax compliance, and multi-branch management reporting.",
    challenges: [
      "Daily cash register & delivery app reconciliation",
      "Municipality fee vs VAT compliance alignment",
      "Tip distribution & service charge WPS payroll",
    ],
    metric: "15+",
    metricLabel: "Restaurant Groups Managed",
  },
  {
    id: "trading",
    name: "General Trading & Logistics",
    icon: TrendingUp,
    desc: "Free zone vs mainland trading structures, transfer pricing documentation, customs VAT suspension, and working capital optimization.",
    challenges: [
      "Designated Zone VAT exemption rules & documentation",
      "Letter of Credit (LC) & bank trade facility accounting",
      "Corporate Tax qualifying free zone income testing",
    ],
    metric: "AED 50M+",
    metricLabel: "Trade Volume Handled",
  },
  {
    id: "startups",
    name: "Tech Startups & SMEs",
    icon: Zap,
    desc: "Lean accounting setup, cloud software integration (Zoho, Xero), investor-ready financial models, and cost-effective VAT returns.",
    challenges: [
      "Fast-track VAT registration without historical audit records",
      "Software-as-a-Service (SaaS) global VAT/GST compliance",
      "Cap table & investor financial reporting",
    ],
    metric: "24-48 hr",
    metricLabel: "Fast Onboarding Turnaround",
  },
];

export function InteractiveIndustryHub({ onConsultationRequest }: IndustryHubProps) {
  const [selectedId, setSelectedId] = useState("manufacturing");
  const activeIndustry = INDUSTRIES_DATA.find((i) => i.id === selectedId) || INDUSTRIES_DATA[0];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-red-600" />
            <span className="text-red-600 text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              Industry Expertise
            </span>
            <div className="h-px w-8 bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-5">
            Tailored Financial Solutions by Sector
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Different industries in the UAE operate under distinct regulatory, VAT, and accounting requirements. Select your sector to explore our industry-specific capabilities.
          </p>
        </div>

        {/* Industry selector grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = ind.icon;
            const isSelected = selectedId === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedId(ind.id)}
                className={`p-5 sm:p-6 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl scale-105"
                    : "bg-slate-50 text-slate-800 border-slate-200 hover:border-red-600 hover:bg-white"
                }`}
              >
                <Icon size={26} className={isSelected ? "text-red-400 mb-3" : "text-slate-600 mb-3"} />
                <span className="text-xs sm:text-sm font-bold font-serif leading-snug">{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-2xl grid lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-8 space-y-7">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-600/20 text-red-400 rounded-2xl border border-red-500/30 shrink-0">
                  <activeIndustry.icon size={28} />
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
                  {activeIndustry.name}
                </h3>
              </div>

              <p className="text-slate-200 text-base sm:text-lg sm:leading-relaxed font-normal">
                {activeIndustry.desc}
              </p>

              <div className="pt-2">
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-400" />
                  Key Industry Compliance Challenges We Solve
                </h4>
                <div className="space-y-3">
                  {activeIndustry.challenges.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm sm:text-base text-slate-100 bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 font-medium shadow-sm">
                      <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                      <span className="leading-snug">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800 border border-slate-700/90 p-8 rounded-2xl text-center space-y-6 shadow-xl flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-2xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center">
                <activeIndustry.icon size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold font-serif text-white">
                  Sector Advisory
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Get dedicated guidance tailored for UAE {activeIndustry.name} operations, FTA compliance, and reporting.
                </p>
              </div>
              <button
                onClick={onConsultationRequest}
                className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Consult with Us</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
