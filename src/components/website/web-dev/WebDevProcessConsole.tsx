"use client";

import React from "react";
import ProcessConsole from "@/components/ProcessConsole";
import ScrollReveal from "@/components/ScrollReveal";

export default function WebDevProcessConsole() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.25em] block">Execution Pipeline</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">Our Web Engineering Process</h2>
            <p className="text-slate-500 text-xs font-light">From initial discovery and Figma UX wireframing to Next.js deployment and Vercel edge caching.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <ProcessConsole />
        </ScrollReveal>
      </div>
    </section>
  );
}
