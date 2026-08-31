"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Laptop,
  Smartphone,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { webServices, mobileServices } from "@/data/homeData";

export default function CapabilitiesSection() {
  const [activeStudio, setActiveStudio] = useState<"web" | "mobile">("web");

  const currentServices = activeStudio === "web" ? webServices : mobileServices;

  return (
    <section className="relative font-sans overflow-hidden select-none  bg-white py-10 sm:py-10">
      {/* Dynamic Ambient Background Accents */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pink-500/5 via-purple-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-500/5 via-pink-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-7 relative z-10">

        {/* ── Section Header with Studio Toggle ── */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-4 border-b border-slate-100">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-pink-500" />
                Core Engineering Studios
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Website & Mobile App <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Development Capabilities
                </span>
              </h2>
            </div>

            {/* Studio Switcher Pills with Sliding Highlight & Morphing Effects */}
            <div className="relative inline-flex p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-inner self-start md:self-auto shrink-0 overflow-hidden">
              {/* Sliding Active Pill Background */}
              <div
                className={`absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-md border transition-all duration-500 ease-out pointer-events-none ${activeStudio === "web"
                  ? "left-1.5 w-[calc(50%-0.375rem)] border-pink-200/90 shadow-pink-500/10"
                  : "left-[calc(50%+0.1875rem)] w-[calc(50%-0.375rem)] border-indigo-200/90 shadow-indigo-500/10"
                  }`}
              />

              <button
                onClick={() => setActiveStudio("web")}
                className={`relative z-10 flex items-center gap-2.5 px-4 py-2 rounded-xl font-bold text-xs tracking-wide transition-all duration-300 cursor-pointer ${activeStudio === "web"
                  ? "text-slate-900 scale-[1.02]"
                  : "text-slate-500 hover:text-slate-900"
                  }`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 ${activeStudio === "web"
                  ? "bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-xs scale-105"
                  : "bg-slate-200/70 text-slate-500"
                  }`}>
                  <Laptop className="w-3.5 h-3.5" />
                </div>
                <span>Web Studio</span>
                <span className={`text-[9.5px] font-mono font-bold px-2 py-0.5 rounded-full transition-all duration-300 ${activeStudio === "web" ? "bg-pink-50 text-pink-600 border border-pink-100" : "bg-slate-200 text-slate-500"
                  }`}>
                  10
                </span>
              </button>

              <button
                onClick={() => setActiveStudio("mobile")}
                className={`relative z-10 flex items-center gap-2.5 px-4 py-2 rounded-xl font-bold text-xs tracking-wide transition-all duration-300 cursor-pointer ${activeStudio === "mobile"
                  ? "text-slate-900 scale-[1.02]"
                  : "text-slate-500 hover:text-slate-900"
                  }`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 ${activeStudio === "mobile"
                  ? "bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-xs scale-105"
                  : "bg-slate-200/70 text-slate-500"
                  }`}>
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <span>Mobile Studio</span>
                <span className={`text-[9.5px] font-mono font-bold px-2 py-0.5 rounded-full transition-all duration-300 ${activeStudio === "mobile" ? "bg-indigo-50 text-indigo-600 border border-indigo-100" : "bg-slate-200 text-slate-500"
                  }`}>
                  12
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Main Bento Grid with Blur-Fade Tab Swap ── */}
        <div key={activeStudio} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-tab-swap">

          {/* LEFT COLUMN: Streamlined Compact Studio Card (lg:col-span-4) */}
          <ScrollReveal direction="left" className="lg:col-span-4 flex flex-col">
            <div className="rounded-2xl bg-gradient-to-br from-slate-50/90 via-white to-pink-50/20 p-5 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between h-full space-y-4 relative overflow-hidden">
              {/* Top Laser Accent */}
              <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 rounded-t-2xl -mt-5 -mx-5 mb-3" />

              <div className="space-y-3.5">
                {/* Identifier Tag */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-50 border border-pink-100 text-[9.5px] font-mono font-semibold text-pink-600">
                    <Cpu className="w-3 h-3 text-pink-500" />
                    {activeStudio === "web" ? "Studio 01 • Web" : "Studio 02 • Mobile"}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Hyderabad Studio
                  </span>
                </div>

                {/* Studio Title & Subtitle */}
                <div className="space-y-0.5">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    {activeStudio === "web"
                      ? "Website Development in Hyderabad"
                      : "Mobile App Development in Hyderabad"}
                  </h3>
                  <p className="text-[11px] font-semibold text-pink-600 uppercase tracking-wider">
                    {activeStudio === "web" ? "Modern Digital Experiences" : "Scalable Applications"}
                  </p>
                </div>

                {/* Concise Summary */}
                <p className="text-slate-600 text-xs leading-relaxed font-normal">
                  {activeStudio === "web"
                    ? "From corporate websites to custom web applications and e-commerce platforms, we combine design, performance, and SEO architecture tailored to your business goals."
                    : "Developing native and cross-platform mobile apps centered on product vision, target audience, and business model with speed, usability, and scale."}
                </p>

                {/* Guarantees 2x2 Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-slate-100 text-[11px] text-slate-700 font-medium">
                  {(activeStudio === "web"
                    ? [
                      "SEO Architecture",
                      "Sub-Second Latency",
                      "Custom CMS & APIs",
                      "100% Code Ownership"
                    ]
                    : [
                      "Native iOS & Android",
                      "Flutter & React Native",
                      "Secure Auth & APIs",
                      "App Store Publishing"
                    ]
                  ).map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-pink-500 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {(activeStudio === "web"
                    ? ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "WordPress"]
                    : ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "AWS"]
                  ).map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-pink-300 hover:text-pink-600 hover:bg-pink-50/50 transition-all duration-200 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metrics & CTA */}
              <div className="space-y-2.5 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="flex-1">
                    <div className="text-sm font-extrabold text-slate-900">
                      {activeStudio === "web" ? "100+" : "50+"}
                    </div>
                    <div className="text-[9.5px] text-slate-500 font-medium">
                      {activeStudio === "web" ? "Websites" : "Apps"}
                    </div>
                  </div>
                  <div className="h-6 w-px bg-slate-200/70" />
                  <div className="flex-1">
                    <div className="text-sm font-extrabold text-pink-600">
                      {activeStudio === "web" ? "99.9%" : "4.9★"}
                    </div>
                    <div className="text-[9.5px] text-slate-500 font-medium">
                      {activeStudio === "web" ? "Uptime SLA" : "Rating"}
                    </div>
                  </div>
                  <div className="h-6 w-px bg-slate-200/70" />
                  <div className="flex-1">
                    <div className="text-sm font-extrabold text-slate-900">
                      100%
                    </div>
                    <div className="text-[9.5px] text-slate-500 font-medium">
                      Ownership
                    </div>
                  </div>
                </div>

                <Link
                  href={activeStudio === "web" ? "/web-development" : "/mobile-application"}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white font-bold text-xs tracking-wide transition-all duration-300 shadow-sm hover:shadow-md group cursor-pointer"
                >
                  <span>{activeStudio === "web" ? "Explore Web Studio" : "Explore Mobile Studio"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN: Showcase Image + High-Visibility Scrolling Ticker Marquee (lg:col-span-8) */}
          <ScrollReveal direction="right" className="lg:col-span-8 flex flex-col justify-between space-y-4">
            {/* Top Showcase Image Frame */}
            <div className="relative group rounded-2xl overflow-hidden bg-white  transition-all duration-300">
              <div className="relative w-full flex items-center justify-center bg-white min-h-[220px] sm:min-h-[280px]">
                <img
                  src={
                    activeStudio === "web"
                      ? "/home/web-development-architecture-premium.webp"
                      : "/home/mobile-app-engineering-premium.webp"
                  }
                  alt={activeStudio === "web" ? "Web Development Studio" : "Mobile App Studio"}
                  className="w-full h-auto max-h-[340px] sm:max-h-[400px] object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* High-Visibility Dual-Row Scrolling Ticker Marquee of Service Badges */}
            <div className="overflow-hidden relative pt-1 space-y-2.5 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
              {/* Stream 1 (Left Forward) */}
              <div className="flex gap-2.5 animate-scroll-horizontal hover:[animation-play-state:paused] whitespace-nowrap w-max">
                {[...currentServices, ...currentServices].map((svc, idx) => {
                  const Icon = svc.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 hover:border-pink-400 text-slate-900 text-xs font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all shrink-0 cursor-default group"
                    >
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-pink-500 via-violet-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="group-hover:text-pink-600 transition-colors tracking-tight">{svc.name}</span>
                        <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-pink-50 text-pink-600 border border-pink-100">
                          {svc.tag}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stream 2 (Right Reverse) */}
              <div className="flex gap-2.5 animate-scroll-horizontal-reverse hover:[animation-play-state:paused] whitespace-nowrap w-max">
                {[...currentServices, ...currentServices].reverse().map((svc, idx) => {
                  const Icon = svc.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 hover:border-violet-400 text-slate-900 text-xs font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all shrink-0 cursor-default group"
                    >
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-600 via-indigo-600 to-pink-500 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="group-hover:text-violet-600 transition-colors tracking-tight">{svc.name}</span>
                        <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-violet-50 text-violet-600 border border-violet-100">
                          {svc.tag}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ── Sleek Compact Lifecycle Assurance Bar ── */}
        {/* <ScrollReveal direction="up" delay={100}>
          <div className="rounded-xl bg-gradient-to-r from-slate-50 via-pink-50/20 to-indigo-50/20 border border-slate-200/80 px-5 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0" />
              <p className="text-xs text-slate-600">
                <span className="font-bold text-slate-900">Complete Lifecycle Architecture:</span> Product planning, UI/UX design, development, testing & ongoing scaling.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[11px] font-bold tracking-wide transition-all duration-200 shadow-xs shrink-0 hover:scale-105"
            >
              <span>Consult Engineers</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </ScrollReveal> */}

      </div>
    </section>
  );
}
