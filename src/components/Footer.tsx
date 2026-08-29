"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink, ArrowRight, ChevronRight, Search, Share2, Laptop, Smartphone, Home, Users, Headphones, TrendingUp, CheckCircle2, Sparkles, Megaphone } from "lucide-react";

export default function Footer() {
  const partnerStrengths = [
    "Customized digital marketing strategies",
    "SEO-friendly website development",
    "Professional and user-focused experiences",
    "Performance-oriented marketing campaigns",
    "Customized website and mobile app development",
    "Scalable technology solutions",
    "Clear project planning and communication",
    "Ongoing optimization and support"
  ];

  const quickLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About Us", href: "/about", icon: Users },
    { label: "Portfolio", href: "/portfolio", icon: Laptop },
    { label: "Blogs", href: "/blogs", icon: TrendingUp },
    { label: "Contact", href: "/contact", icon: Headphones },
    { label: "Privacy Policy", href: "#", icon: CheckCircle2 },
    { label: "Terms & Conditions", href: "#", icon: CheckCircle2 },
    { label: "SiteMap", href: "#", icon: ExternalLink }
  ];

  const keySolutions = [
    { label: "Digital Marketing", href: "/digital-marketing-services-in-hyderabad", icon: Megaphone },
    { label: "Mobile Application", href: "/mobile-application", icon: Smartphone },
    { label: "Web Development", href: "/web-development", icon: Laptop },
    { label: "Influencer Marketing", href: "/influencer-marketing", icon: Share2 },
    { label: "SAP Cloud Services", href: "/sap-cloud-services", icon: TrendingUp },
    { label: "Machine Learning", href: "/machine-learning", icon: Search },
    { label: "AI Solutions", href: "/artificial-intelligence", icon: Sparkles }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-50 via-white to-slate-100 border-t border-slate-200 pt-0 pb-10 relative overflow-hidden font-sans select-none text-slate-800">

      {/* Strengths Marquee Band at the very top of Footer (Kept in Dark Indigo) */}
      <div className="w-full relative overflow-hidden bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 py-4.5 mb-14 border-b border-indigo-800/30 shadow-md">
        {/* Fade overlays at screen edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-indigo-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-indigo-950 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-horizontal hover:[animation-play-state:paused] whitespace-nowrap gap-16">
          {[...partnerStrengths, ...partnerStrengths].map((strength, idx) => {
            const originalIdx = idx % partnerStrengths.length;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 shrink-0 cursor-default"
              >
                <span className="text-[10px] font-mono text-pink-300 font-bold tabular-nums">
                  {String(originalIdx + 1).padStart(2, "0")}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white hover:text-pink-200 transition-colors">
                  {strength}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative fine-line grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-80" />

      {/* Soft ambient background glows */}
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-pink-200/40 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-purple-200/40 blur-[130px] pointer-events-none -z-10" />

      {/* Giant Watermark background text */}
      <div className="absolute top-[38%] left-0 right-0 text-[14vw] font-black text-slate-900/[0.03] leading-none pointer-events-none select-none tracking-tighter z-0 text-center">
        DigitalRaiz
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

        {/* 4-Column Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

          {/* COLUMN 1: Brand Logo & Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Image
              src="/logo/digital-raiz-logo.png"
              alt="Digital Raiz Logo"
              width={450}
              height={122}
              className="w-full h-auto max-w-[180px] -my-6 hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            />
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light text-justify max-w-sm">
              <strong className="text-[#1e1b4b] font-bold">DigitalRaiz</strong> is a premier software development, mobile application engineering, and digital marketing company in Hyderabad, India.
            </p>
          </div>

          {/* COLUMN 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600 pb-1 border-b border-slate-200/80">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.slice(0, 5).map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2.5 text-slate-700 hover:text-pink-600 transition-all duration-200 text-xs sm:text-sm font-medium"
                    >
                      <IconComponent className="w-3.5 h-3.5 text-pink-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-200 shrink-0" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 3: Key Solutions (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600 pb-1 border-b border-slate-200/80">
              Key Solutions
            </h4>
            <ul className="space-y-2.5">
              {keySolutions.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-2.5 text-slate-700 hover:text-pink-600 transition-all duration-200 text-xs sm:text-sm font-medium"
                    >
                      <IconComponent className="w-3.5 h-3.5 text-pink-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-200 shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 4: Hyderabad Office & Social (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600 pb-1 border-b border-slate-200/80">
              Hyderabad HQ
            </h4>

            <ul className="space-y-3 text-xs text-slate-600 font-light">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">#616, Manjeera Majestic Commercial,<br />KPHB-JNTU road, Hyderabad 500085.</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-pink-500 shrink-0" />
                <a href="tel:+919494613601" className="hover:text-pink-600 transition-colors font-medium text-slate-700">+91-9494613601</a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-pink-500 shrink-0" />
                <a href="mailto:info@digitalraiz.com" className="hover:text-pink-600 transition-colors font-medium text-slate-700">info@digitalraiz.com</a>
              </li>
            </ul>

            {/* Social Icons Bar */}
            <div className="pt-2 flex items-center gap-2">
              <a href="https://www.facebook.com/digitalraiz/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 hover:bg-[#1877f2] hover:border-[#1877f2] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-3xs" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
              </a>
              <a href="https://twitter.com/digital_raiz" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 hover:bg-black hover:border-black text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-3xs" aria-label="Twitter">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://www.youtube.com/@digitalraiz2023/featured" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 hover:bg-[#ff0000] hover:border-[#ff0000] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-3xs" aria-label="Youtube">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/digital-raiz/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 hover:bg-[#0a66c2] hover:border-[#0a66c2] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-3xs" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="https://in.pinterest.com/digitalraiz/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 hover:bg-red-500 hover:border-red-500 text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-3xs" aria-label="Pinterest">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.4 7.63 11.16-.1-.94-.2-2.39.04-3.41.22-.93 1.4-5.96 1.4-5.96s-.36-.72-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.56-.99 3.98-.28 1.19.6 2.16 1.77 2.16 2.13 0 3.76-2.25 3.76-5.49 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.21 0 1.03.4 2.14.89 2.74.1.12.11.23.08.35-.09.38-.3 1.22-.34 1.39-.06.23-.19.28-.43.17-1.59-.74-2.59-3.07-2.59-4.94 0-4.02 2.92-7.71 8.42-7.71 4.42 0 7.86 3.15 7.86 7.37 0 4.39-2.77 7.93-6.61 7.93-1.29 0-2.5-0.67-2.91-1.46L9.89 20c-.39 1.48-1.44 3.32-2.15 4.46C8.82 23.82 10.34 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" /></svg>
              </a>
              <a href="https://www.instagram.com/digital_raiz/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-500 hover:border-pink-500 text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-3xs" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Metadata */}
        <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 relative z-20">
          <p>© {new Date().getFullYear()} Digital Raiz. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a>
            <a
              href="https://digitalraiz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-pink-600 hover:text-pink-700 transition-colors font-semibold"
            >
              <span>digitalraiz.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
