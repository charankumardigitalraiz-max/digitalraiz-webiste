"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ChevronLeft, ChevronRight, Globe, ExternalLink, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ThreeDShowcase = dynamic(() => import("@/components/ThreeDShowcase"), {
  ssr: false,
});

interface WebDevPortfolioShowcaseProps {
  webPortfolio: any[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused: (paused: boolean) => void;
  activeWebProject: any;
}

export default function WebDevPortfolioShowcase({
  webPortfolio,
  activeIndex,
  setActiveIndex,
  setIsPaused,
  activeWebProject
}: WebDevPortfolioShowcaseProps) {
  return (
    <section id="web-showcase" className="py-10 sm:py-14 bg-white relative ">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-8">
            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest block">Featured Works</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Production Web Applications</h2>
                <p className="text-slate-600 text-xs font-normal">Explore real-world web implementations and corporate portals engineered by Digital Raiz.</p>
              </div>
            </ScrollReveal>

            {/* Project Navigator Tabs with Logos */}
            <ScrollReveal direction="up" delay={100}>
              <div className="w-full space-y-4">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden p-2 sm:p-3 space-y-3">

                  {/* Header Bar */}
                  <div className="flex items-center justify-between gap-4 px-3 py-2 border-b border-slate-100">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1.5">
                        {activeWebProject?.logo ? (
                          <img src={activeWebProject.logo} alt={activeWebProject.name} className="w-full h-full object-contain filter brightness-200" />
                        ) : (
                          <Globe className="w-4 h-4 text-pink-400" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest leading-none">
                            {activeWebProject?.category}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:inline-block" />
                          <span className="hidden sm:inline-flex items-center gap-1 text-[8px] font-mono font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live Website
                          </span>
                        </div>
                        <div className="text-sm sm:text-base font-extrabold text-[#1e1b4b] uppercase tracking-tight truncate mt-0.5">
                          {activeWebProject?.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => setActiveIndex((prev) => (prev === 0 ? webPortfolio.length - 1 : prev - 1))}
                        className="w-8 h-8 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-pink-600 transition-all active:scale-90 shadow-2xs cursor-pointer"
                        aria-label="Previous Project"
                        title="Previous Project"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <div className="text-[11px] font-mono font-black text-slate-400 tabular-nums px-1.5 min-w-[42px] text-center">
                        <span className="text-pink-600">{String(activeIndex + 1).padStart(2, '0')}</span>
                        <span className="text-slate-300">/</span>
                        <span>{String(webPortfolio.length).padStart(2, '0')}</span>
                      </div>

                      <button
                        onClick={() => setActiveIndex((prev) => (prev === webPortfolio.length - 1 ? 0 : prev + 1))}
                        className="w-8 h-8 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-pink-600 transition-all active:scale-90 shadow-2xs cursor-pointer"
                        aria-label="Next Project"
                        title="Next Project"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Tab Strip with Brand Logos */}
                  <div className="relative group">
                    <div className="flex flex-row overflow-x-auto gap-2 p-1 no-scrollbar flex-nowrap scroll-smooth">
                      {webPortfolio.map((app, idx) => {
                        const isActive = activeIndex === idx;
                        return (
                          <button
                            key={idx}
                            id={`web-tab-${idx}`}
                            onClick={() => setActiveIndex(idx)}
                            title={app.name}
                            className={`relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl shrink-0 transition-all duration-300 select-none group/tab cursor-pointer ${isActive
                              ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white shadow-md shadow-pink-500/20 border-transparent scale-[1.02]"
                              : "bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-2xs hover:shadow-xs"
                              }`}
                          >
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${isActive
                              ? "bg-white/20 border-white/30 text-white"
                              : "bg-slate-50 text-slate-500 group-hover/tab:text-pink-600 border border-slate-200/70"
                              }`}>
                              {app.logo ? (
                                <img src={app.logo} alt={app.name} className="w-4 h-4 object-contain" />
                              ) : (
                                <Globe className="w-3.5 h-3.5" />
                              )}
                            </div>

                            <div className="flex flex-col text-left">
                              <span className="text-xs font-bold tracking-tight whitespace-nowrap">
                                {app.name}
                              </span>
                            </div>

                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse ml-0.5 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

            {/* 3D Desktop Showcase & Project Details Grid */}
            <ScrollReveal direction="up" delay={150}>
              <div className="w-full pb-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  <div className="lg:col-span-6 w-full h-[360px] sm:h-[400px]">
                    <ThreeDShowcase
                      projects={webPortfolio}
                      activeIndex={activeIndex}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    />
                  </div>

                  <div className="lg:col-span-6 space-y-5 flex flex-col justify-between h-full py-2">
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200/60">
                          {activeWebProject?.category}
                        </span>
                        <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-emerald-500" />
                          Live Production
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {activeWebProject?.name}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed font-sans">
                        {activeWebProject?.desc}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block">Project Tech Stack</span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeWebProject?.tech?.map((technology: string, idx: number) => (
                            <span
                              key={idx}
                              className="text-[9px] font-mono font-bold uppercase tracking-wider bg-white border border-slate-200/60 rounded-lg px-2.5 py-1 text-slate-600 hover:text-pink-600 transition-colors cursor-default"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      {activeWebProject?.url && activeWebProject.url !== "#" && (
                        <a
                          href={activeWebProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm hover:scale-[1.02] active:scale-95 transition-all duration-300"
                        >
                          <span>Explore Project Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
  );
}
