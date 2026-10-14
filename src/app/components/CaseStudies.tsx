import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, TrendingUp, BarChart3, Building2, CheckCircle2, ArrowRight } from "lucide-react";

interface CaseStudiesProps {
  onConsultationRequest?: () => void;
}

const CASES_DATA = [
  {
    category: "VAT Services",
    title: "VAT Penalty & Refund Support",
    metric: "AED 50,000+",
    metricSub: "Penalties Waived & Refunded",
    desc: "Saved for a multi-branch Dubai trading firm through proactive Federal Tax Authority (FTA) penalty reconsideration, voluntary disclosure filing, and audit documentation.",
    client: "General Trading Group (Dubai Mainland)",
    icon: Shield,
    timeline: "2 Weeks",
  },
  {
    category: "Corporate Tax",
    title: "Multi-Entity Corporate Tax Advisory",
    metric: "100%",
    metricSub: "Successful Compliance Across 4 Entities",
    desc: "Executed comprehensive Corporate Tax impact assessment and registration for a manufacturing conglomerate within typical turnaround, advising on applicable qualifying group relief.",
    client: "Industrial & Manufacturing Group",
    icon: TrendingUp,
    timeline: "Typical Turnaround",
  },
  {
    category: "Internal Audit",
    title: "Financial Control & Operational Restructuring",
    metric: "40%",
    metricSub: "Reduction in Operational Leakage",
    desc: "Identified internal control vulnerabilities and optimized inventory valuation methods for a retail group, establishing robust monthly MIS audit reporting.",
    client: "Retail & E-Commerce Group",
    icon: BarChart3,
    timeline: "60 Days",
  },
  {
    category: "Business Setup",
    title: "Free Zone Entity Setup & Compliance Support",
    metric: "15 Days",
    metricSub: "Typical Licensing Turnaround: 15 Days",
    desc: "Handled full company formation, corporate bank account setup, AML Compliance Documentation & Ongoing Compliance Support for a fintech startup.",
    client: "Tech & Advisory Enterprise",
    icon: Building2,
    timeline: "15 Days",
  },
];

export function CaseStudies({ onConsultationRequest }: CaseStudiesProps) {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "VAT Services", "Corporate Tax", "Internal Audit", "Business Setup"];

  const filtered = filter === "All" ? CASES_DATA : CASES_DATA.filter((c) => c.category === filter);

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-red-600" />
              <span className="text-red-600 text-xs font-bold tracking-widest uppercase">
                Impact & Proven Track Record
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900">
              Featured Client Success Stories
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  filter === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-red-600 hover:shadow-xl rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 px-3 py-1 rounded-full">
                        {c.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-medium">
                        Turnaround: {c.timeline}
                      </span>
                    </div>

                    <div className="mb-6">
                      <div className="text-4xl font-extrabold text-slate-900 font-serif mb-1 group-hover:text-red-600 transition-colors">
                        {c.metric}
                      </div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        {c.metricSub}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 font-serif mb-3">
                      {c.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {c.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      Client: {c.client}
                    </span>
                    {onConsultationRequest && (
                      <button
                        onClick={onConsultationRequest}
                        className="text-xs font-bold text-red-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Similar Engagement</span>
                        <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
