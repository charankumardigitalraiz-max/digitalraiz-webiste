"use client";

import { Search, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const phases = [
  {
    num: "01",
    title: "Listening & Understanding",
    desc: "Our approach begins with listening and understanding. We look at the business model, audience, market, competition and objectives before defining a direction.",
    color: "from-pink-50/40 via-white to-white",
    border: "border-pink-100 hover:border-pink-300/80",
    badge: "bg-pink-50 text-pink-600 border-pink-100",
    accent: "from-pink-500 to-violet-500",
  },
  {
    num: "02",
    title: "Unified Combination",
    desc: "From there, we bring together the right combination of strategy, design, technology and digital marketing to build a cohesive digital roadmap for your business.",
    color: "from-purple-50/40 via-white to-white",
    border: "border-purple-100 hover:border-purple-300/80",
    badge: "bg-purple-50 text-purple-600 border-purple-100",
    accent: "from-purple-500 to-indigo-500",
  },
  {
    num: "03",
    title: "Connected Experiences",
    desc: "This approach allows us to create connected digital experiences—structuring websites for SEO, aligning social media, extending mobile apps, and running digital campaigns.",
    color: "from-indigo-50/40 via-white to-white",
    border: "border-indigo-100 hover:border-indigo-300/80",
    badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
    accent: "from-indigo-500 to-cyan-500",
  },
];

export default function AboutApproach() {
  return (
    <div className="space-y-8 pt-10 border-t border-slate-100">
      <ScrollReveal direction="up">
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
            Our Approach
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-medium">
            We believe great work starts before development or marketing begins.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative">
        {/* Connector line (desktop only) */}
        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 opacity-40 z-0" />

        {phases.map((phase, idx) => (
          <ScrollReveal key={idx} delay={idx * 100} direction="up" className="h-full">
            <div className={`relative p-7 sm:p-8 rounded-3xl bg-gradient-to-br ${phase.color} border ${phase.border} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 space-y-4 flex flex-col h-full group overflow-hidden z-10`}>
              {/* Top accent bar on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.accent} rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-center justify-between">
                <span className={`w-9 h-9 rounded-xl font-mono text-xs font-extrabold flex items-center justify-center border shadow-sm group-hover:scale-110 transition-transform duration-300 ${phase.badge}`}>
                  {phase.num}
                </span>
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-pink-600 transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-normal">
                  {phase.desc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
