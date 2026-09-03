"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function WebDevCtaSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100 text-slate-800 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
        <ScrollReveal direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build Your Digital Presence with{" "}
            <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Raiz
            </span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed pt-2">
            Your website can become the foundation of your entire digital presence. From the first idea to design, development and launch, we bring together technology and creative expertise to create digital experiences built around your business. Start your next website or web application project with Digital Raiz.
          </p>
          <div className="pt-6">
            <button
              onClick={() => openContactModal("Web Development")}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 shadow-xl transition-all cursor-pointer border-0"
            >
              <span>Start Your Next Web Project Today</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
