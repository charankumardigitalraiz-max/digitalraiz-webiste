"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Smartphone,
  BarChart3,
  Cloud,
  Cpu,
  ShieldCheck,
  Sparkles,
  Megaphone,
  Server,
  Users,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Zap,
  Layers,
  Globe,
  Lock,
  Activity,
  Award
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function ServicesPage() {
  const serviceCards = [
    {
      title: "SAP Cloud Services",
      category: "cloud",
      desc: "Seamless enterprise ERP migrations, SAP S/4HANA cloud integration, custom ABAP module creation, and real-time analytics for global scale.",
      href: "/sap-cloud-services",
      icon: <Cloud className="w-5 h-5 text-cyan-400" />,
      tag: "Enterprise ERP",
      bannerImg: "/services/banners/sap_cloud_services_enterprise_btp.png",
      colorClass: "border-cyan-500/40 hover:border-cyan-400 hover:shadow-cyan-500/25",
      badgeColor: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
      dotColor: "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]",
      iconBg: "bg-cyan-950/80 border-cyan-500/40 text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]",
      btnHover: "group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-400",
      glowBg: "from-cyan-500/50 via-sky-500/40 to-blue-600/50",
      highlights: ["SAP S/4HANA Migration", "ABAP Development", "BTP Cloud Integration"]
    },
    {
      title: "Cloud & DevOps Engineering",
      category: "cloud",
      desc: "Automated CI/CD pipelines, Kubernetes container orchestration, Infrastructure as Code (IaC), AWS/Azure cloud architecture, and zero-downtime releases.",
      href: "/cloud-and-devops",
      icon: <Server className="w-5 h-5 text-sky-400" />,
      tag: "Cloud Infrastructure",
      bannerImg: "/services/banners/cloud_devops_engineering.png",
      colorClass: "border-sky-500/40 hover:border-sky-400 hover:shadow-sky-500/25",
      badgeColor: "bg-sky-500/10 border-sky-500/30 text-sky-400",
      dotColor: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]",
      iconBg: "bg-sky-950/80 border-sky-500/40 text-sky-400 group-hover:border-sky-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]",
      btnHover: "group-hover:bg-sky-500 group-hover:text-slate-950 group-hover:border-sky-400",
      glowBg: "from-sky-500/50 via-blue-500/40 to-indigo-600/50",
      highlights: ["Kubernetes & Docker", "Terraform & IaC", "AWS / Azure Cloud"]
    },
    {
      title: "AI & Generative AI Solutions",
      category: "ai",
      desc: "Custom generative AI pipelines, LLM fine-tuning, cognitive autonomous agents, semantic vector search engines, and enterprise AI workflow automation.",
      href: "/artificial-intelligence",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      tag: "Generative AI",
      bannerImg: "/services/banners/ai_generative_ai_solutions.png",
      colorClass: "border-purple-500/40 hover:border-purple-400 hover:shadow-purple-500/25",
      badgeColor: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      dotColor: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)]",
      iconBg: "bg-purple-950/80 border-purple-500/40 text-purple-400 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(192,132,252,0.5)]",
      btnHover: "group-hover:bg-purple-500 group-hover:text-slate-950 group-hover:border-purple-400",
      glowBg: "from-purple-500/50 via-fuchsia-500/40 to-pink-600/50",
      highlights: ["LLM Fine-Tuning", "Autonomous Agents", "RAG Vector Search"]
    },
    {
      title: "Data Analytics & BI",
      category: "ai",
      desc: "Enterprise data warehousing, real-time analytics dashboards, ETL data pipelines, predictive modeling, and business intelligence reporting systems.",
      href: "/data-analytics-and-bi",
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
      tag: "Business Intelligence",
      bannerImg: "/services/banners/data_analytics_executive_bi.png",
      colorClass: "border-amber-500/40 hover:border-amber-400 hover:shadow-amber-500/25",
      badgeColor: "bg-amber-500/10 border-amber-500/30 text-amber-400",
      dotColor: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]",
      iconBg: "bg-amber-950/80 border-amber-500/40 text-amber-400 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]",
      btnHover: "group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400",
      glowBg: "from-amber-500/50 via-orange-500/40 to-yellow-600/50",
      highlights: ["PowerBI & Tableau", "ETL Data Pipelines", "Predictive Analytics"]
    },
    {
      title: "Cybersecurity Services",
      category: "engineering",
      desc: "Penetration testing, vulnerability assessments, zero-trust network security, compliance audits, continuous threat monitoring, and cloud data protection.",
      href: "/cybersecurity-services",
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
      tag: "Zero-Trust Security",
      bannerImg: "/services/banners/zero_trust_cybersecurity_services.png",
      colorClass: "border-rose-500/40 hover:border-rose-400 hover:shadow-rose-500/25",
      badgeColor: "bg-rose-500/10 border-rose-500/30 text-rose-400",
      dotColor: "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.9)]",
      iconBg: "bg-rose-950/80 border-rose-500/40 text-rose-400 group-hover:border-rose-400 group-hover:shadow-[0_0_15px_rgba(251,113,133,0.5)]",
      btnHover: "group-hover:bg-rose-500 group-hover:text-slate-950 group-hover:border-rose-400",
      glowBg: "from-rose-500/50 via-red-500/40 to-pink-600/50",
      highlights: ["Penetration Testing", "SOC2 / ISO Audits", "24/7 Threat Monitoring"]
    },
    {
      title: "Web Development",
      category: "engineering",
      desc: "Tailored front-end experiences, high-performance web applications, custom SaaS portals, and headless CMS integrations built on Next.js & React.",
      href: "/web-development",
      icon: <Code className="w-5 h-5 text-pink-400" />,
      tag: "Custom Web & SaaS",
      bannerImg: "/services/banners/modern_web_development_saas.png",
      colorClass: "border-pink-500/40 hover:border-pink-400 hover:shadow-pink-500/25",
      badgeColor: "bg-pink-500/10 border-pink-500/30 text-pink-400",
      dotColor: "bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.9)]",
      iconBg: "bg-pink-950/80 border-pink-500/40 text-pink-400 group-hover:border-pink-400 group-hover:shadow-[0_0_15px_rgba(244,114,182,0.5)]",
      btnHover: "group-hover:bg-pink-500 group-hover:text-slate-950 group-hover:border-pink-400",
      glowBg: "from-pink-500/50 via-rose-500/40 to-purple-600/50",
      highlights: ["Next.js & React", "Headless SaaS", "Sub-Second Load SLA"]
    },
    {
      title: "Mobile App Development",
      category: "engineering",
      desc: "Cross-platform Flutter & React Native applications alongside native iOS & Android solutions. Intuitive UI/UX, sub-second API performance, and 99.9% crash-free SLA.",
      href: "/mobile-application",
      icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
      tag: "iOS & Android",
      bannerImg: "/services/banners/mobile_app_development.png",
      colorClass: "border-indigo-500/40 hover:border-indigo-400 hover:shadow-indigo-500/25",
      badgeColor: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
      dotColor: "bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.9)]",
      iconBg: "bg-indigo-950/80 border-indigo-500/40 text-indigo-400 group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(129,140,248,0.5)]",
      btnHover: "group-hover:bg-indigo-500 group-hover:text-slate-950 group-hover:border-indigo-400",
      glowBg: "from-indigo-500/50 via-purple-500/40 to-violet-600/50",
      highlights: ["iOS & Android Native", "Flutter & React Native", "Offline-First Sync"]
    },
    {
      title: "Testing & Quality Assurance",
      category: "engineering",
      desc: "Automated software testing, cross-browser compatibility checks, API load testing, security vulnerability scans, and rigorous QA certification.",
      href: "/testing-and-quality-assurance",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      tag: "Quality & QA",
      bannerImg: "/services/banners/testing_quality_assurance.png",
      colorClass: "border-emerald-500/40 hover:border-emerald-400 hover:shadow-emerald-500/25",
      badgeColor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      dotColor: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]",
      iconBg: "bg-emerald-950/80 border-emerald-500/40 text-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]",
      btnHover: "group-hover:bg-emerald-500 group-hover:text-slate-950 group-hover:border-emerald-400",
      glowBg: "from-emerald-500/50 via-teal-500/40 to-cyan-600/50",
      highlights: ["Automated Cypress/Playwright", "Load & Stress Testing", "API Security Audits"]
    },
    {
      title: "Digital Marketing & SEO",
      category: "growth",
      desc: "Full-funnel digital marketing in Hyderabad. High-intent search SEO, Google Ads PPC performance marketing, creative social media management, and lead funnels.",
      href: "/digital-marketing-services-in-hyderabad",
      icon: <Megaphone className="w-5 h-5 text-violet-400" />,
      tag: "SEO & Growth",
      bannerImg: "/services/banners/digital_marketing_seo_growth.png",
      colorClass: "border-violet-500/40 hover:border-violet-400 hover:shadow-violet-500/25",
      badgeColor: "bg-violet-500/10 border-violet-500/30 text-violet-400",
      dotColor: "bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.9)]",
      iconBg: "bg-violet-950/80 border-violet-500/40 text-violet-400 group-hover:border-violet-400 group-hover:shadow-[0_0_15px_rgba(167,139,250,0.5)]",
      btnHover: "group-hover:bg-violet-500 group-hover:text-slate-950 group-hover:border-violet-400",
      glowBg: "from-violet-500/50 via-purple-500/40 to-pink-600/50",
      highlights: ["High-Intent Organic SEO", "Google & Meta PPC", "Lead Funnel Optimization"]
    },
    {
      title: "Influencer Marketing",
      category: "growth",
      desc: "Creator matchmaking, UGC reels production, regional influencer networks, multi-platform publishing, and real-time ROAS attribution tracking.",
      href: "/influencer-marketing",
      icon: <Users className="w-5 h-5 text-fuchsia-400" />,
      tag: "Creators & UGC",
      bannerImg: "/services/banners/influencer_marketing_creators.png",
      colorClass: "border-fuchsia-500/40 hover:border-fuchsia-400 hover:shadow-fuchsia-500/25",
      badgeColor: "bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-400",
      dotColor: "bg-fuchsia-400 shadow-[0_0_8px_rgba(232,121,249,0.9)]",
      iconBg: "bg-fuchsia-950/80 border-fuchsia-500/40 text-fuchsia-400 group-hover:border-fuchsia-400 group-hover:shadow-[0_0_15px_rgba(232,121,249,0.5)]",
      btnHover: "group-hover:bg-fuchsia-500 group-hover:text-slate-950 group-hover:border-fuchsia-400",
      glowBg: "from-fuchsia-500/50 via-pink-500/40 to-rose-600/50",
      highlights: ["1000+ Creator Roster", "UGC Video Reels", "Live ROAS Tracking"]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryFilters = [
    { id: "all", label: "All 10 Services", icon: Sparkles },
    { id: "cloud", label: "Enterprise & Cloud", icon: Cloud },
    { id: "ai", label: "AI & Data Science", icon: Cpu },
    { id: "engineering", label: "Custom Software & QA", icon: Code },
    { id: "growth", label: "SEO & Growth", icon: Megaphone },
  ];

  const filteredServices = serviceCards.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">


        <section className="relative py-8 lg:py-0 overflow-hidden bg-[#060914] text-white border-b border-slate-800/80 w-full h-auto lg:h-screen min-h-[640px] flex items-center justify-center">

          {/* Multi-Layer Cosmic Ambient Glow Orbs */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[650px] bg-gradient-to-tr from-pink-600/20 via-violet-600/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          {/* Futuristic Cyber Constellation Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]" />

          {/* Concentric Cosmic Orbit Rings (Centering around DigitalRaiz Logo Core) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] xl:w-[580px] xl:h-[580px] rounded-full border border-pink-500/15 animate-spin-slow pointer-events-none hidden lg:block" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] xl:w-[390px] xl:h-[390px] rounded-full border border-indigo-500/20 pointer-events-none hidden lg:block" />

          {/* Floating Twinkling Star Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[14%] left-[16%] w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse shadow-lg shadow-pink-500" />
            <div className="absolute top-[22%] right-[20%] w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-500" />
            <div className="absolute bottom-[24%] left-[22%] w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-lg shadow-purple-500" />
            <div className="absolute bottom-[16%] right-[18%] w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse shadow-lg shadow-indigo-500" />
            <div className="absolute top-[50%] left-[8%] w-2 h-2 rounded-full bg-pink-400/70 animate-particle-4" />
            <div className="absolute top-[48%] right-[10%] w-2 h-2 rounded-full bg-sky-400/70 animate-particle-1" />
          </div>

          {/* DESKTOP 360-DEGREE SYMMETRICAL SOLAR CONSTELLATION ORBIT POSITIONS */}
          <div className="hidden lg:block absolute inset-0 max-w-7xl mx-auto pointer-events-none z-20">
            {serviceCards.map((service, idx) => {
              const isSelected = activeCategory === "all" || service.category === activeCategory;

              const spaceOrbitPositions = [
                "top-[3%] left-1/2 -translate-x-1/2",    // 0: SAP Cloud (Top Center: -90°)
                "top-[13%] right-[7%]",                   // 1: Cloud & DevOps (Top Right: -54°)
                "top-[36%] right-[1.5%]",                 // 2: AI & GenAI (Mid-Upper Right: -18°)
                "top-[61%] right-[1.5%]",                 // 3: Data Analytics (Mid-Lower Right: +18°)
                "bottom-[7%] right-[7%]",                 // 4: Cybersecurity (Bottom Right: +54°)
                "bottom-[2%] left-1/2 -translate-x-1/2",  // 5: Web Dev (Bottom Center: +90°)
                "bottom-[7%] left-[7%]",                  // 6: Mobile Apps (Bottom Left: +126°)
                "top-[61%] left-[1.5%]",                  // 7: Testing & QA (Mid-Lower Left: +162°)
                "top-[36%] left-[1.5%]",                  // 8: Digital Marketing (Mid-Upper Left: +198°)
                "top-[13%] left-[7%]"                     // 9: Influencer Marketing (Top Left: +234°)
              ];

              const particleAnimClasses = [
                "animate-particle-1",
                "animate-particle-2",
                "animate-particle-3",
                "animate-particle-4",
                "animate-particle-5"
              ];

              const floatDelays = ["0s", "0.4s", "0.8s", "1.2s", "0.6s", "0.2s", "1.0s", "0.5s", "0.9s", "0.3s"];

              return (
                <Link
                  key={idx}
                  href={service.href}
                  className={`absolute pointer-events-auto group px-3.5 py-2.5 sm:px-4.5 sm:py-3 rounded-full transition-all duration-500 flex items-center gap-3 cursor-pointer backdrop-blur-2xl ${spaceOrbitPositions[idx]} ${particleAnimClasses[idx % 5]} hover:[animation-play-state:paused] hover:scale-105 hover:-translate-y-2 ${isSelected
                    ? `bg-slate-900/95 border-2 text-white shadow-2xl ring-4 ring-pink-500/20 opacity-100 scale-105 z-30 ${service.colorClass}`
                    : `bg-slate-900/90 border text-slate-200 opacity-75 hover:opacity-100 shadow-xl z-20 ${service.colorClass}`
                    }`}
                  style={{
                    animationDelay: floatDelays[idx],
                    animationTimingFunction: "ease-in-out"
                  }}
                >
                  <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${service.glowBg} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10`} />

                  <div className={`w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 shadow-inner ${service.iconBg}`}>
                    {service.icon}
                  </div>

                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${service.dotColor}`} />
                        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${service.dotColor}`} />
                      </span>

                      <span className={`text-[7.5px] sm:text-[8px] font-mono font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border ${service.badgeColor}`}>
                        {service.tag}
                      </span>
                    </div>

                    <span className="text-[11px] sm:text-xs font-black uppercase text-white group-hover:text-pink-300 transition-colors tracking-tight whitespace-nowrap pt-0.5">
                      {service.title}
                    </span>
                  </div>

                  <div className={`w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 text-slate-300 ${service.btnHover} transition-all duration-300 shadow-md ml-0.5`}>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto px-6 w-full relative z-10 text-center">

            <div className="relative group mx-auto flex flex-col items-center justify-center p-4 sm:p-6 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-2xl shadow-2xl shadow-pink-500/30 z-30 ring-2 ring-pink-500/40 hover:scale-105 transition-all duration-500 w-44 h-44 sm:w-56 sm:h-56 xl:w-64 xl:h-64">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 opacity-35 blur-2xl group-hover:opacity-65 transition-opacity" />

              <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-3">
                <img
                  src="/logo/logo-without-txt.webp"
                  alt="DigitalRaiz Logo Core"
                  className="h-20 sm:h-28 xl:h-32 w-auto max-w-full object-contain filter drop-shadow-[0_0_30px_rgba(236,72,153,0.95)]"
                />
              </div>
            </div>

            <div className="block lg:hidden pt-6">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {serviceCards.map((service, idx) => {
                  const isSelected = activeCategory === "all" || service.category === activeCategory;
                  const particleAnimClasses = [
                    "animate-particle-1",
                    "animate-particle-2",
                    "animate-particle-3",
                    "animate-particle-4",
                    "animate-particle-5"
                  ];

                  return (
                    <Link
                      key={idx}
                      href={service.href}
                      className={`group relative px-4.5 py-3 rounded-full transition-all duration-500 flex items-center gap-3.5 cursor-pointer backdrop-blur-xl ${particleAnimClasses[idx % 5]} hover:[animation-play-state:paused] ${isSelected
                        ? `bg-slate-900 border-2 text-white shadow-lg shadow-pink-500/20 opacity-100 scale-105 ${service.colorClass}`
                        : `bg-slate-900/90 border text-slate-300 opacity-75 hover:opacity-100 ${service.colorClass}`
                        }`}
                    >
                      <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 ${service.iconBg}`}>
                        {service.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className={`text-[8px] font-mono font-bold uppercase tracking-widest ${service.badgeColor}`}>
                          {service.tag}
                        </span>
                        <span className="text-xs font-black uppercase text-white group-hover:text-pink-300 whitespace-nowrap">
                          {service.title}
                        </span>
                      </div>
                      <div className={`w-7 h-7 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300 ${service.btnHover} shrink-0 ml-1`}>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* <section className="py-6 bg-white border-y border-slate-200/80 overflow-hidden">
          <div className="overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex gap-4 animate-scroll-horizontal whitespace-nowrap w-max">
              {[
                { title: "SAP S/4HANA Enterprise ERP", icon: Cloud, bg: "from-cyan-500 to-blue-600" },
                { title: "Automated Kubernetes CI/CD", icon: Server, bg: "from-sky-500 to-indigo-600" },
                { title: "Custom Generative AI & RAG", icon: Cpu, bg: "from-purple-500 to-pink-600" },
                { title: "Executive PowerBI Analytics", icon: BarChart3, bg: "from-amber-500 to-orange-600" },
                { title: "Zero-Trust Cybersecurity SOC2", icon: Lock, bg: "from-rose-500 to-red-600" },
                { title: "Full-Stack Next.js & React", icon: Code, bg: "from-pink-500 to-rose-600" },
                { title: "Cross-Platform Mobile Apps", icon: Smartphone, bg: "from-indigo-500 to-purple-600" },
                { title: "Automated QA & Security Testing", icon: Award, bg: "from-emerald-500 to-teal-600" },
                { title: "High-Intent SEO & Performance PPC", icon: Megaphone, bg: "from-pink-500 to-violet-600" },
                { title: "1000+ Creator Influencer Roster", icon: Users, bg: "from-violet-500 to-purple-600" },
                { title: "SAP S/4HANA Enterprise ERP", icon: Cloud, bg: "from-cyan-500 to-blue-600" },
                { title: "Automated Kubernetes CI/CD", icon: Server, bg: "from-sky-500 to-indigo-600" },
                { title: "Custom Generative AI & RAG", icon: Cpu, bg: "from-purple-500 to-pink-600" },
                { title: "Executive PowerBI Analytics", icon: BarChart3, bg: "from-amber-500 to-orange-600" },
                { title: "Zero-Trust Cybersecurity SOC2", icon: Lock, bg: "from-rose-500 to-red-600" },
                { title: "Full-Stack Next.js & React", icon: Code, bg: "from-pink-500 to-rose-600" },
                { title: "Cross-Platform Mobile Apps", icon: Smartphone, bg: "from-indigo-500 to-purple-600" },
                { title: "Automated QA & Security Testing", icon: Award, bg: "from-emerald-500 to-teal-600" },
                { title: "High-Intent SEO & Performance PPC", icon: Megaphone, bg: "from-pink-500 to-violet-600" },
                { title: "1000+ Creator Influencer Roster", icon: Users, bg: "from-violet-500 to-purple-600" }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-800 text-xs font-bold shadow-2xs hover:shadow-md hover:scale-105 transition-all shrink-0 cursor-default group"
                  >
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.bg} text-white flex items-center justify-center shrink-0 shadow-xs`}>
                      <ItemIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className="group-hover:text-pink-600 transition-colors tracking-tight">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section> */}

        {/* 10 CORE SERVICES GRID WITH INTEGRATED VISUAL BANNERS */}
        <section className="py-16 sm:py-24 bg-white text-slate-800 border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-pink-500" />
                Service Catalog Overview
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                All 10 Digital &amp; Technology{" "}
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Service Disciplines
                </span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                Click any service banner card below to explore architecture roadmaps, enterprise frameworks, and detailed solutions.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {serviceCards.map((service, i) => (
                <ScrollReveal key={i} delay={i * 50} direction="up">
                  <div
                    className="group rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 bg-white hover:border-pink-500/50 hover:shadow-xl shadow-sm relative overflow-hidden h-full text-slate-800"
                  >
                    {/* Top Hover Gradient Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-4 relative z-10">
                      {/* Integrated Service Banner Image Card */}
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[16/9] shadow-xs group-hover:shadow-md transition-all duration-500">
                        <img
                          src={service.bannerImg}
                          alt={`${service.title} Service Banner`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute top-3 right-3 z-10">
                          <span className="text-[8.5px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border bg-white/95 backdrop-blur-md border-slate-200 text-slate-800 shadow-sm">
                            {service.tag}
                          </span>
                        </div>
                      </div>

                      {/* Content Header & Description */}
                      <div className="space-y-2.5 pt-1">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-xs">
                            {service.icon}
                          </div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                          {service.desc}
                        </p>
                      </div>

                      {/* Mini Feature Badges */}
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {service.highlights.map((h, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 text-[9px] font-medium text-slate-600 bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-md group-hover:border-pink-300/80 group-hover:text-slate-900 transition-all duration-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0 group-hover:scale-125 transition-transform" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Full-Width Vibrant Gradient Colored Navigation CTA Button */}
                    <div className="pt-4 border-t border-slate-100 mt-5 relative z-10">
                      <Link
                        href={service.href}
                        className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-[1.01] active:scale-95 transition-all duration-300 group/btn"
                      >
                        <span>Explore {service.title}</span>
                        <div className="w-6 h-6 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-pink-600 transition-all shadow-xs shrink-0">
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMPACT EXECUTIVE CONSULTATION CTA BANNER - WHITE/LIGHT THEME */}
        <section className="py-5 sm:py-6 bg-gradient-to-br from-slate-50 via-white to-pink-50/40 text-slate-900 relative overflow-hidden border-t border-slate-200">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row gap-4 items-center justify-between relative z-10">
            <div className="space-y-1.5 text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-pink-50 border border-pink-200 text-[8.5px] font-mono font-bold uppercase tracking-widest text-pink-600">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping" />
                Custom Software &amp; Growth Roadmap
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 leading-snug">
                Ready to Build Your Custom{" "}
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Solution?
                </span>
              </h2>

              {/* Trust Badges */}
              <div className="pt-0.5 flex flex-wrap items-center justify-center md:justify-start gap-3 text-[9px] font-mono text-slate-600">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" /> 24-Hour Turnaround</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" /> 100% Code Ownership</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" /> Enterprise SLA</span>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto text-center">
              <button
                onClick={() => openContactModal("General Service Proposal")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
              >
                <span>Get Custom Proposal</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
