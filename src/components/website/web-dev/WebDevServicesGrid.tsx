"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";
import { developedServices } from "@/data/webDevData";

export default function WebDevServicesGrid() {
  return (
    <section id="web-services-grid" className="py-12 sm:py-16 bg-white relative border-b border-slate-100">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-100/20 via-violet-100/20 to-indigo-100/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-10 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-pink-500 animate-spin-slow" />
              Tailored Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Website Development Services in Hyderabad{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Built Around Your Business
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
              Every business has a different audience, identity and way of operating. Our website development services in Hyderabad are planned around your specific requirements rather than forcing your business into a standard template.
            </p>
          </div>
        </ScrollReveal>

        {/* 3x3 Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {developedServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <ScrollReveal key={idx} delay={(idx % 3) * 80} direction="up" className="h-full">
                <div
                  onClick={() => openContactModal("Web Development", `Web Dev: ${svc.title}`)}
                  className="group relative bg-white border border-slate-200/80 hover:border-pink-300/90 rounded-2xl p-6 sm:p-7 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2 h-full flex flex-col justify-between space-y-5 cursor-pointer overflow-hidden"
                >
                  {/* Top Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Ambient Background Glow on Hover */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-pink-400/15 via-violet-500/15 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    {/* Header: Icon Badge & Index Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-13 h-13 rounded-2xl bg-pink-50/90 border border-pink-100/90 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:border-transparent group-hover:text-white flex items-center justify-center transition-all duration-500 shadow-xs group-hover:shadow-lg group-hover:shadow-pink-500/25 group-hover:scale-105 shrink-0">
                        <Icon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-pink-600 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                        {svc.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
