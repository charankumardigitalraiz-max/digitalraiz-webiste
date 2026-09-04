"use client";

import React, { useRef, useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import { openContactModal } from "@/components/ContactModal";
import {
  ArrowRight,
  Sparkles,
  Users,
  TrendingUp,
  Video,
  Target,
  Award,
  CheckCircle2,
  Camera,
  Play,
  Share2,
  Zap,
  ExternalLink,
  Flame,
  MessageCircle,
  Eye,
  Heart,
  Workflow,
  ChevronLeft,
  ChevronRight
} from "lucide-react";



export default function InfluencerMarketingPage() {
  const socialScrollRef = useRef<HTMLDivElement>(null);
  const [socialPaused, setSocialPaused] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const container = socialScrollRef.current;
    if (!container || socialPaused) return;
    let animationId: number;
    const scrollStep = () => {
      if (!container) return;
      container.scrollLeft += 0.8;
      if (container.scrollLeft >= container.scrollWidth / 3) {
        container.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(scrollStep);
    };
    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, [socialPaused]);

  const socialPlatforms = [
    {
      name: "Instagram",
      tag: "Reels & Stories",
      bg: "bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600",
      tagColor: "text-pink-600",
      border: "hover:border-pink-300",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "YouTube",
      tag: "Shorts & Vlogs",
      bg: "bg-red-600",
      tagColor: "text-red-600",
      border: "hover:border-red-300",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      tag: "B2B Leaders",
      bg: "bg-sky-700",
      tagColor: "text-sky-600",
      border: "hover:border-sky-300",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6z" />
        </svg>
      )
    },
    {
      name: "TikTok & UGC",
      tag: "Viral Trends",
      bg: "bg-slate-900",
      tagColor: "text-violet-600",
      border: "hover:border-slate-400",
      icon: (
        <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.96v6.94c0 1.94-.78 3.8-2.15 5.17-1.37 1.37-3.23 2.15-5.17 2.15-1.94 0-3.8-.78-5.17-2.15-1.37-1.37-2.15-3.23-2.15-5.17 0-1.94.78-3.8 2.15-5.17 1.37-1.37 3.23-2.15 5.17-2.15 1.05 0 2.08.23 3.03.68v4.22c-.44-.27-.96-.42-1.5-.42-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3V.02z" />
        </svg>
      )
    },
    {
      name: "Meta / FB",
      tag: "Community Video",
      bg: "bg-blue-600",
      tagColor: "text-blue-600",
      border: "hover:border-blue-300",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: "Snapchat",
      tag: "Gen-Z Reach",
      bg: "bg-amber-400",
      tagColor: "text-amber-600",
      border: "hover:border-amber-300",
      icon: (
        <svg className="w-5 h-5 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c-3.204 0-5.914 2.247-6.425 5.32-.128.775.05 1.58.498 2.227.323.468.423.834.331 1.25-.098.448-.48.917-1.289 1.157-.597.177-1.196.48-1.579 1.002-.45.614-.509 1.36-.163 2.057.391.789 1.233 1.282 2.164 1.282.261 0 .524-.038.78-.115.547-.164.981.026 1.294.398.536.637 1.378 1.488 2.395 1.895.619.248 1.298.375 2.001.375s1.382-.127 2.001-.375c1.017-.407 1.859-1.258 2.395-1.895.313-.372.747-.562 1.294-.398.256.077.519.115.78.115.931 0 1.773-.493 2.164-1.282.346-.697.287-1.443-.163-2.057-.383-.522-.982-.825-1.579-1.002-.809-.24-1.191-.709-1.289-1.157-.092-.416.008-.782.331-1.25.448-.647.626-1.452.498-2.227C17.914 4.41 15.204 2.163 12 2.163z" />
        </svg>
      )
    }
  ];

  const stats = [
    { value: "500+", label: "Verified Creators", color: "text-pink-500", bg: "bg-pink-50", border: "border-pink-200/60" },
    { value: "50M+", label: "Total Impressions", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200/60" },
    { value: "4.2x", label: "Average Campaign ROAS", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200/60" },
    { value: "98%", label: "Brand Retention Rate", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200/60" },
  ];

  const influencerServices = [
    {
      title: "Creator Discovery & Matchmaking",
      desc: "Data-driven influencer selection matching your target demographics, niche audience interest, engagement rates, and authentic brand voice.",
      tag: "Audience Target",
      icon: <Target className="w-5 h-5 text-pink-500" />,
      color: "from-pink-50 to-pink-100/30",
      accent: "border-pink-200/60 text-pink-700"
    },
    {
      title: "UGC & Short-Video Reels",
      desc: "High-converting User Generated Content (UGC), Instagram Reels, YouTube Shorts, and unboxing videos crafted to drive instant user action.",
      tag: "Content Engine",
      icon: <Video className="w-5 h-5 text-violet-500" />,
      color: "from-violet-50 to-violet-100/30",
      accent: "border-violet-200/60 text-violet-700"
    },
    {
      title: "End-to-End Campaign Management",
      desc: "We handle creator contracts, script briefs, product seeding, compliance, posting timelines, and approval workflows seamlessly.",
      tag: "Full Execution",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      color: "from-emerald-50 to-emerald-100/30",
      accent: "border-emerald-200/60 text-emerald-700"
    },
    {
      title: "Real Estate & Niche Influencers",
      desc: "Specialized regional creator networks tailored for real estate properties, healthcare, tech products, e-commerce, and B2B services.",
      tag: "Industry Niche",
      icon: <Award className="w-5 h-5 text-amber-500" />,
      color: "from-amber-50 to-amber-100/30",
      accent: "border-amber-200/60 text-amber-700"
    },
    {
      title: "Performance Tracking & ROAS",
      desc: "Transparent dashboard analytics tracking real-time click-through rates, custom promo code conversions, reach velocity, and true ROI.",
      tag: "Analytics",
      icon: <TrendingUp className="w-5 h-5 text-indigo-500" />,
      color: "from-indigo-50 to-indigo-100/30",
      accent: "border-indigo-200/60 text-indigo-700"
    },
    {
      title: "Brand Ambassador Programs",
      desc: "Building long-term, multi-month brand ambassador partnerships that establish continuous credibility and long-term customer trust.",
      tag: "Long-Term Affinity",
      icon: <Share2 className="w-5 h-5 text-rose-500" />,
      color: "from-rose-50 to-rose-100/30",
      accent: "border-rose-200/60 text-rose-700"
    }
  ];

  const creatorTiers = [
    {
      tier: "Nano & Micro Creators",
      followers: "10K - 100K Followers",
      perk: "Highest Engagement & Local Trust",
      bestFor: "Hyper-local campaigns, app installs & niche products",
      badge: "High Conversion",
      badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      tier: "Macro Influencers",
      followers: "100K - 1M Followers",
      perk: "Massive Organic Reach & Authority",
      bestFor: "Brand awareness, product launches & regional reach",
      badge: "High Impact",
      badgeBg: "bg-pink-50 text-pink-600 border-pink-200"
    },
    {
      tier: "Celebrity & Mega Talent",
      followers: "1M+ Followers",
      perk: "Industry Stardom & National Prestige",
      bestFor: "National brand building & major real estate showcases",
      badge: "Maximum Visibility",
      badgeBg: "bg-violet-50 text-violet-600 border-violet-200"
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Strategy & Niche Mapping",
      desc: "We define campaign KPIs, target demographics, creator content style, and conversion offer funnels tailored to your brand goals.",
      tag: "Phase 1: Planning",
      icon: <Workflow className="w-5 h-5 text-pink-500" />,
      duration: "1 Week",
      qualityGate: "KPI & Demographic Signoff",
      tools: ["Demographic Audit", "Funnel Mapping", "Competitor Matrix"],
      deliverables: [
        "Audience Demographic & Interest Audit",
        "Creator Selection Criteria Deck",
        "Campaign Offer & Funnel Architecture",
        "Target ROAS & Reach Benchmark Specs"
      ]
    },
    {
      step: "02",
      title: "Creator Matchmaking & Vetting",
      desc: "Our team filters and selects verified influencers with authentic audience engagement, zero fake followers, and true brand alignment.",
      tag: "Phase 2: Discovery",
      icon: <Users className="w-5 h-5 text-violet-500" />,
      duration: "1–2 Weeks",
      qualityGate: "Audience Authenticity Check",
      tools: ["Audience Scan", "Contract Management", "Engagement Audit"],
      deliverables: [
        "Vetted Creator Roster & Media Kits",
        "Historical Engagement & Reach Audit",
        "Creator Contract & Rights Agreements",
        "Rate Negotiation & Budget Allocation"
      ]
    },
    {
      step: "03",
      title: "Creative Brief & Product Seeding",
      desc: "We deliver structured UGC script briefs, product samples, hook guidelines, and brand compliance rules directly to creators.",
      tag: "Phase 3: Production",
      icon: <Video className="w-5 h-5 text-indigo-500" />,
      duration: "2 Weeks",
      qualityGate: "Brand Compliance Review",
      tools: ["UGC Scripts", "Sample Dispatch", "Hook Optimization"],
      deliverables: [
        "Structured Video Briefs & Hook Scripts",
        "Product Sample Logistics & Dispatch",
        "Draft Video Review & Content Revisions",
        "Rights Licensing & Usage Permissions"
      ]
    },
    {
      step: "04",
      title: "Synchronized Multi-Platform Launch",
      desc: "Campaign posts go live in coordinated waves across Instagram Reels, YouTube Shorts, TikTok, and LinkedIn for maximum reach velocity.",
      tag: "Phase 4: Distribution",
      icon: <Zap className="w-5 h-5 text-emerald-500" />,
      duration: "1 Week Wave",
      qualityGate: "Peak Engagement Window Launch",
      tools: ["Insta Reels", "YouTube Shorts", "Promo Code Track"],
      deliverables: [
        "Synchronized Posting Schedule Launch",
        "Custom Promo Code & Tracked Link Setup",
        "Live Post Monitoring & Comment Seeding",
        "Social Amplifier Paid Boosting (Optional)"
      ]
    },
    {
      step: "05",
      title: "Performance & ROAS Attribution",
      desc: "Track real-time conversions, click velocity, total impressions, sales attribution, and ROAS metrics via a transparent reporting dashboard.",
      tag: "Phase 5: Attribution",
      icon: <TrendingUp className="w-5 h-5 text-amber-500" />,
      duration: "Ongoing Reporting",
      qualityGate: "Attribution & ROI Verification",
      tools: ["Google Analytics", "Pixel Attribution", "Sales Report"],
      deliverables: [
        "Real-Time Attribution Dashboard",
        "Cost-Per-Acquisition & ROAS Metrics",
        "Top-Performing Creator Highlight Report",
        "Next-Campaign Scaling Recommendations"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">

        {/* HERO SECTION — Clean Light Split Layout */}
        <section className="relative overflow-hidden bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-6 w-full relative z-10">

            {/* Top Eyebrow Row */}
            {/* <div className="flex items-center justify-between pt-10 pb-6 border-b border-slate-100/80">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-200/60 text-[9px] font-bold uppercase tracking-[0.2em] text-pink-600">
                <Sparkles className="w-3 h-3" />
                Influencer & Creator Marketing Agency
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[9px] text-slate-400 font-mono uppercase tracking-widest">
                <span>DigitalRaiz</span>
                <span>/</span>
                <span className="text-pink-500 font-bold">Influencer Marketing</span>
              </div>
            </div> */}

            {/* Main Content Split */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center py-10 lg:py-14">

              {/* LEFT — Typography & Action CTAs */}
              <div className="flex-grow space-y-7 text-center lg:text-left max-w-[540px]">
                <h1 className="space-y-1">
                  <span className="block text-[10px] font-semibold text-slate-400 tracking-[0.3em] uppercase">Scale Your Reach & Sales</span>
                  <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#1e1b4b] leading-[0.95]">
                    Influencer
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[0.95] bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                    Marketing
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-200 leading-[0.95]">
                    Campaigns
                  </span>
                </h1>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
                  Connect your brand with top creators and influencers to drive viral reach, audience trust, and measurable revenue growth. We handle creator matchmaking, UGC reels, and real-time ROAS tracking to maximize campaign impact.
                </p>

                {/* Inline Stat Pills */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                  {stats.map((s) => (
                    <div key={s.label} className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${s.bg} border ${s.border}`}>
                      <span className={`text-[10px] font-black ${s.color}`}>{s.value}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <button
                    onClick={() => openContactModal("Influencer Marketing", "Launch Influencer Campaign")}
                    className="inline-flex items-center gap-2.5 py-3 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group shadow-sm cursor-pointer border-0"
                  >
                    <span>Launch Influencer Campaign</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById("creator-services");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2.5 py-3 px-7 rounded-xl bg-transparent hover:bg-slate-50 border border-slate-200 hover:border-pink-300 text-slate-600 hover:text-pink-600 text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
                  >
                    <span>Explore Services</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* RIGHT — Branded Creator Portrait Image Showcase (Height Constrained) */}
              <div className="relative w-full lg:w-[500px] shrink-0 flex justify-center">
                <div className="relative w-full max-w-[480px] h-[400px] sm:h-[440px] lg:h-[450px] rounded-3xl overflow-hidden   bg-white group">
                  <img
                    src="/influencer-marketing/digitalraiz_branded_creator_portrait.png"
                    alt="DigitalRaiz Influencer & Creator Showcase"
                    className="w-full h-full object-cover object-top select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (img.src.includes('digitalraiz_branded_creator_portrait.png')) {
                        img.src = '/influencer-marketing/digitalraiz_campaign_dashboard.png';
                      }
                    }}
                  />

                  {/* Floating badge — bottom-right */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-mono text-slate-400 uppercase">Average ROAS</div>
                      <div className="text-xs font-extrabold text-emerald-600">4.2x Target</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* INFINITE SCROLLING SOCIAL MEDIA TICKER (FULL WIDTH EDGE-TO-EDGE) */}
        <section className="py-6 border-y border-slate-100 overflow-hidden relative w-full">
          <div className="w-full relative overflow-hidden">

            {/* Left & Right Edge Gradient Blur Masks */}
            <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div
              ref={socialScrollRef}
              onMouseEnter={() => setSocialPaused(true)}
              onMouseLeave={() => setSocialPaused(false)}
              className="flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap items-center gap-4 py-1 px-4"
            >
              {socialPlatforms.concat(socialPlatforms).concat(socialPlatforms).concat(socialPlatforms).map((plat, idx) => (
                <div
                  key={idx}
                  className="group p-0.5 rounded-lg bg-gradient-to-r from-slate-200/80 via-pink-200/60 to-violet-200/80 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600 transition-all duration-500 shrink-0 cursor-pointer select-none hover:scale-[1.03] hover:-translate-y-0.5"
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-lg py-2 px-4 flex items-center gap-3 shadow-2xs group-hover:shadow-md transition-shadow">
                    <div className={`w-7 h-7 rounded-full ${plat.bg} flex items-center justify-center shrink-0 shadow-2xs group-hover:rotate-12 transition-transform duration-300`}>
                      {plat.icon}
                    </div>
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <span className="text-xs font-black text-slate-800 tracking-tight">{plat.name}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100 ${plat.tagColor}`}>
                        {plat.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE INFLUENCER SERVICES GRID */}
        <section id="creator-services" className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-14 relative z-10">

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-pink-500" />
                End-To-End Creator Solutions
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1e1b4b] tracking-tight leading-tight">
                Complete Creator{" "}
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Campaign Ecosystem
                </span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto">
                From strategy and creator matchmaking to UGC video production, compliance, and real-time ROAS tracking — we manage everything.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {influencerServices.map((svc, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white border border-slate-200/80 hover:border-pink-300/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1.5 flex flex-col justify-between space-y-5 cursor-pointer overflow-hidden"
                >
                  {/* Top Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Subtle Ambient Background Glow on Hover */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-pink-400/10 via-violet-500/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    {/* Header: Icon Badge & Index Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-pink-50/80 border border-pink-100/80 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:border-transparent group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:shadow-md group-hover:shadow-pink-500/25 shrink-0">
                        {svc.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 group-hover:border-pink-200 group-hover:text-pink-600 transition-colors">
                          {svc.tag}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-pink-500 transition-colors">
                          0{idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                        {svc.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify">
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action CTA */}
                  {/* <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-pink-600 transition-colors">
                      Explore Capability
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 group-hover:bg-pink-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div> */}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CREATOR TIERS & INFLUENCER MATRIX */}
        <section className="py-10 bg-slate-50/60 border-y border-slate-100 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12 relative z-10">

            {/* Refined Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-pink-500" />
                Tiered Talent Matrix
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1e1b4b] tracking-tight leading-tight">
                Creator Tiers{" "}
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Tailored to Your Goals
                </span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto">
                Whether you need high-conversion micro-creators or national celebrity endorsements, we match your brand with verified creator talent pools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-2">
              {creatorTiers.map((tier, idx) => {
                const isFeatured = idx === 1;
                return (
                  <div
                    key={idx}
                    className={`relative rounded-3xl p-7 flex flex-col justify-between space-y-6 transition-all duration-300 ${isFeatured
                      ? "bg-white border-2 border-pink-500 shadow-xl shadow-pink-500/10 scale-100 md:scale-[1.03] z-10"
                      : "bg-white border border-slate-200/80 shadow-2xs hover:shadow-lg hover:border-pink-300"
                      }`}
                  >
                    {isFeatured && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-[9px] font-mono font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md whitespace-nowrap">
                        ★ Most Popular Tier
                      </div>
                    )}

                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${tier.badgeBg}`}>
                          {tier.badge}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          0{idx + 1}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-[#1e1b4b] tracking-tight">{tier.tier}</h3>
                        <div className="text-xs font-bold text-pink-600 font-mono">{tier.followers}</div>
                      </div>

                      <div className="space-y-3 text-xs text-slate-600 font-normal pt-2 border-t border-slate-100">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span><strong className="text-slate-800 font-bold">Key Advantage:</strong> {tier.perk}</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span><strong className="text-slate-800 font-bold">Best For:</strong> {tier.bestFor}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => openContactModal("Influencer Marketing", `Creator Tier: ${tier.tier}`)}
                      className={`w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-center block transition-all duration-300 shadow-xs cursor-pointer border-0 ${isFeatured
                        ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white shadow-pink-500/20 hover:scale-[1.02] active:scale-95"
                        : "bg-slate-50 hover:bg-pink-50 border border-slate-200 hover:border-pink-200 text-[#1e1b4b] hover:text-pink-600"
                        }`}
                    >
                      Select Creator Tier
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* STEP-BY-STEP CAMPAIGN WORKFLOW */}
        <section className="py-16 bg-gradient-to-b from-white via-slate-50/40 to-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12 relative z-10">

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                <Workflow className="w-3 h-3 text-pink-500" />
                Execution Framework
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1e1b4b] tracking-tight leading-tight">
                How We Run Your{" "}
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Influencer Campaign
                </span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto">
                From technical niche mapping and creator matchmaking to UGC seeding, multi-platform publishing, and ROAS attribution.
              </p>
            </div>

            {/* TOP: Horizontal Connected Stepper Ribbon Track */}
            <div className="relative w-full overflow-x-auto pb-4 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex items-center justify-between min-w-[650px] relative px-4">

                {/* Connecting Line Track */}
                <div className="absolute top-6 left-10 right-10 h-0.5 bg-slate-200 -z-0" />
                <div
                  className="absolute top-6 left-10 h-0.5 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-600 transition-all duration-500 -z-0"
                  style={{ width: `${(activeStep / 4) * 88}%` }}
                />

                {workflowSteps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      onMouseEnter={() => setActiveStep(idx)}
                      className="flex flex-col items-center gap-2.5 relative z-10 group cursor-pointer"
                    >
                      <div className={`w-12 h-12 rounded-2xl font-mono font-black text-xs flex items-center justify-center transition-all duration-300 shadow-xs ${isActive
                        ? "bg-gradient-to-br from-pink-500 to-violet-600 text-white scale-110 shadow-pink-500/20 shadow-md ring-4 ring-pink-500/10"
                        : "bg-white text-slate-500 border border-slate-200 group-hover:border-pink-300 group-hover:scale-105"
                        }`}>
                        {step.step}
                      </div>

                      <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider max-w-[100px] text-center truncate transition-colors ${isActive ? "text-pink-600 font-extrabold" : "text-slate-400 group-hover:text-slate-600"
                        }`}>
                        {step.title.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}

              </div>
            </div>

            {/* DUAL-CARD STAGE INSPECTOR DISPLAY */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

              {/* LEFT CARD (7 cols): Executive Summary & Quality Gate */}
              <div className="lg:col-span-7 bg-white rounded-lg p-7 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6 relative overflow-hidden">
                <div className="space-y-4">

                  {/* Phase Badge & Header */}
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                    <div className="w-12 h-12 rounded-lg bg-pink-50 border border-pink-100 text-pink-600 flex items-center justify-center shrink-0 shadow-xs">
                      {workflowSteps[activeStep].icon}
                    </div>
                    <div className="space-y-0.5">
                      <div className="inline-flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-pink-600">
                        <span>Phase 0{activeStep + 1} of 05</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="text-slate-400">{workflowSteps[activeStep].tag}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#1e1b4b] tracking-tight">
                        {workflowSteps[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  {/* Executive Summary */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {workflowSteps[activeStep].desc}
                  </p>

                </div>

                {/* Timeframe & Quality Gate Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                    <span className="text-[9px] font-mono text-slate-400 uppercase font-bold">Execution Timeframe</span>
                    <div className="text-xs font-black text-[#1e1b4b]">⏱ {workflowSteps[activeStep].duration}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-0.5">
                    <span className="text-[9px] font-mono text-emerald-600 uppercase font-bold">Quality SLA Gate</span>
                    <div className="text-xs font-black text-emerald-700 truncate">{workflowSteps[activeStep].qualityGate}</div>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD (5 cols): Key Deliverables Checklist & Tools */}
              <div className="lg:col-span-5 bg-white rounded-lg p-7 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6">

                <div className="space-y-4">
                  {/* Header Row */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-[9.5px] font-mono font-bold uppercase tracking-widest text-pink-600">Key Phase Deliverables</span>
                    <span className="text-[8px] font-mono text-emerald-600 font-bold bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full uppercase">Verified</span>
                  </div>

                  {/* Bullet Checklist */}
                  <div className="space-y-2.5 text-xs font-semibold text-slate-700">
                    {workflowSteps[activeStep].deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Toolchain Badges */}
                  <div className="pt-2 space-y-1.5">
                    <span className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-slate-400 block">Execution Toolchain</span>
                    <div className="flex flex-wrap gap-1.5">
                      {workflowSteps[activeStep].tools.map((tool, tIdx) => (
                        <span key={tIdx} className="text-[9.5px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200/70 shadow-2xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step Controls Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep((prev) => (prev === 0 ? 4 : prev - 1))}
                    className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-bold text-slate-500 hover:text-pink-600 cursor-pointer transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Prev Phase</span>
                  </button>

                  <span className="text-[10px] font-mono font-black text-slate-400">
                    0{activeStep + 1} / 05
                  </span>

                  <button
                    onClick={() => setActiveStep((prev) => (prev === 4 ? 0 : prev + 1))}
                    className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-bold text-pink-600 hover:text-pink-700 cursor-pointer transition-colors"
                  >
                    <span>Next Phase</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

            {/* STEP CARDS GRID (5 Connected Step Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {workflowSteps.map((ws, i) => {
                const isCurrent = activeStep === i;
                return (
                  <div
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`group relative rounded-lg p-5 border transition-all duration-300 flex flex-col justify-between space-y-5 cursor-pointer overflow-hidden ${isCurrent
                      ? "bg-white border-pink-400 shadow-lg shadow-pink-500/10 -translate-y-1"
                      : "bg-white border-slate-200/80 shadow-2xs hover:shadow-md hover:border-pink-300 hover:-translate-y-0.5"
                      }`}
                  >
                    {/* Top Hover Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`w-9 h-9 rounded-xl font-mono font-black text-xs flex items-center justify-center transition-all duration-300 ${isCurrent
                          ? "bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-600 text-white shadow-md shadow-pink-500/20"
                          : "bg-slate-100 text-slate-600 group-hover:bg-pink-50 group-hover:text-pink-600"
                          }`}>
                          {ws.step}
                        </div>
                        <span className="text-[9px] font-mono font-bold text-slate-400 group-hover:text-pink-600 transition-colors uppercase tracking-widest">
                          Phase 0{i + 1}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-xs font-bold text-[#1e1b4b] group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                          {ws.title}
                        </h3>
                        <p className="text-slate-500 text-[11px] font-normal leading-relaxed line-clamp-3">
                          {ws.desc}
                        </p>
                      </div>
                    </div>

                    {/* <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono font-bold text-slate-400 group-hover:text-pink-600 transition-colors">
                      <span>{ws.duration}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div> */}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* CALL TO ACTION BANNER */}
        <ServiceCtaBanner
          badge="Influencer Campaign Growth"
          title="Ready to Scale Your Brand with Top Creator Influencers?"
          description="UGC Reels • Creator Matchmaking • Multi-Platform Campaign Strategy in Hyderabad"
        />

      </main>

      <Footer />
    </div>
  );
}
