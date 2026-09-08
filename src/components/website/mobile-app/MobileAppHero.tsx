"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";
import { Sparkles, ArrowRight, ExternalLink, Smartphone, Star, ShieldCheck, Award, Cpu } from "lucide-react";

export default function MobileAppHero() {
  const stats = [
    { value: "500K+", label: "App Downloads", desc: "Across iOS and Play Store", icon: <Award className="w-5 h-5 text-pink-500" /> },
    { value: "4.8★", label: "Average Rating", desc: "Highly rated by users", icon: <Star className="w-5 h-5 text-indigo-500" /> },
    { value: "5M+", label: "Monthly Sessions", desc: "Seamless backend scale", icon: <Cpu className="w-5 h-5 text-pink-500" /> },
    { value: "99.9%", label: "Crash-Free Sessions", desc: "Robust bug monitoring", icon: <ShieldCheck className="w-5 h-5 text-indigo-500" /> },
  ];

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-100">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10">

        {/* Hero Main Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center py-10 lg:py-14">

          {/* LEFT — H1 & Intro Copy from PDF */}
          <ScrollReveal direction="left" className="flex-grow space-y-7 text-center lg:text-left max-w-[560px]">
            <h1 className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest w-fit">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                Engineering Scalable Mobile Products
              </div>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-[#1e1b4b] leading-tight">
                Mobile App Development Company{" "}
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  in Hyderabad
                </span>
              </span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
              At Digital Raiz, we build mobile applications that combine thoughtful design, reliable technology, and real business purpose. As a leading mobile app development company in Hyderabad, we work with startups, growing businesses, and established organizations to turn ideas into intuitive, scalable, and engaging mobile experiences.
            </p>

            {/* Inline Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/60 transition-transform hover:scale-105">
                  {s.icon}
                  <span className="text-[10px] font-black text-[#1e1b4b]">{s.value}</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={() => openContactModal("Mobile App Development", "Start Mobile Application Today")}
                className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group shadow-sm cursor-pointer border-0"
              >
                <span>Start Mobile Application Today</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("mobile-services");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-transparent hover:bg-slate-50 border border-slate-200 hover:border-pink-300 text-slate-600 hover:text-pink-600 text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group cursor-pointer"
              >
                <span>Explore Services</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </ScrollReveal>

          {/* RIGHT — Clean Realistic Smartphone Showcase */}
          <ScrollReveal direction="right" delay={150} className="relative w-full lg:w-[480px] shrink-0 flex justify-center items-center py-6">

            {/* Smartphone Device Frame */}
            <div className="relative w-[250px] sm:w-[270px] h-[500px] sm:h-[530px] rounded-[38px] border-[6px] border-slate-900 bg-slate-950 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-pink-500/10 group">

              {/* Dynamic Island / Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-900 rounded-full z-30 flex items-center justify-end px-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              </div>

              {/* App Screen Viewport */}
              <div className="absolute inset-0 overflow-y-auto no-scrollbar z-10 bg-slate-950 pt-7 pb-4">
                <img
                  src="/portfolio/soloohearts.webp"
                  alt="Mobile App Interface"
                  className="w-full h-auto object-cover object-top select-none pointer-events-none"
                />
              </div>

              {/* Gloss Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-20" />
            </div>

            {/* Floating Badge 1 — Top Left */}
            <div className="absolute top-6 -left-3 sm:left-0 bg-white rounded-2xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 animate-[float_3.5s_ease-in-out_infinite] z-30">
              <div className="w-8 h-8 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 shrink-0">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Engineered For</div>
                <div className="text-xs font-black text-[#1e1b4b]">iOS & Android</div>
              </div>
            </div>

            {/* Floating Badge 2 — Top Right */}
            <div className="absolute top-20 -right-3 sm:right-0 bg-white rounded-2xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 animate-[float_4s_ease-in-out_1s_infinite] z-30">
              <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                <Star className="w-4 h-4 fill-amber-500" />
              </div>
              <div>
                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Rating</div>
                <div className="text-xs font-black text-amber-600">4.9★ Average</div>
              </div>
            </div>

            {/* Floating Badge 3 — Bottom Right */}
            <div className="absolute bottom-10 -right-2 sm:right-2 bg-white rounded-2xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 animate-[float_4.5s_ease-in-out_0.5s_infinite] z-30">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Quality SLA</div>
                <div className="text-xs font-black text-emerald-600">99.9% Crash Free</div>
              </div>
            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
