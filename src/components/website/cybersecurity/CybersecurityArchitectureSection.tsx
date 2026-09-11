"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";
import { pdfArchitectureContent, pdfClosingConclusion } from "@/data/cybersecurityData";
import { Layers, ShieldCheck, ArrowRight, Cloud, Cpu, FileCheck, Sparkles } from "lucide-react";

const pillarThemes = [
  {
    bg: "bg-gradient-to-br from-pink-50/90 via-rose-50/50 to-white",
    border: "border-pink-200/90 hover:border-pink-400",
    iconBg: "bg-pink-600 text-white shadow-pink-500/20",
    badgeBg: "bg-pink-100/90 text-pink-700 border-pink-200",
    titleColor: "text-slate-900 group-hover:text-pink-600",
    hoverShadow: "hover:shadow-pink-500/15",
  },
  {
    bg: "bg-gradient-to-br from-violet-50/90 via-purple-50/50 to-white",
    border: "border-violet-200/90 hover:border-violet-400",
    iconBg: "bg-violet-600 text-white shadow-violet-500/20",
    badgeBg: "bg-violet-100/90 text-violet-700 border-violet-200",
    titleColor: "text-slate-900 group-hover:text-violet-600",
    hoverShadow: "hover:shadow-violet-500/15",
  },
  {
    bg: "bg-gradient-to-br from-indigo-50/90 via-blue-50/50 to-white",
    border: "border-indigo-200/90 hover:border-indigo-400",
    iconBg: "bg-indigo-600 text-white shadow-indigo-500/20",
    badgeBg: "bg-indigo-100/90 text-indigo-700 border-indigo-200",
    titleColor: "text-slate-900 group-hover:text-indigo-600",
    hoverShadow: "hover:shadow-indigo-500/15",
  },
  {
    bg: "bg-gradient-to-br from-sky-50/90 via-cyan-50/50 to-white",
    border: "border-sky-200/90 hover:border-sky-400",
    iconBg: "bg-sky-600 text-white shadow-sky-500/20",
    badgeBg: "bg-sky-100/90 text-sky-700 border-sky-200",
    titleColor: "text-slate-900 group-hover:text-sky-600",
    hoverShadow: "hover:shadow-sky-500/15",
  },
];

export default function CybersecurityArchitectureSection() {
  const iconList = [Layers, FileCheck, Cpu, Cloud];

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-violet-50/50 via-pink-50/20 to-transparent pointer-events-none -z-10" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-16 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-pink-600" />
              Architectural Security Discipline
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Designing Digital Environments Where{" "}
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent">
                Security Is Part of the Architecture
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
              {pdfArchitectureContent.lead}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Architectural Protection Pillars Grid with Colors */}
        <ScrollReveal direction="up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pdfArchitectureContent.pillars.map((pillar, idx) => {
              const PIcon = iconList[idx % iconList.length];
              const theme = pillarThemes[idx % pillarThemes.length];
              const paddedIndex = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={idx}
                  className={`group ${theme.bg} ${theme.border} rounded-3xl p-7 sm:p-8 transition-all duration-300 shadow-md ${theme.hoverShadow} hover:-translate-y-1 space-y-4 text-left relative overflow-hidden`}
                >
                  {/* Top Laser Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-11 h-11 rounded-2xl ${theme.iconBg} flex items-center justify-center shrink-0 shadow-md`}>
                        <PIcon className="w-5.5 h-5.5" />
                      </div>
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${theme.badgeBg} px-2.5 py-0.5 rounded-md inline-block border`}>
                        Pillar {paddedIndex}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
                      {paddedIndex} / 04
                    </span>
                  </div>

                  <h3 className={`text-base sm:text-lg font-extrabold ${theme.titleColor} transition-colors leading-snug pt-1`}>
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Strategic Objective & Security Guarantee 2-Column Row */}
        <ScrollReveal direction="up" delay={150}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* Strategic Objective Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-pink-600 via-rose-600 to-violet-700 text-white p-8 sm:p-10 shadow-2xl shadow-pink-500/20 overflow-hidden text-left border border-pink-400/30 flex flex-col justify-between space-y-6">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest backdrop-blur-md shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-pink-200" />
                  Strategic Objective
                </div>

                <p className="text-base sm:text-lg lg:text-xl font-black text-white leading-relaxed">
                  "{pdfArchitectureContent.closingGoal}"
                </p>
              </div>
            </div>

            {/* Security Guarantee & Audit CTA Card */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-white to-pink-50/30 border border-slate-200/90 p-8 sm:p-10 shadow-lg text-left flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600">
                  <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                  The Digital Raiz Security Guarantee
                </div>
                
                <p className="text-sm sm:text-base font-extrabold text-slate-800 leading-relaxed">
                  "{pdfClosingConclusion.statement}"
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openContactModal("Cybersecurity Services", "Architectural Security Assessment")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-600 hover:from-pink-700 hover:to-indigo-700 text-white text-[11px] font-black uppercase tracking-widest shadow-lg shadow-pink-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer border-0 min-h-[44px]"
                >
                  <span>Request Security Architecture Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </ScrollReveal>


      </div>
    </section>
  );
}

