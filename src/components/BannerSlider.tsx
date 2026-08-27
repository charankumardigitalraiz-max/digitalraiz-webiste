"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Zap, Target, Server } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
}

export default function BannerSlider() {
  const slides: Slide[] = [
    {
      image: "/images/digital_raiz_slide1.png",
      badge: "Software Engineering",
      title: "Precision Custom Codebases",
      subtitle: "Scalable corporate portals & cloud-native web apps built on modern tech.",
      icon: <Zap className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
    },
    {
      image: "/images/digital_raiz_slide2.png",
      badge: "Digital Marketing",
      title: "Data-Driven Marketing & ROI",
      subtitle: "High-conversion campaigns & optimized SEO matching modern algorithms.",
      icon: <Target className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
    },
    {
      image: "/images/digital_raiz_slide3.png",
      badge: "Tech Scale & Cloud",
      title: "Secure Cloud Architecture",
      subtitle: "Optimized infrastructure ensuring blazing-fast performance and stability.",
      icon: <Server className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  return (
    <div 
      className="w-full relative overflow-hidden group/slider bg-slate-900 select-none my-10 h-[180px] sm:h-[220px] md:h-[240px] border-y border-slate-100/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none z-0"
              }`}
            >
              {/* Slide Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />

              {/* Glassmorphic/Gradient Overlay Container */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent flex flex-col justify-center text-white">
                <div className="max-w-6xl mx-auto px-6 w-full">
                  <div className="max-w-2xl space-y-2 sm:space-y-3">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[9px] font-bold uppercase tracking-wider text-pink-300">
                      {slide.icon}
                      {slide.badge}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-sm">
                      {slide.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-slate-300 text-[10px] sm:text-xs leading-relaxed max-w-lg md:max-w-xl font-normal opacity-90">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Manual Controls - Arrows (Fade in on slider hover) */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/40 hover:bg-slate-950/80 border border-white/10 hover:border-white/20 text-white flex items-center justify-center transition-all duration-300 md:opacity-0 group-hover/slider:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/40 hover:bg-slate-950/80 border border-white/10 hover:border-white/20 text-white flex items-center justify-center transition-all duration-300 md:opacity-0 group-hover/slider:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentIndex 
                ? "w-6 bg-gradient-to-r from-pink-500 to-indigo-500 shadow-[0_0_8px_rgba(236,72,153,0.5)]" 
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
