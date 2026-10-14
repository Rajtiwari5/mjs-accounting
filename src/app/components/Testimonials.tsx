import { motion } from "motion/react";
import { Star, Quote, ExternalLink } from "lucide-react";

export function Testimonials() {
  const googleReviewsUrl = "https://www.google.com/search?sca_esv=2afcaab3ea49a2cf&rlz=1C1RXQR_enIN1067IN1067&sxsrf=APpeQnvn8m2F0m8N2IIu4IdfbRKNa0fa6w:1785475833903&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_9UoNO_hZ75A8mG_-1FzSL2ObY8bV9-rHEDbw5v9YJrvsM5MY4mDroN90u7A0b-kJIAtvW_pV1lRt246GWjVfwx4OvICmysw14X2LSurqnLTrZCyURC4s0Y6V8R_OZayLvINV8M%3D&q=M+J+S+Accounting+And+Auditing+Co.+L.L.C+Reviews&sa=X&ved=2ahUKEwjDtdbml_yVAxVHzjgGHbdJFrQQ0bkNegQIGxAF&biw=1229&bih=621&dpr=1.56";

  const reviews = [
    {
      name: "Deepesh Sharma",
      role: "Google Reviewer",
      location: "Verified Review",
      text: "Great Experience with them . Really satisfied by their services.",
      rating: 5,
    },
    {
      name: "Kaleem Ullah",
      role: "Google Reviewer",
      location: "Verified Review",
      text: "Highly skilled team, great results.",
      rating: 5,
    },
    {
      name: "Mohamed Dilshan",
      role: "Local Guide",
      location: "Google Review",
      text: "When I found myself in need of accounting services to streamline my day-to-day work, a close friend pointed me in the direction of M J S accounting and auditing company. Their expertise and efficiency not only met my expectations but also provided me with accurate audit reports that proved to be invaluable in my business operations.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-red-500" />
            <span className="text-red-400 text-xs font-bold tracking-widest uppercase">
              Client Testimonials & Feedback
            </span>
            <div className="h-px w-8 bg-red-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-4">
            Trusted by UAE Business Leaders
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-6">
            Read how MJS delivers regulatory peace of mind, VAT tax savings, and operational clarity for enterprises across Dubai and the Northern Emirates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 hover:border-red-500/80 transition-all shadow-xl flex flex-col justify-between relative group"
            >
              <Quote size={40} className="text-slate-700 absolute top-6 right-6 opacity-40 group-hover:text-red-500/20 transition-colors" />

              <div>
                <div className="flex text-amber-400 mb-6 gap-1">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm leading-relaxed mb-6 italic">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-sm font-serif">{r.name}</p>
                  <p className="text-xs text-slate-400">{r.role}</p>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase bg-slate-700 text-slate-300 px-2 py-0.5 rounded">
                  {r.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Reviews Button */}
        <div className="mt-12 text-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-red-500/50 px-6 py-3 rounded-xl font-medium text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-red-900/20"
          >
            <span>View More Google Reviews</span>
            <ExternalLink size={15} className="text-red-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
