"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Database,
  Workflow,
  LineChart,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  Lock,
  Activity,
  Zap,
  Clock,
  PieChart,
  FileSpreadsheet,
  Server,
  Cloud,
  ChevronLeft,
  ChevronRight,
  Send,
  X,
  Phone,
  Mail,
  User,
  Building,
  MessageSquare,
  Radio
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ScrollReveal Wrapper
const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getDirectionStyles = () => {
    switch (direction) {
      case "up":
        return "translate-y-10";
      case "down":
        return "-translate-y-10";
      case "left":
        return "translate-x-10";
      case "right":
        return "-translate-x-10";
      default:
        return "translate-y-10";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${getDirectionStyles()}`
        } ${className}`}
    >
      {children}
    </div>
  );
};

export default function DataAnalyticsPage() {
  const [techPaused, setTechPaused] = useState(false);
  const techScrollRef = useRef<HTMLDivElement>(null);
  const section1ScrollRef = useRef<HTMLDivElement>(null);
  const [section1Paused, setSection1Paused] = useState(false);

  const scrollSection1 = (dir: "left" | "right") => {
    if (section1ScrollRef.current) {
      const distance = dir === "left" ? -480 : 480;
      section1ScrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  // Continuous auto-scroll for Section 1 Carousel Deck
  useEffect(() => {
    const el = section1ScrollRef.current;
    if (!el) return;
    let animationFrameId: number;

    const scroll = () => {
      if (!section1Paused && el) {
        el.scrollLeft += 0.8;
        if (el.scrollLeft >= el.scrollWidth / 3) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [section1Paused]);

  // Contact Modal State
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [modalService, setModalService] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const openContactModal = (serviceName: string) => {
    setModalService(serviceName);
    setIsContactOpen(true);
    setFormSubmitted(false);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsContactOpen(false);
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 2500);
  };

  // Continuous auto-scroll for technology ticker
  useEffect(() => {
    const el = techScrollRef.current;
    if (!el) return;
    let animationFrameId: number;

    const scroll = () => {
      if (!techPaused && el) {
        el.scrollLeft += 0.8;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [techPaused]);

  // Technologies List with high-availability devicon & simpleicon SVGs
  const dataTechStack = [
    { name: "Snowflake", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/snowflake/snowflake-original.svg" },
    { name: "Databricks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" },
    { name: "PowerBI", icon: "https://cdn.simpleicons.org/powerbi/F2C811" },
    { name: "Tableau", icon: "https://cdn.simpleicons.org/tableau/E97627" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" },
    { name: "Google BigQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "AWS Redshift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" }
  ];

  // 6 Architecture Tiers for Data Stack Breakdown with Generated 3D Asset Images
  const dataArchitectureTiers = [
    {
      step: "01",
      badge: "Executive Layer",
      title: "Business Intelligence & PowerBI Scorecards",
      overview: "Transform fragmented corporate data into interactive executive dashboards, automated daily KPI audits, and responsive mobile BI scorecards.",
      tools: ["PowerBI", "Tableau", "DAX", "SQL", "Looker"],
      image: "/data-analytics-and-bi/powerbi-isometric-dashboard.png"
    },
    {
      step: "02",
      badge: "Storage Layer",
      title: "Snowflake & BigQuery Cloud Data Warehousing",
      overview: "Architect zero-latency cloud data warehouses with star-schema dimensional modeling, dbt transformations, and automated cost controls.",
      tools: ["Snowflake", "Google BigQuery", "AWS Redshift", "dbt"],
      image: "/data-analytics-and-bi/cloud-warehouse-snowflake-hub.png"
    },
    {
      step: "03",
      badge: "Ingestion Layer",
      title: "Real-time Streaming & Apache Kafka ETL Pipelines",
      overview: "Deploy fault-tolerant streaming pipelines to capture live transactional events, website clicks, and IoT telemetry data with zero data loss.",
      tools: ["Apache Kafka", "Apache Spark", "Airflow", "Python"],
      image: "/data-analytics-and-bi/high-speed-data-pipeline-stream.png"
    },
    {
      step: "04",
      badge: "Analytics Layer",
      title: "Predictive Machine Learning & AI Forecasts",
      overview: "Convert historical data into predictions. Build custom ML models deployed on Databricks to forecast customer churn, demand, and revenue.",
      tools: ["Python", "Databricks", "Scikit-Learn", "Pandas"],
      image: "/data-analytics-and-bi/ai-predictive-analytics-brain-core.png"
    },
    {
      step: "05",
      badge: "Identity Layer",
      title: "Customer 360 & Single Customer View Profiles",
      overview: "Consolidate fragmented customer touchpoints from web, mobile apps, and CRM into single customer view (SCV) profiles for targeted retention.",
      tools: ["PostgreSQL", "Mixpanel", "Segment", "Python"],
      image: "/data-analytics-and-bi/customer-360-identity-hub.png"
    },
    {
      step: "06",
      badge: "Security Layer",
      title: "Data Governance, RBAC & SOC2 Compliance",
      overview: "Implement role-based access control (RBAC), automated PII data masking, and end-to-end data lineage tracking for SOC2 and GDPR compliance.",
      tools: ["Great Expectations", "dbt Lineage", "Grafana", "Slack API"],
      image: "/data-analytics-and-bi/csuite-white-square-completely-different.png"
    }
  ];

  // 6 Data Engineering Pipeline Phases
  const dataPipelinePhases = [
    {
      step: "01",
      phase: "Data Audit & Source Discovery",
      duration: "Week 1",
      icon: Database,
      overview: "Comprehensive audit of legacy databases, API streams, and executive BI reporting goals.",
      deliverables: ["Legacy Source Assessment", "Data Lineage Blueprint", "KPI Catalog"],
      tools: ["PostgreSQL", "AWS S3", "Draw.io"]
    },
    {
      step: "02",
      phase: "Streaming Ingestion & ETL Pipelines",
      duration: "Week 2 - 3",
      icon: Workflow,
      overview: "Deployment of high-velocity batch & real-time event streams with zero data loss.",
      deliverables: ["Kafka Event Stream Setups", "Airflow DAG Orchestration", "Schema Validation"],
      tools: ["Apache Kafka", "Apache Spark", "Airflow"]
    },
    {
      step: "03",
      phase: "Cloud Data Warehouse Architecture",
      duration: "Week 4 - 5",
      icon: Cloud,
      overview: "Structuring Star & Snowflake schemas in Snowflake or BigQuery for sub-second SQL queries.",
      deliverables: ["Star Schema Dimensional Models", "dbt Transformations", "Cost Control Alerts"],
      tools: ["Snowflake", "BigQuery", "dbt"]
    },
    {
      step: "04",
      phase: "Executive BI Scorecards & PowerBI",
      duration: "Week 6",
      icon: BarChart3,
      overview: "Building responsive PowerBI & Tableau dashboards with automated drill-downs & mobile views.",
      deliverables: ["Executive PowerBI Scorecards", "Scheduled PDF Reports", "DAX Formulas"],
      tools: ["PowerBI", "Tableau", "Looker"]
    },
    {
      step: "05",
      phase: "Predictive ML & AI Ingestion",
      duration: "Week 7",
      icon: LineChart,
      overview: "Training machine learning algorithms for automated sales, customer churn & demand forecasting.",
      deliverables: ["Customer Churn ML Models", "Demand Forecast Pipelines", "Databricks Deployments"],
      tools: ["Python", "Databricks", "Scikit-Learn"]
    },
    {
      step: "06",
      phase: "Governance & 24/7 SLA Alerts",
      duration: "Continuous",
      icon: ShieldCheck,
      overview: "Real-time monitoring of data freshness, pipeline health, query speed, and incident alerts.",
      deliverables: ["Data Quality Webhooks", "Slack Anomaly Alerts", "24/7 Ops Support"],
      tools: ["Great Expectations", "Grafana", "PagerDuty"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-pink-500 selection:text-white">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-white py-10 sm:py-10">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Left Column (6 cols) — Text Content & Feature Bullets */}
              <div className="lg:col-span-6 space-y-6 text-left">

                {/* Section Pill Badge */}
                <ScrollReveal direction="down">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                    <Sparkles className="w-3 h-3 text-pink-500" />
                    Data Analytics &amp; BI Studio
                  </div>
                </ScrollReveal>

                {/* Main Headline */}
                <ScrollReveal direction="up" delay={100}>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Turn Raw Big Data into{" "}
                    <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      Predictive Revenue
                    </span>
                  </h1>
                </ScrollReveal>

                {/* Description */}
                <ScrollReveal direction="up" delay={150}>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    Build modern Snowflake cloud data warehouses, real-time streaming ETL pipelines, and C-suite PowerBI scorecards. Drive faster decisions with AI-powered predictive insights.
                  </p>
                </ScrollReveal>

                {/* Clean Feature Checklist */}
                <ScrollReveal direction="up" delay={200}>
                  <div className="space-y-2.5 pt-1">
                    {[
                      "Sub-second Snowflake & BigQuery SQL query latency",
                      "Executive PowerBI & Tableau interactive scorecards",
                      "Apache Spark & Kafka real-time event streaming pipelines",
                      "SOC2 & GDPR enterprise data governance & RBAC compliance"
                    ].map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-pink-50 border border-pink-200 text-pink-600 flex items-center justify-center shrink-0 shadow-2xs">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Call To Action Buttons */}
                <ScrollReveal direction="up" delay={250}>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => openContactModal("Data Analytics Services")}
                      className="inline-flex items-center gap-2.5 py-4 px-8 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[11px] font-black uppercase tracking-wider shadow-[0_10px_25px_rgba(236,72,153,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
                    >
                      <span>Build Data Infrastructure</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => openContactModal("Book BI Audit")}
                      className="inline-flex items-center gap-2 py-4 px-7 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-[11px] font-bold uppercase tracking-wider hover:border-pink-300 transition-all cursor-pointer shadow-2xs"
                    >
                      <PieChart className="w-4 h-4 text-pink-500" />
                      <span>Book BI Strategy Audit</span>
                    </button>
                  </div>
                </ScrollReveal>

              </div>

              {/* Right Column (6 cols) — Hero Image Showcase */}
              <div className="lg:col-span-6 relative flex justify-center">
                <ScrollReveal direction="left" delay={150} className="w-full">
                  <div className="relative w-full rounded-3xl bg-white overflow-hidden group">

                    {/* Hero Image Component */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden">
                      <Image
                        src="/data-analytics-and-bi/csuite-white-square-completely-different.png"
                        alt="Digital Raiz Data Analytics & Business Intelligence Dashboard"
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-100"
                        priority
                      />
                    </div>

                    {/* Floating Live Metric 1 - Top Left */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-xl flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-extrabold text-slate-900 leading-tight">1.4B Daily Events</div>
                        <div className="text-[9.5px] font-mono text-pink-600 font-bold">Kafka Real-time Stream</div>
                      </div>
                    </div>

                    {/* Floating Live Metric 2 - Bottom Right */}
                    <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-2xl p-3 shadow-xl flex items-center gap-3 text-white">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Zap className="w-5 h-5 text-emerald-200" />
                      </div>
                      <div>
                        <div className="text-[11px] font-extrabold text-slate-100 leading-tight">Sub-100ms Queries</div>
                        <div className="text-[9.5px] font-mono text-emerald-400 font-bold">Snowflake SLA Active</div>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              </div>

            </div>

            {/* TECH STACK TICKER */}
            {/* <div className="py-3 w-full overflow-hidden mt-12 border-t border-slate-100">
              <div
                ref={techScrollRef}
                onMouseEnter={() => setTechPaused(true)}
                onMouseLeave={() => setTechPaused(false)}
                className="flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap items-center gap-0 w-full"
              >
                {[...dataTechStack, ...dataTechStack, ...dataTechStack].map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-6 py-1.5 border-r border-slate-100 shrink-0">
                    <img src={t.icon} alt={t.name} className="w-6 h-6 object-contain" />
                    <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">{t.name}</span>
                  </div>
                ))}
              </div>
            </div> */}

          </div>
        </section>

        {/* SECTION 1: ENTERPRISE DATA STACK ARCHITECTURAL TIER STRIPS */}
        <section className="py-10 sm:py-10 bg-white relative overflow-hidden space-y-8">
          {/* Centered Section Header */}
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto space-y-3 pb-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Layers className="w-3 h-3 text-pink-500" />
                  Enterprise Data Stack Architecture
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  6 Core Data Engineering{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    &amp; BI Modules
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  End-to-end data stack engineering from raw event stream ingestion to C-suite executive PowerBI scorecards.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Full-Width Edge-to-Edge Auto-Scroll Carousel Track */}
          <div
            ref={section1ScrollRef}
            onMouseEnter={() => setSection1Paused(true)}
            onMouseLeave={() => setSection1Paused(false)}
            className="w-full flex flex-row overflow-x-auto gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-2 pb-8 px-4 sm:px-8 flex-nowrap relative z-10"
          >
            {[...dataArchitectureTiers, ...dataArchitectureTiers, ...dataArchitectureTiers].map((tier, idx) => {
              const getTierIcon = (step: string) => {
                switch (step) {
                  case "01": return BarChart3;
                  case "02": return Database;
                  case "03": return Workflow;
                  case "04": return LineChart;
                  case "05": return Users;
                  case "06": return ShieldCheck;
                  default: return Database;
                }
              };
              const TierIcon = getTierIcon(tier.step);

              return (
                <div key={idx} className="w-[88vw] sm:w-[540px] lg:w-[580px] min-h-[280px] sm:min-h-[260px] shrink-0">
                  <ScrollReveal direction="up" delay={idx * 60} className="h-full w-full">
                    <div
                      onClick={() => openContactModal(`Architecture Tier: ${tier.title}`)}
                      className="group bg-white border border-slate-200/80 hover:border-pink-300/90 rounded-lg p-5 sm:p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1.5 cursor-pointer relative flex flex-col justify-between h-full w-full"
                    >
                      {/* Top Accent Line on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="space-y-4 text-left relative z-10">
                        {/* Internal Side-by-Side Split Grid */}
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
                                <span key={tIdx} className="inline-flex items-center gap-1.5 bg-pink-50/70 border border-pink-100/90 text-pink-700 text-[10px] font-mono font-bold px-3 py-0.5 rounded-full shadow-2xs group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                                  <span className="w-1 h-1 rounded-full bg-pink-500 group-hover:bg-white transition-colors" />
                                  <span>{t}</span>
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Right 3D Showcase Image (Direct without background, border or shadow) */}
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
              );
            })}
          </div>
        </section>

        {/* SECTION 2: 6-STAGE DATA LIFECYCLE PROCESS DECK */}
        <section className="py-10 sm:py-10 bg-white relative  overflow-hidden">
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

            {/* 6 Stage Compact Studio Stepper Deck */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {dataPipelinePhases.map((phase, pIdx) => {
                const PhaseIcon = phase.icon || Database;
                return (
                  <ScrollReveal key={pIdx} direction="up" delay={pIdx * 60} className="h-full">
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

                        {/* Compact Deliverables Chips */}
                        <div className="space-y-1.5 pt-2 border-t border-slate-100">
                          <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                            Deliverables
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {phase.deliverables.map((del, dIdx) => (
                              <div key={dIdx} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[10.5px] font-semibold text-slate-700 group-hover:border-pink-200 group-hover:bg-pink-50/40 transition-colors">
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
                          <span key={tIdx} className="text-[9px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md group-hover:bg-pink-50 group-hover:text-pink-600 transition-colors">
                            {t}
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

        {/* SECTION 3: ENTERPRISE DATA CAPABILITY & TALENT SQUADS */}
        <section className="py-12 sm:py-16 bg-white relative border-t border-slate-100">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-10 relative z-10">

            {/* Section Header */}
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-pink-500" />
                  The Digital Raiz Advantage
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Why Global Enterprises Trust Digital Raiz for{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Data &amp; BI Strategy
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
                  From custom Snowflake data warehousing to pre-vetted senior data engineering squads ready to deploy in 48 hours.
                </p>
              </div>
            </ScrollReveal>

            {/* Main 2-Column Split: Talent Pitch Left (5 cols), 8 Data Pillars Right (7 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

              {/* Left Column (5 cols) — Executive Talent Squad Pitch */}
              <ScrollReveal direction="right" className="lg:col-span-5 h-full">
                <div className="h-full bg-white border border-slate-200/90 hover:border-pink-300 rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 space-y-6 flex flex-col justify-between relative overflow-hidden group">
                  {/* Top Accent Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600" />

                  <div className="space-y-4 text-left relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold uppercase tracking-widest text-pink-700">
                      <Users className="w-3.5 h-3.5 text-pink-600" />
                      Dedicated Data Engineers from Hyderabad
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      Hire Senior Data Engineers &amp; <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">BI Architects</span>
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      Deploy pre-vetted Snowflake data warehouse architects, PySpark pipeline leads, and PowerBI developers. Augment your data teams with certified experts ready to ship in 48 hours.
                    </p>

                    {/* Feature Checkpoints */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      {[
                        "48-Hour Instant Squad Onboarding",
                        "100% IP Ownership & NDA Protection",
                        "Direct Integration into Slack & Jira Workflows"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-slate-100 relative z-10">
                    <button
                      onClick={() => openContactModal("Hire Data Engineers")}
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[11px] font-black uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border-0 flex items-center justify-center gap-2"
                    >
                      <span>Deploy Dedicated Data Engineers</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column (7 cols) — 8 Enterprise Data Assurance Pillars Grid */}
              <ScrollReveal direction="left" className="lg:col-span-7 h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <h3 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-pink-600" />
                      <span>8 Core Enterprise Data Pillars</span>
                    </h3>
                    <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-pink-600 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full">
                      Battle-Tested SLA
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "100% Data Integrity", desc: "Automated schema drift & null checks", icon: ShieldCheck },
                      { title: "48-Hr Squad Match", desc: "Instant pre-vetted data engineer onboarding", icon: Users },
                      { title: "Zero-Latency Queries", desc: "Columnar indexing & sub-second execution", icon: Zap },
                      { title: "CI/CD Data DevOps", desc: "dbt data build tool & Airflow triggers", icon: Workflow },
                      { title: "Real-Time Streaming", desc: "Apache Kafka & Spark event streams", icon: Activity },
                      { title: "SOC2 & GDPR Compliance", desc: "RBAC security & automated data masking", icon: Lock },
                      { title: "Live BI Dashboards", desc: "Real-time PowerBI & Tableau scorecards", icon: BarChart3 },
                      { title: "24/7 SLA Pipeline Support", desc: "Proactive incident monitoring & alert fixes", icon: Database }
                    ].map((item, i) => {
                      const PillarIcon = item.icon;
                      return (
                        <div
                          key={i}
                          className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/5 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 group relative overflow-hidden"
                        >
                          {/* Top Accent Line */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:border-transparent group-hover:text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-all duration-300">
                            <PillarIcon className="w-5 h-5" />
                          </div>
                          <div className="space-y-1 min-w-0 flex-1 text-left">
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

      </main>

      {/* CONTACT MODAL */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-6">
            <button
              onClick={closeContactModal}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                <Database className="w-3.5 h-3.5 text-pink-500" />
                Data Engineering Consultation
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                {modalService ? `Request ${modalService}` : "Schedule Data Strategy Call"}
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                Fill out the form below to connect with our senior Snowflake &amp; PowerBI data architects within 2 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Consultation Request Received!</h4>
                <p className="text-xs text-slate-500">
                  Our Data Engineering Lead will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-pink-500" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-pink-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-pink-500" />
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-pink-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-pink-500" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-pink-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-pink-500" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-pink-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-pink-500" />
                    Data Infrastructure Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your data warehouse, PowerBI reporting, or ETL pipeline needs..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-pink-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border-0 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Data Strategy Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
