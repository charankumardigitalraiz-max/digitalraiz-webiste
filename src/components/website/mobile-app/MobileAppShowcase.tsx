"use client";

import React, { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export default function MobileAppShowcase() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const portfolioApps = [
    {
      name: "Solo Hearts",
      tag: "Social Connection",
      desc: "Premium dating and matchmaking application configured for location checks, instant chats, and profiles.",
      features: ["Premium matching algorithm", "Location verified check-ins", "Secure chat modules"],
      playStoreUrl: "#",
      img: "/portfolio/soloohearts.webp"
    },
    {
      name: "Medicompares",
      tag: "Medical & Health",
      desc: "Comprehensive medical services comparison platform designed to compare clinical tests, reports, and prices.",
      features: ["Medical comparison engine", "Clinical report details", "Instant pricing updates"],
      playStoreUrl: "#",
      img: "/portfolio/medicompares.jpg"
    },
    {
      name: "JBFMS India",
      tag: "Enterprise Workflow",
      desc: "Corporate resource dashboard system configured for tracking field team tasks, attendance, and instant audits.",
      features: ["Field staff check-ins", "Offline report syncing", "Live dashboard syncs"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.jbfms.jbfmsindia&hl=en",
      img: "/portfolio/jgfms.webp"
    },
    {
      name: "Gocut Beauty App",
      tag: "On-Demand Services",
      desc: "Booking and service scheduling interface with integrated maps, local search filters, and chats.",
      features: ["Appointment scheduling", "Local provider searches", "In-app customer chats"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.digitalraiz.gouser&hl=en",
      img: "/portfolio/gocut-beauty.webp"
    },
    {
      name: "Sherla Properties App",
      tag: "Luxury Property Platform",
      desc: "Premium real estate platform engineered for showcasing luxury listings. Features advanced search filters, fluid listing galleries, interactive agent contact forms, and rapid loading times.",
      features: ["Node.js", "Flutter Web", "Google Maps Integration", "Real Estate Listing Management"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.digitalraiz.gouser&hl=en",
      img: "/mobile-application/sherla-properties.jpg"
    }
  ];

  const startAutoScroll = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (isMobile) return;
    setIsPaused(true);
    const viewport = e.currentTarget.querySelector('.mockup-viewport') as HTMLDivElement;
    if (!viewport) return;

    const animId = viewport.getAttribute('data-anim-id');
    if (animId) cancelAnimationFrame(parseInt(animId));

    viewport.setAttribute('data-user-scrolled', 'false');

    const startTime = performance.now();
    const startScroll = viewport.scrollTop;
    const maxScroll = viewport.scrollHeight - viewport.clientHeight;
    const targetScroll = maxScroll > 0 ? maxScroll : 0;
    const duration = 10000;

    const scrollStep = (timestamp: number) => {
      const isUserScrolled = viewport.getAttribute('data-user-scrolled') === 'true';
      if (isUserScrolled) return;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      viewport.scrollTop = startScroll + (targetScroll - startScroll) * ease;

      if (progress < 1) {
        const nextId = requestAnimationFrame(scrollStep);
        viewport.setAttribute('data-anim-id', nextId.toString());
      }
    };

    const firstId = requestAnimationFrame(scrollStep);
    viewport.setAttribute('data-anim-id', firstId.toString());
  };

  const stopAutoScroll = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (isMobile) return;
    setIsPaused(false);
    const viewport = e.currentTarget.querySelector('.mockup-viewport') as HTMLDivElement;
    if (!viewport) return;

    const animId = viewport.getAttribute('data-anim-id');
    if (animId) cancelAnimationFrame(parseInt(animId));

    viewport.setAttribute('data-user-scrolled', 'true');
    viewport.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUserScroll = (e: React.UIEvent<HTMLDivElement>) => {
    e.currentTarget.setAttribute('data-user-scrolled', 'true');
  };

  const handleCardClick = (idx: number) => {
    setIsPaused(true);
    setActiveIndex(idx);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleTouchStartContainer = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsPaused(true);
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEndContainer = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null || touchStartY === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    // Trigger horizontal card swipe if X movement is greater than Y movement and exceeds 35px
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX > 0) {
        // Swiped left -> Next App
        setActiveIndex((prev) => (prev === portfolioApps.length - 1 ? 0 : prev + 1));
      } else {
        // Swiped right -> Previous App
        setActiveIndex((prev) => (prev === 0 ? portfolioApps.length - 1 : prev - 1));
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
    setTimeout(() => setIsPaused(false), 5000);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === portfolioApps.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [portfolioApps.length, isPaused]);

  const activeApp = portfolioApps[activeIndex];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100 relative overflow-hidden w-full max-w-full">
      <div className="w-full space-y-8 sm:space-y-12">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-2 px-6">
            <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.25em] block">App Showcase</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1e1b4b] tracking-tight leading-tight">
              Our Mobile App{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-normal">Explore real-world applications engineered by DigitalRaiz currently active on the Google Play Store.</p>
          </div>
        </ScrollReveal>

        {/* 3D Coverflow Perspective Container */}
        <ScrollReveal direction="up" delay={150}>
          <div
            onTouchStart={handleTouchStartContainer}
            onTouchEnd={handleTouchEndContainer}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full h-[450px] sm:h-[520px] flex items-center justify-center [perspective:1200px] overflow-hidden select-none px-2 sm:px-12"
          >
            {/* Left Chevron Button */}
            <button
              onClick={() => {
                setIsPaused(true);
                setActiveIndex((prev) => (prev === 0 ? portfolioApps.length - 1 : prev - 1));
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className="absolute left-2 sm:left-6 md:left-12 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-pink-600 transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer touch-manipulation"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Carousel Items Wrapper */}
            <div className="relative w-full h-[420px] sm:h-[480px] flex items-center justify-center [transform-style:preserve-3d]">
              {portfolioApps.map((app, idx) => {
                let offset = idx - activeIndex;
                const half = Math.floor(portfolioApps.length / 2);
                if (offset > half) offset -= portfolioApps.length;
                if (offset < -half) offset += portfolioApps.length;

                const absOffset = Math.abs(offset);
                if (absOffset > 2) return null;

                // Responsive X translation & scaling
                const xSpacing = isMobile ? 140 : 255;
                const activeScale = isMobile ? 1.0 : 1.08;
                const sideScale = isMobile ? 0.82 : 0.92;

                return (
                  <div
                    key={idx}
                    onClick={() => handleCardClick(idx)}
                    className="absolute transition-transform transition-opacity duration-300 ease-out cursor-pointer flex flex-col items-center gap-2 sm:gap-4 group touch-manipulation transform-gpu"
                    style={{
                      transform: `translateX(${offset * xSpacing}px) scale(${absOffset === 0 ? activeScale : sideScale}) translateZ(0)`,
                      zIndex: 100 - absOffset,
                      opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.75 : 0.35,
                      willChange: "transform, opacity"
                    }}
                  >
                    {/* App Title */}
                    <h4 className={`text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-center max-w-[170px] sm:max-w-[190px] transition-colors duration-300 ${absOffset === 0 ? 'text-pink-600 opacity-100' : 'text-slate-500 opacity-60'}`}>
                      {app.name}
                    </h4>

                    {/* Phone Frame */}
                    <div className={`w-[200px] h-[390px] sm:w-[230px] sm:h-[450px] rounded-[24px] sm:rounded-[26px] border-[3px] sm:border-[4px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden relative transition-shadow duration-300 ${absOffset === 0 ? 'ring-4 ring-pink-500/30 shadow-pink-500/10' : ''}`}>
                      {/* Notch Pill */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-1 bg-slate-900 rounded-full z-20" />

                      {/* Internal App Viewport */}
                      <div
                        className="absolute inset-0 overflow-y-auto no-scrollbar z-10 bg-slate-900 mockup-viewport touch-auto"
                        onWheel={handleUserScroll}
                        onTouchMove={handleUserScroll}
                      >
                        <img
                          src={app.img}
                          alt={app.name}
                          className="w-full h-auto object-cover object-top select-none pointer-events-none block"
                          style={{
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                            transform: 'translateZ(0)'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Chevron Button */}
            <button
              onClick={() => {
                setIsPaused(true);
                setActiveIndex((prev) => (prev === portfolioApps.length - 1 ? 0 : prev + 1));
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className="absolute right-2 sm:right-6 md:right-12 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-pink-600 transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer touch-manipulation"
              aria-label="Next Project"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </ScrollReveal>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2 z-30">
          {portfolioApps.map((app, idx) => (
            <button
              key={idx}
              onClick={() => handleCardClick(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === activeIndex
                  ? "w-7 h-2.5 bg-gradient-to-r from-pink-500 to-violet-600"
                  : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to ${app.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
