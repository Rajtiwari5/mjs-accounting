import React from "react";
import { motion } from "motion/react";
import { Calendar, User, ArrowRight, MessageSquare, Newspaper, Sparkles } from "lucide-react";
import { NEWS_ARTICLES, NewsArticle } from "../data/newsData";
import { articlePath } from "../seo";
import { spaLink } from "../links";

const EMPLOYEE_EXPENSES_GUIDE = NEWS_ARTICLES.find((article) => article.id === "news-fta-17-2026")!;

interface NewsSectionProps {
  onSelectArticle: (article: NewsArticle) => void;
  onViewAllNews?: () => void;
}

export function NewsSection({ onSelectArticle, onViewAllNews }: NewsSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-0.5 w-8 bg-[#c8102e]" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#c8102e] flex items-center gap-2">
                <Newspaper size={16} />
                Regulatory Watch & Insights
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
              Latest News / Updates
            </h2>
            <div className="h-1 w-20 bg-[#c8102e] mt-3 rounded-full" />
          </div>

          <div className="space-y-4 max-w-xl">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Stay informed with expert analysis on UAE Federal Tax Authority (FTA) regulatory decisions, eInvoicing mandates, VAT amendments, and Corporate Tax developments.
            </p>
            {onViewAllNews && (
              <div>
                <a
                  {...spaLink("/updates", onViewAllNews)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#c8102e] hover:text-[#a60d25] transition-colors group"
                >
                  <span>Explore All Regulatory Updates</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* 3 Main Highlight Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.slice(0, 3).map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-red-300 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-[#c8102e]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Content */}
                <div className="p-6 sm:p-7">
                  {/* Category & Read Time Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="bg-[#c8102e] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md shadow-sm flex items-center gap-1.5">
                      {article.category}
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-mono font-medium px-2.5 py-1 rounded-md border border-slate-200">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Official PDF Document Badge */}
                  {article.document && (
                    <div className="mb-3 inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-amber-50 border border-amber-300 px-3 py-1.5 rounded-lg text-amber-900">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                      <span>Includes source PDF</span>
                    </div>
                  )}

                  {/* Meta Info: Date / Author */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#c8102e]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <User size={13} className="text-slate-400" />
                      by {article.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 group-hover:text-[#c8102e] transition-colors leading-snug mb-3 line-clamp-2">
                    {/* The link stretches over the whole card, so the card stays clickable */}
                    <a
                      {...spaLink(articlePath(article.slug), () => onSelectArticle(article))}
                      className="after:absolute after:inset-0 focus-visible:outline-none"
                    >
                      {article.title}
                    </a>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#c8102e] group-hover:text-[#a60d25]">
                <span className="uppercase tracking-wider">Read Full Article</span>
                <div className="w-8 h-8 rounded-full bg-red-50 group-hover:bg-[#c8102e] text-[#c8102e] group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Banner to Browse All Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 text-[#c8102e] flex items-center justify-center shrink-0 border border-red-500/30 hidden sm:flex">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-serif text-white">Can Your Business Recover VAT on Employee Expenses?</h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                Review the six expense categories, policy requirements and supporting records in FTA Decision No. 17 of 2026.
              </p>
            </div>
          </div>

          <a
            {...spaLink(articlePath(EMPLOYEE_EXPENSES_GUIDE.slug), () => onSelectArticle(EMPLOYEE_EXPENSES_GUIDE))}
            className="bg-[#c8102e] hover:bg-[#a60d25] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 shrink-0 group whitespace-nowrap"
          >
            <span>Read Employee Expenses Guide</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
