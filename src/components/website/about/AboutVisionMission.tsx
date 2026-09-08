"use client";

import { Target, Compass } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutVisionMission() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Our Vision */}
      <ScrollReveal direction="left" delay={100} className="h-full">
        <div className="relative rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-pink-50/80 via-purple-50/40 to-white border border-pink-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 space-y-5 h-full flex flex-col group overflow-hidden">
          {/* Watermark */}
          <span className="absolute -right-4 -bottom-6 text-6xl sm:text-7xl font-black tracking-widest text-pink-500/10 group-hover:text-pink-500/20 transition-colors duration-500 pointer-events-none select-none uppercase">
            VISION
          </span>
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-violet-500 to-transparent rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="space-y-4 relative z-10 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-pink-500 text-white flex items-center justify-center shadow-md shadow-pink-500/30 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Our Vision</h2>
            </div>
            <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              <p>
                Our vision is to build a digital ecosystem where businesses can use technology not just to keep pace with change, but to create new opportunities.
              </p>
              <p>
                We aspire to become a trusted technology and digital growth partner for businesses in Hyderabad and beyond, known for thoughtful solutions, meaningful experiences and work that creates lasting value.
              </p>
              <p>
                As technology continues to evolve, our focus remains on staying adaptable, learning continuously and helping our clients move confidently toward what comes next.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Our Mission */}
      <ScrollReveal direction="right" delay={200} className="h-full">
        <div className="relative rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-indigo-50/80 via-blue-50/40 to-white border border-indigo-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 space-y-5 h-full flex flex-col group overflow-hidden">
          {/* Watermark */}
          <span className="absolute -right-4 -bottom-6 text-6xl sm:text-7xl font-black tracking-widest text-indigo-600/10 group-hover:text-indigo-600/20 transition-colors duration-500 pointer-events-none select-none uppercase">
            MISSION
          </span>
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-transparent rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="space-y-4 relative z-10 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/30 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Compass className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Our Mission</h2>
            </div>
            <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              <p>
                Our mission is to make digital transformation more purposeful and accessible for businesses.
              </p>
              <p>
                We combine strategic thinking with creative execution and reliable technology to solve practical business challenges — whether a business needs greater online visibility, a stronger digital identity, a new website or a mobile application.
              </p>
              <p className="font-semibold text-slate-800">
                Every project is an opportunity to create something useful, measurable and meaningful.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
