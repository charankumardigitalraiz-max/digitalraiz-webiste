"use client";

import React from "react";
import Image from "next/image";
import {
  TrendingUp,
  LineChart,
  Search,
  Sparkles,
  ArrowRight,
  Eye,
  BarChart2,
  Database,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function DataAnalyticsRevealSection() {
  const analyticsPillars = [
    {
      step: "01",
      badge: "Historical Context",
      title: "Descriptive Analytics",
      icon: BarChart2,
      desc: "Examine historical information across customers, sales, operations, finance, and digital touchpoints to understand exactly what has happened.",
      features: [
        "Cross-platform data consolidation",
        "Financial & operational metrics audit",
        "Customer behavior trend tracking",
      ],
      gradient: "from-pink-500 to-rose-600",
      cardBg: "bg-pink-50/60 border-pink-200/60 hover:border-pink-300",
      iconBg: "bg-pink-100 text-pink-600",
    },
    {
      step: "02",
      badge: "Root Cause Discovery",
      title: "Diagnostic Analytics",
      icon: Search,
      desc: "Uncover hidden patterns, correlation signals, and operational anomalies to understand why specific performance shifts occurred.",
      features: [
        "Unrelated signal pattern correlation",
        "Root cause performance audits",
        "Churn & conversion friction analysis",
      ],
      gradient: "from-violet-600 to-indigo-600",
      cardBg: "bg-violet-50/60 border-violet-200/60 hover:border-violet-300",
      iconBg: "bg-violet-100 text-violet-600",
    },
    {
      step: "03",
      badge: "Future Guidance",
      title: "Predictive Analytics",
      icon: TrendingUp,
      desc: "Deploy machine learning models and predictive algorithms to help leadership understand what the data indicates will happen next.",
      features: [
        "AI demand & revenue forecasting",
        "Automated customer churn prediction",
        "Data-driven resource allocation",
      ],
      gradient: "from-emerald-600 to-teal-600",
      cardBg: "bg-emerald-50/60 border-emerald-200/60 hover:border-emerald-300",
      iconBg: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <section className="py-10 sm:py-10 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Eye className="w-3 h-3 text-pink-500" />
              Data Analytics Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Where Data Reveals What the{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Business Cannot See
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed max-w-2xl mx-auto text-slate-800">
              The most valuable insight is often hidden between datasets, trends and seemingly unrelated signals.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-3xl mx-auto">
              Our <strong className="text-slate-800 font-semibold">data analytics services</strong> help organizations examine information across customers, sales, operations, finance and digital platforms to uncover patterns, relationships and changes that deserve attention. We support descriptive, diagnostic and predictive analytics, helping businesses understand not only what has happened, but what the data may indicate next.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {analyticsPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 80} className="h-full">
                <div
                  onClick={() =>
                    openContactModal("Data Analytics & BI", `Analytics Service: ${p.title}`)
                  }
                  className={`group relative p-6 sm:p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl bg-white flex flex-col justify-between space-y-5 h-full cursor-pointer overflow-hidden ${p.cardBg}`}
                >
                  {/* Top Accent Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-pink-50/80 border border-pink-100/80 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-wider group-hover:bg-pink-100/80 group-hover:border-pink-200 transition-all duration-300">
                        {p.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-pink-500 transition-colors">
                        {p.step}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs ${p.iconBg}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight">
                        {p.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-xs font-normal leading-relaxed">
                      {p.desc}
                    </p>

                    {/* Features List */}
                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        Core Focus Areas
                      </span>
                      {p.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-xs font-medium text-slate-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-pink-600 group-hover:translate-x-1 transition-transform">
                    <span>Explore {p.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Feature Visual Showcase Banner from PDF */}
        <ScrollReveal direction="up" delay={200}>
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-pink-500" />
                Intuitive Data Visualization
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Translating Complex Data into Clear Intuitive Views
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                Through <strong className="text-slate-800 font-semibold">data visualization, interactive dashboards and intelligent reporting</strong>, complex information can be translated into a more intuitive view of business performance. Decision-makers gain access to relevant metrics without having to navigate fragmented reports or disconnected sources.
              </p>
              <p className="text-slate-800 text-xs sm:text-sm font-semibold leading-relaxed">
                We turn raw information into a perspective the business can actually work with.
              </p>
              <div className="pt-2 flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                  <Database className="w-4 h-4 text-pink-500" />
                  <span>Unified Data Pipelines</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                  <LineChart className="w-4 h-4 text-violet-500" />
                  <span>Real-time KPI Scorecards</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src="/data-analytics-and-bi/ai-predictive-analytics-brain-core.webp"
                alt="AI Predictive Analytics & Data Visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
