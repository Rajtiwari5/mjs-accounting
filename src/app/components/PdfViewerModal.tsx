import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Download,
  Printer,
  ZoomIn,
  ZoomOut,
  FileText,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  FileDown,
} from "lucide-react";

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentTitle?: string;
}

export function PdfViewerModal({
  isOpen,
  onClose,
  documentTitle = "Ministerial Decision No. 131 of 2026",
}: PdfViewerModalProps) {
  const [zoom, setZoom] = useState<number>(100);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 15, 150));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 15, 75));

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    // Create a plain text / printable file download for the official document
    const content = `
UNITED ARAB EMIRATES
MINISTRY OF FINANCE
OFFICE OF THE MINISTER

Ministerial Decision No. 131 of 2026
Amending Certain Provisions of Ministerial Decision No. 73 of 2023 on Small Business Relief for the Purposes of Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses

The Minister of State for Financial Affairs:
- Having reviewed the Constitution,
- Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses, and its amendments,
- Ministerial Decision No. 73 of 2023 on Small Business Relief for the Purposes of Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses,

Has decided:

Article One
Clause (2) of Article (2) of Ministerial Decision No. 73 of 2023 referred to above shall be replaced with the following text:
"2. The threshold set out in Clause (1) of Article (2) of this Article shall apply to Tax Periods commencing on or after 1 June 2023 and such threshold shall continue to apply to subsequent Tax Periods that end on or before 31 December 2029."

Article Two
This Decision shall be published and shall come into effect the day following the date of its publication.

Mohamed bin Hadi Al Hussaini
Minister of State for Financial Affairs

Issued by us:
On: 15 / Safar / 1448 H
Corresponding to: 29 / July / 2026

P.O. BOX 433, ABU DHABI, UNITED ARAB EMIRATES
P.O. BOX 1565, DUBAI, UNITED ARAB EMIRATES
www.mof.gov.ae
    `.trim();

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Ministerial_Decision_No_131_of_2026_Small_Business_Relief.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* PDF Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden z-10 flex flex-col h-[92vh] my-auto"
        >
          {/* PDF Top Action Bar */}
          <div className="bg-slate-950 text-slate-200 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#c8102e]/20 text-[#c8102e] border border-red-500/30 flex items-center justify-center font-bold">
                <FileText size={18} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white line-clamp-1">
                  {documentTitle}
                </h3>
                <p className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  Official UAE Ministry of Finance Document
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Zoom Controls */}
              <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 hover:bg-slate-700 text-slate-300 rounded transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut size={15} />
                </button>
                <span className="text-xs font-mono px-2 text-slate-300">
                  {zoom}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 hover:bg-slate-700 text-slate-300 rounded transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn size={15} />
                </button>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownloadPdf}
                className="bg-[#c8102e] hover:bg-[#a60d25] text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all shadow-md"
                title="Download Official Document"
              >
                <Download size={14} />
                <span className="hidden sm:inline">Download</span>
              </button>

              {/* Print Button */}
              <button
                onClick={handlePrint}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all border border-slate-700"
                title="Print Document"
              >
                <Printer size={14} />
                <span className="hidden sm:inline">Print</span>
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-900/50 hover:text-red-400 text-slate-400 flex items-center justify-center transition-colors ml-1"
                aria-label="Close PDF Viewer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* PDF Viewer Content Stage */}
          <div className="flex-1 bg-slate-950 p-4 sm:p-8 overflow-y-auto flex justify-center items-start">
            <div
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
              className="transition-transform duration-200 w-full max-w-2xl bg-white text-slate-900 p-8 sm:p-12 rounded-lg shadow-2xl border border-slate-300 space-y-6 font-serif relative min-h-[800px]"
            >
              {/* Official Document Header */}
              <div className="border-b-2 border-slate-800 pb-6 text-center space-y-2">
                <div className="flex items-center justify-between text-[11px] font-sans text-slate-600 uppercase tracking-wider font-bold">
                  <div>
                    <p className="font-bold text-slate-900">UNITED ARAB EMIRATES</p>
                    <p>MINISTRY OF FINANCE</p>
                    <p className="text-[10px] text-slate-500">OFFICE OF THE MINISTER</p>
                  </div>

                  {/* UAE Crest Icon Simulation */}
                  <div className="w-14 h-14 rounded-full border-2 border-amber-600 bg-amber-50 flex items-center justify-center text-amber-700 shadow-inner my-1">
                    <span className="text-xl font-bold font-sans">🇦🇪</span>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-slate-900">الإمارات العربية المتحدة</p>
                    <p>وزارة المــــــاليـــــــــة</p>
                    <p className="text-[10px] text-slate-500">مكتــــــب الوزيـــــــــر</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Ministerial Decision No. 131 of 2026
                  </h1>
                  <p className="text-xs sm:text-sm font-sans text-slate-700 mt-2 font-semibold max-w-xl mx-auto leading-snug">
                    Amending Certain Provisions of Ministerial Decision No. 73 of 2023 on Small Business Relief for the Purposes of Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses
                  </p>
                </div>
              </div>

              {/* Minister Intro */}
              <div className="text-xs sm:text-sm font-serif space-y-2 text-slate-800 leading-relaxed">
                <p className="font-bold text-slate-900">The Minister of State for Financial Affairs:</p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-slate-700">
                  <li>Having reviewed the Constitution,</li>
                  <li>Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses, and its amendments,</li>
                  <li>Ministerial Decision No. 73 of 2023 on Small Business Relief for the Purposes of Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses,</li>
                </ul>
                <p className="font-bold text-slate-900 pt-2 text-center text-base uppercase tracking-wider">Has decided:</p>
              </div>

              {/* Article One */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-lg border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 font-sans uppercase tracking-wider text-[#c8102e]">
                  Article One
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  Clause (2) of Article (2) of Ministerial Decision No. 73 of 2023 referred to above shall be replaced with the following text:
                </p>
                <blockquote className="text-xs sm:text-sm italic font-sans bg-white p-3.5 rounded border-l-4 border-[#c8102e] text-slate-900 font-medium my-2">
                  “2. The threshold set out in Clause (1) of this Article shall apply to Tax Periods commencing on or after 1 June 2023 and such threshold shall continue to apply to subsequent Tax Periods that end on or before 31 December 2029.”
                </blockquote>
              </div>

              {/* Article Two */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-lg border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 font-sans uppercase tracking-wider text-[#c8102e]">
                  Article Two
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  This Decision shall be published and shall come into effect the day following the date of its publication.
                </p>
              </div>

              {/* Signature Block */}
              <div className="pt-8 border-t border-slate-300 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 font-sans text-xs sm:text-sm">
                <div className="space-y-1 text-slate-700">
                  <p className="font-semibold text-slate-900">Issued by us:</p>
                  <p>On: 15 / Safar / 1448 H</p>
                  <p>Corresponding to: 29 / July / 2026</p>
                </div>

                <div className="text-right space-y-1">
                  <p className="font-bold text-slate-950 text-base">Mohamed bin Hadi Al Hussaini</p>
                  <p className="text-slate-700 font-medium">Minister of State for Financial Affairs</p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 size={13} />
                      Official Government Stamp Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer addresses */}
              <div className="pt-6 border-t border-slate-200 text-[10px] font-sans text-slate-500 flex flex-wrap items-center justify-between gap-2">
                <div>P.O. BOX 433, ABU DHABI, UNITED ARAB EMIRATES</div>
                <div className="font-bold text-slate-700">www.mof.gov.ae</div>
                <div>P.O. BOX 1565, DUBAI, UNITED ARAB EMIRATES</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
