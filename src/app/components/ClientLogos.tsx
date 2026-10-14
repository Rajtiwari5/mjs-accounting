import { motion } from "motion/react";
import { Award, ShieldCheck, FileCheck, Building2, Briefcase, Landmark, Lightbulb } from "lucide-react";

export function ClientLogos() {
  const accreditations = [
    { name: "ACCA Certified", desc: "Global Accounting Body", icon: Award },
    { name: "FTA Tax Agency", desc: "Federal Tax Authority UAE", icon: ShieldCheck },
    { name: "ISO 9001 Certified", desc: "Quality Management System", icon: FileCheck },
    { name: "Dubai Economy (DET)", desc: "Mainland Licensed Firm", icon: Building2 },
    { name: "DMCC Approved", desc: "Dubai Multi Commodities Centre", icon: Briefcase },
    { name: "JAFZA Audit Partner Network", desc: "Arranged External Audits", icon: Landmark },
    { name: "Creative Zone Partner", desc: "Business Setup Network", icon: Lightbulb },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-red-600" />
            <span className="text-red-600 text-xs font-bold tracking-widest uppercase">
              Regulatory Accreditations & Strategic Partners
            </span>
            <div className="h-px w-8 bg-red-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
            Recognized by UAE Free Zone & Federal Authorities
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {accreditations.map((acc, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex flex-col items-center text-center p-4 bg-white border border-slate-200 hover:border-red-600 hover:shadow-lg transition-all rounded-xl cursor-default"
            >
              <acc.icon size={26} className="text-red-600 group-hover:scale-110 transition-transform mb-2" />
              <span className="font-bold text-xs text-slate-900 leading-tight mb-1">
                {acc.name}
              </span>
              <span className="text-[10px] text-slate-500 font-medium leading-tight">
                {acc.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
