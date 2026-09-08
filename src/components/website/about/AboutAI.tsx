"use client";

import { Bot } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutAI() {
  return (
    <div className="pt-8 border-t border-slate-100">
      <ScrollReveal direction="up">
        <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-pink-50/70 via-purple-50/40 to-indigo-50/60 border border-pink-200/80 shadow-md space-y-5 relative overflow-hidden group hover:shadow-xl transition-shadow duration-400">
          {/* Ambient glow */}
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-pink-400/15 rounded-full blur-3xl pointer-events-none group-hover:bg-pink-400/25 transition-colors duration-500" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-400/15 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-400/25 transition-colors duration-500" />

          <div className="space-y-4 relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-[10px] font-mono font-bold text-pink-700 uppercase tracking-widest">
              <Bot className="w-3.5 h-3.5" />
              <span>Emerging Technology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900">
              Exploring the{" "}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Possibilities of AI
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Technology continues to reshape how businesses operate, and Artificial Intelligence is becoming an important part of that evolution. At Digital Raiz, we explore practical ways to bring AI into digital products, business processes and customer experiences.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              From intelligent automation and AI-powered applications to data-driven insights and smart digital experiences, we look at where emerging technology can create genuine business value.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
