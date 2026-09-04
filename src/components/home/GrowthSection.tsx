"use client";

import React, { useState, useRef } from "react";
import { TrendingUp, Search, Share2, ArrowUpRight, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function GrowthSection() {
  const [activeCard, setActiveCard] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const phases = [
    {
      id: "01",
      icon: TrendingUp,
      badgeText: "PHASE 01 // FOUNDATION",
      title: "Build With Purpose",
      subheading: "STRATEGIC TECH ROADMAP",
      desc: "Create a clear technology roadmap that connects your business goals with the right solutions, resources, and execution strategy.",
      heroStat: "100%",
      heroLabel: "Strategic Alignment",
      subStat: "Custom Technology Roadmap",
      items: ["Business Strategy", "Digital Transformation", "Technology Consulting", "Roadmap", "Innovation"],
      pillBg: "bg-pink-50 text-pink-600 border-pink-100",
      accentGrad: "from-pink-500 via-violet-600 to-indigo-600",
      href: "/contact"
    },
    {
      id: "02",
      icon: Search,
      badgeText: "PHASE 02 // IMPLEMENTATION",
      title: "Smarter Execution",
      subheading: "TURN STRATEGY INTO RESULTS",
      desc: "From planning to implementation, we bring the right technology, processes, and expertise together to move your business forward.",
      heroStat: "3x",
      heroLabel: "Faster Execution",
      subStat: "Seamless Process Automation",
      items: ["Implementation", "Process Optimization", "Automation", "Integration", "Performance"],
      pillBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      accentGrad: "from-indigo-600 via-purple-600 to-pink-600",
      href: "/contact"
    },
    {
      id: "03",
      icon: Share2,
      badgeText: "PHASE 03 // SUSTAINABILITY",
      title: "Sustainable Growth",
      subheading: "DESIGNED FOR WHAT'S NEXT",
      desc: "Build scalable digital capabilities that improve efficiency, create new opportunities, and keep your business ready for the future.",
      heroStat: "10x",
      heroLabel: "Scalable Growth",
      subStat: "Future-Ready Architecture",
      items: ["Scalability", "Innovation", "AI Solutions", "Cloud Technology", "Business Growth"],
      pillBg: "bg-purple-50 text-purple-600 border-purple-100",
      accentGrad: "from-purple-600 via-pink-600 to-violet-600",
      href: "/contact"
    }
  ];

  return (
    <section className="relative text-slate-900 bg-white font-sans overflow-hidden select-none py-10">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-12">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              Growth Framework
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Success <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Strategy</span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xl">
              A smarter approach to transforming business goals into scalable solutions, stronger performance, and sustainable success.
            </p>
          </div>
        </ScrollReveal>

        {/* Relative Wrapper for Mobile Matrix + Side Floating Scroll Buttons */}
        <div className="relative">
          {/* Left Side Scroll Arrow Button (Mobile Only) */}
          <button
            onClick={() => handleScroll("left")}
            className="flex md:hidden absolute top-1/2 -translate-y-1/2 left-0 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 shadow-md items-center justify-center active:scale-95 transition-all cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-pink-600" />
          </button>

          {/* Right Side Scroll Arrow Button (Mobile Only) */}
          <button
            onClick={() => handleScroll("right")}
            className="flex md:hidden absolute top-1/2 -translate-y-1/2 right-0 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 shadow-md items-center justify-center active:scale-95 transition-all cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-pink-600" />
          </button>

          {/* 3-Card Executive Studio Matrix (1.1 Card Ratio Horizontal Scroll on Mobile, Grid on Desktop) */}
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch overflow-x-auto pt-4 pb-5 md:pt-4 md:pb-4 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth"
          >
            {phases.map((svc, idx) => {
              const Icon = svc.icon;
              const isSelected = activeCard === idx;

              return (
                <ScrollReveal key={idx} delay={idx * 150} direction="up" className="h-full flex flex-col w-[82vw] sm:w-[320px] md:w-full shrink-0 snap-center pt-1 pb-1">
                  <div
                    onClick={() => setActiveCard(idx)}
                    className={`relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between h-full transition-all duration-300 ease-out cursor-pointer group border overflow-hidden ${isSelected
                      ? "bg-white border-pink-400 shadow-md ring-1 ring-pink-400/30"
                      : "bg-white border-slate-200/90 shadow-2xs hover:border-pink-300 hover:shadow-md"
                      }`}
                  >
                    {/* Top Gradient Laser Bar */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${svc.accentGrad} rounded-t-3xl -mt-5 -mx-5 sm:-mt-6 sm:-mx-6 mb-4 transition-all duration-500`} />

                    {/* Background Monogram Watermark */}
                    <span className="absolute top-4 right-5 text-4xl sm:text-5xl font-black text-slate-100 font-mono select-none pointer-events-none group-hover:text-pink-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {svc.id}
                    </span>

                    <div className="flex flex-col flex-1 justify-between space-y-4 relative z-10">
                      {/* Top Content Block */}
                      <div className="space-y-3.5">
                        {/* Title & Subheading */}
                        <div className="space-y-0.5 pr-8">
                          <h3 className="text-lg sm:text-xl font-black text-[#1e1b4b] uppercase tracking-tight group-hover:text-pink-600 transition-colors duration-300">
                            {svc.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs font-bold text-pink-600 uppercase tracking-wider">
                            {svc.subheading}
                          </p>
                        </div>

                        {/* Hero Metric Showcase Card */}
                        <div className="relative overflow-hidden p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-pink-50/70 via-purple-50/40 to-indigo-50/70 border border-pink-200/60 shadow-2xs space-y-0.5 text-center group-hover:border-pink-300 transition-all duration-300">
                          <div className="flex items-center justify-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                            <span className={`text-2xl sm:text-3xl font-black font-mono tracking-tight bg-gradient-to-r ${svc.accentGrad} bg-clip-text text-transparent`}>
                              {svc.heroStat}
                            </span>
                          </div>
                          <p className="text-[9.5px] sm:text-[10px] font-mono font-bold text-[#1e1b4b] uppercase tracking-wider">
                            {svc.heroLabel}
                          </p>
                          <p className="text-[8px] sm:text-[8.5px] font-mono font-bold text-pink-600 uppercase tracking-widest pt-0.5 ">
                            ★ {svc.subStat}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                          {svc.desc}
                        </p>
                      </div>

                      {/* Deliverables Tags - Anchored to bottom cleanly */}
                      <div className="flex flex-wrap gap-1.5 pt-3 mt-auto border-t border-slate-100 items-start">
                        {svc.items.map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9.5px] sm:text-[10px] font-mono font-bold bg-white border border-slate-200/90 text-slate-800 shadow-xs hover:shadow-sm hover:border-pink-400 hover:text-pink-600 transition-all duration-200 cursor-default group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 shrink-0" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
