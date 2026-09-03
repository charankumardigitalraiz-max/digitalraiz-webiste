"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { aiTechMatrix } from "@/data/aiData";

export default function GenerativeAiInnovationsSection() {
  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full space-y-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            Generative Innovations
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Generative AI for the Next Generation of{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            Generative AI is opening a new layer of interaction between businesses, people and information. Digital Raiz builds Generative AI solutions including intelligent assistants, AI-powered search, conversational experiences, document intelligence and automated content workflows. We also integrate AI capabilities into websites, web applications and mobile applications, creating digital experiences that can understand context, respond intelligently and deliver more relevant interactions.
          </p>
        </div>

        {/* 6 Tech Matrix Ecosystem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTechMatrix.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-pink-300 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start overflow-hidden"
              >
                {/* Subtle Hover Ambient Glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center text-white shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-pink-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Individual Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/80 group-hover:border-pink-200/80 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
