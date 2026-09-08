"use client";

import React, { useState } from "react";
import { Workflow, Users, Video, Zap, TrendingUp, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export default function InfluencerCampaignWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

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

        {/* MOBILE GRID TABS (Mobile Only - 2/3 Column Grid Layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-2 pb-3 px-1 touch-manipulation">
          {workflowSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`w-full px-3 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border flex items-center justify-center gap-1.5 touch-manipulation ${isActive
                  ? "bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 text-white border-transparent shadow-md shadow-pink-500/20"
                  : "bg-white text-slate-600 border-slate-200 hover:border-pink-300 hover:bg-pink-50/50"
                  } ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <span className={`w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] shrink-0 ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                  {step.step}
                </span>
                <span className="truncate">{step.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* DESKTOP TOP: Horizontal Connected Stepper Ribbon Track (Desktop Only - Untouched) */}
        <div className="hidden lg:block relative w-full overflow-x-auto pb-4 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="flex flex-col items-center gap-2.5 relative z-10 group cursor-pointer border-0 bg-transparent"
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
                type="button"
                onClick={() => setActiveStep((prev) => (prev === 0 ? 4 : prev - 1))}
                className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-bold text-slate-500 hover:text-pink-600 cursor-pointer transition-colors border-0 bg-transparent"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev Phase</span>
              </button>

              <span className="text-[10px] font-mono font-black text-slate-400">
                0{activeStep + 1} / 05
              </span>

              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev === 4 ? 0 : prev + 1))}
                className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-bold text-pink-600 hover:text-pink-700 cursor-pointer transition-colors border-0 bg-transparent"
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
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
