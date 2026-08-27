"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, ShieldCheck, Terminal } from "lucide-react";

interface ProcessStep {
  step: string;
  name: string;
  desc: string;
  substeps: string[];
}

export default function ProcessConsole() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const steps: ProcessStep[] = [
    {
      step: "01",
      name: "Discovery & Arch",
      desc: "We gather specifications, examine user journeys, and establish technical feasibility parameters to create a secure codebase foundation.",
      substeps: ["User Persona Analysis", "Technical Stack Audit", "Scope Architecture Blueprint"]
    },
    {
      step: "02",
      name: "UI/UX Wireframing",
      desc: "Designing pixel-perfect mockups, interactive screen flows, and ergonomic user journeys matching modern accessibility standards.",
      substeps: ["High-Fidelity Wireframes", "Interactive Design System", "Accessibility Compliance check"]
    },
    {
      step: "03",
      name: "Agile Development",
      desc: "Sprinting native Swift/Kotlin or Flutter/React Native codebases with modular architectures, local database caches, and CI automation.",
      substeps: ["Native Thread Compilation", "Local Cache DB Setup", "RESTful API Integration"]
    },
    {
      step: "04",
      name: "Quality Assurance",
      desc: "Rigorous automated testing, local sandbox debugging, performance load telemetries, and memory leak checks.",
      substeps: ["Unit & Integration Tests", "Memory Leak Telemetries", "Continuous Integration Builds"]
    },
    {
      step: "05",
      name: "App Store Launch",
      desc: "Handling metadata assets, setting cryptographic keys, and navigating review cycles for Play Store & App Store deployments.",
      substeps: ["App Store Metadata Review", "CI/CD Deployment Release", "Crashlytics Telemetry Setup"]
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  // Autoplay hook: cycles cards every 3.0 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, steps.length]);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
      
      {/* Left Column: Descriptive Intro Panel & Stats (lg:col-span-6) */}
      <div className="lg:col-span-6 space-y-6 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/60 text-[9px] font-mono font-black uppercase tracking-widest text-slate-800 shadow-3xs">
          <Terminal className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
          Execution Telemetry Matrix
        </div>

        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">
          Our Phase-by-Phase Delivery Protocol
        </h3>

        <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-light text-justify">
          We guide you from initial technical blueprint planning to production-ready deployments. Each sprint phase is managed by platform leads and verified through automated QA pipelines. Navigate the card stack deck to inspect core deliverables.
        </p>

        {/* Diagnostic Spec Metrics */}
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200/50">
          <div className="flex gap-2">
            <Cpu className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase block leading-none">Telemetry</span>
              <span className="text-[10px] sm:text-xs font-black text-slate-800 uppercase tracking-tight">CI/CD Automated QA</span>
            </div>
          </div>
          <div className="flex gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase block leading-none">Compliance</span>
              <span className="text-[10px] sm:text-xs font-black text-slate-800 uppercase tracking-tight">ISO-Security Sync</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: 3D Stack Viewport & Controls (lg:col-span-6) */}
      <div 
        className="lg:col-span-6 flex flex-col items-center space-y-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* 3D Stack Viewport */}
        <div className="relative w-full h-[300px] flex items-center justify-center select-none">
          {steps.map((step, idx) => {
            const stackPos = (idx - activeIndex + steps.length) % steps.length;
            const isCurrent = stackPos === 0;
            const isNext = stackPos === 1;
            const isSecondNext = stackPos === 2;

            let cardStyle = "opacity-0 scale-90 pointer-events-none z-0 translate-y-12 rotate-0";
            
            if (isCurrent) {
              cardStyle = "opacity-100 scale-100 z-30 translate-y-0 rotate-0 shadow-lg border-slate-200/80";
            } else if (isNext) {
              cardStyle = "opacity-95 scale-[0.94] z-20 translate-y-4 rotate-1 shadow-md border-slate-150";
            } else if (isSecondNext) {
              cardStyle = "opacity-60 scale-[0.88] z-10 translate-y-8 -rotate-1 shadow-sm border-slate-100";
            }

            return (
              <div
                key={idx}
                className={`absolute w-full max-w-[420px] bg-white border rounded-3xl p-6 flex flex-col justify-between h-[260px] transition-all duration-500 ease-out transform-gpu ${cardStyle}`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-start justify-between">
                    <span className="text-[8.5px] font-mono font-bold text-pink-600 uppercase tracking-widest block">
                      PHASE 0{idx + 1}
                    </span>
                    <span className="text-4xl font-black text-slate-100 leading-none">
                      {step.step}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-black uppercase text-[#1e1b4b]">
                    {step.name}
                  </h4>
                  
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed font-light text-justify border-t border-slate-100 pt-3">
                    {step.desc}
                  </p>
                </div>

                {/* Sub-deliverables list */}
                <div className="flex flex-wrap gap-x-3.5 gap-y-1 pt-3 border-t border-slate-100">
                  {step.substeps.map((sub, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-pink-500 shrink-0" />
                      <span className="text-[8px] sm:text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wide">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Deck Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-650 hover:text-pink-600 hover:border-pink-300 hover:shadow-md transition-all duration-300 active:scale-95 cursor-pointer outline-none"
            aria-label="Previous Phase"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-1.5">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-pink-500" : "w-1.5 bg-slate-200"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-650 hover:text-pink-600 hover:border-pink-300 hover:shadow-md transition-all duration-300 active:scale-95 cursor-pointer outline-none"
            aria-label="Next Phase"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
