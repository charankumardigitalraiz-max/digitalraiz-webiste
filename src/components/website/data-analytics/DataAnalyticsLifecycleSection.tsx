"use client";

import React from "react";
import {
  Workflow,
  Database,
  Cloud,
  BarChart3,
  LineChart,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function DataAnalyticsLifecycleSection() {
  const dataPipelinePhases = [
    {
      step: "01",
      phase: "Data Audit & Source Discovery",
      duration: "Week 1",
      icon: Database,
      overview:
        "Comprehensive audit of legacy databases, API streams, and executive BI reporting goals.",
      deliverables: [
        "Legacy Source Assessment",
        "Data Lineage Blueprint",
        "KPI Catalog",
      ],
      tools: ["PostgreSQL", "AWS S3", "Draw.io"],
    },
    {
      step: "02",
      phase: "Streaming Ingestion & ETL Pipelines",
      duration: "Week 2 - 3",
      icon: Workflow,
      overview:
        "Deployment of high-velocity batch & real-time event streams with zero data loss.",
      deliverables: [
        "Kafka Event Stream Setups",
        "Airflow DAG Orchestration",
        "Schema Validation",
      ],
      tools: ["Apache Kafka", "Apache Spark", "Airflow"],
    },
    {
      step: "03",
      phase: "Cloud Data Warehouse Architecture",
      duration: "Week 4 - 5",
      icon: Cloud,
      overview:
        "Structuring Star & Snowflake schemas in Snowflake or BigQuery for sub-second SQL queries.",
      deliverables: [
        "Star Schema Dimensional Models",
        "dbt Transformations",
        "Cost Control Alerts",
      ],
      tools: ["Snowflake", "BigQuery", "dbt"],
    },
    {
      step: "04",
      phase: "Executive BI Scorecards & PowerBI",
      duration: "Week 6",
      icon: BarChart3,
      overview:
        "Building responsive PowerBI & Tableau dashboards with automated drill-downs & mobile views.",
      deliverables: [
        "Executive PowerBI Scorecards",
        "Scheduled PDF Reports",
        "DAX Formulas",
      ],
      tools: ["PowerBI", "Tableau", "Looker"],
    },
    {
      step: "05",
      phase: "Predictive ML & AI Ingestion",
      duration: "Week 7",
      icon: LineChart,
      overview:
        "Training machine learning algorithms for automated sales, customer churn & demand forecasting.",
      deliverables: [
        "Customer Churn ML Models",
        "Demand Forecast Pipelines",
        "Databricks Deployments",
      ],
      tools: ["Python", "Databricks", "Scikit-Learn"],
    },
    {
      step: "06",
      phase: "Governance & 24/7 SLA Alerts",
      duration: "Continuous",
      icon: ShieldCheck,
      overview:
        "Real-time monitoring of data freshness, pipeline health, query speed, and incident alerts.",
      deliverables: [
        "Data Quality Webhooks",
        "Slack Anomaly Alerts",
        "24/7 Ops Support",
      ],
      tools: ["Great Expectations", "Grafana", "PagerDuty"],
    },
  ];

  return (
    <section className="py-10 sm:py-10 bg-white relative overflow-hidden ">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Workflow className="w-3 h-3 text-pink-500" />
              Engineering Execution Lifecycle
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our 6-Stage Data Engineering{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                &amp; Analytics Lifecycle
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
              A battle-tested 6-phase engineering lifecycle designed to turn fragmented data silos into real-time executive intelligence.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Stage Compact Stepper Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {dataPipelinePhases.map((phase, pIdx) => {
            const PhaseIcon = phase.icon || Database;
            return (
              <ScrollReveal
                key={pIdx}
                direction="up"
                delay={pIdx * 60}
                className="h-full"
              >
                <div className="group relative bg-white border border-slate-200/90 hover:border-pink-300 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1 flex flex-col justify-between space-y-4 h-full overflow-hidden">
                  {/* Top Gradient Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-3.5 text-left relative z-10">
                    {/* Compact Header: Stage Pill & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-bold uppercase tracking-wider text-pink-700 bg-pink-50 border border-pink-100 px-2.5 py-0.5 rounded-full shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                        Stage {phase.step} • {phase.duration}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-xs">
                        <PhaseIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Short Overview */}
                    <div className="space-y-1.5">
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                        {phase.phase}
                      </h3>
                      <p className="text-slate-600 text-xs font-normal leading-relaxed">
                        {phase.overview}
                      </p>
                    </div>

                    {/* Deliverables Chips */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Deliverables
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {phase.deliverables.map((del, dIdx) => (
                          <div
                            key={dIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[10.5px] font-semibold text-slate-700 group-hover:border-pink-200 group-hover:bg-pink-50/40 transition-colors"
                          >
                            <CheckCircle2 className="w-3 h-3 text-pink-500 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Toolchain Micro Badges */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 flex-wrap relative z-10">
                    {phase.tools.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/80 text-[9.5px] font-mono font-bold text-slate-600 shadow-2xs group-hover:bg-pink-50/80 group-hover:border-pink-200/80 group-hover:text-pink-600 transition-all duration-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-pink-500/80 group-hover:bg-pink-500 transition-colors" />
                        <span>{t}</span>
                      </span>
                    ))}
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
