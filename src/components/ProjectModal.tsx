"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "@/data/portfolioData";
import ThreeDShowcase from "@/components/ThreeDShowcase";
import { X, CheckCircle2, ExternalLink, Smartphone, Globe, Sparkles } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key & Lock background scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-950/50 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="bg-white border border-slate-200/90 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative text-slate-800 my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer transition-colors z-30 focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-slate-100 pb-4 pr-12">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200/60">
              {project.category}
            </span>
            <span
              className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                project.type === "mobile"
                  ? "bg-pink-50 text-pink-700 border-pink-200"
                  : "bg-violet-50 text-violet-700 border-violet-200"
              }`}
            >
              {project.type === "mobile" ? (
                <>
                  <Smartphone className="w-3 h-3" /> Mobile Application
                </>
              ) : (
                <>
                  <Globe className="w-3 h-3" /> Web Platform
                </>
              )}
            </span>
            {project.metrics?.val1 && (
              <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-500" />
                {project.metrics.val1} {project.metrics.label1}
              </span>
            )}
          </div>
          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">
            {project.name}
          </h2>
        </div>

        {/* Modal Screenshot / Device Frame Preview */}
        {project.type === "mobile" ? (
          /* Mobile App Smartphone Preview */
          <div className="relative w-[240px] sm:w-[260px] h-[450px] mx-auto rounded-[36px] border-[6px] border-slate-900 bg-slate-950 shadow-xl overflow-hidden group">
            {/* Camera Pill Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900 rounded-full z-20 flex items-center justify-between px-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-950 border border-slate-800" />
              <div className="w-1 h-1 rounded-full bg-emerald-500" />
            </div>

            <div className="w-full h-full overflow-y-auto no-scrollbar pt-6 bg-slate-950">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-auto object-cover object-top select-none pointer-events-none block"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              />
            </div>
          </div>
        ) : (
          /* Web App Desktop iMac Preview */
          <div className="w-full">
            <ThreeDShowcase projects={[project]} activeIndex={0} />
          </div>
        )}

        {/* Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            Executive Summary
          </h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            {project.desc}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-2 border-t border-slate-100 pt-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            Core Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {project.features.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2 border-t border-slate-100 pt-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            Technology Architecture
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-pink-600"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
          >
            Close Blueprint
          </button>

          {project.url !== "#" && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:scale-105 cursor-pointer transition-all shadow-md"
            >
              <span>Launch Live Site / Store</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
