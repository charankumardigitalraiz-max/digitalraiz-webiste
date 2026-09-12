"use client";

import React from "react";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";

import ScrollReveal from "@/components/ScrollReveal";

export default function InfluencerMarketingHero() {
  const stats = [
    { value: "500+", label: "Verified Creators", color: "text-pink-500", bg: "bg-pink-50", border: "border-pink-200/60" },
    { value: "50M+", label: "Total Impressions", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200/60" },
    { value: "4.2x", label: "Average Campaign ROAS", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200/60" },
    { value: "98%", label: "Brand Retention Rate", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200/60" },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-8 sm:pt-20 sm:pb-10 lg:py-10 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">

        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center py-10 lg:py-14">

          {/* LEFT — Typography & Action CTAs */}
          <ScrollReveal direction="left" className="flex-grow space-y-7 text-center lg:text-left max-w-[540px] order-last lg:order-first">
            <h1 className="space-y-1">
              <span className="block text-[10px] font-semibold text-slate-400 tracking-[0.3em] uppercase">Scale Your Reach &amp; Sales</span>
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
                type="button"
                onClick={() => openContactModal("Influencer Marketing", "Launch Influencer Campaign")}
                className="inline-flex items-center gap-2.5 py-3 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group shadow-sm cursor-pointer border-0"
              >
                <span>Launch Influencer Campaign</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
              <button
                type="button"
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
          </ScrollReveal>

          {/* RIGHT — Branded Creator Portrait Image Showcase */}
          <ScrollReveal direction="right" delay={150} className="relative w-full lg:w-[500px] shrink-0 flex justify-center order-first lg:order-last">
            <div className="relative w-full max-w-[480px] h-[400px] sm:h-[440px] lg:h-[450px] rounded-3xl overflow-hidden bg-white group">
              <img
                src="/influencer-marketing/digitalraiz_branded_creator_portrait.webp"
                alt="DigitalRaiz Influencer & Creator Showcase"
                className="w-full h-full object-cover object-top select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src.includes('digitalraiz_branded_creator_portrait.webp')) {
                    img.src = '/influencer-marketing/digitalraiz_campaign_dashboard.webp';
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
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
