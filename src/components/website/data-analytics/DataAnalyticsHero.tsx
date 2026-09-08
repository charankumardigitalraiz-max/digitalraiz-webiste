"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  PieChart,
  Activity,
  Zap,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function DataAnalyticsHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-10 sm:py-10">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          {/* LEFT — Typography & Intro Copy */}
          <ScrollReveal
            direction="left"
            className="flex-grow space-y-6 text-center lg:text-left max-w-2xl order-last lg:order-first"
          >
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Data Analytics &amp; Transformation for{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h1>

            {/* Description Paragraph 1 */}
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
              Every business generates data, but turning that data into meaningful decisions requires the right approach. Digital Raiz provides Data Analytics and Business Intelligence solutions that transform scattered information into clear, actionable insights.
            </p>

            {/* Description Paragraph 2 */}
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
              We connect data sources, analytics, visualization, and business goals to help organizations understand performance, identify opportunities, track key metrics, and make confident, data-driven decisions.
            </p>

            {/* Stat Badges matching WebDevHero & SalesforceHero */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
              {[
                {
                  val: "100%",
                  label: "Data Integrity",
                  bg: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
                  dot: "bg-emerald-500",
                },
                {
                  val: "<100ms",
                  label: "Snowflake SLA",
                  bg: "bg-pink-50 text-pink-700 border-pink-200/60",
                  dot: "bg-pink-500 animate-pulse",
                },
                {
                  val: "1.4B",
                  label: "Daily Events",
                  bg: "bg-violet-50 text-violet-700 border-violet-200/60",
                  dot: "bg-violet-500",
                },
                {
                  val: "PowerBI",
                  label: "Executive Scorecards",
                  bg: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
                  dot: "bg-indigo-500",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold ${s.bg}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                  <span>{s.val}</span>
                  <span className="text-[9px] font-mono text-slate-400 uppercase">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Call To Action Buttons matching WebDevHero & SalesforceHero */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <button
                type="button"
                onClick={() =>
                  openContactModal(
                    "Data Analytics & BI",
                    "Build Data Infrastructure"
                  )
                }
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md cursor-pointer border-0 pointer-events-auto touch-manipulation min-h-[44px]"
              >
                <span>Build Data Infrastructure</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>

              <button
                type="button"
                onClick={() =>
                  openContactModal(
                    "Data Analytics & BI",
                    "Book BI Strategy Audit"
                  )
                }
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer pointer-events-auto touch-manipulation min-h-[44px]"
              >
                <PieChart className="w-3.5 h-3.5 text-pink-500" />
                <span>Book BI Strategy Audit</span>
              </button>
            </div>
          </ScrollReveal>

          {/* RIGHT — Showcase Image matching WebDevHero & SalesforceHero structure */}
          <ScrollReveal
            direction="right"
            delay={150}
            className="relative w-full lg:w-[500px] shrink-0 flex justify-center order-first lg:order-last"
          >
            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden group shadow-lg border border-slate-100">
              {/* Hero Image */}
              <img
                src="/data-analytics-and-bi/csuite-white-square-completely-different.png"
                alt="Digital Raiz Data Analytics & Business Intelligence Dashboard"
                className="w-full h-auto object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Live Metric 1 - Top Left */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-slate-400 uppercase">
                    Kafka Real-time
                  </div>
                  <div className="text-xs font-extrabold text-slate-900">
                    1.4B Daily Events
                  </div>
                </div>
              </div>

              {/* Floating Live Metric 2 - Bottom Right */}
              <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-slate-700 flex items-center gap-2.5 text-white">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-emerald-400 uppercase">
                    Snowflake SLA
                  </div>
                  <div className="text-xs font-extrabold text-white">
                    Sub-100ms Queries
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
