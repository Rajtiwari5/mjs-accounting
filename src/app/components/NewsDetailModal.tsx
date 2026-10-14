import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Calendar,
  User,
  Clock,
  Tag,
  ArrowLeft,
  Share2,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  PhoneCall,
  MessageSquareText,
  FileText,
  FileDown,
  ExternalLink,
} from "lucide-react";
import { NewsArticle, NEWS_ARTICLES } from "../data/newsData";
import { PdfViewerModal } from "./PdfViewerModal";

interface NewsDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  onSelectArticle: (article: NewsArticle) => void;
  onConsultationRequest: () => void;
  onOpenPdf?: () => void;
}

export function NewsDetailModal({
  article,
  onClose,
  onSelectArticle,
  onConsultationRequest,
  onOpenPdf,
}: NewsDetailModalProps) {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (article) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [article]);

  if (!article) return null;

  const relatedArticles = NEWS_ARTICLES.filter((a) => a.id !== article.id);

  const handleWhatsAppInquiry = () => {
    const text = `Hello MJS Accounting! 👋\n\nI read your article: *${article.title}*\n\nI would like to request expert consultation regarding our business compliance in the UAE.`;
    const whatsappUrl = `https://wa.me/971561529421?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleOpenPdf = () => {
    if (onOpenPdf) {
      onOpenPdf();
    } else {
      setIsPdfModalOpen(true);
    }
  };

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
          {/* Backdrop click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0"
          />

          {/* Modal Window Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto"
          >
            {/* Top Sticky Bar */}
            <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#c8102e] transition-colors py-1 px-3 rounded-lg bg-slate-100 hover:bg-red-50"
              >
                <ArrowLeft size={16} />
                <span>Back to Updates</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#c8102e] bg-red-50 px-3 py-1 rounded-full hidden sm:inline">
                  {article.category}
                </span>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-red-100 text-slate-600 hover:text-[#c8102e] flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Content Scrollable Area */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
              {/* Header Title & Meta */}
              <div className="space-y-4 border-b border-slate-100 pb-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-lg text-slate-700">
                    <Calendar size={14} className="text-[#c8102e]" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-lg text-slate-700">
                    <User size={14} className="text-slate-500" />
                    by {article.author}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-lg text-slate-700">
                    <Clock size={14} className="text-slate-500" />
                    {article.readTime}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900 leading-tight">
                  {article.title}
                </h1>

                {/* PDF OPEN BUTTON HIGHLIGHT */}
                <div className="pt-2">
                  <button
                    onClick={handleOpenPdf}
                    className="w-full sm:w-auto bg-[#c8102e] hover:bg-[#a60d25] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:shadow-red-500/30 transition-all flex items-center justify-center gap-3 group border border-red-500/50"
                  >
                    <FileDown size={20} className="text-white group-hover:scale-110 transition-transform" />
                    <span>📄 Open Official Ministerial Decision No. 131 PDF Document</span>
                    <ExternalLink size={14} className="opacity-80" />
                  </button>
                </div>
              </div>

              {/* Executive Summary Box */}
              <div className="bg-red-50/70 border-l-4 border-[#c8102e] p-5 sm:p-6 rounded-r-2xl text-slate-800 space-y-3">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-[#c8102e] flex items-center gap-2">
                    <FileText size={16} />
                    Executive Summary
                  </div>
                  <button
                    onClick={handleOpenPdf}
                    className="text-xs font-bold text-[#c8102e] bg-white border border-red-200 hover:bg-red-600 hover:text-white px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
                  >
                    <FileText size={13} />
                    <span>View Official PDF</span>
                  </button>
                </div>
                <p className="text-sm sm:text-base leading-relaxed font-medium">
                  {article.content.summary}
                </p>
              </div>

            {/* Main Article Content Sections */}
            <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
              {article.content.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-lg sm:text-xl font-bold font-serif text-slate-900 text-[#c8102e]">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-2 pt-2">
                      {section.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                          <CheckCircle2 size={18} className="text-[#c8102e] shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Key Actionable Takeaways */}
            {article.content.takeaways && article.content.takeaways.length > 0 && (
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-red-400 font-extrabold text-xs uppercase tracking-widest">
                  <ShieldAlert size={18} />
                  Key Takeaways for UAE Business Leaders
                </div>
                <div className="space-y-3">
                  {article.content.takeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                      <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Official Regulatory References */}
            {article.content.regulatoryRefs && (
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Official Regulatory References & Citations:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.content.regulatoryRefs.map((ref, rIdx) => (
                    <span key={rIdx} className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 font-medium">
                      {ref}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* WhatsApp & Advisory CTA Banner */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold font-serif">Have questions regarding this regulation?</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Connect directly with MJS Accounting & Auditing experts via WhatsApp or schedule an office consultation.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <MessageSquareText size={16} />
                  <span>Ask via WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onConsultationRequest();
                  }}
                  className="bg-[#c8102e] hover:bg-[#a60d25] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <PhoneCall size={16} />
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>

            {/* Related Articles Section */}
            <div className="pt-8 border-t border-slate-200 space-y-4">
              <h3 className="text-lg font-bold font-serif text-slate-900">
                More Latest Updates & Regulatory Insights
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectArticle(rel);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:bg-red-50/40 cursor-pointer transition-all space-y-2 group"
                  >
                    <span className="text-[10px] font-bold text-[#c8102e] uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#c8102e] line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 block font-mono">
                      {rel.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </AnimatePresence>

      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        documentTitle={article.title}
      />
    </>
  );
}
