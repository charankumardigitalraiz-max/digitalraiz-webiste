"use client";

import React, { useState } from "react";
import { TrendingUp, Search, Share2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

// ============================================================================
// SPECIAL CARDS DESIGN VERSION (BACKUP FOR USER COMPARISON)
// ============================================================================

export default function GrowthSection() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const phases = [
    {
      id: "01",
      icon: TrendingUp,
      badgeText: "Phase 01 // Acquisition",
      title: "Digital Marketing",
      subheading: "Measurable Online Growth",
      desc: "Integrated marketing strategies based on your business goals, target audience, industry and competition — connecting your brand with the right audience.",
      metrics: [
        { value: "+420%", label: "Conversion Uplift" },
        { value: "5x", label: "Average Client ROI" }
      ],
      items: ["SEO", "Google Ads", "Content Marketing", "Local SEO", "Lead Gen", "Performance Ads"],
      pillBg: "bg-pink-50 text-pink-600 border-pink-100",
      href: "/contact"
    },
    {
      id: "02",
      icon: Search,
      badgeText: "Phase 02 // Authority",
      title: "SEO Services",
      subheading: "Stronger Search Visibility",
      desc: "Improving your website's organic visibility across keyword research, on-page SEO, technical optimization, content optimization and local SEO.",
      metrics: [
        { value: "98/100", label: "Technical SEO Score" },
        { value: "1,500+", label: "Top-10 Keywords" }
      ],
      items: ["Keyword Research", "On-Page SEO", "Technical Audit", "Internal Linking", "Local SEO"],
      pillBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      href: "/contact"
    },
    {
      id: "03",
      icon: Share2,
      badgeText: "Phase 03 // Scale",
      title: "Social Media",
      subheading: "Brand Engagement & Reach",
      desc: "Consistent and purposeful presence across relevant social platforms — combining strategy, creativity, paid campaigns and performance analysis.",
      metrics: [
        { value: "+250%", label: "Follower Growth" },
        { value: "1.2M+", label: "Monthly Reach" }
      ],
      items: ["Content Strategy", "Creative Design", "Profile Management", "Paid Campaigns", "Audience Targeting"],
      pillBg: "bg-purple-50 text-purple-600 border-purple-100",
      href: "/contact"
    }
  ];

  return (
    <section className="relative text-slate-900 bg-white font-sans overflow-hidden select-none py-16 border-t border-slate-100">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.02)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full space-y-12">

        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              Growth Framework
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e1b4b] uppercase tracking-tight leading-[0.95]">
            Our Success <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Strategy</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xl">
            A structured three-phase growth engine built to scale businesses from foundation to high-volume market acquisition.
          </p>
        </div>

        {/* SPECIAL CARDS: 3-Card High-Impact Studio Matrix System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {phases.map((svc, idx) => {
            const Icon = svc.icon;
            const isSelected = activeCard === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveCard(idx)}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer group border ${isSelected
                    ? "bg-white border-pink-300 shadow-xl ring-2 ring-pink-500/20 scale-[1.02]"
                    : "bg-white/80 border-slate-200/80 hover:border-slate-300 hover:shadow-md"
                  }`}
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-6 text-6xl font-black text-slate-100 font-mono select-none pointer-events-none group-hover:text-pink-100/60 transition-colors">
                  {svc.id}
                </span>

                <div className="space-y-6 relative z-10">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${svc.pillBg} shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      {svc.badgeText}
                    </span>
                  </div>

                  {/* Title & Subheading */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-black text-[#1e1b4b] uppercase tracking-tight">
                      {svc.title}
                    </h3>
                    <p className="text-xs font-bold text-pink-600 uppercase tracking-wider">
                      {svc.subheading}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {svc.desc}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    {svc.metrics.map((m, i) => (
                      <div key={i} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <p className="text-lg font-black text-[#1e1b4b] leading-none">{m.value}</p>
                        <p className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {svc.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-slate-100 text-slate-700 uppercase tracking-wider border border-slate-200/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <Link href={svc.href} className="text-xs font-black text-[#1e1b4b] uppercase tracking-wider group-hover:text-pink-600 transition-colors flex items-center gap-2">
                    <span>Explore Phase {svc.id}</span>
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-pink-600 text-slate-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
