"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Laptop,
  Smartphone,
  Star,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { PORTFOLIO_PROJECTS, ProjectItem } from "@/data/portfolioData";

export default function PortfolioHighlight() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  // Select top featured flagship projects
  const featuredProjects = PORTFOLIO_PROJECTS.filter((p) =>
    ["solo-hearts", "sherla-properties", "medicompares-app", "skanda-hospital", "waypartner", "eaglemart"].includes(p.id)
  );

  const displayProjects =
    activeFilter === "ALL"
      ? featuredProjects
      : activeFilter === "WEB"
      ? featuredProjects.filter((p) => p.type === "web")
      : activeFilter === "MOBILE"
      ? featuredProjects.filter((p) => p.type === "mobile")
      : featuredProjects.filter((p) => p.category.toUpperCase() === activeFilter);

  return (
    <section className="relative font-sans overflow-hidden select-none bg-slate-50/60 py-12 sm:py-16 border-y border-slate-200/60">
      {/* Background Ambient Accents */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-8 relative z-10">

        {/* ── Section Header ── */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-pink-500" />
                Featured Work & Case Studies
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Spotlight on Our <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Masterpieces
                </span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
                Discover how we build high-performing web platforms, scalable mobile apps, and custom enterprise software for forward-thinking brands.
              </p>
            </div>

            {/* Header CTA Link to /portfolio */}
            <div className="shrink-0">
              <Link
                href="/portfolio"
                prefetch={true}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md hover:border-pink-300 hover:text-pink-600 transition-all duration-300"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Interactive Category Filter Pills ── */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1">
            {[
              { id: "ALL", label: "All Projects" },
              { id: "WEB", label: "Web Applications" },
              { id: "MOBILE", label: "Mobile Apps" },
              { id: "HEALTHCARE", label: "Healthcare" },
              { id: "REAL ESTATE", label: "Real Estate" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 shrink-0 cursor-pointer border ${
                  activeFilter === tab.id
                    ? "bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white border-transparent shadow-md shadow-pink-500/20 scale-[1.02]"
                    : "bg-white text-slate-600 border-slate-200/80 hover:border-pink-200 hover:text-slate-900 shadow-2xs"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Featured Projects Grid Showcase ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {displayProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 100} direction="up" className="h-full">
              <div className="group rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-pink-300/80 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden relative">
                
                {/* Top Image Stage */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Glass Tag Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-[10px] font-mono font-bold text-slate-800 shadow-xs">
                      {project.type === "mobile" ? (
                        <Smartphone className="w-3 h-3 text-pink-600" />
                      ) : (
                        <Laptop className="w-3.5 h-3.5 text-indigo-600" />
                      )}
                      <span>{project.tag}</span>
                    </span>
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <Link
                      href="/portfolio"
                      className="w-full py-2 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-md hover:bg-white transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 text-pink-600" />
                    </Link>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-pink-600 transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 uppercase border border-slate-200/60">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {project.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Badge Box */}
                  {project.metrics && (
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-pink-50/50 border border-pink-100/80 text-center">
                      <div>
                        <span className="block text-xs font-mono font-extrabold text-pink-600 leading-none">
                          {project.metrics.val1}
                        </span>
                        <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase">
                          {project.metrics.label1}
                        </span>
                      </div>
                      <div className="w-px h-6 bg-pink-200/60" />
                      <div>
                        <span className="block text-xs font-mono font-extrabold text-indigo-600 leading-none">
                          {project.metrics.val2}
                        </span>
                        <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase">
                          {project.metrics.label2}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer Link */}
                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-rose-600 text-slate-700 group-hover:text-white border border-slate-200/80 group-hover:border-transparent text-xs font-extrabold tracking-wide uppercase transition-all duration-300 shadow-2xs"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Bottom Banner Card to Drive Traffic to /portfolio ── */}
        <ScrollReveal direction="up" delay={200}>
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 border border-slate-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Ambient Laser Beam */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />

            <div className="space-y-2 text-center md:text-left z-10 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-mono font-bold uppercase border border-pink-500/30">
                <TrendingUp className="w-3 h-3 text-pink-400" />
                Proven Track Record
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Want to See More of Our Featured Innovations?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-normal">
                Explore our full showcase of 15+ high-impact web & mobile applications built for clients globally.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 z-10">
              <Link
                href="/portfolio"
                prefetch={true}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all"
              >
                <span>EXPLORE ALL WORK</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
