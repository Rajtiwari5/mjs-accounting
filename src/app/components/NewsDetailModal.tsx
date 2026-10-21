import React, { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
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
}

export function NewsDetailModal({
  article,
  onClose,
  onSelectArticle,
  onConsultationRequest,
}: NewsDetailModalProps) {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsPdfModalOpen(false);
    scrollRef.current?.scrollTo({ top: 0 });
  }, [article?.id]);

  if (!article) return null;

  const relatedArticles = NEWS_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  const handleWhatsAppInquiry = () => {
    const text = `Hello MJS Accounting! 👋\n\nI read your article: *${article.title}*\n\nI would like to request expert consultation regarding our business compliance in the UAE.`;
    const whatsappUrl = `https://wa.me/971561529421?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleOpenPdf = () => setIsPdfModalOpen(true);

  return (
    <>
      <Dialog.Root open={!!article} onOpenChange={(open) => { if (!open) onClose(); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md" />
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed left-1/2 top-1/2 z-50 flex max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
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
            <div ref={scrollRef} className="p-6 sm:p-10 overflow-y-auto space-y-8">
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

                <Dialog.Title asChild><h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900 leading-tight">
                  {article.title}
                </h1></Dialog.Title>

                {article.effectiveDate && (
                  <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-[#a60d25]">
                    Effective: {article.effectiveDate}
                  </p>
                )}

                {article.document && (
                  <div className="space-y-3 pt-2">
                    <button onClick={handleOpenPdf} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#c8102e] px-5 py-3 text-sm font-bold text-white hover:bg-[#a60d25] sm:w-auto">
                      <FileDown size={18} className="shrink-0" /> View {article.document.title} PDF
                    </button>
                    <p className="text-xs text-slate-500">{article.document.note}</p>
                    <a href={article.document.url} download={article.document.fileName} className="inline-flex items-center gap-2 text-sm font-bold text-[#c8102e] hover:underline">
                      <FileDown size={16} /> Download original PDF
                    </a>
                  </div>
                )}
              </div>

              {/* Executive Summary Box */}
              <div className="bg-red-50/70 border-l-4 border-[#c8102e] p-5 sm:p-6 rounded-r-2xl text-slate-800 space-y-3">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-[#c8102e] flex items-center gap-2">
                    <FileText size={16} />
                    Executive Summary
                  </div>

                </div>
                <p className="text-sm sm:text-base leading-relaxed font-medium">
                  {article.content.summary}
                </p>
              </div>

            {/* Main Article Content Sections */}
            {(article.sources || article.graphics) && (
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="font-serif text-lg font-bold text-slate-900">Source documents & MJS briefing</h2>
                {article.sources?.map((source) => (
                  <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm font-semibold text-[#c8102e] hover:underline">
                    <ExternalLink size={16} className="mt-0.5 shrink-0" /><span>{source.label}</span>
                  </a>
                ))}
                {article.editorialNote && <p className="text-sm leading-relaxed text-slate-600">{article.editorialNote}</p>}
                {article.graphics && (
                  <details className="rounded-xl border border-slate-200 bg-white p-4">
                    <summary className="cursor-pointer text-sm font-bold text-[#c8102e]">View MJS briefing graphics ({article.graphics.length})</summary>
                    <div className="mt-4 space-y-6">
                      {article.graphics.map((graphic) => (
                        <figure key={graphic.src} className="space-y-2">
                          <a href={graphic.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${graphic.caption}`}>
                            <img src={graphic.src} alt={graphic.alt} loading="lazy" className="h-auto w-full rounded-lg border border-slate-200" />
                          </a>
                          <figcaption className="text-xs leading-relaxed text-slate-500">{graphic.caption} Select the image to open it at full size.</figcaption>
                        </figure>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            )}

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
                  <button
                    type="button"
                    key={rel.id}
                    onClick={() => {
                      onSelectArticle(rel);
                    }}
                    className="text-left p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:bg-red-50/40 cursor-pointer transition-all space-y-2 group"
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
                  </button>
                ))}
              </div>
            </div>
          </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {article.document && (
        <PdfViewerModal
          isOpen={isPdfModalOpen}
          onClose={() => setIsPdfModalOpen(false)}
          document={article.document}
        />
      )}
    </>
  );
}
