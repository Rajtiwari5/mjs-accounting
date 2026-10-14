import React from "react";
import { motion } from "motion/react";
import {
  MessageSquareText,
  SearchCheck,
  Compass,
  Zap,
  ShieldCheck,
  Headset,
  ArrowRight,
} from "lucide-react";

interface EngagementStep {
  number: string;
  title: string;
  desc: string;
  details: string;
  icon: React.ElementType;
}

const ENGAGEMENT_STEPS: EngagementStep[] = [
  {
    number: "01",
    title: "Consultation",
    desc: "We listen to your needs and understand your business context.",
    details: "Initial discovery session to clarify operational scope, entity structure, and financial goals in the UAE.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Assessment",
    desc: "Thorough evaluation of your financial and compliance standing.",
    details: "Comprehensive review of books, VAT filings, Corporate Tax exposure, and internal control frameworks.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Strategy Planning",
    desc: "Tailored action plan aligned with UAE regulations and your goals.",
    details: "Customized roadmap detailing timeline, regulatory filing schedules, tax optimization, and team allocation.",
    icon: Compass,
  },
  {
    number: "04",
    title: "Implementation",
    desc: "Precise execution by our expert team with minimal disruption.",
    details: "Seamless onboarding, system integration, ledger cleanup, and structured accounting workflow setup.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Compliance & Reporting",
    desc: "Timely filings, reports, and regulatory submissions.",
    details: "On-time FTA VAT returns, Corporate Tax submissions, partner-arranged audited financial statements, and executive MIS dashboards.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Continuous Support",
    desc: "Ongoing advisory and proactive guidance as regulations evolve.",
    details: "Dedicated Accounting & Tax Specialist support, proactive regulatory updates, and quarterly financial reviews.",
    icon: Headset,
  },
];

interface EngagementProcessProps {
  onConsultationRequest?: () => void;
}

export function EngagementProcess({ onConsultationRequest }: EngagementProcessProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-slate-200 relative overflow-hidden">
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3 text-xs tracking-[0.25em] font-bold text-slate-500 uppercase">
            <span className="w-10 h-[1px] bg-slate-400/60"></span>
            HOW WE WORK
            <span className="w-10 h-[1px] bg-slate-400/60"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c8102e] font-serif tracking-tight mb-4">
            Our Engagement Process
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A structured, step-by-step methodology designed to deliver precision accounting, total compliance, and seamless financial governance for UAE enterprises.
          </p>
        </motion.div>

        {/* 6 Grid Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ENGAGEMENT_STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c8102e] via-red-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Header inside Card: Number + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl sm:text-5xl font-bold font-serif text-slate-300 group-hover:text-[#c8102e]/80 transition-colors duration-300 tracking-tighter">
                      {step.number}
                    </span>

                    <div className="w-11 h-11 rounded-xl bg-slate-50 group-hover:bg-red-50 text-slate-600 group-hover:text-[#c8102e] flex items-center justify-center transition-all duration-300 shadow-inner">
                      <IconComponent size={22} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-serif text-[#c8102e] mb-2.5 group-hover:translate-x-0.5 transition-transform duration-200">
                    {step.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>

                  {/* Extra Details */}
                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 leading-normal">
                    {step.details}
                  </div>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-6 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#c8102e] transition-colors pt-2">
                  <span>Phase {step.number} of 06</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200">
                    Learn more <ArrowRight size={13} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner at Bottom of Process */}
        {onConsultationRequest && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800"
          >
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold font-serif">Ready to start Phase 01?</h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                Book a complimentary initial consultation with our team in Dubai.
              </p>
            </div>

            <button
              onClick={onConsultationRequest}
              className="bg-[#c8102e] hover:bg-[#a60d25] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 shrink-0 group"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
