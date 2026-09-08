"use client";

import React from "react";
import { Sparkles, Target, Video, Users, Award, TrendingUp, Share2 } from "lucide-react";

export default function InfluencerServicesGrid() {
  const influencerServices = [
    {
      title: "Creator Discovery & Matchmaking",
      desc: "Data-driven influencer selection matching your target demographics, niche audience interest, engagement rates, and authentic brand voice.",
      tag: "Audience Target",
      icon: <Target className="w-5 h-5 text-pink-500" />,
    },
    {
      title: "UGC & Short-Video Reels",
      desc: "High-converting User Generated Content (UGC), Instagram Reels, YouTube Shorts, and unboxing videos crafted to drive instant user action.",
      tag: "Content Engine",
      icon: <Video className="w-5 h-5 text-violet-500" />,
    },
    {
      title: "End-to-End Campaign Management",
      desc: "We handle creator contracts, script briefs, product seeding, compliance, posting timelines, and approval workflows seamlessly.",
      tag: "Full Execution",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "Real Estate & Niche Influencers",
      desc: "Specialized regional creator networks tailored for real estate properties, healthcare, tech products, e-commerce, and B2B services.",
      tag: "Industry Niche",
      icon: <Award className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Performance Tracking & ROAS",
      desc: "Transparent dashboard analytics tracking real-time click-through rates, custom promo code conversions, reach velocity, and true ROI.",
      tag: "Analytics",
      icon: <TrendingUp className="w-5 h-5 text-indigo-500" />,
    },
    {
      title: "Brand Ambassador Programs",
      desc: "Building long-term, multi-month brand ambassador partnerships that establish continuous credibility and long-term customer trust.",
      tag: "Long-Term Affinity",
      icon: <Share2 className="w-5 h-5 text-rose-500" />,
    }
  ];

  return (
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
