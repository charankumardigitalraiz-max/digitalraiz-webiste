"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2, TrendingUp, Zap } from "lucide-react";

export default function DigitalMarketingHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-10 sm:py-10 border-b border-slate-100">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center py-10 lg:py-14">

          {/* LEFT COLUMN — High-Impact Typography & Action CTAs */}
          <ScrollReveal direction="left" className="flex-grow space-y-7 text-center lg:text-left max-w-[560px] order-last lg:order-first">
            <h1 className="space-y-1">
              <span className="block text-[10px] font-semibold text-slate-400 tracking-[0.3em]">Scale Your Visibility & Revenue</span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight text-[#1e1b4b] leading-[0.95]">
                Digital Marketing
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[0.95] bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Services in Hyderabad
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-[2rem] font-black tracking-tight text-slate-400 leading-[0.95] pt-1">
                For Brands Ready to Grow
              </span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal max-w-md mx-auto lg:mx-0">
              In a crowded digital market, being online is not enough. Your business needs to be discoverable by target buyers, communicate value clearly, and turn online attention into predictable revenue. <strong className="text-slate-900 font-semibold">Digital Raiz</strong> brings search engine optimization, Google Ads PPC, social media management, and performance lead generation together.
            </p>

            {/* Key Metric Stat Cards */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              {[
                { val: "+350%", label: "Organic Traffic", color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-200/60" },
                { val: "4.8x", label: "Paid Ads ROAS", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200/60" },
                { val: "100K+", label: "Leads Logged", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200/60" },
                { val: "99.2%", label: "Client SLA", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200/60" },
              ].map((s, idx) => (
                <div key={idx} className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${s.bg} border ${s.border}`}>
                  <span className={`text-[10px] font-black ${s.color}`}>{s.val}</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN — 3D Marketing Illustration with Floating Glass Badges */}
          <ScrollReveal direction="right" delay={150} className="relative w-full lg:w-[480px] shrink-0 flex justify-center order-first lg:order-last">
            <div className="relative w-full max-w-[460px]">
              <img
                src="/services/service_light_3d_marketing.webp"
                alt="Digital Marketing Services Showcase"
                className="w-full h-auto object-contain select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />

              {/* Floating badge — top-left */}
              <div className="absolute top-4 left-0 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-2.5 animate-[float_3s_ease-in-out_infinite]">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">SEO Visibility</div>
                  <div className="text-xs font-black text-emerald-600">#1 Organic Intent</div>
                </div>
              </div>

              {/* Floating badge — bottom-right */}
              <div className="absolute bottom-6 right-0 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-2.5 animate-[float_3.5s_ease-in-out_0.5s_infinite]">
                <div className="w-8 h-8 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">PPC ROAS</div>
                  <div className="text-xs font-black text-pink-600">4.8x Return Target</div>
                </div>
              </div>

              {/* Floating badge — top-right */}
              <div className="absolute top-12 right-0 sm:right-2 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-2.5 animate-[float_4s_ease-in-out_1s_infinite]">
                <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-violet-500" />
                </div>
                <div>
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Google Partner</div>
                  <div className="text-xs font-black text-violet-600">Certified Agency</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
