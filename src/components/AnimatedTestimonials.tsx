"use client";

import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";
import { reviewsData, ReviewItem } from "@/data/testimonialsData";

export type { ReviewItem };

interface AnimatedTestimonialsProps {
  items?: ReviewItem[];
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
}

export default function AnimatedTestimonials({
  items,
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

  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextReview();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isTransitioning]);

  return (
    <section className="py-10 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100 antialiased">
      {/* Subtle Grid & Light Ambient Particle Glows */}
      <div className="absolute inset-0 bg-grid-premium opacity-5 pointer-events-none" />

      {/* Soft Ambient Pastel Glowing Orbs */}
      <div className="absolute top-1/4 left-1/6 w-[450px] h-[450px] bg-gradient-to-r from-pink-200/30 via-purple-200/25 to-indigo-200/30 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/6 w-[450px] h-[450px] bg-gradient-to-r from-cyan-200/30 via-violet-200/25 to-pink-200/30 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "3s" }} />

      {/* Floating Ambient Particle Mesh Spheres */}
      <div className="absolute top-14 left-1/5 w-14 h-14 rounded-full bg-gradient-to-tr from-pink-400/20 via-violet-400/20 to-cyan-400/20 animate-particle-1 pointer-events-none" />
      <div className="absolute bottom-20 right-1/5 w-18 h-18 rounded-full bg-gradient-to-tr from-indigo-400/20 via-purple-400/20 to-pink-400/20 animate-particle-3 pointer-events-none" />
      <div className="absolute top-1/3 right-14 w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400/20 via-rose-400/20 to-violet-400/20 animate-particle-2 pointer-events-none" />
      <div className="absolute bottom-14 left-14 w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400/20 via-teal-400/20 to-indigo-400/20 animate-particle-4 pointer-events-none" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3.5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            {titlePrefix}{" "}
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Left-Aligned Holographic Pod Showcase Container */}
        <div className="testimonials-wrapper relative w-full px-2 py-6 sm:py-8">

          {/* Left-Aligned Layout: Main Card on Left, Floating Secondary Pods on Right */}
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

        </div>

      </div>
    </section>
  );
}
