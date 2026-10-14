import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Newspaper,
  Calendar,
  User,
  ArrowRight,
  Search,
  FileText,
  Sparkles,
  ShieldCheck,
  Download,
  Filter,
} from "lucide-react";
import { NEWS_ARTICLES, NewsArticle } from "../data/newsData";

interface UpdatesPageProps {
  onSelectArticle: (article: NewsArticle) => void;
  onConsultationRequest: () => void;
}

export function UpdatesPage({ onSelectArticle, onConsultationRequest }: UpdatesPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Corporate Tax & Relief",
    "Tax & Compliance",
    "Digital Transformation & Tax",
    "E-Invoicing & ERP Integration",
    "Corporate Tax",
  ];

  const filteredArticles = NEWS_ARTICLES.filter((art) => {
    const matchesCategory =
      selectedCategory === "All" || art.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#fbfbfb] min-h-screen">
      {/* Page Hero */}
      <section className="relative pt-24 pb-20 bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=600&fit=crop&auto=format')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-red-500" />
            <span className="text-red-400 text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Newspaper size={14} />
              Regulatory Watch & Insights
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white mb-4">
            Official UAE Regulatory Updates
          </h1>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            Real-time coverage and expert breakdowns of UAE Federal Tax Authority (FTA) circulars, Ministry of Finance ministerial decisions, and compliance mandates.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Controls: Search and Filter */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
              <Filter size={14} />
              <span>Filter:</span>
            </div>
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#c8102e] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search updates by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#c8102e] focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Featured Latest Release Banner */}
        {NEWS_ARTICLES.length > 0 && !searchQuery && selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-14 border border-slate-800 shadow-2xl relative overflow-hidden grid lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} className="text-red-400" />
                <span>Featured Breakthrough Regulatory Update</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white leading-tight">
                {NEWS_ARTICLES[0].title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {NEWS_ARTICLES[0].excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <Calendar size={14} className="text-red-500" />
                  {NEWS_ARTICLES[0].date}
                </span>
                <span>•</span>
                <span>Category: {NEWS_ARTICLES[0].category}</span>
                <span>•</span>
                <span>{NEWS_ARTICLES[0].readTime}</span>
              </div>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onSelectArticle(NEWS_ARTICLES[0])}
                  className="bg-[#c8102e] hover:bg-[#a60d25] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Read Full Executive Directive</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700/80 p-6 rounded-2xl space-y-4">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <FileText size={16} />
                Official Gazette Gazette Release
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Complete legal breakdown including official Ministerial Decision PDF viewer, FTA election requirements, and revenue threshold criteria.
              </p>
              <button
                onClick={() => onSelectArticle(NEWS_ARTICLES[0])}
                className="w-full text-center bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold py-3 rounded-xl transition-colors"
              >
                View Legal Document & Analysis
              </button>
            </div>
          </motion.div>
        )}

        {/* All News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-300 transition-all flex flex-col justify-between"
            >
              <div className="p-6 sm:p-7">
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-[#c8102e] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md shadow-sm">
                    {article.category}
                  </span>
                  <span className="bg-slate-100 text-slate-700 text-xs font-mono font-medium px-2.5 py-1 rounded-md border border-slate-200">
                    {article.readTime}
                  </span>
                </div>

                {article.id === "news-sbr-2029" && (
                  <div className="mb-3 inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-50 border border-amber-300 px-2.5 py-1 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span>Includes Official Ministerial Decision PDF</span>
                  </div>
                )}

                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-3">
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

                <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-[#c8102e] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#c8102e] group-hover:text-[#a60d25]">
                <span className="uppercase tracking-wider">Read Full Update</span>
                <div className="w-8 h-8 rounded-full bg-red-50 group-hover:bg-[#c8102e] text-[#c8102e] group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-base">No updates found matching your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-[#c8102e] font-bold text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Advisory Help Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif">Need Help Interpreting New Tax Decrees?</h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Our tax consultants provide customized impact assessments for UAE mainland and free zone corporate structures.
            </p>
          </div>
          <button
            onClick={onConsultationRequest}
            className="bg-[#c8102e] hover:bg-[#a60d25] text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition-all shrink-0"
          >
            Book Compliance Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
