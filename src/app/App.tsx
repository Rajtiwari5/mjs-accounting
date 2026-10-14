import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  FileText,
  Building2,
  CheckCircle2,
  Star,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  UserCheck,
  ShieldCheck,
  CalendarCheck,
  Search,
  Sparkles,
} from "lucide-react";
import logo1 from "./components/public/logo1.png";
import logo2 from "./components/public/logo2.png";
import mjsFavicon from "./components/public/mjs.png";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Testimonials } from "./components/Testimonials";
import { ClientLogos } from "./components/ClientLogos";
import { CaseStudies } from "./components/CaseStudies";
import { SearchModal } from "./components/SearchModal";
import { TaxCalendarTicker } from "./components/TaxCalendarTicker";
import { InteractiveServiceMatrix } from "./components/InteractiveServiceMatrix";
import { InteractiveIndustryHub } from "./components/InteractiveIndustryHub";
import { InteractiveFAQ } from "./components/InteractiveFAQ";
import { EngagementProcess } from "./components/EngagementProcess";
import { NewsSection } from "./components/NewsSection";
import { NewsDetailModal } from "./components/NewsDetailModal";
import { BottomTicker } from "./components/BottomTicker";
import { TopBar } from "./components/TopBar";
import { UpdatesPage } from "./components/UpdatesPage";
import { NEWS_ARTICLES, NewsArticle } from "./data/newsData";

type Page = "home" | "about" | "services" | "updates" | "contact";

const PATH_TO_PAGE: Record<string, Page> = {
  "/": "home",
  "/home": "home",
  "/aboutus": "about",
  "/about": "about",
  "/about-us": "about",
  "/services": "services",
  "/updates": "updates",
  "/news": "updates",
  "/contact": "contact",
  "/contactus": "contact",
  "/contact-us": "contact",
};

const PAGE_TO_PATH: Record<Page, string> = {
  home: "/",
  about: "/aboutus",
  services: "/services",
  updates: "/updates",
  contact: "/contact",
};

const NAV_LINKS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Services", page: "services" },
  { label: "Updates", page: "updates" },
  { label: "Contact", page: "contact" },
];

const WHY_CHOOSE = [
  "10+ Years of UAE Experience",
  "500+ Businesses Served",
  "Tax & Compliance Experts",
  "Dedicated Tax & Accounting Specialists",
  "Fast Turnaround Time",
  "Experienced Accountants & Tax Consultants",
  "Trusted Accounting & Tax Advisors",
];

const PROCESS_STEPS = [
  { num: "01", title: "Consultation", desc: "We listen to your requirements and analyze your business structure." },
  { num: "02", title: "Assessment", desc: "Thorough evaluation of your financial, VAT, and corporate tax compliance standing." },
  { num: "03", title: "Strategy Planning", desc: "Tailored action plan aligned with UAE Federal Tax Authority (FTA) regulations." },
  { num: "04", title: "Implementation", desc: "Precise execution by our Accountants & Tax Consultants with minimal operational friction." },
  { num: "05", title: "Compliance & Reporting", desc: "Timely filings, audit reports, and regulatory submissions." },
  { num: "06", title: "Continuous Support", desc: "Proactive advisory and regulatory updates as UAE tax laws evolve." },
];

const VALUES = [
  { icon: Shield, title: "Integrity", desc: "We uphold the highest ethical standards in every engagement." },
  { icon: Star, title: "Accuracy", desc: "Precision in every number, report, and regulatory submission." },
  { icon: Award, title: "Professional Excellence", desc: "Qualified accountants & tax consultants with deep UAE market expertise." },
  { icon: Users, title: "Long-Term Relationships", desc: "We grow alongside your business as a trusted partner." },
  { icon: BarChart3, title: "Regulatory Compliance", desc: "Always current with UAE tax and financial regulations." },
];

// ─── Section label component ───────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="h-px w-8 bg-red-600" />
      <span className="text-red-600 text-xs font-bold tracking-widest uppercase">{text}</span>
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────

