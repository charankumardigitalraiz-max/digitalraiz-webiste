"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";

export default function SapCtaBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-pink-50 via-violet-50/70 to-indigo-50 border-t border-b border-slate-200/80 py-8 sm:py-7 px-6 sm:px-12 relative overflow-hidden">
      {/* Subtle Ambient Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(100,80,200,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Content */}
        <div className="space-y-1.5 text-center md:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-pink-200/60 shadow-2xs text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            Enterprise SAP Solutions
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Build a More Connected &{" "}
            <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Intelligent Foundation
            </span>
          </h3>

          <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
            From seamless integrations to custom enhancements, we help organizations shape SAP technologies around their strategic operational goals.
          </p>
        </div>

        {/* Right Action Button */}
        <div className="shrink-0">
          <button
            onClick={() => openContactModal("SAP Cloud Services")}
            className="inline-flex items-center gap-2.5 py-3.5 px-8 rounded-2xl bg-[#1e1b4b] hover:bg-[#2d2a6e] text-white text-[10px] font-black uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
          >
            <span>Consult SAP Team</span>
            <ArrowRight className="w-3.5 h-3.5 text-pink-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
