"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Smartphone, SmartphoneNfc, AppWindow, Cpu, ShieldCheck, Sparkles, Star, ExternalLink, Box, Grid, Award, CheckCircle2, Milestone, ChevronLeft, ChevronRight } from "lucide-react";
import PlatformExplorer from "@/components/PlatformExplorer";
import ProcessConsole from "@/components/ProcessConsole";

export default function MobileApplicationPage() {
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
    const duration = 12000; // Smooth slow scroll down

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



  const stats = [
    { value: "500K+", label: "App Downloads", desc: "Across iOS and Play Store", icon: <Award className="w-5 h-5 text-pink-500" /> },
    { value: "4.8★", label: "Average Rating", desc: "Highly rated by users", icon: <Star className="w-5 h-5 text-indigo-500" /> },
    { value: "5M+", label: "Monthly Sessions", desc: "Seamless backend scale", icon: <Cpu className="w-5 h-5 text-pink-500" /> },
    { value: "99.9%", label: "Crash-Free Sessions", desc: "Robust bug monitoring", icon: <ShieldCheck className="w-5 h-5 text-indigo-500" /> },
  ];

  const processSteps = [
    { step: "01", name: "Discovery & Arch", desc: "We map functional requirements, create data models, and outline third-party API integration structures." },
    { step: "02", name: "UI/UX Wireframing", desc: "Designing pixel-perfect mockups, interactive screen flows, and ergonomic user journeys." },
    { step: "03", name: "Agile Development", desc: "Sprinting code in native Swift/Kotlin or Flutter/React Native with regular version-control reviews." },
    { step: "04", name: "Quality Assurance", desc: "Rigorous automated testing, local sandbox debugging, and performance load checks." },
    { step: "05", name: "App Store Launch", desc: "Handling metadata assets, setting cryptographic keys, and navigating review cycles for deployment." }
  ];

  const comparisonData = [
    { type: "Native Apps (Swift / Kotlin)", performance: "Ultra High", cost: "Premium", speed: "Normal", hardware: "Full Direct Access" },
    { type: "Cross-Platform (Flutter / React Native)", performance: "Near-Native", cost: "Cost-Effective", speed: "Fast", hardware: "Excellent Bridge Access" },
    { type: "Hybrid Web Apps (PWAs / Cordova)", performance: "Standard", cost: "Budget-Friendly", speed: "Very Fast", hardware: "Limited Browser Access" }
  ];

  const portfolioApps = [
    {
      name: "Solo Hearts",
      tag: "Social Connection",
      desc: "Premium dating and matchmaking application configured for location checks, instant chats, and profiles.",
      features: ["Premium matching algorithm", "Location verified check-ins", "Secure chat modules"],
      playStoreUrl: "#",
      img: "/soloohearts.jpg"
    },
    {
      name: "Medicompares",
      tag: "Medical & Health",
      desc: "Comprehensive medical services comparison platform designed to compare clinical tests, reports, and prices.",
      features: ["Medical comparison engine", "Clinical report details", "Instant pricing updates"],
      playStoreUrl: "#",
      img: "/medicompares.jpg"
    },
    {
      name: "Shri Manik Prabhu Samsthan",
      tag: "Devotional & Community",
      desc: "Official mobile application for managing organization schedules, calendar updates, and daily resources.",
      features: ["Custom calendar systems", "Push alerts & notifications", "Offline asset loading"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.maniksamstahnapp&hl=en",
      img: "https://digitalraiz.com/uploads/portfolio/d72a821a275279ea42bc5c58af0f6cc3.png"
    },
    {
      name: "Waypartner",
      tag: "Logistics & Transport",
      desc: "High-performance logistics coordination app designed for driver tracking, dispatch logging, and route reports.",
      features: ["Real-time GPS tracking", "In-app routing & map updates", "Automated trip log files"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.waypartner.waypartner&hl=en",
      img: "https://digitalraiz.com/uploads/portfolio/3d5cfa303ab218435bcd47544379e4c8.png"
    },
    {
      name: "JBFMS India",
      tag: "Enterprise Workflow",
      desc: "Corporate resource dashboard system configured for tracking field team tasks, attendance, and instant audits.",
      features: ["Field staff check-ins", "Offline report syncing", "Live dashboard syncs"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.jbfms.jbfmsindia&hl=en",
      img: "/jgfms.jpg"
    },
    {
      name: "Eaglemart",
      tag: "E-Commerce",
      desc: "Full-scale consumer shopping application featuring secure payment checkout gateways, catalogs, and tracking.",
      features: ["Instant secure checkout", "Multi-payment support", "Real-time order tracking"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.digitalraiz.eaglemartuser&hl=en",
      img: "https://digitalraiz.com/uploads/portfolio/c93157eeeedb156a1ef3fd23227f742d.png"
    },
    {
      name: "Helomate",
      tag: "Social Connection",
      desc: "Interactive social networking client enabling location matches, real-time chats, and media uploads.",
      features: ["Real-time socket chats", "Location matching engine", "Media sharing streams"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.helomate.meetpeoplevirtual&hl=en",
      img: "https://digitalraiz.com/uploads/portfolio/dd0bff5ed7e3698d06753f38a8c985c2.png"
    },
    {
      name: "Gocut Beauty App",
      tag: "On-Demand Services",
      desc: "Booking and service scheduling interface with integrated maps, local search filters, and chats.",
      features: ["Appointment scheduling", "Local provider searches", "In-app customer chats"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.digitalraiz.gouser&hl=en",
      img: "/gocut-beauty.jpg"
    },
    {
      name: "Actin",
      tag: "Activity Tracker",
      desc: "Fitness and workflow check-in client logging user progress, session counts, and targets dynamically.",
      features: ["User metrics tracking", "Goal setting widgets", "Detailed historical logs"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.actin.user&hl=en",
      img: "https://digitalraiz.com/uploads/portfolio/2694ae7bddec4a4d521ea9e9870638db.png"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === portfolioApps.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [portfolioApps.length, isPaused]);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />
      <main className="flex-grow">
        {/* Supported Platforms Grid */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/5 to-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 w-full space-y-14 relative z-10">
            {/* Centered Minimalist Modern Tech Header */}
            <div className="flex flex-col items-center text-center space-y-4 pb-1">
              {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-150 shadow-3xs">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-[8.5px] font-mono font-black text-slate-700 uppercase tracking-widest">Platform coverage matrix</span>
              </div> */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black uppercase tracking-tight leading-tight lg:leading-none text-[#1e1b4b]">
                Multi-Platform Ecosystems
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mt-2" />
            </div>

            <PlatformExplorer />
          </div>
        </section>

        {/* Detailed Comparison Matrix */}
        {/* <section className="py-20 bg-white border-t border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.25em] block">Technical Comparison</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">Architectural Decision Matrix</h2>
              <p className="text-slate-400 text-xs font-light">Choose the development model that fits your timelines, requirements, and budget constraints.</p>
            </div>

            <div className="w-full overflow-x-auto rounded-2xl border border-slate-100 shadow-3xs bg-white">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-55 border-b border-slate-100 text-slate-500 uppercase tracking-wider text-[9px] font-bold">
                    <th className="py-4 px-6">App Architecture Type</th>
                    <th className="py-4 px-6">Performance</th>
                    <th className="py-4 px-6">Development Cost</th>
                    <th className="py-4 px-6">Time to Market</th>
                    <th className="py-4 px-6">Hardware Integration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">{row.type}</td>
                      <td className="py-4 px-6 text-emerald-600 font-semibold">{row.performance}</td>
                      <td className="py-4 px-6 text-slate-500">{row.cost}</td>
                      <td className="py-4 px-6 text-slate-500">{row.speed}</td>
                      <td className="py-4 px-6 text-slate-700">{row.hardware}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section> */}

        {/* Engineering Process Section */}
        <section className="py-5 bg-white">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.25em] block">Execution Pipeline</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">Our Mobile Engineering Process</h2>
            </div>

            {/* Interactive Process Console Component */}
            <ProcessConsole />
          </div>
        </section>

        {/* Real-World Client App Portfolio Showcase */}
        <section className="py-20 bg-white border-t border-slate-100 relative overflow-hidden w-full">
          <div className="w-full space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 px-6">
              <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.25em] block">App Showcase</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">Our Mobile App Projects</h2>
              <p className="text-slate-400 text-xs font-light">Explore real-world applications engineered by DigitalRaiz currently active on the Google Play Store.</p>
            </div>

            {/* 3D Coverflow Perspective Container */}
            <div className="relative w-full h-[540px] flex items-center justify-center [perspective:1200px] overflow-hidden select-none">
              <div className="relative w-full h-[490px] flex items-center justify-center [transform-style:preserve-3d]">
                {portfolioApps.map((app, idx) => {
                  let offset = idx - activeIndex;
                  const half = Math.floor(portfolioApps.length / 2);
                  if (offset > half) offset -= portfolioApps.length;
                  if (offset < -half) offset += portfolioApps.length;

                  const absOffset = Math.abs(offset);

                  // Keep only adjacent items visible to prevent cluttering
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
                      {/* Smartphone scrolling mockup chassis */}
                      <div className={`w-[230px] h-[460px] rounded-[26px] border-[4px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden relative transition-all duration-500 ${absOffset === 0 ? 'ring-4 ring-pink-500/20' : ''}`}>
                        {/* Speaker notch */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-900 rounded-full z-20" />

                        {/* Screen Image viewport */}
                        <div 
                          className="absolute inset-0 overflow-y-auto no-scrollbar z-10 bg-slate-900 mockup-viewport"
                          onWheel={handleUserScroll}
                          onTouchMove={handleUserScroll}
                        >
                          <img
                            src={app.img}
                            alt={app.name}
                            className="w-full h-auto object-cover object-top select-none pointer-events-none block"
                          />
                        </div>
                      </div>

                      {/* App Name Label */}
                      <h4 className={`text-[11px] font-black uppercase tracking-wider text-center max-w-[190px] transition-all duration-500 ${absOffset === 0 ? 'text-pink-600 scale-105 opacity-100' : 'text-slate-500 opacity-60'}`}>
                        {app.name}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation buttons and Pagination Dots */}
            <div className="flex justify-center items-center gap-6 pt-2">
              <button
                onClick={() => setActiveIndex((prev) => (prev === 0 ? portfolioApps.length - 1 : prev - 1))}
                className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-700 transition-colors shadow-2xs"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>
              <div className="flex gap-2">
                {portfolioApps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-pink-500 w-4' : 'bg-slate-200'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveIndex((prev) => (prev === portfolioApps.length - 1 ? 0 : prev + 1))}
                className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-700 transition-colors shadow-2xs"
                aria-label="Next Project"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
