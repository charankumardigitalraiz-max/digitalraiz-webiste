"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";

export default function FloatingPortfolioWidget() {
  return (
    <div className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto animate-float">
      <Link
        href="/portfolio"
        prefetch={true}
        className="group relative flex items-center gap-2 p-1.5 px-3.5 sm:px-4 rounded-full bg-slate-950 text-white border border-pink-500/50 hover:border-pink-400 hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer will-change-transform [backface-visibility:hidden] [transform-style:preserve-3d] shadow-md shadow-pink-500/10"
        aria-label="Click to View Portfolio"
      >
        {/* Animated Icon Container */}
        <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-violet-600 flex items-center justify-center text-white shrink-0">
          <FolderKanban className="w-3.5 h-3.5 text-white animate-pulse" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500 border border-white" />
          </span>
        </div>

        {/* Action Label Copy */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider text-white group-hover:text-pink-300 transition-colors whitespace-nowrap">
            VIEW OUR PORTFOLIO
          </span>
          <span className="px-1.5 py-0.2 rounded-full bg-pink-500 text-white text-[8px] font-mono font-black">
            15+
          </span>
        </div>

        <div className="w-5.5 h-5.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center justify-center transition-all duration-300 ml-0.5 shrink-0 group-hover:scale-110 shadow-2xs">
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </div>
      </Link>
    </div>
  );
}
