"use client";

import React from "react";
import {
  Sparkles,
  Users,
  ShieldCheck,
  Zap,
  Workflow,
  Activity,
  Lock,
  BarChart3,
  Database,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function DataAnalyticsPillarsSection() {
  const dataPillars = [
    {
      title: "100% Data Integrity",
      desc: "Automated schema drift & null value validation checks",
      icon: ShieldCheck,
    },
    {
      title: "48-Hr Squad Match",
      desc: "Instant pre-vetted senior data engineer onboarding",
      icon: Users,
    },
    {
      title: "Zero-Latency Queries",
      desc: "Columnar indexing & sub-second execution SLA",
      icon: Zap,
    },
    {
      title: "CI/CD Data DevOps",
      desc: "dbt data build tool & Airflow pipeline triggers",
      icon: Workflow,
    },
    {
      title: "Real-Time Streaming",
      desc: "Apache Kafka & Spark live event streams",
      icon: Activity,
    },
    {
      title: "SOC2 & GDPR Compliance",
      desc: "RBAC security & automated PII data masking",
      icon: Lock,
    },
    {
      title: "Live BI Dashboards",
      desc: "Real-time PowerBI & Tableau executive scorecards",
      icon: BarChart3,
    },
    {
      title: "24/7 SLA Pipeline Support",
      desc: "Proactive incident monitoring & automated fix webhooks",
      icon: Database,
    },
  ];

  return (
    <section className="py-10 sm:py-10 bg-white relative ">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-12 relative z-10">
        {/* Section Header with PDF Conclusion Statement */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-pink-500" />
              The Digital Raiz Advantage
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transforming Data into a{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Strategic Intelligence Layer
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
              Digital Raiz transforms data from an operational by-product into a strategic intelligence layer—helping businesses see more clearly, decide with confidence and move with direction.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column — Dedicated Squad Pitch */}
          <ScrollReveal direction="right" className="lg:col-span-5 h-full">
            <div className="h-full bg-white border border-slate-200/90 hover:border-pink-300 rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 space-y-6 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600" />

              <div className="space-y-4 text-left relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold uppercase tracking-widest text-pink-700">
                  <Users className="w-3.5 h-3.5 text-pink-600" />
                  Dedicated Data Squads
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Hire Senior Data Engineers &amp;{" "}
                  <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                    BI Architects
                  </span>
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  Deploy pre-vetted Snowflake data warehouse architects, PySpark pipeline leads, and PowerBI developers. Augment your internal data teams with certified experts ready to ship in 48 hours.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  {[
                    "48-Hour Instant Squad Onboarding",
                    "100% IP Ownership & NDA Protection",
                    "Direct Integration into Slack & Jira Workflows",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs font-semibold text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 relative z-10">
                <button
                  type="button"
                  onClick={() =>
                    openContactModal(
                      "Data Analytics & BI",
                      "Hire Dedicated Data Engineers"
                    )
                  }
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[11px] font-black uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border-0 flex items-center justify-center gap-2"
                >
                  <span>Deploy Dedicated Data Squad</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column — 8 Enterprise Data Pillars */}
          <ScrollReveal direction="left" className="lg:col-span-7 h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-pink-600" />
                  <span>8 Enterprise Data Engineering Pillars</span>
                </h3>
                <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-pink-600 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full">
                  Battle-Tested SLA
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dataPillars.map((item, i) => {
                  const PillarIcon = item.icon;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/5 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 group relative overflow-hidden text-left"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:border-transparent group-hover:text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-all duration-300">
                        <PillarIcon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-pink-600 transition-colors leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[11px] font-medium text-slate-500 group-hover:text-slate-700 transition-colors leading-tight">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
