import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, MessageSquare, Globe, Lock, Code2, Zap, ExternalLink } from "lucide-react";
import { reviewsData, ReviewItem } from "@/data/testimonialsData";

export type { ReviewItem };

interface AnimatedTestimonialsProps {
  items?: ReviewItem[];
  variant?: "mobile-pods" | "web-studio";
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
}

export default function AnimatedTestimonials({
  items,
  variant = "mobile-pods",
  titlePrefix = "What Our Clients Say About",
  titleHighlight = "Our Mobile Apps",
  subtitle = "Discover how Digital Raiz engineers top-rated, high-performance digital products for fast-growing startups and global enterprises."
}: AnimatedTestimonialsProps) {
  const reviews = items && items.length > 0 ? items : reviewsData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const changeSlide = (nextIndexOrGetter: number | ((prev: number) => number)) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsExiting(true);

    // 1. Staggered Exit to Left (450ms)
    setTimeout(() => {
      setCurrentIndex((prev) => (typeof nextIndexOrGetter === "function" ? nextIndexOrGetter(prev) : nextIndexOrGetter));
      setIsExiting(false);
      setAnimKey((prev) => prev + 1);

      // 2. Staggered Entrance from Right (550ms)
      setTimeout(() => {
        setIsTransitioning(false);
      }, 550);
    }, 450);
  };

  const nextReview = () => {
    changeSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    changeSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const goToReview = (index: number) => {
    if (index === currentIndex) return;
    changeSlide(index);
  };

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 35;

    if (distance > minSwipeDistance) {
      nextReview();
    } else if (distance < -minSwipeDistance) {
      prevReview();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextReview();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isTransitioning]);

  return (
    <section className="py-12 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100 antialiased">
      {/* Subtle Grid & Light Ambient Particle Glows */}
      <div className="absolute inset-0 bg-grid-premium opacity-5 pointer-events-none" />

      {/* Soft Ambient Pastel Glowing Orbs */}
      <div className="absolute top-1/4 left-1/6 w-[450px] h-[450px] bg-gradient-to-r from-violet-200/30 via-pink-200/25 to-indigo-200/30 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/6 w-[450px] h-[450px] bg-gradient-to-r from-cyan-200/30 via-purple-200/25 to-pink-200/30 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 space-y-4 sm:space-y-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-50 border border-violet-200 text-[9px] font-mono font-bold uppercase tracking-widest text-violet-600 shadow-2xs">
            {variant === "web-studio" ? <Globe className="w-3.5 h-3.5 text-violet-600" /> : <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin-slow" />}
            <span>{variant === "web-studio" ? "Web Engineering Reviews" : "Holographic Client Reviews"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            {titlePrefix}{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* SHOWCASE WRAPPER WITH TOUCH SWIPE HANDLERS */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="testimonials-wrapper relative w-full px-2 py-1 sm:py-4 touch-manipulation select-none"
        >

          {variant === "web-studio" ? (
            /* 🔮 MAGIC BUBBLE CAROUSEL & SCROLL SPOTLIGHT STAGE (WEB STUDIO) */
            <div className="w-full max-w-6xl mx-auto space-y-8 relative">

              {/* 1. FLOATING MAGIC BUBBLE STAGE CONTAINER (3-CARD STAGE) */}
              <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6 min-h-[420px] py-2 z-20">

                {/* LEFT MAGIC FLOATING BUBBLE CARD (Prev Review) */}
                <div
                  onClick={prevReview}
                  className="hidden md:flex flex-col justify-between w-full md:w-[240px] lg:w-[270px] shrink-0 p-4.5 rounded-[28px] bg-gradient-to-br from-white via-violet-50/90 to-pink-50/80 backdrop-blur-md border-2 border-pink-200/90 shadow-xl cursor-pointer transition-all duration-500 ease-out hover:scale-[1.03] hover:border-violet-400 opacity-90 hover:opacity-100 -rotate-2 hover:rotate-0 animate-magic-bubble-left group relative z-10"
                  title="Click to pop into center spotlight"
                >
                  <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-pink-100/80">
                    <div className="flex items-center gap-2 truncate">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${reviews[(currentIndex - 1 + reviews.length) % reviews.length].avatarBg} p-0.5 shadow-2xs shrink-0`}>
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-mono font-black text-[10px]">
                          {reviews[(currentIndex - 1 + reviews.length) % reviews.length].initials}
                        </div>
                      </div>
                      <div className="truncate">
                        <h4 className="text-xs font-black text-slate-900 truncate">
                          {reviews[(currentIndex - 1 + reviews.length) % reviews.length].name}
                        </h4>
                        <p className="text-[10px] font-bold text-pink-600 truncate">
                          {reviews[(currentIndex - 1 + reviews.length) % reviews.length].company}
                        </p>
                      </div>
                    </div>
                    <span className="text-[7.5px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 shrink-0">
                      Bubble
                    </span>
                  </div>

                  <p className="text-slate-700 text-[11px] italic line-clamp-3 py-2 font-medium leading-relaxed">
                    &ldquo;{reviews[(currentIndex - 1 + reviews.length) % reviews.length].review}&rdquo;
                  </p>

                  <div className="pt-2 border-t border-pink-100/80 flex items-center justify-between text-[9px] font-mono">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-pink-600 font-bold group-hover:underline flex items-center gap-1">
                      <span>Pop Center</span>
                      <ChevronLeft className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* CENTER FEATURED SPOTLIGHT CARD (Current Active Review) */}
                <div
                  key={`primary-web-${animKey}`}
                  className={`w-full md:w-[460px] lg:w-[500px] shrink-0 z-30 rounded-[30px] bg-gradient-to-r from-violet-500 via-indigo-500 to-pink-500 p-[1.5px] shadow-2xl transition-all duration-500 ease-out magic-bubble-transition ${isExiting ? "scale-90 opacity-40 blur-xs" : "scale-100 opacity-100 blur-none"
                    }`}
                >
                  <div className="w-full h-full bg-white rounded-[28px] overflow-hidden flex flex-col justify-between border border-violet-100 shadow-2xl relative">

                    {/* Dynamic Countdown Progress Bar */}
                    <div className="w-full h-1 bg-slate-100 overflow-hidden">
                      <div
                        key={`prog-${currentIndex}-${animKey}`}
                        className="h-full bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-500 animate-progress-timer"
                      />
                    </div>

                    {/* Studio Chrome Header */}
                    <div className="bg-slate-50/90 text-slate-700 px-4 py-2.5 flex items-center justify-between gap-2 border-b border-slate-200/80 backdrop-blur-md">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400 border border-rose-500/30" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/30" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-500/30" />
                        <span className="ml-1 text-[9.5px] font-mono text-slate-500 font-bold hidden sm:inline uppercase tracking-wider">Center Spotlight</span>
                      </div>

                      {/* SSL URL Badge */}
                      <div className="flex-1 max-w-[220px] mx-auto bg-white border border-slate-200/90 rounded-lg px-2.5 py-0.5 flex items-center justify-center gap-1 text-[10px] font-mono text-slate-700 shadow-2xs truncate">
                        <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                        <span className="truncate">https://{reviews[currentIndex].url || "digitalraiz.com"}</span>
                        <ExternalLink className="w-2 h-2 text-slate-400 shrink-0" />
                      </div>

                      {/* Verified Metric Badge */}
                      <div className="inline-flex items-center gap-1 text-[8.5px] font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/90 px-2 py-0.5 rounded-lg shrink-0 shadow-2xs">
                        <Zap className="w-2.5 h-2.5 text-emerald-600 animate-pulse" />
                        <span>{reviews[currentIndex].metric?.split("•")[0] || "0.2s Speed"}</span>
                      </div>
                    </div>

                    {/* Spotlight Card Body */}
                    <div className="p-5 sm:p-6 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-violet-50 border border-violet-200/80 text-[11px] font-mono font-bold text-violet-700 shadow-2xs">
                          <Code2 className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                          <span>{reviews[currentIndex].tag} • {reviews[currentIndex].app}</span>
                        </div>

                        <div className="flex items-center gap-0.5 bg-amber-50 border border-amber-200/90 px-2.5 py-0.5 rounded-lg shadow-2xs">
                          {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="ml-1 text-[11px] font-black text-slate-900 font-mono">5.0</span>
                        </div>
                      </div>

                      {/* Main Quote Statement */}
                      <div className="relative py-0.5">
                        <Quote className="w-10 h-10 text-violet-200/70 absolute -top-2 -left-2 -z-0 pointer-events-none" />
                        <p className="relative z-10 text-slate-900 text-sm sm:text-base md:text-lg font-medium leading-relaxed italic">
                          &ldquo;{reviews[currentIndex].review}&rdquo;
                        </p>
                      </div>

                      {/* Metric Result Box */}
                      {reviews[currentIndex].metric && (
                        <div className="p-3 rounded-xl bg-gradient-to-r from-violet-50 via-indigo-50/70 to-pink-50/70 border border-violet-200/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono font-bold text-violet-900 shadow-2xs">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>Audit Score:</span>
                          </div>
                          <span className="bg-white text-violet-700 px-2.5 py-0.5 rounded-lg border border-violet-200 font-extrabold shadow-2xs">
                            {reviews[currentIndex].metric}
                          </span>
                        </div>
                      )}

                      {/* Client Bio & Verification Footer */}
                      <div className="pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${reviews[currentIndex].avatarBg} p-0.5 shadow-md flex items-center justify-center shrink-0 relative`}>
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-mono font-black text-xs">
                              {reviews[currentIndex].initials}
                            </div>
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                          </div>

                          <div className="space-y-0.5">
                            <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
                              {reviews[currentIndex].name}
                            </h3>
                            <p className="text-[11px] font-bold text-violet-600 flex items-center gap-1">
                              <span>{reviews[currentIndex].role}</span>
                              <span className="text-slate-300">•</span>
                              <span className="text-slate-700">{reviews[currentIndex].company}</span>
                            </p>
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-1 text-[8.5px] font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-lg shrink-0">
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                          <span>Verified Client</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* RIGHT MAGIC FLOATING BUBBLE CARD (Next Review) */}
                <div
                  onClick={nextReview}
                  className="hidden md:flex flex-col justify-between w-full md:w-[240px] lg:w-[270px] shrink-0 p-4.5 rounded-[28px] bg-gradient-to-br from-white via-indigo-50/90 to-cyan-50/80 backdrop-blur-md border-2 border-cyan-200/90 shadow-xl cursor-pointer transition-all duration-500 ease-out hover:scale-[1.03] hover:border-violet-400 opacity-90 hover:opacity-100 rotate-2 hover:rotate-0 animate-magic-bubble-right group relative z-10"
                  title="Click to pop into center spotlight"
                >
                  <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-cyan-100/80">
                    <div className="flex items-center gap-2 truncate">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${reviews[(currentIndex + 1) % reviews.length].avatarBg} p-0.5 shadow-2xs shrink-0`}>
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-mono font-black text-[10px]">
                          {reviews[(currentIndex + 1) % reviews.length].initials}
                        </div>
                      </div>
                      <div className="truncate">
                        <h4 className="text-xs font-black text-slate-900 truncate">
                          {reviews[(currentIndex + 1) % reviews.length].name}
                        </h4>
                        <p className="text-[10px] font-bold text-cyan-600 truncate">
                          {reviews[(currentIndex + 1) % reviews.length].company}
                        </p>
                      </div>
                    </div>
                    <span className="text-[7.5px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 shrink-0">
                      Bubble
                    </span>
                  </div>

                  <p className="text-slate-700 text-[11px] italic line-clamp-3 py-2 font-medium leading-relaxed">
                    &ldquo;{reviews[(currentIndex + 1) % reviews.length].review}&rdquo;
                  </p>

                  <div className="pt-2 border-t border-cyan-100/80 flex items-center justify-between text-[9px] font-mono">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-cyan-600 font-bold group-hover:underline flex items-center gap-1">
                      <span>Pop Center</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              </div>

              {/* 2. CONTINUOUS MARQUEE MAGIC BUBBLE STREAM TRACK */}
              {/* <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between px-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                    <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                    <span>Continuous Magic Bubble Stream</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold">Click any bubble to center</span>
                </div>

                <div className="relative w-full overflow-hidden rounded-2xl py-2 bg-slate-50/60 border border-slate-200/70">
                  <div className="animate-marquee-smooth flex items-center gap-4 px-4">
                    {[...reviews, ...reviews].map((rev, idx) => {
                      const realIndex = idx % reviews.length;
                      const isActive = realIndex === currentIndex;

                      return (
                        <div
                          key={`marquee-${rev.id}-${idx}`}
                          onClick={() => goToReview(realIndex)}
                          className={`min-w-[260px] sm:min-w-[290px] p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-2.5 shrink-0 ${isActive
                              ? "bg-white border-violet-500 ring-2 ring-violet-500/40 shadow-lg scale-[1.03]"
                              : "bg-white/90 border-slate-200/90 hover:border-violet-300 hover:bg-white hover:shadow-md"
                            }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 truncate">
                              <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${rev.avatarBg} p-0.5 shrink-0`}>
                                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-mono font-black text-[8.5px]">
                                  {rev.initials}
                                </div>
                              </div>
                              <div className="truncate">
                                <div className="text-xs font-black text-slate-900 truncate">{rev.name}</div>
                                <div className="text-[10px] font-semibold text-slate-500 truncate">{rev.company}</div>
                              </div>
                            </div>

                            <span className={`text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded-full shrink-0 ${isActive ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-600"
                              }`}>
                              {rev.tag.split(" ")[0]}
                            </span>
                          </div>

                          <p className="text-slate-700 text-[11px] italic line-clamp-2 leading-relaxed">
                            &ldquo;{rev.review}&rdquo;
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div> */}

              {/* 3. QUICK SELECTOR BLUEPRINT BUTTON TABS */}
              {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-1">
                {reviews.map((rev, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={rev.id}
                      onClick={() => goToReview(idx)}
                      className={`p-3 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between gap-1.5 cursor-pointer ${isActive
                        ? "bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-500 text-white shadow-md border-transparent ring-2 ring-violet-400/40"
                        : "bg-white text-slate-800 border-slate-200/90 hover:border-violet-300 hover:bg-slate-50 shadow-2xs"
                        }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className={`w-6 h-6 rounded-full ${isActive ? "bg-white/20" : `bg-gradient-to-br ${rev.avatarBg}`} p-0.5 shrink-0`}>
                          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-mono font-black text-[8px]">
                            {rev.initials}
                          </div>
                        </div>

                        <span className={`text-[8px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${isActive ? "bg-white/20 text-white" : "bg-violet-50 text-violet-700 border border-violet-200"
                          }`}>
                          {rev.tag.split(" ")[0]}
                        </span>
                      </div>

                      <div className="truncate">
                        <div className={`text-xs font-black truncate ${isActive ? "text-white" : "text-slate-900"}`}>
                          {rev.name}
                        </div>
                        <div className={`text-[10px] font-semibold truncate ${isActive ? "text-violet-200" : "text-slate-500"}`}>
                          {rev.company}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div> */}

            </div>
          ) : (
            /* 📱 MOBILE APPLICATION PODS LAYOUT (DEFAULT) */
            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-start lg:pl-4 gap-5 lg:gap-7">

              {/* 1. Main Featured Holographic Pod (Positioned at Left Side) */}
              <div
                key={`primary-${animKey}`}
                style={{ animationDelay: isExiting ? "0ms" : "0ms" }}
                className={`review-bubble relative z-30 w-full lg:w-[460px] shrink-0 p-[2px] rounded-[28px] bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 to-cyan-400 shadow-lg transition-all duration-300 ease-out cursor-pointer group flex flex-col hover:-translate-y-1 hover:shadow-xl ${isExiting
                  ? "animate-cards-exit-left"
                  : isTransitioning
                    ? "animate-cards-enter-right"
                    : ""
                  }`}
              >
                <div className="w-full h-full bg-white rounded-[26px] p-5 sm:p-6 flex flex-col justify-between relative border border-pink-100 shadow-xs">

                  {/* Chat Bubble Tail Accent */}
                  <div className="absolute -bottom-2.5 left-8 sm:left-12 w-4.5 h-4.5 bg-white border-b border-r border-pink-200 rotate-45 rounded-xs pointer-events-none" />

                  <div>
                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-3 mb-3.5 pb-3.5 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${reviews[currentIndex].avatarBg} p-0.5 shadow-sm flex items-center justify-center shrink-0 relative`}>
                          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-mono font-black text-xs tracking-wider">
                            {reviews[currentIndex].initials}
                          </div>
                          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                        </div>

                        <div className="space-y-0.5">
                          <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight leading-snug">
                            {reviews[currentIndex].name}
                          </h3>
                          <p className="text-[11px] font-semibold text-pink-600 flex items-center gap-1.5">
                            <span>{reviews[currentIndex].role}</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-600">{reviews[currentIndex].company}</span>
                          </p>
                        </div>
                      </div>

                      <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-200 text-pink-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                        <Quote className="w-3.5 h-3.5 fill-current" />
                      </div>
                    </div>

                    {/* Rating Stars & Verified Pill */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className="flex items-center gap-1">
                        {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="ml-1 text-xs font-black text-slate-900 font-mono">5.0</span>
                      </div>

                      <div className="inline-flex items-center gap-1 text-[8px] font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full shadow-2xs">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                        <span>Verified Buyer</span>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-800 text-xs sm:text-sm leading-relaxed italic font-medium mb-4">
                      &ldquo;{reviews[currentIndex].review}&rdquo;
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-2.5 text-[9px] font-mono text-slate-500">
                    <span className="font-bold text-pink-600 bg-pink-50 border border-pink-200 px-2 py-0.5 rounded-md uppercase tracking-wider shadow-2xs">
                      {reviews[currentIndex].tag}
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                      <MessageSquare className="w-3 h-3 text-cyan-600" />
                      {reviews[currentIndex].app}
                    </span>
                  </div>
                </div>
              </div>

              {/* 2 & 3. Secondary & Tertiary Floating Pods Adjacent Stack on Right */}
              <div className="flex-1 w-full flex flex-col sm:flex-row lg:flex-col gap-4 pt-0.5">

                {/* Secondary Cyber Pod */}
                <div
                  key={`secondary-${animKey}`}
                  style={{ animationDelay: isExiting ? "60ms" : "100ms" }}
                  className={`review-bubble-alt1 hidden md:flex flex-col relative z-20 w-full p-[1.5px] rounded-[24px] bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 shadow-md transition-all duration-300 ease-out cursor-pointer group hover:-translate-y-1 hover:shadow-lg ${isExiting
                    ? "animate-cards-exit-left"
                    : isTransitioning
                      ? "animate-cards-enter-right"
                      : ""
                    }`}
                >
                  <div className="w-full h-full bg-white rounded-[22px] p-4 sm:p-4.5 flex flex-col justify-between relative border border-purple-100 shadow-xs">

                    {/* Chat Bubble Tail Accent */}
                    <div className="absolute -bottom-2 left-8 sm:left-10 w-4 h-4 bg-white border-b border-r border-purple-200 rotate-45 rounded-xs pointer-events-none" />

                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2.5 pb-2.5 border-b border-slate-100">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${reviews[(currentIndex + 1) % reviews.length].avatarBg} p-0.5 shadow-2xs flex items-center justify-center shrink-0 relative`}>
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-mono font-black text-[10px] tracking-wider">
                              {reviews[(currentIndex + 1) % reviews.length].initials}
                            </div>
                            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                          </div>

                          <div className="space-y-0.5">
                            <h4 className="text-xs font-black text-slate-900 tracking-tight leading-snug">
                              {reviews[(currentIndex + 1) % reviews.length].name}
                            </h4>
                            <p className="text-[10px] font-semibold text-purple-600 flex items-center gap-1">
                              <span>{reviews[(currentIndex + 1) % reviews.length].role}</span>
                              <span className="text-slate-300">•</span>
                              <span className="text-slate-600">{reviews[(currentIndex + 1) % reviews.length].company}</span>
                            </p>
                          </div>
                        </div>

                        <div className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center shrink-0 shadow-2xs">
                          <Quote className="w-3 h-3 fill-current" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="ml-1 text-[10px] font-black text-slate-900 font-mono">5.0</span>
                        </div>

                        <div className="inline-flex items-center gap-1 text-[8px] font-mono font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-2.5 h-2.5 text-purple-600" />
                          <span>Verified</span>
                        </div>
                      </div>

                      <p className="text-slate-700 text-xs italic line-clamp-2 mb-2.5 font-medium leading-relaxed">
                        &ldquo;{reviews[(currentIndex + 1) % reviews.length].review}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-[9px] font-mono text-slate-500">
                      <span className="font-bold text-purple-600 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-md uppercase">
                        {reviews[(currentIndex + 1) % reviews.length].tag}
                      </span>
                      <span className="text-slate-700 font-semibold">{reviews[(currentIndex + 1) % reviews.length].app}</span>
                    </div>
                  </div>
                </div>

                {/* Tertiary Cyber Pod */}
                <div
                  key={`tertiary-${animKey}`}
                  style={{ animationDelay: isExiting ? "120ms" : "200ms" }}
                  className={`review-bubble-alt2 hidden lg:flex flex-col relative z-10 w-full p-[1.5px] rounded-[24px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 shadow-md transition-all duration-300 ease-out cursor-pointer group hover:-translate-y-1 hover:shadow-lg ${isExiting
                    ? "animate-cards-exit-left"
                    : isTransitioning
                      ? "animate-cards-enter-right"
                      : ""
                    }`}
                >
                  <div className="w-full h-full bg-white rounded-[22px] p-4 sm:p-4.5 flex flex-col justify-between relative border border-cyan-100 shadow-xs">

                    {/* Chat Bubble Tail Accent */}
                    <div className="absolute -bottom-2 left-8 sm:left-10 w-4 h-4 bg-white border-b border-r border-cyan-200 rotate-45 rounded-xs pointer-events-none" />

                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2.5 pb-2.5 border-b border-slate-100">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${reviews[(currentIndex + 2) % reviews.length].avatarBg} p-0.5 shadow-2xs flex items-center justify-center shrink-0 relative`}>
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-mono font-black text-[10px] tracking-wider">
                              {reviews[(currentIndex + 2) % reviews.length].initials}
                            </div>
                            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                          </div>

                          <div className="space-y-0.5">
                            <h4 className="text-xs font-black text-slate-900 tracking-tight leading-snug">
                              {reviews[(currentIndex + 2) % reviews.length].name}
                            </h4>
                            <p className="text-[10px] font-semibold text-cyan-600 flex items-center gap-1">
                              <span>{reviews[(currentIndex + 2) % reviews.length].role}</span>
                              <span className="text-slate-300">•</span>
                              <span className="text-slate-600">{reviews[(currentIndex + 2) % reviews.length].company}</span>
                            </p>
                          </div>
                        </div>

                        <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-600 flex items-center justify-center shrink-0 shadow-2xs">
                          <Quote className="w-3 h-3 fill-current" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="ml-1 text-[10px] font-black text-slate-900 font-mono">5.0</span>
                        </div>

                        <div className="inline-flex items-center gap-1 text-[8px] font-mono font-bold uppercase tracking-wider bg-cyan-50 text-cyan-700 border border-cyan-200 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-2.5 h-2.5 text-cyan-600" />
                          <span>Verified</span>
                        </div>
                      </div>

                      <p className="text-slate-700 text-xs italic line-clamp-2 mb-2.5 font-medium leading-relaxed">
                        &ldquo;{reviews[(currentIndex + 2) % reviews.length].review}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-[9px] font-mono text-slate-500">
                      <span className="font-bold text-cyan-600 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-md uppercase">
                        {reviews[(currentIndex + 2) % reviews.length].tag}
                      </span>
                      <span className="text-slate-700 font-semibold">{reviews[(currentIndex + 2) % reviews.length].app}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Interactive Navigation Dots & Manual Arrow Controls */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 pt-0 sm:pt-2 z-20">
          <button
            onClick={prevReview}
            className="hidden sm:flex w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm hover:border-violet-400 hover:text-violet-600 items-center justify-center text-slate-600 transition-all active:scale-95 cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToReview(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? "w-5 sm:w-7 bg-gradient-to-r from-violet-600 to-pink-500 shadow-2xs" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextReview}
            className="hidden sm:flex w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm hover:border-violet-400 hover:text-violet-600 items-center justify-center text-slate-600 transition-all active:scale-95 cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
