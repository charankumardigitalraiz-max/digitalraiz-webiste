"use client";

import React, { useState } from "react";
import { Laptop, Smartphone, ArrowRight, Star } from "lucide-react";

export default function CapabilitiesSection() {
  const [hoveredWeb, setHoveredWeb] = useState<number | null>(null);
  const [hoveredMob, setHoveredMob] = useState<number | null>(null);

  const webServices = [
    "Corporate Website Development",
    "Business Website Development",
    "WordPress Development",
    "Custom Website Development",
    "E-commerce Website Development",
    "Landing Page Development",
    "Responsive Web Design",
    "Custom Web Applications",
    "Website Redesign",
    "Website Maintenance & Support"
  ];

  const mobileServices = [
    "Android App Development",
    "iOS App Development",
    "Cross-Platform App Development",
    "E-commerce Mobile Apps",
    "Booking & Appointment Apps",
    "Delivery & Logistics Apps",
    "Education & Learning Apps",
    "Customer Applications",
    "Business Applications",
    "Marketplace Applications",
    "On-Demand Applications",
    "Custom Mobile Applications"
  ];

  // Colorful default states for Web Studio on light background (Left)
  const getWebItemStyles = (idx: number, isHovered: boolean) => {
    const themes = [
      { bg: "bg-indigo-50 border-indigo-200 text-indigo-700", hover: "bg-indigo-100 border-indigo-400 text-indigo-850 shadow-sm", num: "text-indigo-500" },
      { bg: "bg-violet-50 border-violet-200 text-violet-700", hover: "bg-violet-100 border-violet-400 text-violet-850 shadow-sm", num: "text-violet-500" },
      { bg: "bg-purple-50 border-purple-200 text-purple-700", hover: "bg-purple-100 border-purple-400 text-purple-850 shadow-sm", num: "text-purple-500" },
      { bg: "bg-blue-50 border-blue-200 text-blue-700", hover: "bg-blue-100 border-blue-400 text-blue-850 shadow-sm", num: "text-blue-500" },
      { bg: "bg-emerald-50 border-emerald-200 text-emerald-700", hover: "bg-emerald-100 border-emerald-400 text-emerald-850 shadow-sm", num: "text-emerald-500" },
      { bg: "bg-teal-50 border-teal-200 text-teal-700", hover: "bg-teal-100 border-teal-400 text-teal-850 shadow-sm", num: "text-teal-550" },
      { bg: "bg-cyan-50 border-cyan-200 text-cyan-700", hover: "bg-cyan-100 border-cyan-400 text-cyan-850 shadow-sm", num: "text-cyan-500" },
      { bg: "bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700", hover: "bg-fuchsia-100 border-fuchsia-400 text-fuchsia-850 shadow-sm", num: "text-fuchsia-500" },
      { bg: "bg-rose-50 border-rose-200 text-rose-700", hover: "bg-rose-100 border-rose-400 text-rose-850 shadow-sm", num: "text-rose-500" },
      { bg: "bg-amber-50 border-amber-200 text-amber-800", hover: "bg-amber-100 border-amber-450 text-amber-900 shadow-sm", num: "text-amber-600" }
    ];
    const theme = themes[idx % themes.length];
    return {
      card: isHovered ? theme.hover : `${theme.bg} border shadow-2xs`,
      num: theme.num
    };
  };

  // Colorful default states for Mobile Studio on off-white background (Right)
  const getMobItemStyles = (idx: number, isHovered: boolean) => {
    const themes = [
      { bg: "bg-pink-50 border-pink-200 text-pink-700", hover: "bg-pink-100 border-pink-400 text-pink-850 shadow-sm", num: "text-pink-500" },
      { bg: "bg-emerald-50 border-emerald-200 text-emerald-700", hover: "bg-emerald-100 border-emerald-400 text-emerald-850 shadow-sm", num: "text-emerald-500" },
      { bg: "bg-indigo-50 border-indigo-200 text-indigo-700", hover: "bg-indigo-100 border-indigo-400 text-indigo-850 shadow-sm", num: "text-indigo-500" },
      { bg: "bg-sky-50 border-sky-200 text-sky-700", hover: "bg-sky-100 border-sky-400 text-sky-850 shadow-sm", num: "text-sky-500" },
      { bg: "bg-amber-50 border-amber-200 text-amber-800", hover: "bg-amber-100 border-amber-450 text-amber-900 shadow-sm", num: "text-amber-600" },
      { bg: "bg-rose-50 border-rose-200 text-rose-700", hover: "bg-rose-100 border-rose-400 text-rose-850 shadow-sm", num: "text-rose-500" },
      { bg: "bg-violet-50 border-violet-200 text-violet-700", hover: "bg-violet-100 border-violet-400 text-violet-850 shadow-sm", num: "text-violet-500" },
      { bg: "bg-teal-50 border-teal-200 text-teal-700", hover: "bg-teal-100 border-teal-400 text-teal-850 shadow-sm", num: "text-teal-550" },
      { bg: "bg-cyan-50 border-cyan-200 text-cyan-700", hover: "bg-cyan-100 border-cyan-400 text-cyan-850 shadow-sm", num: "text-cyan-500" },
      { bg: "bg-orange-50 border-orange-200 text-orange-700", hover: "bg-orange-100 border-orange-400 text-orange-850 shadow-sm", num: "text-orange-600" },
      { bg: "bg-purple-50 border-purple-200 text-purple-700", hover: "bg-purple-100 border-purple-400 text-purple-850 shadow-sm", num: "text-purple-500" },
      { bg: "bg-lime-50 border-lime-200 text-lime-800", hover: "bg-lime-100 border-lime-400 text-lime-900 shadow-sm", num: "text-lime-650" }
    ];
    const theme = themes[idx % themes.length];
    return {
      card: isHovered ? theme.hover : `${theme.bg} border shadow-2xs`,
      num: theme.num
    };
  };

  return (
    <section className="relative font-sans overflow-hidden select-none border-t border-slate-100 bg-white">

      <div className="flex flex-col lg:flex-row min-h-[780px]">

        {/* ===== LEFT: Web Development ===== */}
        <div className="flex-1 relative bg-[#faf9ff] text-slate-800 flex flex-col overflow-hidden">

          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-indigo-100/70 blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-60 h-60 rounded-full bg-purple-50/90 blur-[70px] pointer-events-none" />

          {/* Giant watermark number */}
          <div className="absolute bottom-8 right-6 text-[180px] sm:text-[220px] font-black text-slate-900/[0.03] leading-none pointer-events-none select-none tracking-tighter">
            01
          </div>

          {/* Content */}
          <div className="relative z-10 px-10 sm:px-14 pt-16 pb-6 space-y-6">

            {/* Top badge row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-[9px] font-bold text-indigo-600 uppercase tracking-widest">
                <Laptop className="w-3.5 h-3.5" />
                <span>Web Engineering</span>
              </div>
              <span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest">Studio // 01</span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-3xl sm:text-[2.6rem] font-black uppercase tracking-tight leading-tight text-[#1e1b4b]">
                Website<br />
                <span className="text-indigo-600">Development</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium mt-1">Company in Hyderabad</p>
            </div>

            {/* Stat strip */}
            <div className="flex items-center gap-6 pt-1">
              <div className="space-y-0.5">
                <p className="text-2xl font-black text-[#1e1b4b]">{webServices.length}+</p>
                <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Services</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="space-y-0.5">
                <p className="text-2xl font-black text-indigo-600">100+</p>
                <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Projects Done</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <p className="text-slate-400 text-xs font-light leading-relaxed max-w-sm">
              We create responsive, professional and SEO-friendly websites tailored to your business requirements — combining design, performance and search-friendly architecture.
            </p>
          </div>

          {/* Services grid */}
          <div className="relative z-10 px-10 sm:px-14 pb-10 mt-2">
            <div className="grid grid-cols-2 gap-2">
              {webServices.map((svc, idx) => {
                const styles = getWebItemStyles(idx, hoveredWeb === idx);
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredWeb(idx)}
                    onMouseLeave={() => setHoveredWeb(null)}
                    className={`relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all duration-200 cursor-default overflow-hidden ${styles.card}`}
                  >
                    <span className={`text-[8px] font-mono shrink-0 ${styles.num}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-semibold leading-tight">{svc}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <button className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest transition-colors duration-200 group cursor-pointer">
                <span>Explore Web Studio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Center divider */}
        <div className="hidden lg:flex flex-col items-center justify-center w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent shrink-0" />

        {/* ===== RIGHT: Mobile App ===== */}
        <div className="flex-1 relative bg-[#fdfcff] text-slate-800 flex flex-col overflow-hidden">

          {/* Ambient glow */}
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-pink-100/70 blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-60 h-60 rounded-full bg-rose-50/90 blur-[70px] pointer-events-none" />

          {/* Giant watermark number */}
          <div className="absolute bottom-8 left-6 text-[180px] sm:text-[220px] font-black text-slate-900/[0.03] leading-none pointer-events-none select-none tracking-tighter">
            02
          </div>

          {/* Content */}
          <div className="relative z-10 px-10 sm:px-14 pt-16 pb-6 space-y-6">

            {/* Top badge row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[9px] font-bold text-pink-600 uppercase tracking-widest">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile Engineering</span>
              </div>
              <span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest">Studio // 02</span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-3xl sm:text-[2.6rem] font-black uppercase tracking-tight leading-tight text-[#1e1b4b]">
                Mobile App<br />
                <span className="text-pink-600">Development</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium mt-1">Company in Hyderabad</p>
            </div>

            {/* Stat strip */}
            <div className="flex items-center gap-6 pt-1">
              <div className="space-y-0.5">
                <p className="text-2xl font-black text-[#1e1b4b]">{mobileServices.length}+</p>
                <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Services</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="space-y-0.5">
                <p className="text-2xl font-black text-pink-600">50+</p>
                <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Apps Launched</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <p className="text-slate-400 text-xs font-light leading-relaxed max-w-sm">
              Mobile applications create convenient digital experiences for customers, employees and partners. We develop apps around your product vision, business model, and user needs.
            </p>
          </div>

          {/* Services grid */}
          <div className="relative z-10 px-10 sm:px-14 pb-10 mt-2">
            <div className="grid grid-cols-2 gap-2">
              {mobileServices.map((svc, idx) => {
                const styles = getMobItemStyles(idx, hoveredMob === idx);
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredMob(idx)}
                    onMouseLeave={() => setHoveredMob(null)}
                    className={`relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all duration-200 cursor-default overflow-hidden ${styles.card}`}
                  >
                    <span className={`text-[8px] font-mono shrink-0 ${styles.num}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-semibold leading-tight">{svc}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <button className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold uppercase tracking-widest transition-colors duration-200 group cursor-pointer">
                <span>Explore Mobile Studio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
