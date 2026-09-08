"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";

export default function DigitalMarketingWhyChooseUs() {
  const whyChooseUs = [
    "Customized digital marketing strategies built around your goals",
    "Data-informed decision making and real-time campaign tracking",
    "Search-focused content and intent-based SEO optimization",
    "Creative social media campaigns that build authentic brand recall",
    "Targeted paid advertising maximizing return on ad spend (ROAS)",
    "Conversion-focused digital user experiences and landing pages",
    "Transparent communication with continuous campaign improvement"
  ];

  return (
    <section className="py-10 sm:py-5 bg-white overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column (5 Cols): Title, PDF intro paragraph & CTA */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" />
                  The Digital Raiz Advantage
                </div>

                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1e1b4b] leading-tight">
                  Why Choose Digital Raiz for{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Digital Marketing in Hyderabad?
                  </span>
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  Choosing a digital marketing agency in Hyderabad is an important decision because your marketing investment should contribute to real business objectives. We begin by understanding your business, audience, and goals before recommending channels.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => openContactModal("Digital Marketing & SEO", "Start Your Marketing Strategy")}
                    className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-600 text-white text-xs font-black uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
                  >
                    <span>Start Your Marketing Strategy</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Right Column (7 Cols): 7 Core Pillars Cards */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                  <h3 className="text-sm font-extrabold uppercase tracking-tight text-[#1e1b4b] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600" />
                    7 Core Service Pillars
                  </h3>
                  <span className="text-[9px] font-mono font-bold uppercase text-pink-600 bg-pink-50 border border-pink-100 px-2.5 py-0.5 rounded-full">
                    Data-Driven Growth
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whyChooseUs.map((pillar, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-pink-300 hover:shadow-md transition-all duration-300 flex items-start gap-3 group ${idx === 6 ? "sm:col-span-2" : ""}`}
                    >
                      <div className="w-6 h-6 rounded-lg bg-pink-50 text-pink-600 font-mono font-black text-[10px] flex items-center justify-center shrink-0 border border-pink-100 group-hover:bg-pink-600 group-hover:text-white transition-all mt-0.5">
                        0{idx + 1}
                      </div>
                      <span className="text-xs font-semibold text-slate-700 leading-snug group-hover:text-pink-600 transition-colors">
                        {pillar}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
