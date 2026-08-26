"use client";

import React, { useState } from "react";
import { TrendingUp, Search, Share2, ArrowRight, Users, Award, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GrowthSection() {
  const phases = [
    {
      id: "01",
      icon: TrendingUp,
      label: "Digital Marketing",
      heading: "Digital Marketing Company in Hyderabad",
      subheading: "for Measurable Online Growth",
      description:
        "Integrated marketing strategies based on your business goals, target audience, industry and competition — connecting your brand with the right audience.",
      items: ["Search Engine Optimization", "Social Media Marketing", "Google Ads", "Content Marketing", "Local SEO", "Lead Generation", "Performance Marketing"],
      accent: "#3b1244",
      glow: "bg-pink-500/5",
      border: "border-pink-100/80 hover:border-pink-300",
      badge: "bg-primary",
      tag: "bg-pink-50/50 text-primary border-pink-100/60",
      href: "#contact"
    },
    {
      id: "02",
      icon: Search,
      label: "SEO Services",
      heading: "SEO Company in Hyderabad",
      subheading: "for Stronger Search Visibility",
      description:
        "Improving your website's organic visibility across keyword research, on-page SEO, technical optimization, content optimization and local SEO.",
      items: ["Keyword Research", "On-Page SEO", "Technical Optimization", "Content Optimization", "Internal Linking", "Local SEO"],
      accent: "#4f46e5",
      glow: "bg-indigo-500/5",
      border: "border-indigo-100/80 hover:border-indigo-300",
      badge: "bg-indigo-600",
      tag: "bg-indigo-50/50 text-indigo-700 border-indigo-100/60",
      href: "#contact"
    },
    {
      id: "03",
      icon: Share2,
      label: "Social Media",
      heading: "Social Media Marketing in Hyderabad",
      subheading: "for Brand Engagement",
      description:
        "Consistent and purposeful presence across relevant social platforms — combining strategy, creativity, paid campaigns and performance analysis.",
      items: ["Social Media Strategy", "Content Planning", "Creative Development", "Profile Management", "Paid Campaigns", "Audience Targeting"],
      accent: "#3b1244",
      glow: "bg-pink-500/5",
      border: "border-pink-100/80 hover:border-pink-300",
      badge: "bg-primary",
      tag: "bg-pink-50/50 text-primary border-pink-100/60",
      href: "#contact"
    }
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Clients Served" },
    { icon: BarChart3, value: "5x", label: "Avg. Growth Rate" },
    { icon: Award, value: "8+", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Client Retention" }
  ];
  return (
    <section className="relative z-0 text-slate-900 bg-white font-sans overflow-hidden select-none py-10 border-t border-slate-100">

      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(74,21,75,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full space-y-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-[0.35em] block">Growth Framework</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Our Success<br />
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">Strategy</span>
            </h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm font-light max-w-xs leading-relaxed md:text-right">
            A structured three-phase storyboard built to scale businesses from foundation to high-volume acquisition.
          </p>
        </div>

        {/* Storyboard Rows Container */}
        <div className="space-y-24">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            const isEven = idx % 2 === 1;
            return (
              <div
                key={p.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >

                {/* Text Content Column (Alternates order) */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>

                  {/* Badge Row */}
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl ${p.badge} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em]" style={{ color: p.accent }}>Phase {p.id}</span>
                  </div>

                  {/* Headlines */}
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.label}</p>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-700 leading-tight">
                      {p.heading}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold" style={{ color: p.accent }}>
                      {p.subheading}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                    {p.description}
                  </p>

                  {/* Bullet points tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.items.map((item, i) => (
                      <span key={i} className={`px-2.5 py-1 rounded-full text-[9px] font-bold border ${p.tag}`}>
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Link CTA */}
                  <Link
                    href={p.href}
                    className="relative z-10 inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 hover:text-primary-hover transition-colors group/link pt-2"
                  >
                    <span>Get Started with Phase {p.id}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>

                </div>

                {/* Performance Analytics Card (Alternates order) */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary-hover to-primary-dark p-8 sm:p-10 text-white flex flex-col justify-between gap-6 overflow-hidden shadow-xl border border-white/5 group hover:scale-[1.01] transition-transform duration-300">

                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

                    {/* Glow spotlight blob */}
                    <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full ${p.glow} blur-[60px] pointer-events-none group-hover:scale-110 transition-transform duration-500`} />

                    <div className="space-y-6 relative z-10">
                      <span className="text-[9px] font-mono text-pink-350 font-bold uppercase tracking-[0.2em] block">Case Metric Highlights</span>

                      {idx === 0 && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-black uppercase tracking-tight">Lead Gen &amp; Acquisition</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4.5">
                              <p className="text-3xl font-black text-pink-300">+420%</p>
                              <p className="text-[9px] font-mono text-white/50 uppercase tracking-widest mt-0.5">Conversion Uplift</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4.5">
                              <p className="text-3xl font-black text-white">5x</p>
                              <p className="text-[9px] font-mono text-white/50 uppercase tracking-widest mt-0.5">Average Client ROI</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {idx === 1 && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-black uppercase tracking-tight">Search Engine Authority</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4.5">
                              <p className="text-3xl font-black text-pink-300">98 / 100</p>
                              <p className="text-[9px] font-mono text-white/50 uppercase tracking-widest mt-0.5">Technical SEO Score</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4.5">
                              <p className="text-3xl font-black text-white">1,500+</p>
                              <p className="text-[9px] font-mono text-white/50 uppercase tracking-widest mt-0.5">Top-10 Keywords</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {idx === 2 && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-black uppercase tracking-tight">Audience Engagement</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4.5">
                              <p className="text-3xl font-black text-pink-300">+250%</p>
                              <p className="text-[9px] font-mono text-white/50 uppercase tracking-widest mt-0.5">Follower Growth</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4.5">
                              <p className="text-3xl font-black text-white">1.2M+</p>
                              <p className="text-[9px] font-mono text-white/50 uppercase tracking-widest mt-0.5">Monthly Reach</p>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>

                    <div className="pt-6 border-t border-white/10 relative z-10 text-[9px] text-white/40 font-mono uppercase tracking-widest flex items-center justify-between">
                      <span>Digital Raiz Hyderabad</span>
                      <span>Verified Growth</span>
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
