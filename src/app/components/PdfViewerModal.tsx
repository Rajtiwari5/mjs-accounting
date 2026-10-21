import React from "react";
import { Download, ExternalLink } from "lucide-react";
import type { ArticleDocument } from "../data/newsData";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: ArticleDocument;
}

export function PdfViewerModal({ isOpen, onClose, document }: PdfViewerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="flex h-[90dvh] flex-col gap-0 overflow-hidden p-0 sm:max-w-5xl">
        <div className="space-y-3 border-b border-slate-200 p-5 pr-12">
          <DialogTitle className="text-lg font-bold text-slate-900">{document.title}</DialogTitle>
          <DialogDescription>{document.note}</DialogDescription>
          <div className="flex flex-wrap gap-3">
            <a href={document.url} download={document.fileName} className="inline-flex items-center gap-2 rounded-lg bg-[#c8102e] px-4 py-2 text-sm font-bold text-white hover:bg-[#a60d25]">
              <Download size={16} /> Download PDF
            </a>
            <a href={document.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">
              <ExternalLink size={16} /> Open PDF in new tab
            </a>
          </div>
          <p className="text-xs text-slate-500">Preview pages are rendered from the original PDF. Open or download the PDF for full resolution, text selection and printing.</p>
        </div>
        {document.previewPages?.length ? (
          <div className="min-h-0 flex-1 space-y-6 overflow-y-auto bg-slate-200 p-3 sm:p-6" aria-label="PDF page previews">
            {document.previewPages.map((page, index) => (
              <figure key={page} className="mx-auto max-w-3xl space-y-2">
                <img src={page} alt={`${document.title}, page ${index + 1}. Download the original PDF for selectable text.`} loading={index === 0 ? "eager" : "lazy"} className="h-auto w-full bg-white shadow-md" />
                <figcaption className="text-center text-xs font-medium text-slate-600">Page {index + 1} of {document.previewPages.length}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <iframe src={document.url} title={`${document.title} — source PDF`} className="min-h-0 w-full flex-1 border-0 bg-slate-100" />
        )}
      </DialogContent>
    </Dialog>
  );
}
