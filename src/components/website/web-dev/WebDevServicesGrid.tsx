"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";
import { developedServices } from "@/data/webDevData";

export default function WebDevServicesGrid() {
  return (
    <section id="web-services-grid" className="py-10 sm:py-10 bg-white relative ">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-8">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-pink-500" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developedServices.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <ScrollReveal key={idx} delay={(idx % 3) * 60} direction="up" className="h-full">
                    <div
                      onClick={() => openContactModal(`Web Dev: ${svc.title}`)}
                      className="group relative bg-white border border-slate-200/80 hover:border-pink-300/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1.5 h-full flex flex-col justify-between space-y-5 cursor-pointer overflow-hidden"
                    >
                      {/* Top Accent Line on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Subtle Ambient Background Glow on Hover */}
                      <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-pink-400/10 via-violet-500/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                      <div className="space-y-4 relative z-10">
                        {/* Header: Icon Badge & Index Number */}
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-xl bg-pink-50/80 border border-pink-100/80 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:border-transparent group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:shadow-md group-hover:shadow-pink-500/25 shrink-0">
                            <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-pink-500 transition-colors">
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

                      {/* Footer Action CTA */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-pink-600 transition-colors">
                          Explore Capability
                        </span>
                        <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 group-hover:bg-pink-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs">
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
