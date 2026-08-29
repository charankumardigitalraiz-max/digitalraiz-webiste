"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Laptop,
  Smartphone,
  ArrowUpRight,
  Star,
  Sparkles,
  Building2,
  Briefcase,
  Globe,
  Code2,
  ShoppingBag,
  Layout,
  Monitor,
  Zap,
  RefreshCw,
  ShieldCheck,
  Apple,
  Layers,
  Calendar,
  Truck,
  GraduationCap,
  Users,
  Store,
  Flame
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CapabilitiesSection() {
  const [activeStudio, setActiveStudio] = useState<"web" | "mobile">("web");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Exact Original Web Services with custom contextual icons
  const webServices = [
    { name: "Corporate Website Development", icon: Building2 },
    { name: "Business Website Development", icon: Briefcase },
    { name: "WordPress Development", icon: Globe },
    { name: "Custom Website Development", icon: Code2 },
    { name: "E-commerce Website Development", icon: ShoppingBag },
    { name: "Landing Page Development", icon: Layout },
    { name: "Responsive Web Design", icon: Monitor },
    { name: "Custom Web Applications", icon: Zap },
    { name: "Website Redesign", icon: RefreshCw },
    { name: "Website Maintenance & Support", icon: ShieldCheck }
  ];

  // Exact Original Mobile Services with custom contextual icons
  const mobileServices = [
    { name: "Android App Development", icon: Smartphone },
    { name: "iOS App Development", icon: Apple },
    { name: "Cross-Platform App Development", icon: Layers },
    { name: "E-commerce Mobile Apps", icon: ShoppingBag },
    { name: "Booking & Appointment Apps", icon: Calendar },
    { name: "Delivery & Logistics Apps", icon: Truck },
    { name: "Education & Learning Apps", icon: GraduationCap },
    { name: "Customer Applications", icon: Users },
    { name: "Business Applications", icon: Building2 },
    { name: "Marketplace Applications", icon: Store },
    { name: "On-Demand Applications", icon: Flame },
    { name: "Custom Mobile Applications", icon: Sparkles }
  ];

  const currentServices = activeStudio === "web" ? webServices : mobileServices;

  return (
    <section className="relative font-sans overflow-hidden select-none border-t border-slate-100 bg-white py-16 sm:py-24">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] rounded-full bg-pink-500/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[650px] h-[650px] rounded-full bg-indigo-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-12 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="space-y-3 max-w-2xl">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                Engineering Capabilities // Interactive Console
              </span>
            </div> */}

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e1b4b] uppercase tracking-tight leading-[0.95]">
              Core Engineering <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Studios</span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xl">
              Switch between our Web Engineering and Mobile App Studios to explore tailored development capabilities built for enterprise performance.
            </p>
          </div>
        </ScrollReveal>

        {/* ── INTERACTIVE CONSOLE CONTAINER ── */}
        <div className="relative rounded-3xl bg-white p-6 sm:p-9 border border-slate-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-hidden">

          {/* Top Laser Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 rounded-t-3xl -mt-6 -mx-6 sm:-mt-9 sm:-mx-9 mb-8 transition-all duration-500" />

          {/* Background Monogram Watermark */}
          <span className="absolute top-8 right-10 text-8xl sm:text-9xl font-black text-slate-200/40 font-mono select-none pointer-events-none">
            {activeStudio === "web" ? "WEB//01" : "MOB//02"}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">

            {/* LEFT COLUMN: Studio Selector & Live Spec Sheet (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">

              <div className="space-y-6">
                {/* Studio Switcher Buttons */}
                <div className="space-y-2.5">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                    Select Studio Console:
                  </span>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Web Studio Selector Card */}
                    <div
                      onClick={() => setActiveStudio("web")}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${activeStudio === "web"
                        ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white border-transparent shadow-xl -translate-y-0.5"
                        : "bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50"
                        }`}
                    >
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-3">
                          {/* <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                            activeStudio === "web" ? "bg-white/20 border-white/30 text-white" : "bg-slate-100 border-slate-200 text-slate-500"
                          }`}>
                            <Laptop className="w-5 h-5" />
                          </div> */}
                          <div>
                            <h3 className={`text-base font-black uppercase tracking-tight ${activeStudio === "web" ? "text-white" : "text-[#1e1b4b]"
                              }`}>Website Development</h3>
                            <p className={`text-[10px] font-mono font-bold ${activeStudio === "web" ? "text-pink-100" : "text-slate-500"
                              }`}>10 Core Services • Studio 01</p>
                          </div>
                        </div>
                        {/* <span className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded-full border ${activeStudio === "web" ? "bg-white border-white text-[#1e1b4b] shadow-sm" : "bg-slate-100 border-slate-200 text-slate-400"
                          }`}>
                          ACTIVE
                        </span> */}
                      </div>
                    </div>

                    {/* Mobile Studio Selector Card */}
                    <div
                      onClick={() => setActiveStudio("mobile")}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${activeStudio === "mobile"
                        ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white border-transparent shadow-xl -translate-y-0.5"
                        : "bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50"
                        }`}
                    >
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-3">
                          {/* <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                            activeStudio === "mobile" ? "bg-white/20 border-white/30 text-white" : "bg-slate-100 border-slate-200 text-slate-500"
                          }`}>
                            <Smartphone className="w-5 h-5" />
                          </div> */}
                          <div>
                            <h3 className={`text-base font-black uppercase tracking-tight ${activeStudio === "mobile" ? "text-white" : "text-[#1e1b4b]"
                              }`}>Mobile App Development</h3>
                            <p className={`text-[10px] font-mono font-bold ${activeStudio === "mobile" ? "text-pink-100" : "text-slate-500"
                              }`}>12 Core Services • Studio 02</p>
                          </div>
                        </div>
                        {/* <span className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded-full border ${activeStudio === "mobile" ? "bg-white border-white text-[#1e1b4b] shadow-sm" : "bg-slate-100 border-slate-200 text-slate-400"
                          }`}>
                          ACTIVE
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Active Studio Specs Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-4 shadow-2xs relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
                      {activeStudio === "web" ? "Studio 01 // Web" : "Studio 02 // Mobile"}
                    </span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1e1b4b] uppercase tracking-tight">
                      {activeStudio === "web" ? "Website Development" : "Mobile App Development"}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                      Company in Hyderabad
                    </p>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {activeStudio === "web"
                      ? "We create responsive, professional and SEO-friendly websites tailored to your business requirements — combining design, performance and search-friendly architecture."
                      : "Mobile applications create convenient digital experiences for customers, employees and partners. We develop apps around your product vision, business model, and user needs."}
                  </p>

                  {/* Key Spec Meters */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-2xl font-black text-[#1e1b4b] leading-none">
                        {activeStudio === "web" ? "100+" : "50+"}
                      </p>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        {activeStudio === "web" ? "Websites Built" : "Apps Launched"}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-2xl font-black text-pink-600 leading-none">
                        {activeStudio === "web" ? "99.9%" : "4.9★"}
                      </p>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        {activeStudio === "web" ? "SLA Uptime" : "Store Rating"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Studio Link CTA */}
              <Link
                href={activeStudio === "web" ? "/web-development" : "/mobile-application"}
                className="inline-flex items-center justify-between w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md group"
              >
                <span>Explore Full {activeStudio === "web" ? "Web Engineering Studio" : "Mobile App Studio"}</span>
                <div className="w-7 h-7 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                </div>
              </Link>

            </div>

            {/* RIGHT COLUMN: Ultra-Beautiful Executive White Capability Grid (lg:col-span-7) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-6 relative overflow-hidden">

              <div className="space-y-5">
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${activeStudio === "web" ? "bg-indigo-600" : "bg-pink-500"
                      }`} />
                    <h3 className="text-xs sm:text-sm font-black text-[#1e1b4b] uppercase tracking-wider">
                      {activeStudio === "web" ? "Web Development Capabilities" : "Mobile App Capabilities"} ({currentServices.length})
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-pink-600 bg-pink-50/80 px-3 py-1 rounded-full border border-pink-100/80 shadow-2xs">
                    Hyderabad Studio
                  </span>
                </div>

                {/* Service Capabilities Grid with Pristine White Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentServices.map((svc, idx) => {
                    const Icon = svc.icon;
                    const isHovered = hoveredIndex === idx;
                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`group/item flex items-center gap-3 p-3.5 rounded-2xl border bg-white transition-all duration-300 cursor-default relative overflow-hidden ${isHovered
                          ? activeStudio === "web"
                            ? "border-indigo-300 shadow-md -translate-y-0.5"
                            : "border-pink-300 shadow-md -translate-y-0.5"
                          : "border-slate-200/80 shadow-2xs hover:border-slate-300"
                          }`}
                      >
                        {/* Hover Left Laser Accent */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${isHovered
                          ? activeStudio === "web" ? "bg-indigo-600 opacity-100" : "bg-pink-500 opacity-100"
                          : "bg-transparent opacity-0"
                          }`} />

                        {/* Icon Pill */}
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${isHovered
                          ? activeStudio === "web"
                            ? "bg-indigo-50 border-indigo-200 text-indigo-600 scale-105"
                            : "bg-pink-50 border-pink-200 text-pink-600 scale-105"
                          : "bg-slate-50 border-slate-200/70 text-slate-500"
                          }`}>
                          <Icon className="w-4 h-4" />
                        </div>

                        {/* Service Name & Index Tag */}
                        <div className="min-w-0 flex-1 space-y-0.5">
                          <span className={`text-xs font-bold truncate leading-snug transition-colors block ${isHovered
                            ? activeStudio === "web" ? "text-indigo-600" : "text-pink-600"
                            : "text-slate-800"
                            }`}>
                            {svc.name}
                          </span>
                          <p className="text-[9px] font-mono font-semibold text-slate-400">
                            #{String(idx + 1).padStart(2, "0")}
                          </p>
                        </div>

                        {/* Arrow Hover Pill */}
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${isHovered
                          ? activeStudio === "web"
                            ? "bg-indigo-600 text-white shadow-2xs translate-x-0 opacity-100"
                            : "bg-pink-500 text-white shadow-2xs translate-x-0 opacity-100"
                          : "bg-slate-100 text-slate-300 -translate-x-1 opacity-0"
                          }`}>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Status Ticker */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  <span>100% Code Ownership</span>
                </span>
                <span>⚡ Sub-second Latency</span>
                <span>🛡️ Enterprise Security</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
