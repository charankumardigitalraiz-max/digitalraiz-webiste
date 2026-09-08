"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Workflow, Layout, Code2, Server, ShieldCheck, Zap, Wrench, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export default function MobileAppProcessPipeline() {
  const [activeStep, setActiveStep] = useState(0);

  // 7-step process from PDF document with detailed phase deliverables & tools
  const pdfProcessSteps = [
    {
      step: "01",
      shortName: "Planning",
      name: "Product Planning & Technical Consultation",
      desc: "We map business objectives, define functional architecture, user personas, and select the optimal tech stack tailored to your target audience.",
      icon: <Workflow className="w-5 h-5 text-pink-500" />,
      duration: "1–2 Weeks",
      qualityGate: "Technical Feasibility & ROI Signoff",
      tools: ["Miro", "Jira", "Confluence", "Figma"],
      deliverables: [
        "FRD & Functional Specs Document",
        "User Persona & Journey Maps",
        "Tech Stack & Architecture Blueprint",
        "Sprint Execution Roadmap"
      ]
    },
    {
      step: "02",
      shortName: "UI/UX Design",
      name: "UI/UX Design & Prototyping",
      desc: "Designing intuitive, user-centric screen flows, wireframes, and pixel-perfect interactive prototypes for frictionless mobile interaction.",
      icon: <Layout className="w-5 h-5 text-violet-500" />,
      duration: "2–3 Weeks",
      qualityGate: "Usability & Design System Audit",
      tools: ["Figma", "Adobe XD", "Framer", "Lottie Animations"],
      deliverables: [
        "UX Wireframes & User Flow Diagrams",
        "Pixel-Perfect Mobile UI Screen Kit",
        "Interactive Clickable Prototype",
        "Design Tokens & Component Library"
      ]
    },
    {
      step: "03",
      shortName: "Development",
      name: "Mobile Application Development",
      desc: "Writing clean, modular code using native Swift/Kotlin or cross-platform Flutter/React Native frameworks optimized for high frame rates.",
      icon: <Code2 className="w-5 h-5 text-indigo-500" />,
      duration: "4–8 Weeks",
      qualityGate: "Clean Architecture & Peer Code Review",
      tools: ["Swift / Kotlin", "Flutter / React Native", "Xcode", "Android Studio"],
      deliverables: [
        "Modular Source Code Repository",
        "Native & Cross-Platform Modules",
        "Offline Storage & Data Caching Engine",
        "Responsive Screen Layout Systems"
      ]
    },
    {
      step: "04",
      shortName: "Backend & API",
      name: "API & Backend Integration",
      desc: "Connecting robust cloud databases, microservices, REST/GraphQL APIs, OAuth authentication, and third-party payment gateways.",
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      duration: "2–3 Weeks",
      qualityGate: "Sub-0.3s API Latency & Security Audit",
      tools: ["Node.js / Python", "PostgreSQL / Firebase", "Postman", "AWS Lambda"],
      deliverables: [
        "RESTful & GraphQL API Connectors",
        "OAuth 2.0 / JWT Security Layer",
        "Payment Gateway Integration (Stripe/Razorpay)",
        "Real-Time Push Notification System"
      ]
    },
    {
      step: "05",
      shortName: "QA & Testing",
      name: "Testing & Quality Assurance",
      desc: "Executing automated unit tests, security vulnerability scans, cross-device hardware compatibility checks, and battery performance tuning.",
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
      duration: "2 Weeks",
      qualityGate: "Zero Critical Bugs & 99.9% Crash Free",
      tools: ["Appium", "Jest", "BrowserStack", "Firebase Crashlytics"],
      deliverables: [
        "Automated UI & Integration Test Suite",
        "Cross-Device Compatibility Matrix",
        "Security & Vulnerability Penetration Report",
        "Battery & Frame Rate Tuning Certificate"
      ]
    },
    {
      step: "06",
      shortName: "Deployment",
      name: "App Store & Play Store Deployment",
      desc: "Managing store publishing guidelines, cryptographic app signing, App Store Optimization (ASO), and smooth release approvals.",
      icon: <Zap className="w-5 h-5 text-rose-500" />,
      duration: "1 Week",
      qualityGate: "Apple & Google Policy Compliance",
      tools: ["App Store Connect", "Google Play Console", "Fastlane", "TestFlight"],
      deliverables: [
        "Production iOS & Android Store Submissions",
        "Cryptographic Code Signing Certificates",
        "ASO Metadata & Screenshot Assets",
        "Live Production Release Monitoring"
      ]
    },
    {
      step: "07",
      shortName: "SLA Support",
      name: "Maintenance & Ongoing SLA Support",
      desc: "Providing 24/7 server monitoring, regular iOS/Android OS compatibility updates, security patches, feature iterations, and SLA support.",
      icon: <Wrench className="w-5 h-5 text-sky-500" />,
      duration: "Continuous SLA",
      qualityGate: "99.9% Server Uptime & Instant Escalation SLA",
      tools: ["Datadog", "Sentry", "New Relic", "GitHub Actions"],
      deliverables: [
        "Annual iOS & Android OS Upgrades",
        "24/7 Server Infrastructure Monitoring",
        "Bug Patch & Hotfix Deployment Releases",
        "Quarterly Feature Roadmap Enhancements"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-10">

        {/* Heading */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
              <Workflow className="w-3 h-3" />
              Engineering Pipeline
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1e1b4b] tracking-tight leading-tight">
              Our 7-Step Mobile{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Engineering Process
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto">
              From technical consultation to post-launch SLA support — click any phase tab to inspect deliverables and toolchains.
            </p>
          </div>
        </ScrollReveal>

        {/* TOP: Process Pipeline Navigation (Desktop Ribbon vs Mobile Grid Tabs) */}
        <ScrollReveal direction="up" delay={100}>
          {/* DESKTOP VIEW: Connected Stepper Ribbon Track */}
          <div className="hidden md:block relative w-full overflow-x-auto pb-4 pt-2 no-scrollbar">
            <div className="flex items-center justify-between min-w-[700px] relative px-4">
              {/* Connecting Line Track */}
              <div className="absolute top-6 left-10 right-10 h-0.5 bg-slate-200 -z-0" />
              <div
                className="absolute top-6 left-10 h-0.5 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-600 transition-all duration-500 -z-0"
                style={{ width: `${(activeStep / 6) * 90}%` }}
              />

              {pdfProcessSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    className="flex flex-col items-center gap-2.5 relative z-10 group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-2xl font-mono font-black text-xs flex items-center justify-center transition-all duration-300 shadow-xs ${isActive
                      ? "bg-gradient-to-br from-pink-500 to-violet-600 text-white scale-110 shadow-pink-500/20 shadow-md ring-4 ring-pink-500/10"
                      : "bg-white text-slate-500 border border-slate-200 group-hover:border-pink-300 group-hover:scale-105"
                      }`}>
                      {step.step}
                    </div>

                    <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider max-w-[90px] text-center truncate transition-colors ${isActive ? "text-pink-600 font-extrabold" : "text-slate-400 group-hover:text-slate-600"
                      }`}>
                      {step.name.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MOBILE VIEW: Normal Grid Tabs */}
          <div className="block md:hidden w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {pdfProcessSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all duration-300 cursor-pointer touch-manipulation ${
                      isActive
                        ? "bg-gradient-to-br from-pink-500 via-violet-600 to-indigo-600 text-white border-transparent shadow-md shadow-pink-500/20 scale-[1.02]"
                        : "bg-white text-slate-700 border-slate-200/80 shadow-xs"
                    }`}
                  >
                    <span className={`text-[9px] font-mono font-black uppercase tracking-widest mb-0.5 px-1.5 py-0.5 rounded ${
                      isActive ? "bg-white/20 text-white" : "bg-pink-50 text-pink-600 border border-pink-100"
                    }`}>
                      Step {step.step}
                    </span>
                    <span className={`text-xs font-bold leading-tight truncate max-w-full ${isActive ? "text-white" : "text-slate-700"}`}>
                      {step.shortName}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* BOTTOM: Dual-Card Stage Inspector Display */}
        <ScrollReveal direction="up" delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

            {/* LEFT CARD (7 cols): Phase Title, Summary & Quality Gate */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">

                {/* Phase Badge & Header */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 text-pink-600 flex items-center justify-center shrink-0 shadow-xs">
                    {pdfProcessSteps[activeStep].icon}
                  </div>
                  <div className="space-y-0.5">
                    <div className="inline-flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-pink-600">
                      <span>Phase {pdfProcessSteps[activeStep].step} of 07</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-slate-400">Roadmap Phase</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1e1b4b]">
                      {pdfProcessSteps[activeStep].name}
                    </h3>
                  </div>
                </div>

                {/* Executive Summary */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {pdfProcessSteps[activeStep].desc}
                </p>

              </div>

              {/* Timeframe & Quality Gate Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                  <span className="text-[9px] font-mono text-slate-400 uppercase font-bold">Estimated Duration</span>
                  <div className="text-xs font-black text-[#1e1b4b]">⏱ {pdfProcessSteps[activeStep].duration}</div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-0.5">
                  <span className="text-[9px] font-mono text-emerald-600 uppercase font-bold">Quality SLA Gate</span>
                  <div className="text-xs font-black text-emerald-700 truncate">{pdfProcessSteps[activeStep].qualityGate}</div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD (5 cols): Key Deliverables Checklist & Tools */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6">

              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-[9.5px] font-mono font-bold uppercase tracking-widest text-pink-600">Key Phase Deliverables</span>
                  <span className="text-[8px] font-mono text-emerald-600 font-bold bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full uppercase">Verified</span>
                </div>

                {/* Bullet Checklist */}
                <div className="space-y-2.5 text-xs font-semibold text-slate-700">
                  {pdfProcessSteps[activeStep].deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Toolchain Badges */}
                <div className="pt-2 space-y-1.5">
                  <span className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-slate-400 block">Phase Tools</span>
                  <div className="flex flex-wrap gap-1.5">
                    {pdfProcessSteps[activeStep].tools.map((tool, tIdx) => (
                      <span key={tIdx} className="text-[9.5px] font-mono font-bold px-2 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200/70 shadow-2xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step Controls Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveStep((prev) => (prev === 0 ? 6 : prev - 1))}
                  className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-bold text-slate-500 hover:text-pink-600 cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev Phase</span>
                </button>

                <span className="text-[10px] font-mono font-black text-slate-400">
                  0{activeStep + 1} / 07
                </span>

                <button
                  onClick={() => setActiveStep((prev) => (prev === 6 ? 0 : prev + 1))}
                  className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-bold text-pink-600 hover:text-pink-700 cursor-pointer transition-colors"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
