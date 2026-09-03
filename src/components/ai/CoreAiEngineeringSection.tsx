"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { aiPillars } from "@/data/aiData";

export default function CoreAiEngineeringSection() {
  return (
    <section className="py-10 sm:py-10 bg-gradient-to-b from-white via-purple-50/20 to-white text-slate-900 relative overflow-hidden">
      {/* Dynamic Background Architectural Dot Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full space-y-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-mono font-bold uppercase tracking-widest text-purple-600 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            Core AI Engineering
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Engineering Intelligence with{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              AI & Machine Learning
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            Digital Raiz develops AI and Machine Learning solutions that help businesses make sense of data, automate processes and build smarter digital products. Our capabilities include predictive analytics, intelligent recommendations, forecasting, personalization, classification and decision-support systems. We integrate these capabilities into business applications and digital platforms, helping organizations move from conventional workflows toward more intelligent and responsive systems.
          </p>
        </div>

        {/* Main 2-Column Split Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Left Visual AI Architecture Image Stage (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <div className="relative w-full max-w-[480px] rounded-2xl bg-white p-2  group hover:shadow-xl transition-all duration-300">
              <div className="relative w-full rounded-xl overflow-hidden  flex items-center justify-center">
                <img
                  src="/artificial-intelligence/ai_llm_processing_core_pure_white_square.png"
                  alt="LLM RAG Vector Database & AI Engineering Architecture"
                  className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500 select-none pointer-events-none"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core AI Capability Cards (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiPillars.map((pillar, i) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={i}
                  className="group relative p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
                >
                  <div className="space-y-4">
                    {/* Top Bar: Icon Badge & Step Counter */}
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${pillar.gradient} flex items-center justify-center text-white shadow-md shadow-purple-500/15 group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-extrabold text-slate-300 group-hover:text-purple-600 transition-colors">
                        {pillar.step}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-bold text-slate-900 tracking-tight group-hover:text-purple-600 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
