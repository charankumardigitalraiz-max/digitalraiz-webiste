"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, FolderKanban, Sparkles } from "lucide-react";

export default function FloatingPortfolioWidget() {
  const [isFooterInView, setIsFooterInView] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  useEffect(() => {
    const footerElement = document.querySelector("footer");
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterInView(entry.isIntersecting);
      },
      { root: null, threshold: 0.05 }
    );

    observer.observe(footerElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleHeaderToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      if (typeof customEvent.detail?.open === "boolean") {
        setIsHeaderOpen(customEvent.detail.open);
      }
    };

    window.addEventListener("header-toggle", handleHeaderToggle);
    return () => window.removeEventListener("header-toggle", handleHeaderToggle);
  }, []);

  if (isFooterInView || isHeaderOpen) return null;

  return (
    <div
      className="fixed top-3.5 sm:top-4 z-30 pointer-events-auto select-none transition-all duration-300 animate-[float_3.5s_ease-in-out_infinite]"
      style={{ right: "7%" }}
    >
      <Link
        href="/portfolio"
        prefetch={true}
        className="group relative inline-flex items-center gap-2 p-1 pl-2.5 pr-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 border border-white/40 text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer overflow-hidden"
        aria-label="Click to View Live Portfolio"
      >
        {/* Shimmer Light Reflection Sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

        {/* Icon Badge */}
        <div className="relative w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-white/20 backdrop-blur-xs border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform duration-300">
          <FolderKanban className="w-3 h-3 text-white" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 border border-slate-900" />
          </span>
        </div>

        {/* Copy */}
        <div className="flex items-center gap-1">
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white whitespace-nowrap flex items-center gap-1">
            View Portfolio
            <Sparkles className="w-2.5 h-2.5 text-amber-200 animate-pulse" />
          </span>
        </div>

        {/* Interactive Arrow Button Circle */}
        <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-white text-pink-600 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center transition-all duration-300 ml-0.5 shrink-0 group-hover:scale-110 border border-white/40">
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </div>
      </Link>
    </div>
  );
}
