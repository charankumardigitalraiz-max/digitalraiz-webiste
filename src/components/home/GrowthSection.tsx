"use client";

import React, { useState } from "react";
import { TrendingUp, Search, Share2, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function GrowthSection() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const phases = [
    {
      id: "01",
      icon: TrendingUp,
      badgeText: "PHASE 01 // ACQUISITION",
      title: "Digital Marketing",
      subheading: "Measurable Online Growth",
      desc: "Integrated marketing strategies based on your business goals, target audience, industry and competition — connecting your brand with qualified customers.",
      heroStat: "+420%",
      heroLabel: "Conversion Uplift",
      subStat: "5x Average Client ROI",
      items: ["SEO", "Google Ads", "Content Marketing", "Local SEO", "Lead Gen", "Performance Ads"],
      pillBg: "bg-pink-50 text-pink-600 border-pink-100",
      accentGrad: "from-pink-500 via-violet-600 to-indigo-600",
      href: "/contact"
    },
    {
      id: "02",
      icon: Search,
      badgeText: "PHASE 02 // AUTHORITY",
      title: "SEO Services",
      subheading: "Stronger Search Visibility",
      desc: "Improving your website's organic visibility across keyword research, on-page SEO, technical optimization, content optimization and local SEO.",
      heroStat: "98/100",
      heroLabel: "Technical SEO Score",
      subStat: "1,500+ Top-10 Ranking Keywords",
      items: ["Keyword Research", "On-Page SEO", "Technical Audit", "Internal Linking", "Local SEO"],
      pillBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      accentGrad: "from-indigo-600 via-purple-600 to-pink-600",
      href: "/contact"
    },
    {
      id: "03",
      icon: Share2,
      badgeText: "PHASE 03 // SCALE",
      title: "Social Media",
      subheading: "Brand Engagement & Reach",
      desc: "Consistent and purposeful presence across relevant social platforms — combining strategy, creativity, paid campaigns and performance analysis.",
      heroStat: "1.2M+",
      heroLabel: "Monthly Reach",
      subStat: "+250% Follower Growth Rate",
      items: ["Content Strategy", "Creative Design", "Profile Management", "Paid Campaigns", "Audience Targeting"],
      pillBg: "bg-purple-50 text-purple-600 border-purple-100",
      accentGrad: "from-purple-600 via-pink-600 to-violet-600",
      href: "/contact"
    }
  ];

  return (
    <section className="relative text-slate-900 bg-white font-sans overflow-hidden select-none py-16 border-t border-slate-100">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-12">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-pink-500" />
              Growth Framework
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Success <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Strategy</span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xl">
              A structured three-phase growth engine built to scale businesses from foundation to high-volume market acquisition.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Card Executive Studio Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {phases.map((svc, idx) => {
            const Icon = svc.icon;
            const isSelected = activeCard === idx;

            return (
              <ScrollReveal key={idx} delay={idx * 150} direction="up" className="h-full flex flex-col">
                <div
                  onClick={() => setActiveCard(idx)}
                  className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 ease-out cursor-pointer group border overflow-hidden ${isSelected
                    ? "bg-white border-pink-400 shadow-md ring-1 ring-pink-400/30 -translate-y-1"
                    : "bg-white border-slate-200/90 shadow-2xs hover:border-pink-300 hover:shadow-md hover:-translate-y-1"
                    }`}
                >
                  {/* Top Gradient Laser Bar with hover scale */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${svc.accentGrad} rounded-t-3xl -mt-6 -mx-6 sm:-mt-7 sm:-mx-7 mb-6 transition-all duration-500 group-hover:scale-x-105`} />

                  {/* Background Monogram Watermark */}
                  <span className="absolute top-5 right-6 text-5xl font-black text-slate-100 font-mono select-none pointer-events-none group-hover:text-pink-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {svc.id}
                  </span>

                  <div className="space-y-6 relative z-10">
                    {/* Top Bar: Icon + Phase Tag */}
                    {/* <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${svc.pillBg} shadow-2xs group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-slate-400 group-hover:text-pink-600 uppercase tracking-widest transition-colors duration-300">
                        {svc.badgeText}
                      </span>
                    </div> */}

                    {/* Title & Subheading */}
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-black text-[#1e1b4b] uppercase tracking-tight group-hover:text-pink-600 transition-colors duration-300">
                        {svc.title}
                      </h3>
                      <p className="text-xs font-bold text-pink-600 uppercase tracking-wider">
                        {svc.subheading}
                      </p>
                    </div>

                    {/* Hero Metric Showcase Card */}
                    <div className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-pink-50/70 via-purple-50/40 to-indigo-50/70 border border-pink-200/60 shadow-2xs space-y-1 text-center group-hover:border-pink-300 transition-all duration-300">
                      <div className="flex items-center justify-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-pink-500 shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                        <span className={`text-3xl sm:text-4xl font-black font-mono tracking-tight bg-gradient-to-r ${svc.accentGrad} bg-clip-text text-transparent`}>
                          {svc.heroStat}
                        </span>
                      </div>
                      <p className="text-[10px] font-mono font-bold text-[#1e1b4b] uppercase tracking-wider">
                        {svc.heroLabel}
                      </p>
                      <p className="text-[8.5px] font-mono font-bold text-pink-600 uppercase tracking-widest pt-0.5 border-t border-pink-100/60">
                        ★ {svc.subStat}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs leading-relaxed font-normal">
                      {svc.desc}
                    </p>

                    {/* Deliverables Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {svc.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-slate-100 text-slate-700 uppercase tracking-wider border border-slate-200/60 hover:scale-105 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-all duration-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Interactive Gradient CTA Button */}
                  {/* <div className="pt-5 mt-6 border-t border-slate-100/80 flex items-center justify-between relative z-10">
                    <Link
                      href={svc.href}
                      className="inline-flex items-center justify-between w-full py-2 px-4 rounded-2xl bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 group-hover:from-pink-500 group-hover:via-violet-600 group-hover:to-indigo-600 border border-pink-200/70 group-hover:border-transparent text-[#1e1b4b] group-hover:text-white transition-all duration-300 shadow-2xs font-extrabold"
                    >
                      <span className="text-[10px] uppercase tracking-wider font-extrabold">Explore Phase {svc.id}</span>
                      <div className="w-7 h-7 rounded-xl bg-pink-100/80 group-hover:bg-white/20 text-pink-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                      </div>
                    </Link>
                  </div> */}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
