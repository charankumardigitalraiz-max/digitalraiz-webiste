"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";

export default function AiHero() {
  return (
    <section className="relative py-10 sm:py-10 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-purple-50/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-10 items-center">

        {/* Left Content Column */}
        <div className="space-y-5 flex-grow max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-mono font-bold uppercase tracking-widest text-purple-600 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            AI & Machine Learning
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            AI, Machine Learning & Generative AI Solutions <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">for Intelligent Business</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            Artificial Intelligence is moving beyond experimentation and becoming part of how modern businesses operate, make decisions and create digital experiences. Digital Raiz develops practical AI, Machine Learning and Generative AI solutions that connect emerging technology with meaningful business opportunities.
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <button
              onClick={() => openContactModal("Artificial Intelligence")}
              className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-[10px] font-black uppercase tracking-widest shadow-md hover:scale-[1.02] transition-all duration-300 active:scale-95 group border-0"
            >
              <span>Build AI Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Right Visual AI Architecture Image Stage */}
        <div className="w-full lg:w-[540px] shrink-0">
          <img
            src="/cloud-and-devops/ai-ml-genai.png"
            alt="AI Machine Learning & Generative AI Architecture"
            className="w-full h-auto object-contain select-none pointer-events-none"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

      </div>
    </section>
  );
}
