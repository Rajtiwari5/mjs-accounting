import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, AlertCircle, ArrowRight, Clock, ShieldCheck } from "lucide-react";

interface TaxCalendarProps {
  onConsultationRequest: () => void;
}

const DEADLINES = [
  {
    date: "Until 31 Dec 2029",
    title: "Small Business Relief (SBR) Extended",
    desc: "Ministerial Decision No. 131 of 2026 extends 0% Corporate Tax relief for AED 3M revenue businesses through 31 Dec 2029.",
    status: "New Decision",
    urgency: "urgent",
  },
  {
    date: "9 Months Post FY",
    title: "Corporate Tax Return Filing",
    desc: "First Corporate Tax returns due within 9 months from the end of the financial year. SBR election available.",
    status: "Mandatory",
    urgency: "urgent",
  },
  {
    date: "Monthly / Quarterly",
    title: "UAE VAT Return Submission",
    desc: "VAT returns and payment due within 28 days following the end of the tax period.",
    status: "Active Cycle",
    urgency: "high",
  },
  {
    date: "30 October 2026",
    title: "E-Invoicing ASP Appointment",
    desc: "Large entities (>AED 50M) must appoint an MoF Accredited Service Provider for Peppol eInvoicing.",
    status: "Mandatory",
    urgency: "medium",
  },
];

export function TaxCalendarTicker({ onConsultationRequest }: TaxCalendarProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 sm:py-24 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-red-500" />
              <span className="text-red-400 text-xs sm:text-sm font-extrabold tracking-widest uppercase flex items-center gap-2">
                <Clock size={16} />
                Regulatory Watch 2026
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
              Key UAE Regulatory & Tax Compliance Deadlines
            </h2>
          </div>

          <button
            onClick={onConsultationRequest}
            className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold px-6 py-4 rounded-xl shadow-lg transition-all flex items-center gap-2.5 group whitespace-nowrap shrink-0"
          >
            <span>Check Your Filing Status</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Deadlines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEADLINES.map((d, i) => {
            const isActive = activeTab === i;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                onClick={() => setActiveTab(i)}
                className={`p-7 sm:p-8 rounded-2xl border-2 transition-all cursor-pointer relative shadow-xl flex flex-col justify-between ${
                  isActive
                    ? "bg-slate-800 border-red-500 shadow-red-950/30 scale-[1.02]"
                    : "bg-slate-800/60 border-slate-700 hover:border-slate-500 hover:bg-slate-800"
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs sm:text-sm font-mono font-bold text-red-400 bg-red-950/80 border border-red-800/80 px-3 py-1.5 rounded-lg shadow-sm">
                      {d.date}
                    </span>
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/80 px-3 py-1.5 rounded-lg">
                      <ShieldCheck size={14} className="text-emerald-400" />
                      {d.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-lg sm:text-xl font-serif mb-3 leading-snug">
                    {d.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {d.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
