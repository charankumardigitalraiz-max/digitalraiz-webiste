"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  BarChart2,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  PieChart,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function DataAnalyticsHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-16 lg:pb-12 border-b border-slate-100">
      {/* Background ambient lighting effects */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-pink-500/5 via-violet-500/5 to-indigo-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT — Typography & Content Flow (7 cols) */}
          <ScrollReveal
            direction="left"
            className="lg:col-span-7 space-y-6 text-center lg:text-left order-last lg:order-first"
          >
            {/* Category Tag */}
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest shadow-2xs">
              <BarChart2 className="w-3.5 h-3.5 text-pink-500" />
              <span>Data Analytics &amp; Business Intelligence</span>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Data Analytics &amp; Business Intelligence Solutions That{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Turn Information Into Intelligence
              </span>
            </h1>

            {/* Structured Paragraph Content according to PDF length */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base font-normal leading-relaxed text-left">
              {/* Highlight Callout Quote */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-50/90 via-violet-50/40 to-white border-l-4 border-pink-500 text-slate-900 font-semibold text-base sm:text-lg leading-snug shadow-2xs">
                Every business has data. Not every business has the clarity to use it.
              </div>

              <p>
                Digital Raiz delivers <strong className="text-slate-900 font-semibold">Data Analytics and Business Intelligence solutions</strong> that help organizations move from scattered information to meaningful understanding. We bring data sources, analytical models, visualization and business context together to create a clearer view of what is happening across an organization—and where the next opportunity may be.
              </p>

              <p>
                Our approach begins with the decisions behind the data. Rather than producing dashboards simply because information is available, we identify the questions that matter, the metrics that carry significance and the insights that can influence action.
              </p>

              {/* Emphasized Result Box */}
              <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-800 leading-relaxed flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-pink-600">The Result:</strong> An analytical foundation designed to help businesses make decisions with greater context, precision and confidence.
                </div>
              </div>
            </div>

            {/* Stat Badges / Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
              {[
                { label: "100% Data Integrity", icon: ShieldCheck },
                { label: "Predictive Analytics", icon: TrendingUp },
                { label: "PowerBI Scorecards", icon: PieChart },
                { label: "Actionable Insights", icon: Lightbulb },
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-mono font-bold text-slate-700 shadow-2xs"
                  >
                    <Icon className="w-3 h-3 text-pink-500" />
                    <span>{s.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start pt-2">
              <button
                type="button"
                onClick={() =>
                  openContactModal(
                    "Data Analytics & BI",
                    "Schedule Analytics Consultation"
                  )
                }
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md cursor-pointer border-0 pointer-events-auto touch-manipulation min-h-[44px]"
              >
                <span>Schedule Analytics Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                type="button"
                onClick={() =>
                  openContactModal(
                    "Data Analytics & BI",
                    "Discuss BI Requirements"
                  )
                }
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer pointer-events-auto touch-manipulation min-h-[44px]"
              >
                <span>Discuss BI Requirements</span>
              </button>
            </div>
          </ScrollReveal>

          {/* RIGHT — Showcase Image & Visual Badges (5 cols) */}
          <ScrollReveal
            direction="right"
            delay={150}
            className="lg:col-span-5 relative w-full flex justify-center order-first lg:order-last"
          >
            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group bg-slate-900">
              <img
                src="/data-analytics-and-bi/csuite-white-square-completely-different.webp"
                alt="Digital Raiz Data Analytics & Business Intelligence Dashboard"
                className="w-full h-auto object-cover select-none group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Feature Tag 1 - Top Left */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2.5 text-left">
                <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[8.5px] font-mono text-slate-400 uppercase font-bold">
                    Actionable Clarity
                  </div>
                  <div className="text-xs font-extrabold text-slate-900">
                    Decision-First Analytics
                  </div>
                </div>
              </div>

              {/* Floating Feature Tag 2 - Bottom Right */}
              <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-lg border border-slate-700/80 flex items-center gap-2.5 text-left text-white">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[8.5px] font-mono text-emerald-400 uppercase font-bold">
                    Context &amp; Precision
                  </div>
                  <div className="text-xs font-extrabold text-white">
                    Meaningful Understanding
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
