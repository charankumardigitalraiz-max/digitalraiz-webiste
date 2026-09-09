"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";
import { pdfArchitectureContent, pdfClosingConclusion } from "@/data/cybersecurityData";
import { Layers, ShieldCheck, CheckCircle2, ArrowRight, Lock, Cloud, Cpu, FileCheck } from "lucide-react";

export default function CybersecurityArchitectureSection() {
  const iconList = [Layers, FileCheck, Cpu, Cloud];

  return (
    <section className="py-12 sm:py-16 bg-white relative border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-12 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9.5px] font-mono font-bold text-pink-600 uppercase tracking-widest shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-pink-500" />
              Architectural Security Discipline
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Designing Digital Environments Where{" "}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Security Is Part of the Architecture
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
              {pdfArchitectureContent.lead}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Architectural Protection Pillars Grid */}
        <ScrollReveal direction="up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pdfArchitectureContent.pillars.map((pillar, idx) => {
              const PIcon = iconList[idx % iconList.length];
              return (
                <div
                  key={idx}
                  className="group bg-slate-50/70 border border-slate-200/90 hover:bg-white hover:border-pink-300 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 space-y-3.5 text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:border-transparent group-hover:text-white flex items-center justify-center shrink-0 shadow-2xs transition-all">
                      <PIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Goal Banner */}
        <ScrollReveal direction="up" delay={150}>
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-mono font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
              Strategic Objective
            </div>
            <p className="text-base sm:text-lg font-bold text-white max-w-2xl mx-auto leading-snug">
              "{pdfArchitectureContent.closingGoal}"
            </p>
          </div>
        </ScrollReveal>

        {/* PDF Page 4 Architectural Conclusion Card */}
        <ScrollReveal direction="up" delay={200}>
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm text-center max-w-4xl mx-auto space-y-5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-pink-600">
              The Digital Raiz Security Guarantee
            </h3>
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed max-w-3xl mx-auto">
              "{pdfClosingConclusion.statement}"
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openContactModal("Cybersecurity Services", "Architectural Security Assessment")}
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-600 hover:from-pink-700 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
              >
                <span>Request Security Architecture Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
