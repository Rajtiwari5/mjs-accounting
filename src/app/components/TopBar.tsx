import React from "react";
import {
  Clock,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-[#c8102e] text-white text-xs font-medium border-b border-red-700/40 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Left: Timing, Mobile, Email */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-white/95">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock size={13} className="text-white/80 shrink-0" />
            <span>Mon - Sat: 9:00 - 18:00</span>
          </div>

          <a
            href="tel:+971561529421"
            className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
            title="Call MJS Direct Line"
          >
            <Phone size={13} className="text-white/80 shrink-0" />
            <span>+971 56 152 9421</span>
          </a>

          <a
            href="mailto:info@mjsaudit.com"
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors font-medium"
            title="Email MJS"
          >
            <Mail size={13} className="text-white/80 shrink-0" />
            <span>info@mjsaudit.com</span>
          </a>
        </div>

        {/* Right: Social Media Links */}
        <div className="flex items-center gap-2.5 text-white/90">
          <a
            href="https://www.linkedin.com/company/mjsaudit/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-white hover:scale-110 transition-transform"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={14} />
          </a>
          <a
            href="https://www.facebook.com/mjsaudit/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-white hover:scale-110 transition-transform"
            aria-label="Facebook"
            title="Facebook"
          >
            <Facebook size={14} />
          </a>
          <a
            href="https://www.instagram.com/mjsaudit/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-white hover:scale-110 transition-transform"
            aria-label="Instagram"
            title="Instagram"
          >
            <Instagram size={14} />
          </a>
          <a
            href="https://x.com/MJSAudit"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-white hover:scale-110 transition-transform"
            aria-label="Twitter"
            title="Twitter / X"
          >
            <Twitter size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
