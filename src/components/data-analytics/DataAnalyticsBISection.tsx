"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  BarChart3,
  Database,
  Workflow,
  LineChart,
  Users,
  ShieldCheck,
  Sparkles,
  Layers,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function DataAnalyticsBISection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const dataArchitectureTiers = [
    {
      step: "01",
      badge: "Executive Layer",
      title: "Business Intelligence & PowerBI Scorecards",
      overview:
        "Transform fragmented corporate data into interactive executive dashboards, automated daily KPI audits, and responsive mobile BI scorecards.",
      tools: ["PowerBI", "Tableau", "DAX", "SQL", "Looker"],
      image: "/data-analytics-and-bi/powerbi-isometric-dashboard.png",
    },
    {
      step: "02",
      badge: "Storage Layer",
      title: "Snowflake & BigQuery Cloud Data Warehousing",
      overview:
        "Architect zero-latency cloud data warehouses with star-schema dimensional modeling, dbt transformations, and automated cost controls.",
      tools: ["Snowflake", "Google BigQuery", "AWS Redshift", "dbt"],
      image: "/data-analytics-and-bi/cloud-warehouse-snowflake-hub.png",
    },
    {
      step: "03",
      badge: "Ingestion Layer",
      title: "Real-time Streaming & Apache Kafka ETL Pipelines",
      overview:
        "Deploy fault-tolerant streaming pipelines to capture live transactional events, website clicks, and IoT telemetry data with zero data loss.",
      tools: ["Apache Kafka", "Apache Spark", "Airflow", "Python"],
      image: "/data-analytics-and-bi/high-speed-data-pipeline-stream.png",
    },
    {
      step: "04",
      badge: "Analytics Layer",
      title: "Predictive Machine Learning & AI Forecasts",
      overview:
        "Convert historical data into predictions. Build custom ML models deployed on Databricks to forecast customer churn, demand, and revenue.",
      tools: ["Python", "Databricks", "Scikit-Learn", "Pandas"],
      image: "/data-analytics-and-bi/ai-predictive-analytics-brain-core.png",
    },
    {
      step: "05",
      badge: "Identity Layer",
      title: "Customer 360 & Single Customer View Profiles",
      overview:
        "Consolidate fragmented customer touchpoints from web, mobile apps, and CRM into single customer view (SCV) profiles for targeted retention.",
      tools: ["PostgreSQL", "Mixpanel", "Segment", "Python"],
      image: "/data-analytics-and-bi/customer-360-identity-hub.png",
    },
    {
      step: "06",
      badge: "Security Layer",
      title: "Data Governance, RBAC & SOC2 Compliance",
      overview:
        "Implement role-based access control (RBAC), automated PII data masking, and end-to-end data lineage tracking for SOC2 and GDPR compliance.",
      tools: ["Great Expectations", "dbt Lineage", "Grafana", "Slack API"],
      image:
        "/data-analytics-and-bi/csuite-white-square-completely-different.png",
    },
  ];

  // Auto-scroll loop for architecture deck
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && el) {
        el.scrollLeft += 0.8;
        if (el.scrollLeft >= el.scrollWidth / 3) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="py-10 sm:py-10 bg-white relative overflow-hidden space-y-10">
      {/* Centered Section Header based on PDF */}
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Layers className="w-3 h-3 text-pink-500" />
              Business Intelligence Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Business Intelligence Designed Around the{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Decisions That Matter
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
              Business Intelligence is most powerful when it becomes part of how an organization thinks and operates. We connect business data with practical decision-making across executive scorecards, management reporting, and KPI monitoring.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-Width Auto-Scroll Carousel Track */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="w-full flex flex-row overflow-x-auto gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-2 pb-8 px-4 sm:px-8 flex-nowrap relative z-10"
      >
        {[
          ...dataArchitectureTiers,
          ...dataArchitectureTiers,
          ...dataArchitectureTiers,
        ].map((tier, idx) => (
          <div
            key={idx}
            className="w-[88vw] sm:w-[540px] lg:w-[580px] min-h-[280px] sm:min-h-[260px] shrink-0"
          >
            <ScrollReveal direction="up" delay={(idx % 6) * 60} className="h-full w-full">
              <div
                onClick={() =>
                  openContactModal(
                    "Data Analytics & BI",
                    `Architecture Tier: ${tier.title}`
                  )
                }
                className="group bg-white border border-slate-200/80 hover:border-pink-300/90 rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1.5 cursor-pointer relative flex flex-col justify-between h-full w-full overflow-hidden"
              >
                {/* Top Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4 text-left relative z-10">
                  {/* Side-by-Side Split Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    {/* Left Text & Tools (7 cols) */}
                    <div className="sm:col-span-7 space-y-3">
                      <span className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-bold uppercase tracking-wider text-pink-700 bg-pink-50 border border-pink-100 px-2.5 py-0.5 rounded-full shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                        Tier {tier.step} • {tier.badge}
                      </span>

                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                        {tier.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed tracking-normal">
                        {tier.overview}
                      </p>

                      {/* Toolchain Micro Pills */}
                      <div className="flex items-center gap-1.5 flex-wrap pt-1.5">
                        {tier.tools.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1.5 bg-pink-50/70 border border-pink-100/90 text-pink-700 text-[10px] font-mono font-bold px-3 py-0.5 rounded-full shadow-2xs group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-600 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                          >
                            <span className="w-1 h-1 rounded-full bg-pink-500 group-hover:bg-white transition-colors" />
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="sm:col-span-5 relative aspect-square w-full overflow-hidden flex items-center justify-center">
                      <Image
                        src={tier.image}
                        alt={tier.title}
                        fill
                        className="object-contain object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
}
