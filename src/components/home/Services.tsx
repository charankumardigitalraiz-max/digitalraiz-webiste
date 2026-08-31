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
              We blend intelligent creativity with powerful technology — building strong digital brands that connect minds to results.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion Rows */}
        <div className="divide-y divide-slate-100">
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

                      {/* Right: Image */}
                      <div className="sm:col-span-4 flex items-center justify-center">
                        <Image
                          src={svc.img}
                          alt={svc.title}
                          width={130}
                          height={130}
                          style={{ height: "auto" }}
                          className="object-contain drop-shadow-xl select-none pointer-events-none"
                        />
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
