"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ThreeDShowcase from "@/components/ThreeDShowcase";
import ProjectModal from "@/components/ProjectModal";
import { openContactModal } from "@/components/ContactModal";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, ProjectItem, PORTFOLIO_CATEGORIES, getPortfolioCategories } from "@/data/portfolioData";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { usePortfolioProjects } from "@/hooks/usePortfolioProjects";
import {
  Smartphone,
  Globe,
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Star,
  Award,
  Layers,
  X,
  Play,
  Pause,
  Grid,
  List,
  LayoutGrid,
  ArrowUpRight,
  Code2,
  Laptop
} from "lucide-react";

export default function PortfolioPage() {
  // TanStack Query Data Fetching & Caching
  const { data: projects = PORTFOLIO_PROJECTS } = usePortfolioProjects();

  // Zustand Client UI State Store
  const {
    selectedCategory,
    selectedType,
    viewMode,
    searchQuery,
    modalProject,
    simActiveIndex,
    simPaused,
    displayLimit,
    setSelectedCategory,
    setSelectedType,
    setViewMode,
    setSearchQuery,
    setModalProject,
    setSimActiveIndex,
    setSimPaused,
    loadMoreProjects,
  } = usePortfolioStore();

  const [expandedCardIds, setExpandedCardIds] = useState<Record<string, boolean>>({});

  const deviceViewportRef = useRef<HTMLDivElement>(null);
  const observerTargetRef = useRef<HTMLDivElement>(null);

  const toggleCardExpanded = (id: string) => {
    setExpandedCardIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Categories list (exported from data module, with getPortfolioCategories helper available for dynamic mode)
  const categories = PORTFOLIO_CATEGORIES;

  // Filtered projects list
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Filter by type
      if (selectedType === "mobile" && p.type !== "mobile") return false;
      if (selectedType === "web" && p.type !== "web") return false;

      // Filter by category
      if (selectedCategory !== "ALL" && p.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Filter by search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesDesc = p.desc.toLowerCase().includes(query);
        const matchesCategory = p.category.toLowerCase().includes(query);
        const matchesTech = p.tech.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesCategory && !matchesTech) {
          return false;
        }
      }

      return true;
    });
  }, [projects, selectedType, selectedCategory, searchQuery]);

  // Paginated visible projects slice (loads 10 initially, triggers +10 on scroll)
  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, displayLimit);
  }, [filteredProjects, displayLimit]);

  // Infinite Scroll Trigger via Intersection Observer
  useEffect(() => {
    const target = observerTargetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleProjects.length < filteredProjects.length) {
          loadMoreProjects(10);
        }
      },
      { threshold: 0.1, rootMargin: "250px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [visibleProjects.length, filteredProjects.length, loadMoreProjects]);

  // Simulator subset matches current filters or all projects
  const simProjects = useMemo(() => filteredProjects.length > 0 ? filteredProjects : projects, [filteredProjects, projects]);
  const activeSimProject = simProjects[simActiveIndex % simProjects.length] || projects[0];

  // Auto-slide simulator every 4.5 seconds if not paused
  useEffect(() => {
    if (simPaused || viewMode !== "simulator") return;
    const timer = setInterval(() => {
      setSimActiveIndex((prev) => (prev + 1) % simProjects.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [simPaused, viewMode, simProjects.length]);

  // Smooth scroll device viewport top on slide change
  useEffect(() => {
    if (deviceViewportRef.current) {
      deviceViewportRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [simActiveIndex]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/40 text-slate-800 font-sans select-none lg:pr-[80px]">
      <Header />

      <main className="flex-grow pb-20">
        {/* HERO SECTION — Clean Light Studio Showcase Header */}
        <section className="relative overflow-hidden bg-white py-12 lg:py-10">
          {/* Ambient Glow Accents */}
          {/* <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none" /> */}

          <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-6 text-center">
            <ScrollReveal direction="up">
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/60 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest shadow-3xs">
                  <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                  Portfolio Showcase Studio
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Engineering{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Digital Excellence
                  </span>
                </h1>

                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
                  Explore our complete catalog of 25+ production mobile applications and enterprise web platforms — showcased in authentic mobile device frames and desktop iMac monitor stands.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* INTERACTIVE DEVICE STUDIO & CONTROL BAR */}
        <section className="py-6 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 space-y-4">

            {/* CONTROL BAR: Type Filter, Search, View Switcher, & Category Ribbon */}
            <div className="bg-white border border-slate-200/80 rounded-lg p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4">

              {/* Row 1: Type Tabs (Left), Search Bar & View Switches (Right) */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Type Filters (All, Mobile Apps, Web Apps) */}
                <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-lg border border-slate-200/80 shrink-0">
                  <button
                    onClick={() => { setSelectedType("all"); setSimActiveIndex(0); }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${selectedType === "all"
                      ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                      }`}
                  >
                    All ({PORTFOLIO_PROJECTS.length})
                  </button>
                  <button
                    onClick={() => { setSelectedType("mobile"); setSimActiveIndex(0); }}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${selectedType === "mobile"
                      ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                      }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    Mobile ({PORTFOLIO_PROJECTS.filter(p => p.type === "mobile").length})
                  </button>
                  <button
                    onClick={() => { setSelectedType("web"); setSimActiveIndex(0); }}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${selectedType === "web"
                      ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                      }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Web ({PORTFOLIO_PROJECTS.filter(p => p.type === "web").length})
                  </button>
                </div>

                {/* Right Group: Search Bar & View Mode Switcher */}
                <div className="flex items-center gap-3 shrink-0">
                  {/* Search Bar */}
                  <div className="relative w-48 sm:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search projects..."
                      className="w-full bg-white border border-slate-200 focus:border-pink-400 rounded-lg py-2 pl-9 pr-8 text-xs text-slate-800 placeholder-slate-400 focus:outline-none shadow-3xs transition-colors"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* View Mode Switches */}
                  <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-lg border border-slate-200/80 shrink-0">
                    <button
                      onClick={() => setViewMode("grid")}
                      title="Grid View"
                      className={`p-1.5 rounded-lg transition-all cursor-pointer ${viewMode === "grid" ? "bg-white text-pink-600 shadow-2xs font-bold" : "text-slate-500 hover:text-slate-900"
                        }`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("simulator")}
                      title="Device Studio"
                      className={`p-1.5 rounded-lg transition-all cursor-pointer ${viewMode === "simulator" ? "bg-white text-pink-600 shadow-2xs font-bold" : "text-slate-500 hover:text-slate-900"
                        }`}
                    >
                      <Smartphone className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      title="Spec List View"
                      className={`hidden md:inline-flex p-1.5 rounded-lg transition-all cursor-pointer ${viewMode === "list" ? "bg-white text-pink-600 shadow-2xs font-bold" : "text-slate-500 hover:text-slate-900"
                        }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 2: Category Filter Ribbon */}
              <div className="flex items-center gap-2 border-t border-slate-100 pt-3 overflow-x-auto no-scrollbar">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 shrink-0 mr-1 flex items-center gap-1">
                  <Filter className="w-3 h-3 text-pink-500" /> Category:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-all whitespace-nowrap shrink-0 cursor-pointer ${selectedCategory === cat
                      ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white shadow-2xs"
                      : "bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-100"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>

            {/* MODE 1: INTERACTIVE DEVICE STUDIO (Smartphone for Mobile, iMac Stand Showcase for Web) */}
            {viewMode === "simulator" && (
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200/90 rounded-lg p-6 sm:p-10 shadow-lg relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                  {/* LEFT: Dynamic Device Mockup (Smartphone for Mobile, iMac Showcase for Web) */}
                  <div className="lg:col-span-6 flex justify-center py-4 relative">

                    {activeSimProject.type === "mobile" ? (
                      /* --- SMARTPHONE DEVICE FRAME FOR MOBILE APPS --- */
                      <div
                        onMouseEnter={() => setSimPaused(true)}
                        onMouseLeave={() => setSimPaused(false)}
                        className="relative w-[260px] sm:w-[280px] h-[520px] sm:h-[550px] rounded-[44px] border-[8px] border-slate-900 bg-slate-950 overflow-hidden shadow-[0_25px_60px_rgba(236,72,153,0.18)] ring-1 ring-slate-800 transition-all duration-500 hover:scale-[1.02]"
                      >
                        {/* Hardware Side Buttons */}
                        <div className="absolute top-24 -left-[10px] w-1.5 h-10 bg-slate-800 rounded-l-md" />
                        <div className="absolute top-38 -left-[10px] w-1.5 h-12 bg-slate-800 rounded-l-md" />
                        <div className="absolute top-28 -right-[10px] w-1.5 h-14 bg-slate-800 rounded-r-md" />

                        {/* Dynamic Island Notch */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-between px-2">
                          <div className="w-2 h-2 rounded-full bg-slate-950 border border-slate-800" />
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>

                        {/* Screen Viewport */}
                        <div
                          ref={deviceViewportRef}
                          className="absolute inset-0 overflow-y-auto no-scrollbar z-10 bg-slate-950 pt-9 pb-6"
                        >
                          <img
                            src={activeSimProject.img}
                            alt={activeSimProject.name}
                            className="w-full h-auto object-cover object-top select-none pointer-events-none block"
                            style={{
                              imageRendering: '-webkit-optimize-contrast',
                              WebkitBackfaceVisibility: 'hidden',
                              backfaceVisibility: 'hidden',
                              transform: 'translateZ(0)'
                            }}
                          />
                        </div>

                        <div className="absolute top-10 left-3 z-20 bg-pink-600 text-white text-[8px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-md shadow-sm">
                          Mobile App View
                        </div>
                      </div>
                    ) : (
                      /* --- IMAC WIDESCREEN DESKTOP SHOWCASE FOR WEB APPS --- */
                      <div className="w-full">
                        <ThreeDShowcase
                          projects={simProjects}
                          activeIndex={simActiveIndex % simProjects.length}
                          onMouseEnter={() => setSimPaused(true)}
                          onMouseLeave={() => setSimPaused(false)}
                        />
                      </div>
                    )}

                    {/* Floating Slide Controls */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/95 border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-lg z-30">
                      <button
                        onClick={() => setSimActiveIndex((prev) => (prev === 0 ? simProjects.length - 1 : prev - 1))}
                        className="p-1 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
                        title="Previous Project"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setSimPaused(!simPaused)}
                        className="p-1 rounded-full text-pink-600 hover:bg-pink-50 cursor-pointer"
                        title={simPaused ? "Play Auto-Slide" : "Pause Auto-Slide"}
                      >
                        {simPaused ? <Play className="w-3.5 h-3.5 fill-pink-600 text-pink-600" /> : <Pause className="w-3.5 h-3.5 fill-pink-600 text-pink-600" />}
                      </button>
                      <span className="text-[10px] font-mono text-slate-500 font-bold px-1">
                        {simActiveIndex + 1}/{simProjects.length}
                      </span>
                      <button
                        onClick={() => setSimActiveIndex((prev) => (prev + 1) % simProjects.length)}
                        className="p-1 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
                        title="Next Project"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                  {/* RIGHT: Selected Project Specifications */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-200/80">
                          {activeSimProject.category}
                        </span>
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${activeSimProject.type === "mobile" ? "bg-pink-50 text-pink-700 border-pink-200/80" : "bg-violet-50 text-violet-700 border-violet-200/80"}`}>
                          {activeSimProject.type === "mobile" ? "Mobile Application" : "Web Platform"}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {activeSimProject.name}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {activeSimProject.desc}
                      </p>
                    </div>

                    {/* Key Architecture Features */}
                    <div className="space-y-2.5 pt-3 border-t border-slate-200/80">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
                        Core Architecture Features
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                        {activeSimProject.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2.5 bg-slate-50/80 hover:bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs transition-all duration-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="space-y-2.5 pt-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
                        Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeSimProject.tech.map((t, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setModalProject(activeSimProject)}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>Inspect Full Blueprint</span>
                        <ArrowUpRight className="w-4 h-4 text-white shrink-0" />
                      </button>

                      {activeSimProject.url !== "#" && (
                        <a
                          href={activeSimProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
                        >
                          <span>Launch Project Live</span>
                          <ExternalLink className="w-4 h-4 text-slate-500 shrink-0" />
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            )}

            {/* MODE 2 & DEFAULT: 2-CARDS-PER-ROW SPLIT DEVICE SHOWCASE VIEW */}
            {viewMode === "grid" && (
              <div className="space-y-6">
                {/* <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Showing {filteredProjects.length} of {PORTFOLIO_PROJECTS.length} Projects</span>
                  <span>Filtered View</span>
                </div> */}

                {filteredProjects.length === 0 ? (
                  <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-3 shadow-xs">
                    <p className="text-slate-500 text-sm">No projects found matching your search or category filter.</p>
                    <button
                      onClick={() => { setSelectedCategory("ALL"); setSelectedType("all"); setSearchQuery(""); }}
                      className="px-4 py-2 rounded-xl bg-pink-50 border border-pink-200 text-pink-600 text-xs font-bold uppercase tracking-wider hover:bg-pink-100 transition-colors cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
                    {visibleProjects.map((project, idx) => (
                      <ScrollReveal key={project.id} delay={(idx % 6) * 50} direction="up" className="h-full">
                        <div className="group bg-white border border-slate-200/90 hover:border-pink-300 rounded-xl p-4.5 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-stretch h-full relative overflow-hidden">

                          {/* LEFT SIDE: DEVICE MOCKUP — AUTO-SCROLL ON HOVER (No manual scrollbars!) */}
                          <div className="w-full sm:w-[42%] shrink-0 flex items-center justify-center relative py-2">
                            {project.type === "mobile" ? (
                              /* SMARTPHONE DEVICE FRAME FOR MOBILE APPS — AUTO-SCROLL ON HOVER */
                              <div className="relative w-[160px] sm:w-[175px] h-[270px] sm:h-[295px] rounded-[32px] border-[6px] border-slate-900 bg-slate-950 shadow-[0_15px_35px_rgba(0,0,0,0.18)] overflow-hidden transition-transform duration-500 group-hover:scale-105">
                                {/* Refined Sleek Camera Notch Pill Cutout */}
                                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-900 rounded-full z-30 flex items-center justify-between px-1.5 border border-slate-800/80 shadow-xs">
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950 border border-slate-800" />
                                  <div className="w-1 h-1 rounded-full bg-emerald-500/80" />
                                </div>

                                {/* Phone Screen Viewport (Zero Manual Scrollbars, Auto-Scrolls Down on Card Hover) */}
                                <div className="w-full h-full overflow-hidden bg-slate-950 relative pt-6">
                                  <img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full h-auto absolute top-0 left-0 object-cover object-top select-none pointer-events-none block transition-transform duration-[8000ms] ease-in-out group-hover:-translate-y-[calc(100%-260px)]"
                                    style={{
                                      imageRendering: '-webkit-optimize-contrast',
                                      WebkitBackfaceVisibility: 'hidden',
                                      backfaceVisibility: 'hidden',
                                      transform: 'translateZ(0)'
                                    }}
                                  />
                                </div>

                                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-slate-200/80 text-[8px] font-mono font-bold text-pink-600 uppercase tracking-widest shadow-2xs z-20">
                                  Mobile App
                                </div>
                              </div>
                            ) : (
                              /* DESKTOP IMAC MONITOR MOCKUP FOR WEB APPS — AUTO-SCROLL ON HOVER */
                              <div className="relative w-full max-w-[260px] sm:max-w-[280px] flex flex-col items-center justify-center group/imac my-auto">
                                {/* Monitor Screen Frame */}
                                <div className="w-full h-[175px] sm:h-[195px] bg-slate-900 rounded-t-2xl border-[4px] border-slate-800 shadow-[0_15px_35px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col relative z-10">
                                  {/* Browser Header Bar */}
                                  <div className="w-full h-6 bg-slate-950 border-b border-slate-800 flex items-center px-2.5 shrink-0 justify-between">
                                    <div className="flex gap-1.5 shrink-0">
                                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    </div>
                                    <div className="bg-slate-900 border border-slate-800 rounded px-2 py-0.5 text-[8px] text-slate-400 font-mono max-w-[130px] truncate text-center font-bold">
                                      {project.name.toLowerCase().replace(/\s+/g, "")}.com
                                    </div>
                                    <span className="text-[7.5px] font-mono text-violet-400 uppercase font-bold">Web App</span>
                                  </div>

                                  {/* Screenshot Viewport (Zero Manual Scrollbars, Auto-Scrolls Down on Hover) */}
                                  <div className="relative w-full flex-grow overflow-hidden bg-slate-950">
                                    <img
                                      src={project.img}
                                      alt={project.name}
                                      className="w-full h-auto absolute top-0 left-0 object-cover object-top select-none pointer-events-none block transition-transform duration-[8000ms] ease-in-out group-hover:-translate-y-[calc(100%-145px)]"
                                      style={{
                                        imageRendering: '-webkit-optimize-contrast',
                                        WebkitBackfaceVisibility: 'hidden',
                                        backfaceVisibility: 'hidden',
                                        transform: 'translateZ(0)'
                                      }}
                                    />
                                  </div>
                                </div>

                                {/* iMac Silver Lower Chin Panel */}
                                <div className="w-full h-5 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 border-t border-slate-300 flex items-center justify-center relative z-10 rounded-b-sm shadow-xs">
                                  <div className="w-2.5 h-2.5 bg-slate-400 rounded-full opacity-50 shadow-inner" />
                                </div>

                                {/* iMac Vertical Metallic Stand Neck */}
                                <div className="w-16 h-8 bg-gradient-to-b from-slate-300 via-slate-250 to-slate-350 mx-auto border-t border-slate-300 shadow-inner relative z-0 -mt-0.5" />

                                {/* iMac Horizontal Desk Stand Foot Plate Base */}
                                <div className="w-28 h-2 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 mx-auto rounded-full shadow-md border-t border-slate-300 relative z-0 -mt-1" />
                              </div>
                            )}
                          </div>

                          {/* RIGHT SIDE: RICHER PROJECT CONTENT DETAILS WITH EXPANDABLE READ MORE */}
                          <div className="w-full sm:w-[58%] flex flex-col justify-between space-y-3">
                            <div className="space-y-2.5">
                              {/* Top Category, Type & Live Metric Badges */}
                              <div className="flex flex-wrap items-center gap-1.5">
                                <span className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200/60">
                                  {project.category}
                                </span>
                                <span className={`text-[8.5px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${project.type === "mobile" ? "bg-pink-50 text-pink-700 border-pink-200/60" : "bg-violet-50 text-violet-700 border-violet-200/60"}`}>
                                  {project.type === "mobile" ? "Mobile App" : "Web Platform"}
                                </span>
                                {project.metrics?.val1 && (
                                  <span className="text-[8.5px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                                    {project.metrics.val1} {project.metrics.label1}
                                  </span>
                                )}
                              </div>

                              {/* Title */}
                              <h3 className="text-lg font-bold text-slate-900  transition-colors tracking-tight leading-tight">
                                {project.name}
                              </h3>

                              {/* Description + Read More Expand Toggle */}
                              <div className="text-slate-600 text-xs leading-relaxed font-normal space-y-1">
                                <p className={expandedCardIds[project.id] ? "" : "line-clamp-2"}>
                                  {project.desc}
                                </p>
                                <button
                                  onClick={() => toggleCardExpanded(project.id)}
                                  className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-600 hover:text-pink-700 cursor-pointer inline-flex items-center gap-1 transition-colors"
                                >
                                  <span>{expandedCardIds[project.id] ? "Show Less" : "Read More"}</span>
                                  {expandedCardIds[project.id] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                </button>
                              </div>

                              {/* Feature Bullet Highlights (Shows 3 by default, all when expanded) */}
                              <div className="pt-1 space-y-1">
                                {(expandedCardIds[project.id] ? project.features : project.features.slice(0, 3)).map((feat, fIdx) => (
                                  <div key={fIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                    <span className="truncate">{feat}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-3 pt-2.5 border-t border-slate-100">
                              {/* Tech Stack Pills (Shows 4 by default, all when expanded) */}
                              <div className="flex flex-wrap gap-1">
                                {(expandedCardIds[project.id] ? project.tech : project.tech.slice(0, 4)).map((t, tIdx) => (
                                  <span key={tIdx} className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/60 text-slate-600">
                                    {t}
                                  </span>
                                ))}
                                {!expandedCardIds[project.id] && project.tech.length > 4 && (
                                  <button
                                    onClick={() => toggleCardExpanded(project.id)}
                                    className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-pink-50 text-pink-600 hover:bg-pink-100 cursor-pointer"
                                  >
                                    +{project.tech.length - 4}
                                  </button>
                                )}
                              </div>

                              {/* Card Footer Action Buttons */}
                              <div className="flex items-center justify-between gap-2">
                                <button
                                  onClick={() => setModalProject(project)}
                                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
                                >
                                  <span>Inspect Blueprint</span>
                                  <ArrowUpRight className="w-3.5 h-3.5" />
                                </button>

                                {project.url !== "#" ? (
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                                    title="Open Live Site / Store"
                                  >
                                    <span>Live Site</span>
                                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                                  </a>
                                ) : (
                                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/60">
                                    Enterprise SLA
                                  </span>
                                )}
                              </div>
                            </div>

                          </div>

                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* MODE 3: COMPACT SPEC LIST VIEW (Desktop Only) */}
            {viewMode === "list" && (
              <div className="hidden md:block bg-white border border-slate-200/90 rounded-lg overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-white border-b border-slate-200 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                      <tr>
                        <th className="py-3.5 px-6">Project Name</th>
                        <th className="py-3.5 px-6">Type</th>
                        <th className="py-3.5 px-6">Category</th>
                        <th className="py-3.5 px-6">Tech Stack</th>
                        <th className="py-3.5 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {visibleProjects.map((project) => (
                        <tr key={project.id} className="hover:bg-slate-50/80 transition-colors group">
                          <td className="py-4 px-6 font-bold text-[#1e1b4b] uppercase tracking-tight flex items-center gap-3">
                            <img src={project.img} alt={project.name} className="w-10 h-10 rounded-lg object-cover object-top border border-slate-200 shrink-0" />
                            <div>
                              <div>{project.name}</div>
                              <div className="text-[10px] font-mono text-slate-500 font-normal truncate max-w-xs">{project.desc}</div>
                            </div>
                          </td>
                          <td className="py-4 px-6 font-mono text-[10px] font-bold uppercase">
                            <span className={`px-2 py-0.5 rounded-full border ${project.type === "mobile" ? "bg-pink-50 text-pink-700 border-pink-200" : "bg-violet-50 text-violet-700 border-violet-200"}`}>
                              {project.type}
                            </span>
                          </td>
                          <td className="py-4 px-6 font-mono text-xs text-slate-600">{project.category}</td>
                          <td className="py-4 px-6">
                            <div className="flex flex-wrap gap-1.5 max-w-xs">
                              {project.tech.map((t, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-50/80 text-indigo-700 border border-indigo-200/80 hover:bg-indigo-100 transition-colors"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <div className="inline-flex flex-col items-end gap-1.5 justify-end">
                              <button
                                onClick={() => setModalProject(project)}
                                className="w-32 sm:w-36 px-3.5 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                <span>Inspect</span>
                                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                              </button>

                              {project.url !== "#" && (
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-32 sm:w-36 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                                  title="Launch Live Project"
                                >
                                  <span>Live Site</span>
                                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                </a>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* INFINITE SCROLL SENTINEL & STATUS INDICATOR */}
            {filteredProjects.length > 0 && (
              <div ref={observerTargetRef} className="pt-6 pb-2 flex flex-col items-center justify-center space-y-2">
                {visibleProjects.length < filteredProjects.length ? (
                  <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-pink-200/80 text-xs font-mono font-bold text-slate-700 shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping" />
                    <span>Loading projects ({visibleProjects.length} of {filteredProjects.length})...</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Showing all {filteredProjects.length} projects</span>
                  </div>
                )}
              </div>
            )}

          </div>
        </section>

        {/* CALL TO ACTION BANNER */}
        <section className="w-full bg-gradient-to-r from-pink-50 via-purple-50/70 to-indigo-50 border-t border-b border-slate-200/80 py-8 sm:py-10 px-6 sm:px-12 relative overflow-hidden">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-pink-200/60 shadow-2xs text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-pink-500" />
                Custom Project Execution
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1e1b4b]">
                Ready to Build Your Custom Software with Digital Raiz?
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-normal">
                Web Applications • Mobile Apps • AI &amp; Enterprise Cloud Solutions in Hyderabad
              </p>
            </div>
            <div className="shrink-0">
              <button
                onClick={() => openContactModal("Web Development")}
                className="inline-flex items-center gap-2.5 py-3.5 px-8 rounded-2xl bg-[#1e1b4b] hover:bg-[#2d2a6e] text-white text-[10px] font-black uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
              >
                <span>Launch Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-pink-400" />
              </button>
            </div>
          </div>
        </section>

        {/* FULL PROJECT BLUEPRINT LIGHTBOX MODAL */}
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      </main>

      <Footer />
    </div>
  );
}
