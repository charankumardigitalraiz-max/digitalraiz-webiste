"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Sparkles } from "lucide-react";

export default function DigitalMarketingIntegratedStrategy() {
  const integratedStrategySteps = [
    {
      step: "01",
      title: "SEO Visibility",
      desc: "Captures organic demand and search traffic over time.",
      tag: "Organic Growth",
      accentBg: "bg-pink-500",
      accentBorder: "border-pink-100 hover:border-pink-300",
      accentHoverText: "group-hover:text-pink-600",
      gradient: "from-pink-50/70 via-white to-white",
      shadow: "hover:shadow-pink-500/10",
      badgeStyle: "text-pink-700 bg-pink-100/80 border-pink-200 group-hover:bg-pink-600",
      shadowColor: "shadow-pink-500/25"
    },
    {
      step: "02",
      title: "Social Presence",
      desc: "Fosters trust, brand recall, and active engagement.",
      tag: "Brand Recall",
      accentBg: "bg-violet-500",
      accentBorder: "border-violet-100 hover:border-violet-300",
      accentHoverText: "group-hover:text-violet-600",
      gradient: "from-violet-50/70 via-white to-white",
      shadow: "hover:shadow-violet-500/10",
      badgeStyle: "text-violet-700 bg-violet-100/80 border-violet-200 group-hover:bg-violet-600",
      shadowColor: "shadow-violet-500/25"
    },
    {
      step: "03",
      title: "Paid Advertising",
      desc: "Accelerates targeted lead acquisition and visibility.",
      tag: "Targeted Leads",
      accentBg: "bg-indigo-500",
      accentBorder: "border-indigo-100 hover:border-indigo-300",
      accentHoverText: "group-hover:text-indigo-600",
      gradient: "from-indigo-50/70 via-white to-white",
      shadow: "hover:shadow-indigo-500/10",
      badgeStyle: "text-indigo-700 bg-indigo-100/80 border-indigo-200 group-hover:bg-indigo-600",
      shadowColor: "shadow-indigo-500/25"
    },
    {
      step: "04",
      title: "Unified Content",
      desc: "Communicates consistent brand authority across all touchpoints.",
      tag: "Brand Authority",
      accentBg: "bg-emerald-500",
      accentBorder: "border-emerald-100 hover:border-emerald-300",
      accentHoverText: "group-hover:text-emerald-600",
      gradient: "from-emerald-50/70 via-white to-white",
      shadow: "hover:shadow-emerald-500/10",
      badgeStyle: "text-emerald-700 bg-emerald-100/80 border-emerald-200 group-hover:bg-emerald-600",
      shadowColor: "shadow-emerald-500/25"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative border-t border-slate-100 overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column (5 Cols): Section Title & Context */}
          <ScrollReveal direction="left" className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              Synergistic Framework
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1e1b4b] leading-tight">
              An Integrated{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Marketing Strategy
              </span>{" "}
              for Your Business
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
              Digital channels work better when they work together. SEO creates long-term organic visibility, social media strengthens brand awareness, paid advertising generates targeted traffic, and content supports every stage of the customer journey.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed pt-1">
              At Digital Raiz, we bring these capabilities together to create a connected digital marketing strategy in Hyderabad. Your website, search presence, social profiles, content, and advertising campaigns should communicate one consistent message.
            </p>
          </ScrollReveal>

          {/* Right Column (7 Cols): Strategy Steps Map */}
          <ScrollReveal direction="right" delay={100} className="lg:col-span-7 space-y-3">
            {integratedStrategySteps.map((item) => (
              <div
                key={item.step}
                className={`group relative bg-gradient-to-r ${item.gradient} border ${item.accentBorder} rounded-lg p-4 sm:p-4 transition-all duration-300 hover:shadow-lg ${item.shadow} hover:-translate-y-1 overflow-hidden cursor-pointer`}
              >
                <div className={`w-1.5 h-full ${item.accentBg} absolute left-0 top-0 rounded-r-full`} />

                <div className="flex items-start justify-between gap-4 pl-1">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${item.accentBg} text-white flex items-center justify-center font-mono font-black text-sm group-hover:scale-110 transition-transform shadow-md ${item.shadowColor} shrink-0`}>
                      {item.step}
                    </div>
                    <div className="space-y-1">
                      <h3 className={`text-base sm:text-lg font-bold text-[#1e1b4b] ${item.accentHoverText} transition-colors tracking-tight`}>
                        {item.title}
                      </h3>
                      <p className="text-slate-700 text-xs sm:text-[13px] font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono font-bold border px-3 py-1 rounded-full shrink-0 group-hover:text-white transition-all ${item.badgeStyle}`}>
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
