"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Laptop,
  Smartphone,
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
  Flame,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Cpu
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CapabilitiesSection() {
  const [activeStudio, setActiveStudio] = useState<"web" | "mobile">("web");

  // 10 Web Development Services from Home Page PDF (H5)
  const webServices = [
    {
      name: "Corporate Website Development",
      desc: "Enterprise digital platforms with robust governance & security.",
      icon: Building2,
      tag: "Enterprise"
    },
    {
      name: "Business Website Development",
      desc: "Lead-generating web solutions tailored to business goals.",
      icon: Briefcase,
      tag: "Growth"
    },
    {
      name: "WordPress Development",
      desc: "Custom themes, plugins & flexible content management.",
      icon: Globe,
      tag: "CMS"
    },
    {
      name: "Custom Website Development",
      desc: "Bespoke full-stack architectures engineered from scratch.",
      icon: Code2,
      tag: "Custom"
    },
    {
      name: "E-commerce Website Development",
      desc: "High-converting storefronts, payment gateways & cart UX.",
      icon: ShoppingBag,
      tag: "Commerce"
    },
    {
      name: "Landing Page Development",
      desc: "High-ROI campaign pages optimized for Google & Meta Ads.",
      icon: Layout,
      tag: "Conversion"
    },
    {
      name: "Responsive Web Design",
      desc: "Fluid layouts ensuring seamless display across all screens.",
      icon: Monitor,
      tag: "UI/UX"
    },
    {
      name: "Custom Web Applications",
      desc: "Dynamic SaaS portals, dashboards & automated workflows.",
      icon: Zap,
      tag: "SaaS"
    },
    {
      name: "Website Redesign",
      desc: "Modernizing legacy platforms with speed, UX & new frameworks.",
      icon: RefreshCw,
      tag: "Redesign"
    },
    {
      name: "Website Maintenance & Support",
      desc: "Security audits, framework updates & 24/7 uptime monitoring.",
      icon: ShieldCheck,
      tag: "Support SLA"
    }
  ];

  // 12 Mobile Application Capabilities from Home Page PDF (H6)
  const mobileServices = [
    {
      name: "Android App Development",
      desc: "Native Kotlin & Java apps for global Google Play reach.",
      icon: Smartphone,
      tag: "Android"
    },
    {
      name: "iOS App Development",
      desc: "Swift & SwiftUI apps built to Apple design standards.",
      icon: Apple,
      tag: "iOS"
    },
    {
      name: "Cross-Platform App Development",
      desc: "Flutter & React Native codebases with 60 FPS performance.",
      icon: Layers,
      tag: "Hybrid"
    },
    {
      name: "E-commerce Mobile Apps",
      desc: "Seamless in-app shopping, instant checkout & push alerts.",
      icon: ShoppingBag,
      tag: "Commerce"
    },
    {
      name: "Booking & Appointment Apps",
      desc: "Real-time calendar reservations & automatic reminders.",
      icon: Calendar,
      tag: "Booking"
    },
    {
      name: "Delivery & Logistics Apps",
      desc: "Live GPS fleet tracking, dispatch routing & status updates.",
      icon: Truck,
      tag: "Logistics"
    },
    {
      name: "Education & Learning Apps",
      desc: "Interactive lessons, quiz modules & student analytics.",
      icon: GraduationCap,
      tag: "EdTech"
    },
    {
      name: "Customer Applications",
      desc: "Self-service client accounts, support & loyalty rewards.",
      icon: Users,
      tag: "Portal"
    },
    {
      name: "Business Applications",
      desc: "Internal employee workflows, field ops & ERP interfaces.",
      icon: Building2,
      tag: "Enterprise"
    },
    {
      name: "Marketplace Applications",
      desc: "Multi-vendor platforms connecting buyers and sellers.",
      icon: Store,
      tag: "Marketplace"
    },
    {
      name: "On-Demand Applications",
      desc: "Real-time dispatch, instant matching & low-latency comms.",
      icon: Flame,
      tag: "On-Demand"
    },
    {
      name: "Custom Mobile Applications",
      desc: "Tailored mobile software built for unique business models.",
      icon: Sparkles,
      tag: "Bespoke"
    }
  ];

  const currentServices = activeStudio === "web" ? webServices : mobileServices;

  return (
    <section className="relative font-sans overflow-hidden select-none border-t border-slate-100 bg-white py-12 sm:py-16">
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

            {/* Studio Switcher Pills */}
            <div className="inline-flex p-1 rounded-xl bg-slate-100/90 border border-slate-200/80 shadow-inner self-start md:self-auto shrink-0">
              <button
                onClick={() => setActiveStudio("web")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs tracking-wide transition-all duration-200 cursor-pointer ${
                  activeStudio === "web"
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200/70 scale-[1.01]"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                  activeStudio === "web" ? "bg-pink-50 text-pink-600" : "text-slate-400"
                }`}>
                  <Laptop className="w-3.5 h-3.5" />
                </div>
                <span>Web Studio</span>
                <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                  activeStudio === "web" ? "bg-pink-100 text-pink-700" : "bg-slate-200 text-slate-500"
                }`}>
                  10
                </span>
              </button>

              <button
                onClick={() => setActiveStudio("mobile")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs tracking-wide transition-all duration-200 cursor-pointer ${
                  activeStudio === "mobile"
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200/70 scale-[1.01]"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                  activeStudio === "mobile" ? "bg-indigo-50 text-indigo-600" : "text-slate-400"
                }`}>
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <span>Mobile Studio</span>
                <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                  activeStudio === "mobile" ? "bg-indigo-100 text-indigo-700" : "bg-slate-200 text-slate-500"
                }`}>
                  12
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Main Bento Grid (Balanced Heights) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

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

                {/* Tech Chips */}
                <div className="pt-2.5 border-t border-slate-100 flex flex-wrap gap-1">
                  {(activeStudio === "web"
                    ? ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "WordPress"]
                    : ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "AWS"]
                  ).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[9.5px] font-mono font-medium bg-slate-100 text-slate-600 border border-slate-200/60"
                    >
                      {tech}
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

          {/* RIGHT COLUMN: Sleek 3-Column Compact Grid (lg:col-span-8) */}
          <ScrollReveal direction="right" className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5 h-full content-start">
              {currentServices.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-xl p-3 bg-white border border-slate-200/80 shadow-2xs hover:border-pink-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-7 h-7 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-violet-600 group-hover:to-indigo-600 group-hover:text-white transition-all shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[8.5px] font-mono font-medium text-slate-400 px-1.5 py-0.5 rounded bg-slate-50 border border-slate-150 group-hover:text-pink-600 group-hover:border-pink-100 transition-colors">
                        {svc.tag}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-[12.5px] font-bold text-slate-900 group-hover:text-pink-600 transition-colors leading-snug">
                        {svc.name}
                      </h4>
                      <p className="text-[10.5px] text-slate-500 font-normal leading-relaxed line-clamp-2">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[9px] font-medium text-slate-400">
                      <span>Learn more</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-pink-600 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

        </div>

        {/* ── Sleek Compact Lifecycle Assurance Bar ── */}
        <ScrollReveal direction="up" delay={100}>
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
        </ScrollReveal>

      </div>
    </section>
  );
}
