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

  const services = [
    { label: "Search Engine Optimization", icon: Search },
    { label: "Social Media Marketing", icon: Share2 },
    { label: "Website Development", icon: Laptop },
    { label: "Mobile App Development", icon: Smartphone }
  ];

  const quickLinks = [
    { label: "Home Page", href: "/" },
    { label: "Why Partner Us", href: "/about" },
    { label: "Contact Support", href: "/contact" }
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
      <div className="absolute top-[38%] left-0 right-0 text-[14vw] font-black text-white/[0.030] leading-none pointer-events-none select-none tracking-tighter lowercase z-0 text-center">
        digitalraiz
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">


        {/* Asymmetrical Layout Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-10">

          {/* LEFT PANEL: Brand, Logo & Intro */}
          <div className="lg:col-span-5 space-y-1 lg:pr-8">
            <div className="space-y-2">
              <Image
                src="/logo/Digital Raiz logo.png"
                alt="Digital Raiz Logo"
                width={450}
                height={122}
                className="w-full h-auto max-w-[180px] -my-8 hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
              />
              <p className="text-pink-100/70 text-sm sm:text-base font-light leading-relaxed max-w-sm">
                A design-driven digital marketing and product development agency in Hyderabad, dedicated to building brands that stand out and scale.
              </p>
            </div>

            {/* Premium Interactive Contact Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="w-5 h-5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-pink-300" />
                </div>
                <span className="text-pink-100/80 text-sm font-light">Madhapur, Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-5 h-5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-indigo-300" />
                </div>
                <span className="text-pink-100/80 text-sm font-light">info@digitalraiz.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center mt-3 gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-hover/40 border border-primary-hover/50 hover:border-pink-400 text-pink-200 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-hover/40 border border-primary-hover/50 hover:border-pink-400 text-pink-200 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-hover/40 border border-primary-hover/50 hover:border-pink-400 text-pink-200 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
            </div>
          </div>

          {/* RIGHT PANEL: Nav Link Groups */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* Services Link List */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-pink-300">Our Services</h4>
              <ul className="space-y-3.5">
                {services.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <li key={svc.label}>
                      <a
                        href="/services"
                        className="group flex items-center gap-2 text-pink-100 hover:text-white transition-colors text-xs sm:text-sm font-medium"
                      >
                        <Icon className="w-4 h-4 text-pink-300 group-hover:text-white transition-colors shrink-0" />
                        <span>{svc.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Links List */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-pink-300">Quick Links</h4>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2.5 text-pink-100 hover:text-white transition-all duration-200 text-xs sm:text-sm font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 group-hover:bg-white transition-colors shrink-0" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Quick Details */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-pink-300">Working Hours</h4>
              <div className="space-y-3.5 text-xs sm:text-sm font-light text-pink-200">
                <div>
                  <p className="font-semibold text-white">Mon - Fri</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Saturday</p>
                  <p>10:00 AM - 2:00 PM</p>
                </div>
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
