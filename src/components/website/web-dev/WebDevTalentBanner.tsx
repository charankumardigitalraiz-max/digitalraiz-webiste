"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Palette, Smartphone, Code, Search, Activity, Layers, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";
import { whyChoosePoints, webAdvantageBadges } from "@/data/webDevData";

export default function WebDevTalentBanner() {
  const optScrollRef = useRef<HTMLDivElement>(null);
  const [optPaused, setOptPaused] = useState(false);

  useEffect(() => {
    const container = optScrollRef.current;
    if (!container || optPaused) return;

    let animationId: number;
    const scrollStep = () => {
      if (!container) return;
      container.scrollLeft += 0.8;

      const maxScroll = container.scrollWidth / 2;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(scrollStep);
    };

    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, [optPaused]);

  return (
    <section className="py-10 sm:py-10 bg-white">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6">
            <ScrollReveal direction="up">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                  {/* Left Column (5 Cols): Title & Intro */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                      <Sparkles className="w-3 h-3 text-pink-500" />
                      The Digital Raiz Advantage
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      Why Choose Digital Raiz for{" "}
                      <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                        Website Development?
                      </span>
                    </h2>

                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      Choosing a website development company in Hyderabad is not simply about finding someone who can build a website. You need a partner who understands how design, technology, user experience and digital marketing come together.
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      When you hire web developers in Hyderabad through Digital Raiz, we build websites with the intention of making them useful business assets—not simply attractive online pages.
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => openContactModal("Web Development")}
                        className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
                      >
                        <span>Hire Web Developers Today</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column (7 Cols): Showcase Image & Scrolling Marquee Badges */}
                  <div className="lg:col-span-7 space-y-4">
                    {/* Standalone Showcase Image Container */}
                    <div className="relative group overflow-hidden bg-white transition-all duration-300 p-2">
                      <div className="relative w-full flex items-center justify-center bg-white min-h-[220px] sm:min-h-[280px]">
                        <img
                          src="/web-development/website-development-agency-white-v2.webp"
                          alt="Why Choose Digital Raiz Web Development"
                          className="w-full h-auto max-h-[340px] sm:max-h-[400px] object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* High-Visibility Dual-Row Scrolling Ticker Marquee */}
                    <div className="overflow-hidden relative pt-2 space-y-2.5 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
                      {/* Row 1: Left Stream */}
                      <div className="flex gap-2.5 animate-scroll-horizontal whitespace-nowrap w-max">
                        {[
                          { title: "Business-Focused Planning", icon: Zap, bg: "from-pink-500 to-rose-600" },
                          { title: "Professional UI/UX Design", icon: Palette, bg: "from-violet-600 to-purple-600" },
                          { title: "Responsive Multi-Device", icon: Smartphone, bg: "from-indigo-500 to-blue-600" },
                          { title: "Custom Functionality", icon: Code, bg: "from-pink-500 to-violet-600" },
                          { title: "SEO-Friendly Architecture", icon: Search, bg: "from-emerald-500 to-teal-600" },
                          { title: "Performance-Conscious", icon: Activity, bg: "from-amber-500 to-orange-600" },
                          { title: "Scalable Infrastructure", icon: Layers, bg: "from-purple-600 to-pink-600" },
                          { title: "Clear Communication", icon: Users, bg: "from-blue-600 to-indigo-600" },
                          { title: "24/7 Post-Launch Support", icon: CheckCircle2, bg: "from-emerald-500 to-teal-600" },
                          { title: "Business-Focused Planning", icon: Zap, bg: "from-pink-500 to-rose-600" },
                          { title: "Professional UI/UX Design", icon: Palette, bg: "from-violet-600 to-purple-600" },
                          { title: "Responsive Multi-Device", icon: Smartphone, bg: "from-indigo-500 to-blue-600" },
                          { title: "Custom Functionality", icon: Code, bg: "from-pink-500 to-violet-600" },
                          { title: "SEO-Friendly Architecture", icon: Search, bg: "from-emerald-500 to-teal-600" },
                          { title: "Performance-Conscious", icon: Activity, bg: "from-amber-500 to-orange-600" },
                          { title: "Scalable Infrastructure", icon: Layers, bg: "from-purple-600 to-pink-600" },
                          { title: "Clear Communication", icon: Users, bg: "from-blue-600 to-indigo-600" },
                          { title: "24/7 Post-Launch Support", icon: CheckCircle2, bg: "from-emerald-500 to-teal-600" }
                        ].map((item, idx) => {
                          const ItemIcon = item.icon;
                          return (
                            <div
                              key={idx}
                              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 hover:border-pink-400 text-slate-900 text-xs font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all shrink-0 cursor-default group"
                            >
                              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.bg} text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform`}>
                                <ItemIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="group-hover:text-pink-600 transition-colors tracking-tight">{item.title}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Row 2: Right Stream (Reverse Direction) */}
                      <div className="flex gap-2.5 animate-scroll-horizontal-reverse whitespace-nowrap w-max">
                        {[
                          { title: "24/7 Post-Launch Support", icon: CheckCircle2, bg: "from-emerald-500 to-teal-600" },
                          { title: "Clear Communication", icon: Users, bg: "from-blue-600 to-indigo-600" },
                          { title: "Scalable Infrastructure", icon: Layers, bg: "from-purple-600 to-pink-600" },
                          { title: "Performance-Conscious", icon: Activity, bg: "from-amber-500 to-orange-600" },
                          { title: "SEO-Friendly Architecture", icon: Search, bg: "from-emerald-500 to-teal-600" },
                          { title: "Custom Functionality", icon: Code, bg: "from-pink-500 to-violet-600" },
                          { title: "Responsive Multi-Device", icon: Smartphone, bg: "from-indigo-500 to-blue-600" },
                          { title: "Professional UI/UX Design", icon: Palette, bg: "from-violet-600 to-purple-600" },
                          { title: "Business-Focused Planning", icon: Zap, bg: "from-pink-500 to-rose-600" },
                          { title: "24/7 Post-Launch Support", icon: CheckCircle2, bg: "from-emerald-500 to-teal-600" },
                          { title: "Clear Communication", icon: Users, bg: "from-blue-600 to-indigo-600" },
                          { title: "Scalable Infrastructure", icon: Layers, bg: "from-purple-600 to-pink-600" },
                          { title: "Performance-Conscious", icon: Activity, bg: "from-amber-500 to-orange-600" },
                          { title: "SEO-Friendly Architecture", icon: Search, bg: "from-emerald-500 to-teal-600" },
                          { title: "Custom Functionality", icon: Code, bg: "from-pink-500 to-violet-600" },
                          { title: "Responsive Multi-Device", icon: Smartphone, bg: "from-indigo-500 to-blue-600" },
                          { title: "Professional UI/UX Design", icon: Palette, bg: "from-violet-600 to-purple-600" },
                          { title: "Business-Focused Planning", icon: Zap, bg: "from-pink-500 to-rose-600" }
                        ].map((item, idx) => {
                          const ItemIcon = item.icon;
                          return (
                            <div
                              key={idx}
                              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 hover:border-violet-400 text-slate-900 text-xs font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all shrink-0 cursor-default group"
                            >
                              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.bg} text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform`}>
                                <ItemIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="group-hover:text-violet-600 transition-colors tracking-tight">{item.title}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          </div>
        </section>
  );
}
