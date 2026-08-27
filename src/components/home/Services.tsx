"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Intelligent Branding",
    color: "#3b1244",
    bg: "from-pink-50/60 to-purple-50/50",
    border: "border-pink-100",
    tag: "bg-pink-100/50 text-[#3b1244]",
    desc: "Unique corporate identities driven by AI insights and creative human vision. We build brands that communicate distinctly and are built to last.",
    items: ["Brand Strategy", "Identity Design", "Logo Design", "AI-Assisted Copywriting", "Brand Guidelines"],
    img: "/services/digitalraiz_intelligent_creativity_branding (1).png",
    href: "/services#branding"
  },
  {
    num: "02",
    title: "Web & Mobile Studio",
    color: "#4f46e5",
    bg: "from-indigo-50/60 to-blue-50/40",
    border: "border-indigo-150",
    tag: "bg-indigo-100/50 text-[#4f46e5]",
    desc: "High-performance web applications and native mobile apps built to scale. Clean design, usability, search-friendly structure, and clean code.",
    items: ["Next.js & React Apps", "Mobile Apps (iOS/Android)", "UI/UX Prototyping", "E-commerce Platforms", "SAP Integration"],
    img: "/services/mobile.png",
    href: "/services#engineering"
  },
  {
    num: "03",
    title: "Digital Marketing & SEO",
    color: "#3b1244",
    bg: "from-pink-50/60 to-purple-50/50",
    border: "border-pink-100",
    tag: "bg-pink-100/50 text-[#3b1244]",
    desc: "Integrated campaigns designed to increase search engine visibility, brand engagement, and convert target traffic into real business results.",
    items: ["Advanced SEO", "Google Ads (PPC)", "Social Media Marketing", "Content Marketing", "Performance Campaigns"],
    img: "/services/digitalraiz_digital_marketing_strategy_no_human.png",
    href: "/services#marketing"
  },
  {
    num: "04",
    title: "Creative Production",
    color: "#4f46e5",
    bg: "from-indigo-50/60 to-blue-50/40",
    border: "border-indigo-150",
    tag: "bg-indigo-100/50 text-[#4f46e5]",
    desc: "High-quality visual campaigns and cinematic stories that build a stronger emotional connection with your audience across every platform.",
    items: ["Video Production", "Commercial Campaigns", "Brand Storytelling", "Motion Graphics", "Design Collaterals"],
    img: "/services/digitalraiz_content_video_production_no_human.png",
    href: "/services#production"
  }
];

export default function Services() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="py-10 bg-white text-slate-800 font-sans overflow-hidden border-t border-slate-100 select-none"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-14">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-1">
            {/* <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em]">
              Creative Solutions
            </p> */}
            <h2 className="text-4xl sm:text-5xl font-black text-[#1e1b4b] uppercase tracking-tight leading-none">
              What We Do<br />
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">For You</span>
            </h2>
          </div>
          <p className="text-slate-500 text-xs font-light max-w-xs leading-relaxed sm:text-right">
            We blend intelligent creativity with powerful technology — building strong digital brands that connect minds to results.
          </p>
        </div>

        {/* Accordion Rows */}
        <div className="divide-y divide-slate-100">
          {services.map((svc, idx) => {
            const isOpen = active === idx;
            return (
              <div key={idx}>
                {/* Row Header */}
                <button
                  onClick={() => setActive(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-5 gap-6 text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-5 flex-1 min-w-0">
                    {/* Big Number */}
                    <span
                      className="text-4xl sm:text-5xl font-black leading-none shrink-0 transition-colors duration-300"
                      style={{ color: isOpen ? svc.color : "#e2e8f0" }}
                    >
                      {svc.num}
                    </span>

                    {/* Title */}
                    <h3
                      className="text-lg sm:text-2xl font-black uppercase tracking-tight transition-colors duration-300"
                      style={{ color: isOpen ? svc.color : undefined }}
                    >
                      {svc.title}
                    </h3>

                    {/* Tags on desktop (collapsed state) */}
                    {!isOpen && (
                      <div className="hidden md:flex gap-2 flex-wrap">
                        {svc.items.slice(0, 3).map((tag, i) => (
                          <span key={i} className={`px-2.5 py-1 rounded-full text-[9px] font-bold ${svc.tag} uppercase tracking-wider`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Expand / Collapse button */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border-2"
                    style={{
                      borderColor: isOpen ? svc.color : "#e2e8f0",
                      backgroundColor: isOpen ? svc.color : "transparent",
                      color: isOpen ? "#fff" : "#94a3b8",
                    }}
                  >
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-0" : "-rotate-45"}`}
                    />
                  </div>
                </button>

                {/* Expanded Panel */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mb-3" : "max-h-0 opacity-0"}`}
                >
                  <div className={`rounded-2xl bg-gradient-to-br ${svc.bg} p-5 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center`}>

                    {/* Left: Content */}
                    <div className="sm:col-span-8 space-y-3">
                      <p className="text-slate-600 text-sm font-light leading-relaxed">
                        {svc.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {svc.items.map((item, i) => (
                          <span key={i} className={`px-3 py-1 rounded-full text-[11px] font-semibold ${svc.tag}`}>
                            {item}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
                        style={{ color: svc.color }}
                      >
                        <span>Explore This Studio</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Right: Image */}
                    <div className="sm:col-span-4 flex items-center justify-center">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        width={130}
                        height={130}
                        style={{ height: "auto" }}
                        className="object-contain drop-shadow-xl select-none pointer-events-none"
                      />
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
