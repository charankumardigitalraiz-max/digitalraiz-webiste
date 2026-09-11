"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { pdfCybersecurityCapabilities, pdfAttackSurfaceContent } from "@/data/cybersecurityData";
import { ShieldCheck, ArrowRight, Sparkles, Quote, Search, Layers } from "lucide-react";

const cardThemes = [
  {
    bg: "bg-gradient-to-br from-pink-50/90 via-rose-50/50 to-white",
    border: "border-pink-200/90 hover:border-pink-400",
    badgeBg: "bg-pink-100/90 text-pink-700 border-pink-200",
    iconBg: "bg-pink-600 text-white shadow-pink-500/20",
    accent: "text-pink-600 group-hover:text-pink-700",
    hoverShadow: "hover:shadow-pink-500/15",
  },
  {
    bg: "bg-gradient-to-br from-violet-50/90 via-purple-50/50 to-white",
    border: "border-violet-200/90 hover:border-violet-400",
    badgeBg: "bg-violet-100/90 text-violet-700 border-violet-200",
    iconBg: "bg-violet-600 text-white shadow-violet-500/20",
    accent: "text-violet-600 group-hover:text-violet-700",
    hoverShadow: "hover:shadow-violet-500/15",
  },
  {
    bg: "bg-gradient-to-br from-indigo-50/90 via-blue-50/50 to-white",
    border: "border-indigo-200/90 hover:border-indigo-400",
    badgeBg: "bg-indigo-100/90 text-indigo-700 border-indigo-200",
    iconBg: "bg-indigo-600 text-white shadow-indigo-500/20",
    accent: "text-indigo-600 group-hover:text-indigo-700",
    hoverShadow: "hover:shadow-indigo-500/15",
  },
  {
    bg: "bg-gradient-to-br from-sky-50/90 via-cyan-50/50 to-white",
    border: "border-sky-200/90 hover:border-sky-400",
    badgeBg: "bg-sky-100/90 text-sky-700 border-sky-200",
    iconBg: "bg-sky-600 text-white shadow-sky-500/20",
    accent: "text-sky-600 group-hover:text-sky-700",
    hoverShadow: "hover:shadow-sky-500/15",
  },
  {
    bg: "bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-white",
    border: "border-emerald-200/90 hover:border-emerald-400",
    badgeBg: "bg-emerald-100/90 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-600 text-white shadow-emerald-500/20",
    accent: "text-emerald-600 group-hover:text-emerald-700",
    hoverShadow: "hover:shadow-emerald-500/15",
  },
  {
    bg: "bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-white",
    border: "border-amber-200/90 hover:border-amber-400",
    badgeBg: "bg-amber-100/90 text-amber-800 border-amber-200",
    iconBg: "bg-amber-600 text-white shadow-amber-500/20",
    accent: "text-amber-600 group-hover:text-amber-700",
    hoverShadow: "hover:shadow-amber-500/15",
  },
  {
    bg: "bg-gradient-to-br from-fuchsia-50/90 via-pink-50/50 to-white",
    border: "border-fuchsia-200/90 hover:border-fuchsia-400",
    badgeBg: "bg-fuchsia-100/90 text-fuchsia-700 border-fuchsia-200",
    iconBg: "bg-fuchsia-600 text-white shadow-fuchsia-500/20",
    accent: "text-fuchsia-600 group-hover:text-fuchsia-700",
    hoverShadow: "hover:shadow-fuchsia-500/15",
  },
  {
    bg: "bg-gradient-to-br from-rose-50/90 via-red-50/50 to-white",
    border: "border-rose-200/90 hover:border-rose-400",
    badgeBg: "bg-rose-100/90 text-rose-700 border-rose-200",
    iconBg: "bg-rose-600 text-white shadow-rose-500/20",
    accent: "text-rose-600 group-hover:text-rose-700",
    hoverShadow: "hover:shadow-rose-500/15",
  },
  {
    bg: "bg-gradient-to-br from-blue-50/90 via-indigo-50/50 to-white",
    border: "border-blue-200/90 hover:border-blue-400",
    badgeBg: "bg-blue-100/90 text-blue-700 border-blue-200",
    iconBg: "bg-blue-600 text-white shadow-blue-500/20",
    accent: "text-blue-600 group-hover:text-blue-700",
    hoverShadow: "hover:shadow-blue-500/15",
  },
];

