"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { homeServices } from "@/data/homeData";

export default function Services() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="py-10 bg-white text-slate-800 font-sans overflow-hidden border-t border-slate-100 select-none"
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-10">

        {/* Section Header — Unified Stacked Layout */}
        <ScrollReveal direction="up">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              Our Core Services
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What We Do <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">For You</span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xl">
              We combine intelligent technology, creative thinking, and engineering expertise to build digital solutions that connect your business with better results.
            </p>
          </div>
        </ScrollReveal>

        {/* MOBILE VIEW (< sm): iOS-Style Segmented Tab Bar + Active Service Spotlight Card */}
        <div className="block sm:hidden space-y-3">
          {/* Direct Horizontal Tabs Floating on Page */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-6 px-6 no-scrollbar scroll-smooth">
            {homeServices.map((svc, idx) => {
              const isSelected = (active ?? 0) === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-[11px] font-extrabold tracking-tight shrink-0 transition-all duration-300 cursor-pointer border ${isSelected
                      ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white shadow-md shadow-pink-500/20 border-transparent scale-[1.02]"
                      : "bg-white text-slate-800 border-slate-200/90 shadow-2xs hover:border-pink-300"
                    }`}
                >
                  <span
                    className={`w-4 h-4 rounded-md text-[9px] font-mono font-black flex items-center justify-center transition-all ${isSelected
                        ? "bg-white/20 text-white"
                        : "bg-pink-50 text-pink-600 border border-pink-100"
                      }`}
                  >
                    {svc.num}
                  </span>
                  <span className={`font-sans font-extrabold uppercase tracking-tight ${isSelected ? "text-white" : "text-slate-900"}`}>
                    {svc.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Service Spotlight Card Below */}
          {(() => {
            const activeIdx = active !== null ? active : 0;
            const activeSvc = homeServices[activeIdx] || homeServices[0];

            return (
              <ScrollReveal key={activeIdx} direction="up" className="w-full">
                <div className={`rounded-2xl bg-gradient-to-br ${activeSvc.bg} p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-4 relative overflow-hidden transition-all duration-500`}>

                  {/* Header Title + Number */}
                  <div className="flex items-center justify-between gap-3 pb-1 border-b border-slate-200/60">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="text-2xl font-mono font-black leading-none block"
                        style={{ color: activeSvc.color }}
                      >
                        {activeSvc.num}
                      </span>
                      <h3
                        className="text-base font-black uppercase tracking-tight leading-tight"
                        style={{ color: activeSvc.color }}
                      >
                        {activeSvc.title}
                      </h3>
                    </div>
                  </div>

                  {/* Service Visual Illustration Stage */}
                  <div className="w-full h-44 sm:h-52 relative flex items-center justify-center rounded-xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-inner p-3 overflow-hidden group">
                    <Image
                      src={activeSvc.img}
                      alt={activeSvc.title}
                      width={220}
                      height={220}
                      className="h-full w-auto max-h-[170px] object-contain drop-shadow-md select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>

                  {/* Description Copy */}
                  <p className="text-slate-600 text-xs font-normal leading-relaxed">
                    {activeSvc.desc}
                  </p>

                  {/* Deliverables Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {activeSvc.items.map((item, i) => (
                      <span key={i} className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${activeSvc.tag}`}>
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action CTA Button */}
                  <div className="pt-2 border-t border-slate-200/70">
                    <Link
                      href={activeSvc.href}
                      className="group/btn flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-white border border-slate-200/90 text-slate-900 shadow-2xs hover:shadow-xs hover:border-pink-300 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ backgroundColor: activeSvc.color }} />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                          Explore {activeSvc.title} Studio
                        </span>
                      </div>

                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-white shadow-2xs group-hover/btn:scale-110 transition-transform duration-300 shrink-0"
                        style={{ backgroundColor: activeSvc.color }}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </div>
                    </Link>
                  </div>

                </div>
              </ScrollReveal>
            );
          })()}
        </div>

        {/* DESKTOP VIEW (>= sm): Interactive Accordion Rows */}
        <div className="hidden sm:block divide-y divide-slate-100">
          {homeServices.map((svc, idx) => {
            const isOpen = active === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 100} direction="up">
                <div>
                  {/* Row Header */}
                  <button
                    onClick={() => setActive(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between py-6 gap-6 text-left focus:outline-none cursor-pointer group"
                  >
                    <div className="flex items-center gap-5 flex-1 min-w-0">
                      {/* Big Number */}
                      <span
                        className="text-4xl sm:text-5xl font-mono font-black leading-none shrink-0 transition-colors duration-300"
                        style={{ color: isOpen ? svc.color : "#cbd5e1" }}
                      >
                        {svc.num}
                      </span>

                      {/* Title */}
                      <h3
                        className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight transition-colors duration-300"
                        style={{ color: isOpen ? svc.color : "#1e1b4b" }}
                      >
                        {svc.title}
                      </h3>

                      {/* Tags on desktop (collapsed state) */}
                      {!isOpen && (
                        <div className="hidden md:flex gap-2 flex-wrap">
                          {svc.items.slice(0, 3).map((tag, i) => (
                            <span key={i} className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold ${svc.tag} uppercase tracking-wider`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Expand / Collapse button */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border-2"
                      style={{
                        borderColor: isOpen ? svc.color : "#cbd5e1",
                        backgroundColor: isOpen ? svc.color : "transparent",
                        color: isOpen ? "#fff" : "#94a3b8",
                      }}
                    >
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-0" : "-rotate-45"}`}
                      />
                    </div>
                  </button>

                  {/* Expanded Panel */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"}`}
                  >
                    <div className={`rounded-2xl bg-gradient-to-br ${svc.bg} p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center`}>

                      {/* Left: Content */}
                      <div className="sm:col-span-8 space-y-4">
                        <p className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed text-justify">
                          {svc.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {svc.items.map((item, i) => (
                            <span key={i} className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider ${svc.tag}`}>
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="pt-1">
                          <Link
                            href={svc.href}
                            className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-widest transition-all hover:underline"
                            style={{ color: svc.color }}
                          >
                            <span>Explore This Studio</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      {/* Right: Image Stage */}
                      <div className="sm:col-span-4 flex items-center justify-center p-2">
                        <div className="w-full max-w-[220px] h-48 relative flex items-center justify-center rounded-2xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-sm p-4 group">
                          <Image
                            src={svc.img}
                            alt={svc.title}
                            width={200}
                            height={200}
                            className="h-full w-auto max-h-[170px] object-contain drop-shadow-md select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>

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
