"use client";

import React from "react";
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

  return (
    <div className="w-full py-6 select-none flex flex-col items-center justify-center">
      {/* Widescreen iMac Mockup Frame (Pure CSS, 100% stable, no WebGL) */}
      <div className="relative w-full max-w-[520px] group/iMac">
        
        {/* iMac Screen Chassis */}
        <div className="w-full h-[320px] bg-slate-900 rounded-t-3xl border-[4px] border-slate-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col relative z-10">
          
          {/* Browser header tab bar */}
          <div className="w-full h-8 bg-slate-950 border-b border-slate-900 flex items-center px-4 shrink-0 justify-between select-none">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded px-4 py-0.5 text-[8.5px] text-slate-400 font-mono tracking-wide max-w-[180px] truncate leading-none flex items-center gap-1.5">
              <Globe className="w-2.5 h-2.5 text-slate-500" />
              <span>{currentProject.name.toLowerCase().replace(/\s+/g, "")}.com</span>
            </div>
            
            <div className="w-6" /> {/* Spacer */}
          </div>

          {/* Screenshot Viewport with complete scrolling on hover */}
          <div 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="relative w-full h-[280px] overflow-hidden bg-slate-950 group/viewport"
          >
            <style>{`
              .viewport-scroll-container:hover .viewport-scroll-img {
                transform: translateY(calc(-100% + 280px)) !important;
              }
            `}</style>
            
            <div className="viewport-scroll-container w-full h-full overflow-hidden relative">
              <img
                src={currentProject.img}
                alt={currentProject.name}
                className="viewport-scroll-img w-full h-auto absolute top-0 left-0 object-cover object-top transition-transform duration-[12s] ease-in-out"
                style={{ 
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translateY(0)'
                }}
              />
              
              {/* Floating scroll action tooltip */}
              <div className="absolute inset-0 bg-black/30 group-hover/viewport:opacity-0 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-slate-900/80 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm flex items-center gap-1">
                  <span>Hover to scroll page</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* iMac Silver Lower chin panel */}
        <div className="w-full h-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 border-t border-slate-300 flex items-center justify-center relative z-10">
          <div className="w-3.5 h-3.5 bg-slate-400 rounded-full opacity-45 shadow-inner" />
        </div>

        {/* iMac Aluminum Desk Stand base */}
        <div className="w-20 h-16 bg-gradient-to-b from-slate-300 via-slate-250 to-slate-350 mx-auto rounded-b-xl shadow-lg border-t border-slate-300 relative z-0 -mt-0.5" />
        <div className="w-32 h-1.5 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full shadow-md relative z-0 -mt-1" />

      </div>
    </div>
  );
}