export default function CybersecurityAttackSurfaceSection() {
  return (
    <section className="py-10 sm:py-10 bg-white relative overflow-hidden">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-pink-50/60 via-violet-50/30 to-transparent pointer-events-none -z-10" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-16 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-pink-600" />
              Strategic Security Perspective
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Turning the Attack Surface Into a{" "}
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent">
                Strategic Security Perspective
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
              Every digital environment has an attack surface. The challenge is knowing where exposure exists before someone else discovers it.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Staggered Interactive Cards for Intro Paragraphs */}
        <ScrollReveal direction="up" delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-pink-50/70 via-rose-50/30 to-white border border-pink-200/80 hover:border-pink-400 rounded-3xl p-6 sm:p-8 shadow-lg shadow-pink-500/5 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 space-y-4 text-left relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-bold shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform">
                  <Search className="w-5.5 h-5.5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-pink-700 bg-pink-100/90 border border-pink-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  Phase 01 — Assessment
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                <strong className="text-slate-900 font-bold">Digital Raiz</strong> helps organizations examine their technology landscape through structured cybersecurity assessment, vulnerability assessment and security testing. We evaluate applications, systems and digital environments to identify weaknesses that could affect confidentiality, integrity, availability or user trust.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-violet-50/70 via-purple-50/30 to-white border border-violet-200/80 hover:border-violet-400 rounded-3xl p-6 sm:p-8 shadow-lg shadow-violet-500/5 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 space-y-4 text-left relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-violet-600 text-white flex items-center justify-center font-bold shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
                  <Layers className="w-5.5 h-5.5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-violet-700 bg-violet-100/90 border border-violet-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  Phase 02 — Scope
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                Our <strong className="text-slate-800 font-semibold">application security services</strong> cover modern web and mobile applications, helping identify security concerns across application behaviour, authentication, authorization, data handling, APIs and connected services. We also consider the relationships between applications and the infrastructure supporting them, because security rarely ends at the application layer.
              </p>
            </div>

          </div>
        </ScrollReveal>

        {/* 9 Core Cybersecurity Capabilities Grid */}
        <ScrollReveal direction="up" delay={150}>
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-3">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-pink-600" />
                <span>Our 9 Core Cybersecurity Capabilities</span>
              </h3>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-600 bg-pink-50 border border-pink-100 px-3.5 py-1.5 rounded-full self-start sm:self-center shadow-2xs">
                Complete Coverage
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfCybersecurityCapabilities.map((cap, i) => {
                const CapIcon = cap.icon;
                const paddedIndex = String(i + 1).padStart(2, "0");
                const theme = cardThemes[i % cardThemes.length];

                return (
                  <div
                    key={i}
                    className={`group ${theme.bg} ${theme.border} rounded-2xl p-6 transition-all duration-300 shadow-md ${theme.hoverShadow} hover:-translate-y-1 flex flex-col justify-between space-y-4 text-left relative overflow-hidden`}
                  >
                    {/* Top Accent Gradient Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`w-11 h-11 rounded-2xl ${theme.iconBg} flex items-center justify-center transition-all duration-300 shrink-0 shadow-md`}>
                          <CapIcon className="w-5.5 h-5.5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
                          {paddedIndex}
                        </span>
                      </div>

                      <div>
                        <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${theme.badgeBg} px-2.5 py-0.5 rounded-md inline-block border`}>
                          {cap.category}
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors pt-2">
                          {cap.title}
                        </h4>
                      </div>

                      <p className="text-slate-600 text-xs leading-relaxed font-normal">
                        {cap.desc}
                      </p>
                    </div>

                    <div className={`pt-3 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-mono font-bold ${theme.accent}`}>
                      <span>Explore Protection</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Highlight Quote Box from PDF */}
        <ScrollReveal direction="up" delay={200}>
          <div className="relative rounded-3xl bg-gradient-to-r from-pink-600 via-rose-600 to-violet-700 text-white p-8 sm:p-12 shadow-2xl shadow-pink-500/20 overflow-hidden text-left max-w-5xl mx-auto border border-pink-400/30">
            {/* Ambient Lighting Orbs & Background Decorative Quote Icon */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 text-white/5 pointer-events-none select-none">
              <Quote className="w-64 h-64 rotate-12" />
            </div>

            <div className="relative z-10 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-100 backdrop-blur-md shadow-2xs">
                <Quote className="w-3.5 h-3.5 text-pink-200" />
                Strategic Insight
              </div>

              <div className="space-y-3 max-w-4xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
                  "{pdfAttackSurfaceContent.quote.headline}"
                </h3>
                <p className="text-pink-100 text-xs sm:text-base leading-relaxed font-normal opacity-95">
                  {pdfAttackSurfaceContent.quote.subtext}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>


      </div>
    </section>
  );
}





