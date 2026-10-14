import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, ArrowRight, Bell, AlertTriangle } from "lucide-react";

interface BottomTickerProps {
  onConsultationRequest: () => void;
  onSelectHeadline?: () => void;
}

export function BottomTicker({ onConsultationRequest, onSelectHeadline }: BottomTickerProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const tickerItems = [
    "🎉 Small Business Relief Extended Until 31 December 2029 (Ministerial Decision No. 131 of 2026) • Revenue ≤ AED 3M Qualifies for 0% Tax Liability",
    "🔥 Check Your ERP, Invoice Data and VAT Logic Before It Is Too Late • Get Your Readiness Assessment",
    "🚨 30 October 2026: UAE E-Invoicing ASP Appointment Deadline • Is Your Business Ready?",
    "🏛️ Cabinet Decision No. 129 of 2025: Revised Administrative Tax Penalties • Read What Changes For You",
    "📊 UAE Corporate Tax Return Filing Open • Schedule Your Tax & Accounting Advisory with MJS Accounting & Auditing",
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950 text-white border-t border-slate-800 shadow-[0_-10px_25px_rgba(0,0,0,0.5)] py-2.5 px-3 sm:px-6 flex items-center justify-between gap-3 overflow-hidden select-none">
      {/* Left Badge */}
      <div className="flex items-center gap-2 bg-[#c8102e] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md shrink-0 shadow-md">
        <Bell size={13} className="animate-pulse" />
        <span className="hidden xs:inline">Compliance</span> Alert
      </div>

      {/* Middle Scrolling Marquee Container */}
      <div className="flex-1 overflow-hidden relative whitespace-nowrap cursor-pointer group" onClick={onSelectHeadline}>
        <div className="inline-flex animate-marquee space-x-12 items-center text-xs sm:text-sm font-medium text-slate-200">
          {tickerItems.map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-3 group-hover:text-red-400 transition-colors">
              <span>{item}</span>
              <span className="text-[#c8102e] font-bold">★</span>
            </span>
          ))}
        </div>

        {/* Duplicate for seamless looping marquee */}
        <div className="inline-flex animate-marquee2 space-x-12 items-center text-xs sm:text-sm font-medium text-slate-200" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <span key={`dup-${idx}`} className="inline-flex items-center gap-3 group-hover:text-red-400 transition-colors">
              <span>{item}</span>
              <span className="text-[#c8102e] font-bold">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Right Action CTA + Dismiss */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onConsultationRequest}
          className="bg-[#c8102e] hover:bg-[#a60d25] text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-sm group whitespace-nowrap"
        >
          <span>Get Assessment</span>
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={() => setIsDismissed(true)}
          className="text-slate-400 hover:text-white hover:bg-slate-800 p-1 rounded-md transition-colors"
          title="Dismiss banner"
          aria-label="Dismiss announcement ticker"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
