import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  FileText,
  TrendingUp,
  Shield,
  Building2,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Sparkles,
} from "lucide-react";

interface ServiceMatrixProps {
  onNavigateService: (serviceId: string) => void;
  onConsultationRequest: () => void;
}

const SERVICES_DATA = [
  {
    id: "accounting",
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    shortTitle: "Accounting & Bookkeeping",
    tagline: "IFRS-Compliant Financial Records & Real-Time MIS Reporting",
    stat: "500+",
    statLabel: "Businesses Served",
    summary:
      "Precision day-to-day transaction recording, bank reconciliation, WPS payroll processing, and structured MIS reports tailored for UAE mainland & free zone enterprises.",
    deliverables: [
      "IFRS Financial Statement Preparation",
      "WPS Payroll & Monthly Calculation",
      "Bank Reconciliation & Ledger Audits",
      "MIS Reporting & Management Dashboards",
      "Zoho Books & QuickBooks Integration",
    ],
    bgGradient: "from-blue-900/10 via-slate-900/5 to-white",
  },
  {
    id: "vat",
    icon: FileText,
    title: "VAT Services & Advisory",
    shortTitle: "VAT Services",
    tagline: "End-to-End Federal Tax Authority (FTA) Filing & Refund Support",
    stat: "100%",
    statLabel: "On-Time FTA Submissions",
    summary:
      "Complete VAT lifecycle support — from initial registration and periodic return filing to voluntary disclosures, penalty reconsiderations, and FTA audit representation.",
    deliverables: [
      "FTA VAT Registration & Amendment",
      "Quarterly & Monthly VAT Return Filings",
      "Input VAT Recovery Optimization",
      "Penalty Reconsiderations & Appeals",
      "Tax Residency Certificate (TRC)",
    ],
    bgGradient: "from-red-900/10 via-slate-900/5 to-white",
  },
  {
    id: "corporate-tax",
    icon: TrendingUp,
    title: "Corporate Tax Strategy (9%)",
    shortTitle: "Corporate Tax Services",
    tagline: "Comprehensive 9% Corporate Tax Planning & Registration",
    stat: "0%",
    statLabel: "Tax Rate Below AED 375k",
    summary:
      "Navigating the new UAE Corporate Tax regime. We conduct tax impact assessments, FTA registration, group structuring, return filing, and small business relief optimization.",
    deliverables: [
      "Mandatory Corporate Tax Registration",
      "Small Business Relief (Extended to 2029) Election",
      "Taxable Income Impact Analysis",
      "Qualifying Free Zone Entity Review",
      "Transfer Pricing Documentation",
      "Annual Corporate Tax Return Filing",
    ],
    bgGradient: "from-emerald-900/10 via-slate-900/5 to-white",
  },
  {
    id: "internal-audit",
    icon: Shield,
    title: "Internal Audit & Controls",
    shortTitle: "Internal Audit",
    tagline: "Independent Risk Management, Governance & Controls Testing",
    stat: "40%",
    statLabel: "Risk Mitigation Efficiency",
    summary:
      "Rigorous internal audit reviews evaluating internal controls, operational processes, fraud prevention, and regulatory compliance to protect corporate value.",
    deliverables: [
      "Internal Controls Evaluation (COSO)",
      "Financial Process Risk Assessment",
      "Fraud Risk Review & Investigation",
      "Pre-FTA Audit Readiness Reviews",
      "Board Governance Reports",
    ],
    bgGradient: "from-purple-900/10 via-slate-900/5 to-white",
  },
  {
    id: "advisory",
    icon: Building2,
    title: "Business Advisory & ESR",
    shortTitle: "Business Advisory",
    tagline: "Company Formation, AML Compliance & ICV Certification",
    stat: "50+",
    statLabel: "Jurisdictions & Free Zones",
    summary:
      "Strategic consulting for UAE business setup, Economic Substance Regulations (ESR), Anti-Money Laundering (AML), Ultimate Beneficial Ownership (UBO), and ICV score optimization.",
    deliverables: [
      "Mainland & Free Zone Business Formation",
      "AML Risk Screening & Manuals",
      "ESR Notification & Annual Filing",
      "In-Country Value (ICV) Audit Support",
      "Corporate Banking Assistance",
    ],
    bgGradient: "from-amber-900/10 via-slate-900/5 to-white",
  },
];

export function InteractiveServiceMatrix({
  onNavigateService,
  onConsultationRequest,
}: ServiceMatrixProps) {
  const [selectedId, setSelectedId] = useState("accounting");
  const activeService = SERVICES_DATA.find((s) => s.id === selectedId) || SERVICES_DATA[0];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-red-600" />
              <span className="text-red-600 text-xs font-bold tracking-widest uppercase">
                Core Practice Areas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900">
              Interactive Services Explorer
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Click across our specialized financial and tax practice groups to explore key deliverables, FTA compliance guidelines, and performance metrics.
          </p>
        </div>

        {/* Tab Navigation Pill Matrix */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-2 border-b border-slate-200">
          {SERVICES_DATA.map((s) => {
            const Icon = s.icon;
            const isSelected = selectedId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedId(s.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all relative ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon size={16} className={isSelected ? "text-red-400" : "text-slate-400"} />
                <span>{s.shortTitle}</span>
                {isSelected && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-1 bg-red-600 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Content Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`bg-white rounded-2xl border border-slate-200 shadow-xl p-8 sm:p-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-br ${activeService.bgGradient}`}
          >
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-900 text-white rounded-xl shadow-sm">
                  <activeService.icon size={24} className="text-red-400" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    MJS Practice Group
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed font-medium">
                {activeService.tagline}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                {activeService.summary}
              </p>

              {/* Key Deliverables Grid */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-500" />
                  Key Deliverables & Tax Support
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((d, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 bg-slate-50/90 border border-slate-200/80 p-3 rounded-lg text-xs font-medium text-slate-800"
                    >
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onConsultationRequest}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow transition-all flex items-center gap-2 group"
                >
                  <span>Request Consultation</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigateService(activeService.id)}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-sm transition-all flex items-center gap-2"
                >
                  <span>Explore Full Scope</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Metric Box */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 text-center space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-slate-100 pointer-events-none">
                <activeService.icon size={160} />
              </div>

              <div className="relative z-10 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-red-400 bg-red-950/80 border border-red-800/60 px-3 py-1 rounded-full">
                  Impact Metric
                </span>
                <div className="text-5xl sm:text-6xl font-extrabold tracking-tight font-serif text-white pt-2">
                  {activeService.stat}
                </div>
                <div className="text-sm font-medium text-slate-300">
                  {activeService.statLabel}
                </div>
              </div>

              <div className="h-px bg-slate-800 my-4" />

              <div className="text-xs text-slate-400 leading-relaxed text-left space-y-2">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <BarChart3 size={14} className="text-red-400" />
                  <span>FTA Regulatory Assurance</span>
                </div>
                <p>
                  Every deliverable is verified by our team and registered tax specialists to guarantee 100% compliance with UAE Ministry of Finance and FTA regulations.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
