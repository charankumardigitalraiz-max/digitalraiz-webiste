"use client";

import React, { useState } from "react";
import { TrendingUp, Search, Share2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GrowthSection() {
  const [activePhase, setActivePhase] = useState("01");

  const phases = [
    {
      id: "01",
      icon: TrendingUp,
      label: "Digital Marketing",
      heading: "Digital Marketing Company in Hyderabad",
      subheading: "for Measurable Online Growth",
      description:
        "Integrated marketing strategies based on your business goals, target audience, industry and competition — connecting your brand with the right audience.",
      items: ["Search Engine Optimization", "Social Media Marketing", "Google Ads", "Content Marketing", "Local SEO", "Lead Generation", "Performance Marketing"],
      accent: "#3b1244",
      glow: "bg-pink-500/5",
      border: "border-pink-100/80 hover:border-pink-300",
      badge: "bg-primary",
      tag: "bg-pink-50/50 text-primary border-pink-100/60",
      href: "#contact"
    },
    {
      id: "02",
      icon: Search,
      label: "SEO Services",
      heading: "SEO Company in Hyderabad",
      subheading: "for Stronger Search Visibility",
      description:
        "Improving your website's organic visibility across keyword research, on-page SEO, technical optimization, content optimization and local SEO.",
      items: ["Keyword Research", "On-Page SEO", "Technical Optimization", "Content Optimization", "Internal Linking", "Local SEO"],
      accent: "#4f46e5",
      glow: "bg-indigo-500/5",
      border: "border-indigo-100/80 hover:border-indigo-300",
      badge: "bg-indigo-600",
      tag: "bg-indigo-50/50 text-indigo-700 border-indigo-100/60",
      href: "#contact"
    },
    {
      id: "03",
      icon: Share2,
      label: "Social Media",
      heading: "Social Media Marketing in Hyderabad",
      subheading: "for Brand Engagement",
      description:
        "Consistent and purposeful presence across relevant social platforms — combining strategy, creativity, paid campaigns and performance analysis.",
      items: ["Social Media Strategy", "Content Planning", "Creative Development", "Profile Management", "Paid Campaigns", "Audience Targeting"],
      accent: "#ec4899",
      glow: "bg-pink-500/5",
      border: "border-pink-100/80 hover:border-pink-300",
      badge: "bg-pink-600",
      tag: "bg-pink-50/50 text-pink-700 border-pink-100/60",
      href: "#contact"
    }
  ];

  const currentPhase = phases.find((p) => p.id === activePhase) || phases[0];
  const CurrentIcon = currentPhase.icon;

  return (
    <section className="relative z-0 text-slate-900 bg-white font-sans overflow-hidden select-none py-14 border-t border-slate-100">

      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(74,21,75,0.012)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full space-y-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-[0.35em] block">Growth Framework</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Our Success<br />
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">Strategy</span>
            </h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm font-light max-w-xs leading-relaxed md:text-right">
            A structured three-phase interactive storyboard built to scale businesses from foundation to high-volume acquisition.
          </p>
        </div>

        {/* Single Unified Interactive Process Card */}
        <div className="bg-white border border-slate-100 rounded-xl pt-4 pb-6 px-6 sm:pt-5 sm:pb-8 sm:px-8 md:pt-6 md:pb-10 md:px-10 shadow-md relative overflow-hidden space-y-4">

          {/* Floating watermark badge representing active ID */}
          <div className="absolute right-4 bottom-4 text-[180px] font-black text-slate-200/70 select-none pointer-events-none font-mono leading-none -z-10">
            {currentPhase.id}
          </div>

          {/* Stepper Tabs - Embedded inside the card container */}
          <div className="bg-white p-1.5 rounded-xl border border-slate-100 flex flex-row gap-2 max-w-2xl mx-auto relative shadow-md z-10">
            {phases.map((p) => {
              const PIcon = p.icon;
              const isActive = p.id === activePhase;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePhase(p.id)}
                  className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl transition-all duration-300 outline-none cursor-pointer select-none group ${isActive
                    ? "shadow-md text-white scale-[1.02]"
                    : "text-slate-550 hover:bg-slate-100/50"
                    }`}
                  style={{
                    backgroundColor: isActive ? p.accent : undefined
                  }}
                >
                  {/* Node Icon Badge */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive ? "bg-white text-slate-800" : "bg-slate-100/80 text-slate-400 group-hover:text-slate-600"
                    }`}
                    style={{
                      color: isActive ? p.accent : undefined
                    }}>
                    <PIcon className="w-4.5 h-4.5" />
                  </div>

                  <div className="text-left hidden sm:block">
                    <span className={`text-[9px] font-mono font-medium uppercase tracking-[0.18em] block transition-colors duration-300 ${isActive ? "text-white/80" : "text-slate-400 group-hover:text-slate-500"
                      }`}>
                      Phase {p.id}
                    </span>
                    <span className={`text-xs md:text-[13px] font-bold tracking-tight block mt-0.5 transition-colors duration-300 ${isActive ? "text-white" : "text-slate-700 group-hover:text-slate-900"
                      }`}>
                      {p.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stepper Active Content Grid (Full-Width Grid Below) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-2">

            {/* Left Column: Description */}
            <div className="lg:col-span-7 space-y-6 relative z-10">

              {/* Header with Icon Badge */}


              <div className="space-y-1.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{currentPhase.label}</p>
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-700 leading-tight">
                  {currentPhase.heading}
                </h3>
                <p className="text-xs sm:text-sm font-bold" style={{ color: currentPhase.accent }}>
                  {currentPhase.subheading}
                </p>
              </div>

              <p className="text-slate-555 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
                {currentPhase.description}
              </p>

              {/* Bullet point badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentPhase.items.map((item, i) => (
                  <span key={i} className={`px-2.5 py-1 rounded-full text-[9px] font-bold border ${currentPhase.tag}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Performance Card */}
            <div className="lg:col-span-5 w-full relative z-10">
              <div
                className="relative rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-between gap-6 overflow-hidden shadow-md group hover:scale-[1.01] transition-all duration-300"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${currentPhase.accent}, ${currentPhase.accent}d0, #130a1c)`
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

                {/* Glowing Spotlight Blob */}
                <div className={`absolute -top-10 -right-10 w-36 h-36 rounded-full ${currentPhase.glow} blur-[50px] pointer-events-none`} />

                <div className="space-y-5 relative z-10">
                  <span className="text-[9px] font-mono text-pink-300/80 font-bold uppercase tracking-[0.2em] block">Case Metric Highlights</span>

                  {currentPhase.id === "01" && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-black uppercase tracking-tight text-white/90">Lead Gen &amp; Acquisition</h4>
                      <div className="grid grid-cols-2 gap-3.5">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 shadow-sm hover:shadow transition-shadow">
                          <p className="text-2xl font-black text-pink-300">+420%</p>
                          <p className="text-[8px] font-mono text-white/55 uppercase tracking-wider mt-0.5">Conversion Uplift</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 shadow-sm hover:shadow transition-shadow">
                          <p className="text-2xl font-black text-white">5x</p>
                          <p className="text-[8px] font-mono text-white/55 uppercase tracking-wider mt-0.5">Average Client ROI</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentPhase.id === "02" && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-black uppercase tracking-tight text-white/90">Search Engine Authority</h4>
                      <div className="grid grid-cols-2 gap-3.5">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 shadow-sm hover:shadow transition-shadow">
                          <p className="text-2xl font-black text-pink-300">98 / 100</p>
                          <p className="text-[8px] font-mono text-white/55 uppercase tracking-wider mt-0.5">Technical SEO Score</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 shadow-sm hover:shadow transition-shadow">
                          <p className="text-2xl font-black text-white">1,500+</p>
                          <p className="text-[8px] font-mono text-white/55 uppercase tracking-wider mt-0.5">Top-10 Keywords</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentPhase.id === "03" && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-black uppercase tracking-tight text-white/90">Audience Engagement</h4>
                      <div className="grid grid-cols-2 gap-3.5">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 shadow-sm hover:shadow transition-shadow">
                          <p className="text-2xl font-black text-pink-300">+250%</p>
                          <p className="text-[8px] font-mono text-white/55 uppercase tracking-wider mt-0.5">Follower Growth</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 shadow-sm hover:shadow transition-shadow">
                          <p className="text-2xl font-black text-white">1.2M+</p>
                          <p className="text-[8px] font-mono text-white/55 uppercase tracking-wider mt-0.5">Monthly Reach</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 relative z-10 text-[8px] text-white/40 font-mono uppercase tracking-widest flex items-center justify-between">
                  <span>Digital Raiz</span>
                  <span>Verified Growth</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
