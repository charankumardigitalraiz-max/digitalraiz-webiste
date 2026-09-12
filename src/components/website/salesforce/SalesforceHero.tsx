"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Sparkles, ChevronRight, Zap, Cloud, Award, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function SalesforceHero() {
  const techScrollRef = useRef<HTMLDivElement>(null);
  const [techPaused, setTechPaused] = useState(false);

  useEffect(() => {
    const container = techScrollRef.current;
    if (!container || techPaused) return;
    let animationId: number;
    const scrollStep = () => {
      if (!container) return;
      container.scrollLeft += 0.7;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(scrollStep);
    };
    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, [techPaused]);

  const salesforceTech = [
    { name: "Sales Cloud", label: "Lead & Deal Management" },
    { name: "Service Cloud", label: "Omnichannel Support" },
    { name: "Marketing Cloud", label: "Journey Automation" },
    { name: "Lightning Web Components", label: "Custom LWC UI" },
    { name: "Apex Development", label: "Triggers & Controllers" },
    { name: "Revenue Cloud & CPQ", label: "Quoting & Billing" },
    { name: "Experience Cloud", label: "Portals & Communities" },
    { name: "MuleSoft Integration", label: "Enterprise APIs" },
    { name: "Tableau & Einstein AI", label: "Predictive Analytics" },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-24 lg:pb-14">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">

          {/* LEFT — Typography & Intro Copy */}
          <ScrollReveal direction="left" className="flex-grow space-y-6 text-center lg:text-left max-w-2xl order-last lg:order-first">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-pink-500" />
              <span>Salesforce Cloud Solutions &amp; CRM Modernization</span>
            </div> */}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Salesforce Solutions
              </span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
              Empower your organization with innovative Salesforce solutions designed to streamline operations, improve customer engagement, and accelerate business growth. As a leading Salesforce service provider, Digital Raiz helps businesses leverage the full potential of the Salesforce ecosystem through consulting, implementation, customization, integration, and ongoing support.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
              We combine deep CRM architecture expertise with custom Lightning Web Components (LWC) and Apex development to build scalable platforms that deliver real business impact and continuous operational efficiency.
            </p>

            {/* Stat Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
              {[
                { val: "100%", label: "Certified Team", bg: "bg-emerald-50 text-emerald-700 border-emerald-200/60", dot: "bg-emerald-500" },
                { val: "50+", label: "Deployments", bg: "bg-pink-50 text-pink-700 border-pink-200/60", dot: "bg-pink-500 animate-pulse" },
                { val: "24/7", label: "Ongoing SLA", bg: "bg-violet-50 text-violet-700 border-violet-200/60", dot: "bg-violet-500" },
                { val: "Zero", label: "Downtime Sync", bg: "bg-indigo-50 text-indigo-700 border-indigo-200/60", dot: "bg-indigo-500" },
              ].map((s) => (
                <div key={s.label} className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold ${s.bg}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                  <span>{s.val}</span>
                  <span className="text-[9px] font-mono text-slate-400 uppercase">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <button
                type="button"
                onClick={() => openContactModal("Salesforce Consulting", "Salesforce Digital Transformation Strategy")}
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md cursor-pointer border-0 pointer-events-auto touch-manipulation min-h-[44px]"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
              <button
                type="button"
                onClick={() => {
                  const element = document.getElementById("salesforce-services-grid");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer pointer-events-auto touch-manipulation min-h-[44px]"
              >
                <span>Explore 11 Services</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </ScrollReveal>

          {/* RIGHT — Showcase Image & Dynamic Badges */}
          <ScrollReveal direction="right" delay={150} className="relative w-full lg:w-[500px] shrink-0 flex justify-center order-first lg:order-last">
            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden group bg-white">
              <img
                src="/sales-force/salesforce_web_desktop_development_showcase.webp"
                alt="Salesforce Cloud Solutions & Enterprise CRM Modernization"
                className="w-full h-auto object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />

              {/* Floating badge — top-left */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Award className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-slate-400 uppercase">Expertise</div>
                  <div className="text-xs font-extrabold text-emerald-600">Salesforce Certified</div>
                </div>
              </div>

              {/* Floating badge — bottom-right */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-pink-50 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-slate-400 uppercase">Architecture</div>
                  <div className="text-xs font-extrabold text-pink-600">LWC &amp; Apex Custom</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* Tech module ticker strip */}
      <div className="py-3 w-full overflow-hidden mt-8 border-t border-b border-slate-100 bg-slate-50/50">
        <div
          ref={techScrollRef}
          onMouseEnter={() => setTechPaused(true)}
          onMouseLeave={() => setTechPaused(false)}
          className="flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap items-center gap-0 w-full"
        >
          {salesforceTech.concat(salesforceTech).map((t, i) => (
            <div key={i} className="flex items-center gap-2.5 px-6 py-1.5 border-r border-slate-200/60 shrink-0">
              <Cloud className="w-4 h-4 text-pink-500 shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-800 tracking-tight">{t.name}</span>
                <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider">{t.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}