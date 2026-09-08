"use client";

import React, { useRef, useState, useEffect } from "react";

export default function InfluencerPlatformTicker() {
  const socialScrollRef = useRef<HTMLDivElement>(null);
  const [socialPaused, setSocialPaused] = useState(false);

  useEffect(() => {
    const container = socialScrollRef.current;
    if (!container || socialPaused) return;
    let animationId: number;
    const scrollStep = () => {
      if (!container) return;
      container.scrollLeft += 0.8;
      if (container.scrollLeft >= container.scrollWidth / 3) {
        container.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(scrollStep);
    };
    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, [socialPaused]);

  const socialPlatforms = [
    {
      name: "Instagram",
      tag: "Reels & Stories",
      bg: "bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600",
      tagColor: "text-pink-600",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: "YouTube",
      tag: "Shorts & Vlogs",
      bg: "bg-red-600",
      tagColor: "text-red-600",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      tag: "B2B Leaders",
      bg: "bg-sky-700",
      tagColor: "text-sky-600",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6z" />
        </svg>
      )
    },
    {
      name: "TikTok & UGC",
      tag: "Viral Trends",
      bg: "bg-slate-900",
      tagColor: "text-violet-600",
      icon: (
        <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.96v6.94c0 1.94-.78 3.8-2.15 5.17-1.37 1.37-3.23 2.15-5.17 2.15-1.94 0-3.8-.78-5.17-2.15-1.37-1.37-2.15-3.23-2.15-5.17 0-1.94.78-3.8 2.15-5.17 1.37-1.37 3.23-2.15 5.17-2.15 1.05 0 2.08.23 3.03.68v4.22c-.44-.27-.96-.42-1.5-.42-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3V.02z" />
        </svg>
      )
    },
    {
      name: "Meta / FB",
      tag: "Community Video",
      bg: "bg-blue-600",
      tagColor: "text-blue-600",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: "Snapchat",
      tag: "Gen-Z Reach",
      bg: "bg-amber-400",
      tagColor: "text-amber-600",
      icon: (
        <svg className="w-5 h-5 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c-3.204 0-5.914 2.247-6.425 5.32-.128.775.05 1.58.498 2.227.323.468.423.834.331 1.25-.098.448-.48.917-1.289 1.157-.597.177-1.196.48-1.579 1.002-.45.614-.509 1.36-.163 2.057.391.789 1.233 1.282 2.164 1.282.261 0 .524-.038.78-.115.547-.164.981.026 1.294.398.536.637 1.378 1.488 2.395 1.895.619.248 1.298.375 2.001.375s1.382-.127 2.001-.375c1.017-.407 1.859-1.258 2.395-1.895.313-.372.747-.562 1.294-.398.256.077.519.115.78.115.931 0 1.773-.493 2.164-1.282.346-.697.287-1.443-.163-2.057-.383-.522-.982-.825-1.579-1.002-.809-.24-1.191-.709-1.289-1.157-.092-.416.008-.782.331-1.25.448-.647.626-1.452.498-2.227C17.914 4.41 15.204 2.163 12 2.163z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-6 border-y border-slate-100 overflow-hidden relative w-full">
      <div className="w-full relative overflow-hidden">
        {/* Left & Right Edge Gradient Blur Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div
          ref={socialScrollRef}
          onMouseEnter={() => setSocialPaused(true)}
          onMouseLeave={() => setSocialPaused(false)}
          className="flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap items-center gap-4 py-1 px-4"
        >
          {socialPlatforms.concat(socialPlatforms).concat(socialPlatforms).concat(socialPlatforms).map((plat, idx) => (
            <div
              key={idx}
              className="group p-0.5 rounded-lg bg-gradient-to-r from-slate-200/80 via-pink-200/60 to-violet-200/80 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600 transition-all duration-500 shrink-0 cursor-pointer select-none hover:scale-[1.03] hover:-translate-y-0.5"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-lg py-2 px-4 flex items-center gap-3 shadow-2xs group-hover:shadow-md transition-shadow">
                <div className={`w-7 h-7 rounded-full ${plat.bg} flex items-center justify-center shrink-0 shadow-2xs group-hover:rotate-12 transition-transform duration-300`}>
                  {plat.icon}
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-xs font-black text-slate-800 tracking-tight">{plat.name}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100 ${plat.tagColor}`}>
                    {plat.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
