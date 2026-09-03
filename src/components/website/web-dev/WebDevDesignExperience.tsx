"use client";

import React from "react";
import { Palette, CheckCircle2, Code } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function WebDevDesignExperience() {
  return (
    <section className="py-10 sm:py-10 bg-white relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-12">

            {/* Split Row 1: Website Design Company */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <ScrollReveal direction="left" className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Palette className="w-3 h-3 text-pink-500" />
                  User-Focused Design
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Website Design Company in Hyderabad{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Creating Engaging User Experiences
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  Design is one of the first things customers notice about a website, but good website design goes far beyond visual appeal. It should make information easy to understand, navigation intuitive and important actions simple to complete.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  As a website design company in Hyderabad, Digital Raiz creates clean, modern and user-focused interfaces that reflect your brand identity. Our design process considers your audience, industry, brand positioning and business objectives across desktops, tablets and smartphones.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" className="lg:col-span-6">
                <div className="relative group rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:border-pink-300">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-50">
                    <img
                      src="/web-development/modern-minimalist-workspace-white.webp"
                      alt="Website Design Showcase"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Split Row 2: Custom Web Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-slate-200/60 pt-10">
              <ScrollReveal direction="left" className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative group rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:border-violet-300">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <img
                      src="/web-development/enterprise-software-architecture-white.webp"
                      alt="Custom Web Architecture"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" className="lg:col-span-6 space-y-4 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Code className="w-3 h-3 text-pink-500" />
                  Underlying Technology
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Web Development &amp; Custom Website Solutions{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    in Hyderabad
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  A website's visual appearance is only one part of the development process. The underlying technology determines how effectively the platform performs, adapts and integrates with your business operations.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  For businesses with specific requirements, our custom website development services in Hyderabad provide the flexibility to create features and workflows that standard templates cannot offer. We focus on building technology that serves a clear business purpose.
                </p>
              </ScrollReveal>
            </div>

          </div>
        </section>
  );
}
