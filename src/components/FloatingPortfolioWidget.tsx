"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FolderKanban, Sparkles } from "lucide-react";

export default function FloatingPortfolioWidget() {
  return (
    <div className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto animate-float">
      <Link
        href="/portfolio"
        prefetch={true}
        className="group relative inline-flex items-center gap-2.5 p-1.5 pl-2 pr-2.5 sm:pr-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white shadow-[0_10px_30px_rgba(236,72,153,0.4),0_2px_10px_rgba(168,85,247,0.3)] border border-white/40 hover:border-white/60 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden select-none"
        aria-label="Click to View Portfolio"
      >
        {/* Shimmer Light Reflection Sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

        {/* Animated Icon Container */}
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300 border border-white/30">
          <FolderKanban className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300 border border-white" />
          </span>
        </div>

        {/* Label Copy */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white whitespace-nowrap drop-shadow-xs flex items-center gap-1">
            VIEW OUR PORTFOLIO
            <Sparkles className="w-3 h-3 text-amber-200 animate-pulse" />
          </span>
          {/* <span className="px-2 py-0.5 rounded-full bg-white/25 text-white text-[8.5px] font-mono font-black tracking-tight border border-white/30 shadow-2xs backdrop-blur-xs">
            15+
          </span> */}
        </div>

        {/* Interactive Arrow Circle */}
        <div className="w-6 h-6 rounded-full bg-white text-pink-600 flex items-center justify-center transition-all duration-300 ml-0.5 shrink-0 group-hover:scale-110 shadow-md group-hover:bg-slate-900 group-hover:text-white">
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </Link>
    </div>
  );
}

