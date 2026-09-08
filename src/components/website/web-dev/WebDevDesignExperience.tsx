"use client";

import React from "react";
import { Palette, CheckCircle2, Code } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function WebDevDesignExperience() {
  return (
    <section className="py-12 sm:py-16 bg-white relative border-b border-slate-100 overflow-hidden">
      {/* Ambient Pastel Background Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gradient-to-r from-violet-100/30 via-pink-100/25 to-indigo-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-14 relative z-10">

        {/* Split Row 1: Website Design Company */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <ScrollReveal direction="left" className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Palette className="w-3.5 h-3.5 text-pink-500 animate-spin-slow" />
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
            <div className="relative group rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-pink-300">
              <div className="relative h-64 sm:h-76 w-full overflow-hidden bg-slate-50">
                <img
                  src="/web-development/modern-minimalist-workspace-white.webp"
                  alt="Website Design Showcase"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badge overlay */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-md flex items-center gap-2 animate-float-slow">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider">Intuitive UI/UX Blueprint</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Split Row 2: Custom Web Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-slate-100 pt-12">
          <ScrollReveal direction="left" className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative group rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-violet-300">
              <div className="relative h-64 sm:h-76 w-full overflow-hidden">
                <img
                  src="/web-development/enterprise-software-architecture-white.webp"
                  alt="Custom Web Architecture"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badge overlay */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-md flex items-center gap-2 animate-float-slow" style={{ animationDelay: "2s" }}>
                <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider">Scalable Custom Engine</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Code className="w-3.5 h-3.5 text-pink-500" />
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
