"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink, ArrowRight, Search, Share2, Laptop, Smartphone, Home, Users, Headphones, TrendingUp, CheckCircle2 } from "lucide-react";

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
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "#" },
    { label: "Career", href: "#" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "SiteMap", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-primary via-primary-mid to-primary-dark border-t border-primary-hover/30 pt-0 pb-12 relative overflow-hidden font-sans select-none text-white">

      {/* Strengths Marquee Band at the very top of Footer */}
      <div className="w-full relative overflow-hidden bg-gradient-to-r from-indigo-950 via-indigo-900/85 to-indigo-950 py-5 mb-14 border-b border-indigo-900/20">
        {/* Fade overlays at screen edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-indigo-950 via-indigo-950/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-indigo-950 via-indigo-950/50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-horizontal hover:[animation-play-state:paused] whitespace-nowrap gap-16">
          {[...partnerStrengths, ...partnerStrengths].map((strength, idx) => {
            const originalIdx = idx % partnerStrengths.length;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 shrink-0 cursor-default"
              >
                <span className="text-[10px] font-mono text-pink-300/80 tabular-nums">
                  {String(originalIdx + 1).padStart(2, "0")}
                </span>
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white hover:text-pink-200 transition-colors">
                  {strength}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative fine-line grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-80" />

      {/* Ambient background glow */}
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[120px] pointer-events-none -z-10" />

      {/* Giant Watermark background text - behind the links */}
      <div className="absolute top-[38%] left-0 right-0 text-[14vw] font-black text-white/[0.030] leading-none pointer-events-none select-none tracking-tighter z-0 text-center">
        DigitalRaiz
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">


        {/* Asymmetrical Layout Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-10">

          {/* LEFT PANEL: Brand, Logo & About Us */}
          <div className="lg:col-span-5 space-y-5 lg:pr-4">
            <div className="space-y-3">
              <Image
                src="/logo/Digital Raiz logo.png"
                alt="Digital Raiz Logo"
                width={450}
                height={122}
                className="w-full h-auto max-w-[180px] -my-8 hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
              />
              <p className="text-pink-100/70 text-sm leading-relaxed max-w-sm font-normal text-justify">
                <strong>DigitalRaiz</strong> is the top most company in Software Development, IT Development, Mobile Apps Development, Digital Marketing services. One of the best software development company in Hyderabad India. We developed and executed highly technical projects on-time, with a lower cost & within scope.
              </p>
            </div>

            {/* Talk To Our Support details */}
            <div className="pt-4 border-t border-white/10 mt-6">
              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover:scale-105 transition-transform">
                  <Phone className="w-4.5 h-4.5 text-pink-300" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-pink-300/80 uppercase tracking-wider block">Talk To Our Support</span>
                  <a href="tel:+919494613601" className="text-base font-bold text-white hover:text-pink-200 transition-colors block mt-0.5">+91-9494613601</a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Nav Link Groups */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">

            {/* Quick Links List */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-300">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2.5 text-pink-100/85 hover:text-white transition-all duration-200 text-sm font-normal"
                    >
                      <span className="w-1 h-1 rounded-full bg-pink-400 group-hover:bg-white transition-colors shrink-0" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address & Contact Details Column */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-300">Address</h4>
              <ul className="space-y-4 text-sm font-normal text-pink-100/85">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-pink-300 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">#616, Manjeera Majestic Commercial,<br />KPHB-JNTU road, Hyderabad 500085,<br />Telangana, India.</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-pink-300 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919494613601" className="hover:text-white transition-colors">+91-9494613601</a>
                    <a href="tel:+918179163601" className="hover:text-white transition-colors">+91-8179163601</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-pink-300 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="mailto:info@digitalraiz.com" className="hover:text-white transition-colors">info@digitalraiz.com</a>
                    <a href="mailto:digitalraizinst@gmail.com" className="hover:text-white transition-colors">digitalraizinst@gmail.com</a>
                  </div>
                </li>
              </ul>

              {/* Social Icons list underneath Address */}
              <div className="flex items-center gap-3 pt-2">
                {/* Facebook */}
                <a href="https://www.facebook.com/digitalraiz/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-hover/40 border border-primary-hover/50 hover:border-pink-400 text-pink-200 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                </a>
                {/* Twitter (X) */}
                <a href="https://twitter.com/digital_raiz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-hover/40 border border-primary-hover/50 hover:border-pink-400 text-pink-200 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md" aria-label="Twitter">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* Youtube */}
                <a href="https://www.youtube.com/@digitalraiz2023/featured" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-hover/40 border border-primary-hover/50 hover:border-pink-400 text-pink-200 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md" aria-label="Youtube">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z\"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/digital-raiz/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-hover/40 border border-primary-hover/50 hover:border-pink-400 text-pink-200 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z\"/></svg>
                </a>
                {/* Pinterest */}
                <a href="https://in.pinterest.com/digitalraiz/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-hover/40 border border-primary-hover/50 hover:border-pink-400 text-pink-200 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md" aria-label="Pinterest">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.4 7.63 11.16-.1-.94-.2-2.39.04-3.41.22-.93 1.4-5.96 1.4-5.96s-.36-.72-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.56-.99 3.98-.28 1.19.6 2.16 1.77 2.16 2.13 0 3.76-2.25 3.76-5.49 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.21 0 1.03.4 2.14.89 2.74.1.12.11.23.08.35-.09.38-.3 1.22-.34 1.39-.06.23-.19.28-.43.17-1.59-.74-2.59-3.07-2.59-4.94 0-4.02 2.92-7.71 8.42-7.71 4.42 0 7.86 3.15 7.86 7.37 0 4.39-2.77 7.93-6.61 7.93-1.29 0-2.5-0.67-2.91-1.46L9.89 20c-.39 1.48-1.44 3.32-2.15 4.46C8.82 23.82 10.34 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z\"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/digital_raiz/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-hover/40 border border-primary-hover/50 hover:border-pink-400 text-pink-200 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z\"/></svg>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Bottom Metadata */}
        <div className="pt-8 border-t border-[#4a154b]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pink-200/60 relative z-20">
          <p>© {new Date().getFullYear()} Digital Raiz. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a
              href="https://digitalraiz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors font-medium"
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
