"use client";

import React, { useState } from "react";
import { Globe, ArrowUpRight } from "lucide-react";

interface ProjectItem {
  name: string;
  url: string;
  img: string;
  category: string;
}

interface ThreeDShowcaseProps {
  projects: ProjectItem[];
  activeIndex: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ThreeDShowcase({ projects, activeIndex, onMouseEnter, onMouseLeave }: ThreeDShowcaseProps) {
  const currentProject = projects[activeIndex] || projects[0];
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched((prev) => !prev);
    if (onMouseEnter) onMouseEnter();
  };

  return (
    <div className="w-full py-2 sm:py-4 select-none flex flex-col items-center justify-center">
      {/* Widescreen iMac Mockup Frame */}
      <div className="relative w-full max-w-[440px] sm:max-w-[520px] group/iMac">
        
        {/* iMac Screen Chassis */}
        <div className="w-full h-[230px] sm:h-[320px] bg-slate-900 rounded-t-2xl sm:rounded-t-3xl border-[3px] sm:border-[4px] border-slate-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col relative z-10">
          
          {/* Browser header tab bar */}
          <div className="w-full h-7 sm:h-8 bg-slate-950 border-b border-slate-900 flex items-center px-3 sm:px-4 shrink-0 justify-between select-none">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded px-2.5 sm:px-4 py-0.5 text-[8px] sm:text-[8.5px] text-slate-400 font-mono tracking-wide max-w-[140px] sm:max-w-[180px] truncate leading-none flex items-center gap-1.5">
              <Globe className="w-2.5 h-2.5 text-slate-500" />
              <span>{currentProject.name.toLowerCase().replace(/\s+/g, "")}.com</span>
            </div>
            
            <div className="w-4 sm:w-6" /> {/* Spacer */}
          </div>

          {/* Screenshot Viewport with complete scrolling on hover & touch tap */}
          <div 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onTouchStart={handleTouchStart}
            onClick={() => setIsTouched((prev) => !prev)}
            className="relative w-full h-[200px] sm:h-[280px] overflow-hidden bg-slate-950 group/viewport cursor-pointer touch-manipulation"
          >
            <style>{`
              .viewport-scroll-container:hover .viewport-scroll-img,
              .viewport-scroll-container.is-active .viewport-scroll-img {
                transform: translateY(calc(-100% + 200px)) !important;
              }
              @media (min-width: 640px) {
                .viewport-scroll-container:hover .viewport-scroll-img,
                .viewport-scroll-container.is-active .viewport-scroll-img {
                  transform: translateY(calc(-100% + 280px)) !important;
                }
              }
            `}</style>
            
            <div className={`viewport-scroll-container w-full h-full overflow-hidden relative ${isTouched ? "is-active" : ""}`}>
              <img
                src={currentProject.img}
                alt={currentProject.name}
                className="viewport-scroll-img w-full h-auto absolute top-0 left-0 object-cover object-top transition-transform duration-[12s] ease-in-out"
                style={{ 
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: isTouched ? 'translateY(calc(-100% + 200px))' : 'translateY(0)'
                }}
              />
              
              {/* Floating scroll action tooltip */}
              <div className={`absolute inset-0 bg-black/30 group-hover/viewport:opacity-0 ${isTouched ? "opacity-0" : "opacity-100"} transition-opacity duration-300 flex items-center justify-center pointer-events-none`}>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white bg-slate-900/80 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full backdrop-blur-sm shadow-sm flex items-center gap-1">
                  <span>Hover or tap to scroll</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* iMac Silver Lower chin panel */}
        <div className="w-full h-5 sm:h-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 border-t border-slate-300 flex items-center justify-center relative z-10">
          <div className="w-3 sm:w-3.5 h-3 sm:h-3.5 bg-slate-400 rounded-full opacity-45 shadow-inner" />
        </div>

        {/* iMac Aluminum Desk Stand base */}
        <div className="w-16 sm:w-20 h-10 sm:h-14 bg-gradient-to-b from-slate-300 via-slate-250 to-slate-350 mx-auto rounded-b-xl shadow-lg border-t border-slate-300 relative z-0 -mt-0.5" />
        <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full shadow-md relative z-0 -mt-1" />

      </div>
    </div>
  );
}
