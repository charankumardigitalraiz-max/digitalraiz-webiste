"use client";

import React, { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MobileAppShowcase() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const startAutoScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsPaused(true);
    const viewport = e.currentTarget.querySelector('.mockup-viewport') as HTMLDivElement;
    if (!viewport) return;

    const animId = viewport.getAttribute('data-anim-id');
    if (animId) cancelAnimationFrame(parseInt(animId));

    viewport.setAttribute('data-user-scrolled', 'false');

    const startTime = performance.now();
    const startScroll = viewport.scrollTop;
    const targetScroll = viewport.scrollHeight - viewport.clientHeight;
    const duration = 12000;

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

  const stopAutoScroll = (e: React.MouseEvent<HTMLDivElement>) => {
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
    // {
    //   name: "Shri Manik Prabhu Samsthan",
    //   tag: "Devotional & Community",
    //   desc: "Official mobile application for managing organization schedules, calendar updates, and daily resources.",
    //   features: ["Custom calendar systems", "Push alerts & notifications", "Offline asset loading"],
    //   playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.maniksamstahnapp&hl=en",
    //   img: "https://digitalraiz.com/uploads/portfolio/d72a821a275279ea42bc5c58af0f6cc3.png"
    // },
    // {
    //   name: "Waypartner",
    //   tag: "Logistics & Transport",
    //   desc: "High-performance logistics coordination app designed for driver tracking, dispatch logging, and route reports.",
    //   features: ["Real-time GPS tracking", "In-app routing & map updates", "Automated trip log files"],
    //   playStoreUrl: "https://play.google.com/store/apps/details?id=com.waypartner.waypartner&hl=en",
    //   img: "https://digitalraiz.com/uploads/portfolio/3d5cfa303ab218435bcd47544379e4c8.png"
    // },
    {
      name: "JBFMS India",
      tag: "Enterprise Workflow",
      desc: "Corporate resource dashboard system configured for tracking field team tasks, attendance, and instant audits.",
      features: ["Field staff check-ins", "Offline report syncing", "Live dashboard syncs"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.jbfms.jbfmsindia&hl=en",
      img: "/portfolio/jgfms.webp"
    },
    // {
    //   name: "Eaglemart",
    //   tag: "E-Commerce",
    //   desc: "Full-scale consumer shopping application featuring secure payment checkout gateways, catalogs, and tracking.",
    //   features: ["Instant secure checkout", "Multi-payment support", "Real-time order tracking"],
    //   playStoreUrl: "https://play.google.com/store/apps/details?id=com.digitalraiz.eaglemartuser&hl=en",
    //   img: "https://digitalraiz.com/uploads/portfolio/c93157eeeedb156a1ef3fd23227f742d.png"
    // },
    // {
    //   name: "Helomate",
    //   tag: "Social Connection",
    //   desc: "Interactive social networking client enabling location matches, real-time chats, and media uploads.",
    //   features: ["Real-time socket chats", "Location matching engine", "Media sharing streams"],
    //   playStoreUrl: "https://play.google.com/store/apps/details?id=com.helomate.meetpeoplevirtual&hl=en",
    //   img: "https://digitalraiz.com/uploads/portfolio/dd0bff5ed7e3698d06753f38a8c985c2.png"
    // },
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
    },
    // {
    //   name: "Actin",
    //   tag: "Activity Tracker",
    //   desc: "Fitness and workflow check-in client logging user progress, session counts, and targets dynamically.",
    //   features: ["User metrics tracking", "Goal setting widgets", "Detailed historical logs"],
    //   playStoreUrl: "https://play.google.com/store/apps/details?id=com.actin.user&hl=en",
    //   img: "https://digitalraiz.com/uploads/portfolio/2694ae7bddec4a4d521ea9e9870638db.png"
    // }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === portfolioApps.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, [portfolioApps.length, isPaused]);

  return (
    <section className="py-20 bg-white border-t border-slate-100 relative overflow-hidden w-full">
      <div className="w-full space-y-12">
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
          <div className="relative w-full h-[540px] flex items-center justify-center [perspective:1200px] overflow-hidden select-none px-4 sm:px-12">
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? portfolioApps.length - 1 : prev - 1))}
              className="absolute left-4 sm:left-8 md:left-12 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-pink-600 transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="relative w-full h-[490px] flex items-center justify-center [transform-style:preserve-3d]">
              {portfolioApps.map((app, idx) => {
                let offset = idx - activeIndex;
                const half = Math.floor(portfolioApps.length / 2);
                if (offset > half) offset -= portfolioApps.length;
                if (offset < -half) offset += portfolioApps.length;

                const absOffset = Math.abs(offset);

                if (absOffset > 2) return null;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={startAutoScroll}
                    onMouseLeave={stopAutoScroll}
                    className="absolute transition-all duration-500 ease-out cursor-pointer flex flex-col items-center gap-4 group"
                    style={{
                      transform: `translateX(${offset * 255}px) scale(${absOffset === 0 ? 1.08 : 0.92})`,
                      zIndex: 100 - absOffset,
                      opacity: 1,
                    }}
                  >
                    <h4 className={`text-[11px] font-black uppercase tracking-wider text-center max-w-[190px] transition-all duration-500 ${absOffset === 0 ? 'text-pink-600 scale-105 opacity-100' : 'text-slate-500 opacity-60'}`}>
                      {app.name}
                    </h4>

                    <div className={`w-[230px] h-[460px] rounded-[26px] border-[4px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden relative transition-all duration-500 ${absOffset === 0 ? 'ring-4 ring-pink-500/20' : ''}`}>
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-900 rounded-full z-20" />

                      <div
                        className="absolute inset-0 overflow-y-auto no-scrollbar z-10 bg-slate-900 mockup-viewport"
                        onWheel={handleUserScroll}
                        onTouchMove={handleUserScroll}
                      >
                        <img
                          src={app.img}
                          alt={app.name}
                          className="w-full h-auto object-cover object-top select-none pointer-events-none block"
                          style={{
                            imageRendering: '-webkit-optimize-contrast',
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

            <button
              onClick={() => setActiveIndex((prev) => (prev === portfolioApps.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 sm:right-8 md:right-12 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-pink-600 transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