function Navbar({
  current,
  navigate,
  onOpenSearch,
}: {
  current: Page;
  navigate: (p: Page) => void;
  onOpenSearch: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
      {/* Top Bar with Timing, Contacts, and Social Links */}
      <TopBar />

      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={() => navigate("home")} className="flex items-center gap-3 text-left">
          <img src={logo1} alt="MJS Accounting & Auditing Logo" className="h-11 md:h-14 w-auto object-contain" />
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map(({ label, page }) => (
            <li key={page}>
              <button
                onClick={() => navigate(page)}
                className={`text-sm md:text-base transition-colors relative py-1 flex flex-col items-center ${
                  current === page
                    ? "text-[#c8102e] font-bold"
                    : "text-slate-800 font-semibold hover:text-[#c8102e]"
                }`}
              >
                <span>{label}</span>
                {current === page && (
                  <motion.span
                    layoutId="underline"
                    className="h-[3px] w-6 bg-[#c8102e] rounded-full mt-1"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200"
            title="Search Site (⌘K)"
          >
            <Search size={18} />
          </button>

          <button
            onClick={() => navigate("contact")}
            className="bg-[#c8102e] hover:bg-[#a60d25] text-white text-sm font-bold px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 group"
          >
            <span>Get Consultation</span>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenSearch}
            className="p-2 text-slate-700 hover:text-[#c8102e]"
            aria-label="Search"
          >
            <Search size={22} />
          </button>
          <button
            className="p-2 text-slate-800 hover:text-[#c8102e] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-2">
              {NAV_LINKS.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      navigate(page);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                      current === page
                        ? "text-[#c8102e] bg-red-50/60"
                        : "text-slate-800 hover:text-[#c8102e] hover:bg-slate-50"
                    }`}
                  >
                    <span>{label}</span>
                    {current === page && <div className="w-2 h-2 rounded-full bg-[#c8102e]" />}
                  </button>
                </li>
              ))}

              <li className="pt-2">
                <button
                  onClick={() => {
                    navigate("contact");
                    setOpen(false);
                  }}
                  className="w-full bg-[#c8102e] text-white text-sm font-bold px-5 py-3 rounded-lg shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Get Consultation</span>
                  <ArrowRight size={16} />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────

function Footer({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-2.5 inline-block rounded-xl shadow-md">
              <img src={logo2} alt="MJS Logo" className="h-16 md:h-20 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dubai-based accounting, auditing, and tax firm providing reliable financial, VAT, Corporate Tax, and business advisory services for UAE enterprises.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Facebook, href: "https://www.facebook.com/mjsaudit/" },
                { icon: Twitter, href: "https://x.com/MJSAudit" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/mjsaudit/" },
                { icon: Instagram, href: "https://www.instagram.com/mjsaudit/" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-slate-800 text-slate-400 hover:text-white hover:border-red-500 hover:bg-slate-900 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-red-500 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => navigate(page)}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-start gap-2.5 text-left w-full group"
                  >
                    <ChevronRight size={12} className="text-red-500 shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-red-500 mb-5">Practice Groups</h4>
            <ul className="space-y-3">
              {["Accounting & Bookkeeping", "VAT Compliance", "Corporate Tax", "Internal Audit", "Business Advisory"].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => navigate("services")}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-start gap-2.5 text-left w-full group"
                  >
                    <ChevronRight size={12} className="text-red-500 shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                    <span>{s}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-red-500 mb-5">Government Portals</h4>
            <ul className="space-y-3">
              {[
                { label: "Ministry of Finance", href: "https://mof.gov.ae" },
                { label: "Federal Tax Authority", href: "https://eservices.tax.gov.ae" },
                { label: "Ministry of Economy", href: "https://www.moec.gov.ae" },
                { label: "Central Bank of UAE", href: "https://www.centralbank.ae" },
                { label: "UAE Pass", href: "https://www.uaepass.ae" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-start gap-2.5 text-left w-full group"
                  >
                    <ChevronRight size={12} className="text-red-500 shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-red-500 mb-5">Contact Us</h4>
            <ul className="space-y-4 text-xs text-slate-400">
              <li className="flex gap-3">
                <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div><strong className="text-slate-200">Main Office:</strong> Office No.M02-038, Sama Residence - M-02, 28th St - Al Nahda First, Al Nahda 1, Dubai, United Arab Emirates</div>
                  <div><strong className="text-slate-200">Meeting Office 1:</strong> Madina Mall, Al Qusais, Dubai</div>
                  <div><strong className="text-slate-200">Meeting Office 2:</strong> Gulf Tower, Oud Metha, Dubai</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div><a href="mailto:info@mjsaudit.com" className="hover:text-white transition-colors">info@mjsaudit.com</a></div>
                  <div><a href="mailto:hr@mjsaudit.com" className="hover:text-white transition-colors">hr@mjsaudit.com</a></div>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>+971 56 152 9421</div>
                  <div>+971 54 578 4786</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} M J S Accounting & Auditing L.L.C. All rights reserved.</p>
          <p>UAE-Based Accounting & Taxation Firm • Audit Reports Arranged via Licensed Partners</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page Hero ─────────────────────────────────────────────────────────────────

function PageHero({ label, title, subtitle, img }: { label: string; title: string; subtitle: string; img: string }) {
  return (
    <section className="relative pt-24 pb-20 bg-slate-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url('${img}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/80" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px w-8 bg-red-500" />
          <span className="text-red-400 text-xs font-bold tracking-widest uppercase">{label}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white mb-4">
          {title}
        </h1>
        <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}

// ─── Home Page ─────────────────────────────────────────────────────────────────

function HomePage({
  navigate,
  onSelectArticle,
}: {
  navigate: (p: Page) => void;
  onSelectArticle: (article: NewsArticle) => void;
}) {
  return (
    <div className="bg-[#fcfcfc]">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 max-w-7xl mx-auto pb-16 pt-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 z-10 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold tracking-wide uppercase">
              <Sparkles size={14} className="text-red-600" />
              <span>DUBAI'S TRUSTED FINANCIAL & TAX PARTNER</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.12] tracking-tight font-serif"
            >
              Financial Clarity.<br />
              Compliance.<br />
              <span className="text-[#c8102e]">Confidence.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              MJS Accounting & Auditing L.L.C delivers precision-driven accounting, VAT compliance, Corporate Tax advisory, and business setup services for UAE enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigate("contact")}
                className="bg-[#c8102e] hover:bg-[#a60d25] text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 text-sm sm:text-base group"
              >
                <span>Schedule Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column - Arched Hero Image & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative mt-6 lg:mt-0"
          >
            <div className="relative rounded-tl-[120px] sm:rounded-tl-[180px] lg:rounded-tl-[220px] overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1600&auto=format&fit=crop"
                alt="Dubai Downtown Skyline with Burj Khalifa"
                className="w-full h-[420px] sm:h-[500px] lg:h-[540px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Stats Card Overlay - Bottom Left */}
            <motion.div
              whileHover={{ y: -4 }}
              className="absolute bottom-5 left-4 sm:bottom-7 sm:left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-200/90 z-20 w-[240px] sm:w-[290px]"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-0.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-[#c8102e] bg-red-50 mb-1">
                    <Briefcase size={18} />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight font-serif">500+</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">Businesses Served</div>
                </div>

                <div className="space-y-0.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-[#c8102e] bg-red-50 mb-1">
                    <UserCheck size={18} />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight font-serif">10+</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">Years in UAE</div>
                </div>

                <div className="space-y-0.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-[#c8102e] bg-red-50 mb-1">
                    <Users size={18} />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight font-serif">50+</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">Accounting & Tax Pros</div>
                </div>

                <div className="space-y-0.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-[#c8102e] bg-red-50 mb-1">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight font-serif">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">Compliance Focused</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* UAE Regulatory Watch Deadlines Ticker */}
      <TaxCalendarTicker onConsultationRequest={() => navigate("contact")} />

      {/* Interactive Service Matrix */}
      <InteractiveServiceMatrix
        onNavigateService={() => navigate("services")}
        onConsultationRequest={() => navigate("contact")}
      />

      {/* Why Choose MJS */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel text="Why Choose MJS" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-serif leading-tight">
              The Standard of <span className="text-[#c8102e] italic">Excellence</span> in UAE Financial Services
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Founded by experienced UAE accountants and tax consultants, MJS combines modern financial technology with time-tested professional ethics. We treat every client's tax and financial health as our own obligation.
            </p>
            <button
              onClick={() => navigate("about")}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl shadow transition-colors flex items-center gap-2"
            >
              <span>Explore Firm Profile</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {WHY_CHOOSE.map((item, idx) => (
              <motion.div
                key={item}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-4 rounded-xl hover:border-red-600 transition-all shadow-sm"
              >
                <CheckCircle2 size={20} className="text-[#c8102e] shrink-0" />
                <span className="text-slate-800 text-sm font-bold">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Industry Solutions Hub */}
      <InteractiveIndustryHub onConsultationRequest={() => navigate("contact")} />

      {/* Case Studies */}
      <CaseStudies onConsultationRequest={() => navigate("contact")} />

      {/* Latest News / Updates Section */}
      <NewsSection
        onSelectArticle={onSelectArticle}
        onViewAllNews={() => navigate("updates")}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Knowledge Base */}
      <InteractiveFAQ />
    </div>
  );
}

// ─── About Page ────────────────────────────────────────────────────────────────

function AboutPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      <PageHero
        label="Our Firm"
        title="About MJS Accounting & Auditing"
        subtitle="A UAE-based accounting and taxation firm built on integrity, accuracy, and genuine commitment to client success."
        img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=600&fit=crop&auto=format"
      />

      {/* Story */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-5">
            <SectionLabel text="Our Story" />
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif">
              Modern Financial Technology, Time-Tested Professional Ethics
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              M J S Accounting & Auditing L.L.C is a UAE-based accounting and taxation firm providing reliable financial, tax consulting, and business advisory services. Our team of accountants, tax specialists, and finance professionals helps businesses remain compliant, improve financial performance, and achieve sustainable growth.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              While we arrange independent external audit reports through our network of licensed partner audit firms in the UAE, our core team provides end-to-end accounting, bookkeeping, VAT compliance, Corporate Tax filings, and strategic financial guidance.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=500&fit=crop&auto=format"
                alt="MJS Dubai Office"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl hidden lg:block border border-slate-800">
              <div className="text-3xl font-bold font-serif text-red-400">2023</div>
              <div className="text-xs text-slate-300 font-medium">Established in Dubai, UAE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel text="Our Core Values" />
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
              Guiding Principles of Our Engagement
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-red-600 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-slate-900 text-red-400 rounded-xl flex items-center justify-center mb-5">
                  <v.icon size={22} />
                </div>
                <h3 className="text-lg font-bold font-serif text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process / How We Work */}
      <EngagementProcess onConsultationRequest={() => navigate("contact")} />
    </div>
  );
}

// ─── Services Page ─────────────────────────────────────────────────────────────

const FULL_SERVICES = [
  {
    id: "accounting",
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    tagline: "Accurate, Timely, and Fully Compliant Financial Records",
    description:
      "MJS delivers comprehensive accounting and bookkeeping services tailored to your business requirements, ensuring full compliance with UAE regulations while optimizing your financial performance. Our team of qualified accountants manages every aspect of your financial records — freeing you to focus on growing your business with confidence.",
    why: "Maintaining accurate books is not just a compliance requirement — it is the foundation of every smart business decision. With MJS as your accounting partner, you gain real-time financial visibility, reduced risk of regulatory penalties, and a clear picture of your company's financial health at all times.",
    items: [
      { label: "Financial Accounting", desc: "Full-cycle financial accounting in line with IFRS standards applicable in the UAE." },
      { label: "Bookkeeping", desc: "Day-to-day transaction recording, ledger maintenance, and account reconciliation." },
      { label: "Payroll Processing", desc: "Accurate and timely payroll computation, WPS compliance, and employee payslip generation." },
      { label: "Bank Reconciliation", desc: "Monthly reconciliation of bank statements against books to identify discrepancies promptly." },
      { label: "Financial Statements", desc: "Preparation of balance sheets, income statements, cash flow statements, and equity reports." },
      { label: "MIS Reporting", desc: "Management Information System reports that translate financial data into actionable insights." },
    ],
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "vat",
    icon: FileText,
    title: "VAT Compliance & Advisory",
    tagline: "End-to-End VAT Support Across the Full Lifecycle",
    description:
      "Since the introduction of VAT in the UAE, staying compliant has become a critical business function. MJS provides complete VAT compliance services — from first-time registration to complex audit assistance — ensuring your business meets all Federal Tax Authority requirements without disruption.",
    why: "VAT non-compliance in the UAE can result in significant financial penalties and reputational damage. Our proactive approach identifies risks before they become issues and keeps your filings accurate, timely, and fully documented.",
    items: [
      { label: "VAT Registration", desc: "Guidance and handling of mandatory and voluntary VAT registration with the FTA." },
      { label: "VAT Return Filing", desc: "Preparation and submission of accurate periodic VAT returns on your behalf." },
      { label: "VAT Health Check", desc: "Independent review of your current VAT position to identify gaps and improvement areas." },
      { label: "VAT Refunds", desc: "Assistance with refund claims and follow-up with the Federal Tax Authority." },
      { label: "Penalty Reconsideration", desc: "Drafting and submission of reconsideration requests for FTA-imposed penalties." },
    ],
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "corporate-tax",
    icon: TrendingUp,
    title: "Corporate Tax Services (9%)",
    tagline: "Helping UAE Businesses Navigate the New Corporate Tax Regime",
    description:
      "The introduction of UAE Corporate Tax marks a significant shift in the country's business landscape. MJS provides businesses with the expertise they need to understand, plan for, and fully comply with the new corporate tax law — minimising tax burden while ensuring complete regulatory adherence.",
    why: "The UAE Corporate Tax framework is new and continues to evolve. Businesses that act early — registering correctly, assessing their tax position, and building compliant accounting practices — will be far better positioned than those who react late.",
    items: [
      { label: "Tax Registration", desc: "Timely registration with the FTA for Corporate Tax purposes as mandated by law." },
      { label: "Tax Impact Assessment", desc: "Analysis of how Corporate Tax affects your current financial structure and profitability." },
      { label: "Corporate Tax Return Filing", desc: "Preparation and filing of accurate corporate tax returns within statutory deadlines." },
      { label: "Qualifying Free Zone Review", desc: "Evaluation of 0% tax eligibility criteria for free zone entities." },
    ],
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "internal-audit",
    icon: Shield,
    title: "Internal Audit & Governance",
    tagline: "Strengthen Governance, Controls, and Business Performance",
    description:
      "Effective internal audit is one of the most powerful tools a business has to identify risk, prevent fraud, and improve operational efficiency. MJS conducts rigorous, independent internal audit reviews that give management and stakeholders confidence in the business's financial and operational integrity.",
    why: "Internal audit is not just a compliance exercise — it is a strategic function. Our independent assessments surface risks that internal teams often overlook.",
    items: [
      { label: "Internal Audit Reviews", desc: "Systematic examination of financial records, processes, and internal controls." },
      { label: "Pre-FTA Audit Assessment", desc: "Pre-audit reviews to assess readiness and identify potential issues before an FTA audit." },
      { label: "Internal Controls Evaluation", desc: "Testing and reporting on the design and effectiveness of your control environment." },
    ],
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "advisory",
    icon: Building2,
    title: "Business Advisory & ESR",
    tagline: "Expert Guidance for Every Stage of Your Business Journey",
    description:
      "From launching a new company to meeting complex regulatory requirements, MJS provides practical, hands-on business advisory services that help UAE businesses operate efficiently, stay compliant, and grow with confidence.",
    why: "Navigating the UAE's evolving regulatory environment requires specialist knowledge.",
    items: [
      { label: "Company Formation", desc: "Full support for mainland, free zone, and offshore company registration in the UAE." },
      { label: "Economic Substance (ESR)", desc: "ESR assessment, notification filing, and annual reporting for relevant activities." },
      { label: "ICV Certification", desc: "Support in achieving and renewing ICV certification for UAE government tenders." },
      { label: "AML Compliance", desc: "Anti-Money Laundering compliance reviews, policy drafting, and regulatory reporting." },
    ],
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&auto=format",
  },
];

function ServicesPage({ navigate }: { navigate: (p: Page) => void }) {
  const [activeTab, setActiveTab] = useState("accounting");

  return (
    <div>
      <PageHero
        label="Full Scope Practice Groups"
        title="Our Services & Practice Groups"
        subtitle="Comprehensive accounting, tax, audit, and business advisory capabilities engineered for UAE mainland and free zone entities."
        img="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&h=600&fit=crop&auto=format"
      />

      {/* Sticky Practice Quick Navigation Bar */}
      <div className="sticky top-20 z-30 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-xl py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 shrink-0 hidden sm:inline">
            Practice Groups:
          </span>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {FULL_SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setActiveTab(s.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === s.id
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Practice Groups Render */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-24">
        {FULL_SERVICES.map((s, idx) => {
          const Icon = s.icon;
          return (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-36 bg-white border border-slate-200/90 rounded-3xl shadow-xl overflow-hidden p-8 sm:p-12 lg:p-16 transition-all hover:shadow-2xl"
            >
              {/* Practice Header & Tagline */}
              <div className="border-b border-slate-100 pb-8 mb-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-900 text-red-400 rounded-2xl shadow-md">
                      <Icon size={28} />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block">
                        Practice Group 0{idx + 1}
                      </span>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900">
                        {s.title}
                      </h2>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full border border-slate-200">
                    UAE FTA & IFRS Compliant
                  </span>
                </div>

                <div className="text-xl sm:text-2xl font-bold font-serif text-red-700 leading-snug pt-2">
                  {s.tagline}
                </div>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-5xl">
                  {s.description}
                </p>
              </div>

              {/* Strategic Value "Why it matters" Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-lg mb-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                  <div className="p-3 bg-red-600/20 text-red-400 rounded-xl border border-red-500/30 shrink-0">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2">
                      Strategic Value for Your Enterprise
                    </h3>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                      {s.why}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Scope & Practice Deliverables - Spacious Prominent Grid */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-red-600" />
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                    Key Deliverables & Scope
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {s.items.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4 }}
                      className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-red-600 hover:shadow-xl rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                            SCOPE 0{i + 1}
                          </span>
                          <CheckCircle2 size={18} className="text-emerald-600 group-hover:scale-110 transition-transform" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 font-serif mb-2 group-hover:text-red-700 transition-colors">
                          {item.label}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Practice Image Banner & Action Row */}
              <div className="mt-12 pt-8 border-t border-slate-100 grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[220px] sm:h-[260px] group">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between text-white text-xs font-medium">
                    <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700">
                      UAE Accounting & Tax Firm
                    </span>
                    <span className="bg-red-600 px-3 py-1.5 rounded-lg font-bold">
                      Direct FTA Assistance
                    </span>
                  </div>
                </div>

                <div className="md:col-span-4 bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4 text-center">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                    Engage {s.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Connect with our dedicated practice lead for custom scope proposal and fee estimate.
                  </p>
                  <button
                    onClick={() => navigate("contact")}
                    className="w-full bg-[#c8102e] hover:bg-[#a60d25] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Schedule Practice Consultation</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

// ─── Contact Page ──────────────────────────────────────────────────────────────

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct structured WhatsApp message
    const formattedMessage = `🏢 *MJS ACCOUNTING & AUDITING L.L.C. - PRACTICE CONSULTATION ENQUIRY*\n-----------------------------------------------\n👤 *Full Name:* ${form.name}\n✉️ *Email:* ${form.email}\n📞 *Phone:* ${form.phone || "Not provided"}\n\n📝 *Service Required & Scope:*\n${form.message}\n\n📍 *Source:* MJS Audit & Tax Web Portal`;
    
    const whatsappUrl = `https://wa.me/971561529421?text=${encodeURIComponent(formattedMessage)}`;
    setLastWhatsappUrl(whatsappUrl);
    
    // Trigger WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    setSent(true);
  };

  return (
    <div>
      <PageHero
        label="Get In Touch"
        title="Contact MJS Accounting"
        subtitle="Speak directly with our MJS Accounting & Auditing specialists in Dubai for personalized advisory."
        img="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&h=600&fit=crop&auto=format"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          {/* Office Details */}
          <div className="space-y-8">
            <div>
              <SectionLabel text="Dubai Offices" />
              <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4">
                M J S Accounting & Auditing L.L.C
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Contact us to schedule an in-person meeting at our Dubai offices or book an online consultation with our practice directors.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-900 text-red-400 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Locations & Meeting Offices</div>
                  <div className="text-slate-700 space-y-1.5">
                    <div><strong className="text-slate-900">Main Office:</strong> Office No.M02-038, Sama Residence - M-02, 28th St - Al Nahda First, Al Nahda 1, Dubai, United Arab Emirates</div>
                    <div><strong className="text-slate-900">Meeting Office 1:</strong> Madina Mall, Al Qusais, Dubai</div>
                    <div><strong className="text-slate-900">Meeting Office 2:</strong> Gulf Tower, Oud Metha, Dubai</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-900 text-red-400 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Email Addresses</div>
                  <div className="text-slate-800 font-medium space-y-1">
                    <div><a href="mailto:info@mjsaudit.com" className="hover:text-red-600 transition-colors">info@mjsaudit.com</a></div>
                    <div><a href="mailto:hr@mjsaudit.com" className="hover:text-red-600 transition-colors">hr@mjsaudit.com</a></div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-900 text-red-400 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Phone & WhatsApp</div>
                  <div className="text-slate-800 font-medium space-y-1">
                    <div>+971 56 152 9421</div>
                    <div>+971 54 578 4786</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-900 text-red-400 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Working Hours</div>
                  <div className="text-slate-700">Monday – Saturday: 9:00 AM – 6:00 PM (GST)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#f8f9fa] border border-slate-200/80 p-8 sm:p-10 rounded-2xl shadow-xl">
            {sent ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={40} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 font-serif">Enquiry Sent via WhatsApp!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Your enquiry details have been prepared and sent directly to MJS Accounting & Auditing on WhatsApp (+971 56 152 9421).
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={lastWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#c8102e] hover:bg-[#a60d25] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Re-Open WhatsApp</span>
                    <ArrowRight size={16} />
                  </a>

                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="w-full sm:w-auto bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 tracking-tight">
                    Request a Practice Consultation
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    FULL NAME *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Tariq Al Mansoori"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] shadow-sm transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@company.ae"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] shadow-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    SERVICE REQUIRED & SCOPE *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your business, turnover, and specific requirements (e.g. VAT filing, Corporate Tax setup, Accounting)..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] shadow-sm resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c8102e] hover:bg-[#a60d25] text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Maps Location */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto border border-slate-300 rounded-2xl shadow-xl overflow-hidden bg-white">
          <div className="w-full h-[380px] sm:h-[450px] relative">
            <iframe
              title="MJS Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.68360252436!2d55.33786697626915!3d25.24345487768132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d1712262953%3A0x7cf551bb8d8783f2!2sGarhoud%20Views%20Building!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Main App Component ────────────────────────────────────────────────────────

const getInitialPage = (): Page => {
  if (typeof window === "undefined") return "home";
  
  // Clean pathname
  const rawPath = window.location.pathname.toLowerCase();
  const path = rawPath === "/" ? "/" : rawPath.replace(/\/$/, "");
  if (PATH_TO_PAGE[path]) return PATH_TO_PAGE[path];
  
  // Clean hash fallback
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, "");
  if (hash) {
    if (PATH_TO_PAGE["/" + hash]) return PATH_TO_PAGE["/" + hash];
    if (PATH_TO_PAGE[hash]) return PATH_TO_PAGE[hash];
  }

  return "home";
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  // Set favicon dynamically
  useEffect(() => {
    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      document.head.appendChild(link);
    }
    link.href = mjsFavicon;
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  // Cmd+K shortcut listener for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigate = (page: Page, serviceId?: string) => {
    setCurrentPage(page);
    const targetPath = PAGE_TO_PATH[page] || "/";
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, "", targetPath);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (serviceId) {
      setTimeout(() => {
        const el = document.getElementById(serviceId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-red-600 selection:text-white font-sans pb-12">
      {/* Main Sticky Navbar */}
      <Navbar
        current={currentPage}
        navigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main>
        {currentPage === "home" && (
          <HomePage
            navigate={navigate}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        )}
        {currentPage === "about" && <AboutPage navigate={navigate} />}
        {currentPage === "services" && <ServicesPage navigate={navigate} />}
        {currentPage === "updates" && (
          <UpdatesPage
            onSelectArticle={(art) => setSelectedArticle(art)}
            onConsultationRequest={() => navigate("contact")}
          />
        )}
        {currentPage === "contact" && <ContactPage />}
      </main>

      <Footer navigate={navigate} />

      <WhatsAppButton />

      {/* Persistent Bottom Scrolling Ticker Bar */}
      <BottomTicker
        onConsultationRequest={() => navigate("contact")}
        onSelectHeadline={() => setSelectedArticle(NEWS_ARTICLES[0])}
      />

      {/* News Article Detail Modal */}
      <NewsDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onConsultationRequest={() => navigate("contact")}
      />

      {/* Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(page, serviceId) => navigate(page, serviceId)}
      />
    </div>
  );
}
