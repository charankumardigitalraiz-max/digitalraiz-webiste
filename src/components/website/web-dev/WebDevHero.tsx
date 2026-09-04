"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";
import { webStatBadges, webTechItems } from "@/data/webDevData";

export default function WebDevHero() {
  const techScrollRef = useRef<HTMLDivElement>(null);
  const [techPaused, setTechPaused] = useState(false);

  useEffect(() => {
    const container = techScrollRef.current;
    if (!container || techPaused) return;
    let animationId: number;
    const scrollStep = () => {
      if (!container) return;
      container.scrollLeft += 0.7;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(scrollStep);
    };
    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, [techPaused]);

  return (
    <section className="relative overflow-hidden bg-white  py-10 sm:py-14">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">

          {/* LEFT — Typography & Intro Copy */}
          <ScrollReveal direction="left" className="flex-grow space-y-6 text-center lg:text-left max-w-2xl">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-pink-500" />
                  Website Development Company in Hyderabad
                </div> */}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Website Development Company in Hyderabad for{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Digital Experiences
              </span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
              A strong website should do more than establish your presence online. It should represent your brand, communicate your value and create a smooth path for customers to connect with your business. Digital Raiz is a website development company in Hyderabad helping businesses create professional, responsive and purpose-driven digital experiences.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
              We combine strategy, creative thinking and technology to develop websites that are built around real business requirements. From corporate websites and WordPress platforms to e-commerce stores and custom web applications, our team creates digital solutions that support both your current objectives and future growth.
            </p>

            {/* Stat Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
              {[
                { val: "99.9%", label: "Uptime SLA", bg: "bg-emerald-50 text-emerald-700 border-emerald-200/60", dot: "bg-emerald-500" },
                { val: "0.2s", label: "Page Load Speed", bg: "bg-pink-50 text-pink-700 border-pink-200/60", dot: "bg-pink-500 animate-pulse" },
                { val: "100", label: "Lighthouse Score", bg: "bg-violet-50 text-violet-700 border-violet-200/60", dot: "bg-violet-500" },
                { val: "100%", label: "SEO Optimized", bg: "bg-indigo-50 text-indigo-700 border-indigo-200/60", dot: "bg-indigo-500" },
              ].map((s) => (
                <div key={s.label} className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold ${s.bg}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                  <span>{s.val}</span>
                  <span className="text-[9px] font-mono text-slate-400 uppercase">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <button
                onClick={() => openContactModal("Web Development")}
                className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md cursor-pointer border-0"
              >
                <span>Start Web Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("web-services-grid");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </ScrollReveal>

          {/* RIGHT — Generated Desktop & Laptop iMac Showcase */}
          <ScrollReveal direction="right" delay={150} className="relative w-full lg:w-[500px] shrink-0 flex justify-center">
            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden group">
              <img
                src="/services/digital-raiz-imac-showcase-vertical.webp"
                alt="Website Development Company in Hyderabad - Digital Raiz Desktop & Laptop Studio"
                className="w-full h-auto object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />

              {/* Floating badge — top-left */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-slate-400 uppercase">Lighthouse</div>
                  <div className="text-xs font-extrabold text-emerald-600">100 / 100</div>
                </div>
              </div>

              {/* Floating badge — bottom-right */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-pink-50 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-slate-400 uppercase">Performance</div>
                  <div className="text-xs font-extrabold text-pink-600">Ultra-Fast</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* Tech stack ticker strip */}
      <div className="py-3 w-full overflow-hidden mt-8">
        <div
          ref={techScrollRef}
          onMouseEnter={() => setTechPaused(true)}
          onMouseLeave={() => setTechPaused(false)}
          className="flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap items-center gap-0 w-full"
        >
          {[
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
          ].concat([
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
          ]).map((t, i) => (
            <div key={i} className="flex items-center gap-2 px-6 py-1.5 border-r border-slate-100 shrink-0">
              <img src={t.icon} alt={t.name} className="w-6 h-6 object-contain" />
              <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
