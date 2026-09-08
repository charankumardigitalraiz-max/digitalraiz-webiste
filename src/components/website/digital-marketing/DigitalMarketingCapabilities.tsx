"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Sparkles,
  Search,
  Share2,
  MousePointerClick,
  FileText,
  Compass,
  Target,
  LineChart,
  Megaphone,
  Layers
} from "lucide-react";

export default function DigitalMarketingCapabilities() {
  const capabilities = [
    { title: "Search Engine Optimization", desc: "Technical, on-page, and keyword research for long-term organic visibility.", icon: <Search className="w-5 h-5 text-pink-500" />, tag: "SEO Search", color: "from-pink-50/70 to-pink-100/20", border: "border-pink-200/70 text-pink-700", img: "/digital-marketing-service/seo-search-chart.webp" },
    { title: "Social Media Marketing", desc: "Brand positioning, content planning, and creative social media management.", icon: <Share2 className="w-5 h-5 text-violet-500" />, tag: "Social Reach", color: "from-violet-50/70 to-violet-100/20", border: "border-violet-200/70 text-violet-700", img: "/digital-marketing-service/social-media-phone.webp" },
    { title: "Google Ads & Paid PPC", desc: "High-intent paid search, ad messaging, and conversion-focused landing pages.", icon: <MousePointerClick className="w-5 h-5 text-indigo-500" />, tag: "Google PPC", color: "from-indigo-50/70 to-indigo-100/20", border: "border-indigo-200/70 text-indigo-700", img: "/digital-marketing-service/ppc-ad-cursor.webp" },
    { title: "Content Marketing", desc: "Expertise-driven articles, search copy, and creative brand storytelling.", icon: <FileText className="w-5 h-5 text-emerald-500" />, tag: "Content Copy", color: "from-emerald-50/70 to-emerald-100/20", border: "border-emerald-200/70 text-emerald-700", img: "/digital-marketing-service/content-creation-notebook.webp" },
    { title: "Local SEO", desc: "Geofenced maps optimization and local business search dominance in Hyderabad.", icon: <Compass className="w-5 h-5 text-amber-500" />, tag: "Local Maps", color: "from-amber-50/70 to-amber-100/20", border: "border-amber-200/70 text-amber-700", img: "/digital-marketing-service/local-seo-location.webp" },
    { title: "Lead Generation", desc: "Funnel architecture connecting campaign traffic to genuine business inquiries.", icon: <Target className="w-5 h-5 text-rose-500" />, tag: "Lead Funnels", color: "from-rose-50/70 to-rose-100/20", border: "border-rose-200/70 text-rose-700", img: "/digital-marketing-service/conversion-funnel.webp" },
    { title: "Performance Marketing", desc: "Data-informed metrics tracking ROI, cost per acquisition, and conversions.", icon: <LineChart className="w-5 h-5 text-cyan-500" />, tag: "ROI Metrics", color: "from-cyan-50/70 to-cyan-100/20", border: "border-cyan-200/70 text-cyan-700", img: "/digital-marketing-service/roi-growth-chart.webp" },
    { title: "Online Brand Promotion", desc: "Multi-channel digital presence strengthening authority and recall.", icon: <Megaphone className="w-5 h-5 text-purple-500" />, tag: "Brand Recall", color: "from-purple-50/70 to-purple-100/20", border: "border-purple-200/70 text-purple-700", img: "/digital-marketing-service/brand-megaphone.webp" },
    { title: "Campaign Management", desc: "Continuous monitoring, A/B testing, and end-to-end campaign optimization.", icon: <Layers className="w-5 h-5 text-pink-600" />, tag: "A/B Testing", color: "from-pink-50/70 to-purple-100/20", border: "border-pink-200/70 text-pink-700", img: "/digital-marketing-service/ab-testing-cards.webp" }
  ];

  return (
    <section id="marketing-services" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 space-y-12">

        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              Capabilities & Solutions
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#1e1b4b]">
              Digital Marketing Company in Hyderabad{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Focused on Business Results
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto">
              We combine different marketing channels based on what your business actually needs. Some businesses require stronger SEO visibility, while others benefit from social media campaigns, Google Ads, content marketing, or lead generation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, idx) => (
            <ScrollReveal key={idx} delay={(idx % 3) * 80} direction="up" className="h-full flex flex-col">
              <div className="bg-white border border-slate-200/90 hover:border-pink-300 p-3.5 sm:p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden h-full flex flex-col justify-between space-y-2 group">
                <div className="space-y-2 flex-grow flex flex-col justify-between">
                  {/* TOP: 3D Image Banner */}
                  <div className="w-full h-40 sm:h-44 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <img
                      src={cap.img}
                      alt={cap.title}
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                  </div>

                  {/* MIDDLE: Content */}
                  <div className="space-y-1.5 pt-0.5">
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight text-[#1e1b4b] group-hover:text-pink-600 transition-colors leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-[13px] font-medium leading-relaxed group-hover:text-slate-800 transition-colors">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
