"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";
import { pdfCybersecurityCapabilities, pdfAttackSurfaceContent } from "@/data/cybersecurityData";
import { ShieldCheck, ArrowRight, Sparkles, AlertCircle } from "lucide-react";

export default function CybersecurityAttackSurfaceSection() {
  return (
    <section className="py-12 sm:py-16 bg-white relative border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-12 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9.5px] font-mono font-bold text-pink-600 uppercase tracking-widest shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-pink-500" />
              Strategic Security Perspective
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Turning the Attack Surface Into a{" "}
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-violet-600 bg-clip-text text-transparent">
                Strategic Security Perspective
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
              Every digital environment has an attack surface. The challenge is knowing where exposure exists before someone else discovers it.
            </p>
          </div>
        </ScrollReveal>

        {/* Detailed Paragraph Breakdown Box */}
        <ScrollReveal direction="up" delay={100}>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 text-left max-w-4xl mx-auto">
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              <strong className="text-slate-900 font-bold">Digital Raiz</strong> helps organizations examine their technology landscape through structured cybersecurity assessment, vulnerability assessment and security testing. We evaluate applications, systems and digital environments to identify weaknesses that could affect confidentiality, integrity, availability or user trust.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our <strong className="text-slate-800 font-semibold">application security services</strong> cover modern web and mobile applications, helping identify security concerns across application behaviour, authentication, authorization, data handling, APIs and connected services. We also consider the relationships between applications and the infrastructure supporting them, because security rarely ends at the application layer.
            </p>
          </div>
        </ScrollReveal>

        {/* 9 Core Cybersecurity Capabilities Grid */}
        <ScrollReveal direction="up" delay={150}>
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span>Our 9 Core Cybersecurity Capabilities</span>
              </h3>
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-pink-600 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full">
                Complete Coverage
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pdfCybersecurityCapabilities.map((cap, i) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={i}
                    className="group bg-white border border-slate-200/90 hover:border-pink-300 rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1 flex flex-col justify-between space-y-3 text-left relative overflow-hidden"
                  >
                    {/* Top Laser Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-2xs">
                          <CapIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-pink-700 bg-pink-50 border border-pink-100 px-2.5 py-0.5 rounded-full">
                          {cap.category}
                        </span>
                      </div>

                      <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors pt-1">
                        {cap.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed font-normal">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-pink-600">
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
          <div className="rounded-2xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden text-left max-w-4xl mx-auto space-y-3">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-pink-200 shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
                  "{pdfAttackSurfaceContent.quote.headline}"
                </h3>
                <p className="text-pink-100 text-xs sm:text-sm leading-relaxed font-normal">
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
