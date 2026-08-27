"use client";

import React, { useState } from "react";
import { Lightbulb, Users, CheckCircle2, ArrowRight, Globe, Smartphone, TrendingUp, Search, Share2, Zap } from "lucide-react";
import Link from "next/link";

export default function SolutionsSection() {
  const [hoveredStrength, setHoveredStrength] = useState<number | null>(null);

  const partnerStrengths = [
    "Customized digital marketing strategies",
    "SEO-friendly website development",
    "Professional and user-focused experiences",
    "Performance-oriented marketing campaigns",
    "Customized website and mobile app development",
    "Scalable technology solutions",
    "Clear project planning and communication",
    "Ongoing optimization and support"
  ];

  const ecosystem = [
    { icon: Globe, label: "Website", desc: "Converts visitors", color: "text-primary", bg: "bg-pink-50", border: "border-pink-100" },
    { icon: Search, label: "SEO", desc: "Drives organic traffic", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
    { icon: Share2, label: "Social Media", desc: "Builds brand awareness", color: "text-primary", bg: "bg-pink-50", border: "border-pink-100" },
    { icon: TrendingUp, label: "Digital Ads", desc: "Generates targeted leads", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
    { icon: Smartphone, label: "Mobile App", desc: "Retains loyal users", color: "text-primary", bg: "bg-pink-50", border: "border-pink-100" },
    { icon: Zap, label: "Performance", desc: "Tracks & optimizes results", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" }
  ];

  return (
    <section className="py-5 pb-10 relative bg-white text-slate-800 font-sans overflow-hidden  select-none">

      {/* Faint background gradient mesh */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(79,70,229,0.03),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-10">

        {/* ── SECTION 1: Integrated Ecosystem ── */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

         
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em]">Integrated Solutions</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b4b] uppercase tracking-tight leading-tight">
                Digital Marketing<br />
                <span className="text-indigo-600">&amp; Development</span><br />
                <span className="text-slate-400 text-2xl font-black">Solutions in Hyderabad</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
              <p>
                At Digital Raiz, our digital marketing and development services in Hyderabad bring these capabilities together through one coordinated approach — maintaining consistency across brand, marketing campaigns, website and digital products.
              </p>
              <p>
                Whether you need a complete digital marketing strategy, a new website, an e-commerce platform or a mobile application, we identify the right combination of services for your business.
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer group">
              <Lightbulb className="w-4 h-4" />
              <span>Explore Our Approach</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

       
          <div className="space-y-4">
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">The Digital Ecosystem</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ecosystem.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col gap-3 p-4 rounded-2xl border ${item.border} ${item.bg} hover:shadow-md transition-all duration-200 cursor-default group`}
                  >
                    <div className={`w-9 h-9 rounded-xl bg-white border ${item.border} flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-black uppercase tracking-tight ${item.color}`}>{item.label}</p>
                      <p className="text-[9px] text-slate-500 font-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-[10px] text-slate-400 font-light italic border-t border-slate-100 pt-3">
              All six channels work together — each strengthening the other to create a seamless digital presence.
            </p>
          </div>

        </div> */}

        {/* ── SECTION 2: Why Partner with Digital Raiz ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column: Heading and intro */}
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-hover" />
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em]">Our Commitment</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b4b] uppercase tracking-tight leading-tight">
                Why Partner<br />
                <span className="text-primary-hover">With Us?</span>
              </h2>
            </div>

            <div className="space-y-3 text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
              <p>
                Choosing a digital partner is about more than selecting an individual service. It is about working with a team that understands your business objectives and can turn those objectives into effective digital solutions.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Premium Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Stat Card 1: Happy Clients */}
            <div className="group relative bg-gradient-to-br from-primary-dark via-primary-mid/95 to-slate-950 border border-pink-500/20 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/25 hover:-translate-y-1 overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl opacity-70 group-hover:bg-pink-500/20 transition-colors" />
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary-dark/60 border border-pink-500/30 flex items-center justify-center shadow-inner text-pink-300">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-3xl font-black bg-gradient-to-r from-pink-100 to-pink-300 bg-clip-text text-transparent tracking-tight">200+</p>
                  <p className="text-[10px] font-mono text-pink-300/80 uppercase tracking-widest mt-1">Happy Clients</p>
                </div>
                <p className="text-[11px] text-pink-200/70 font-light leading-relaxed">
                  Delivering proven marketing and engineering results for startups and enterprises.
                </p>
              </div>
            </div>

            {/* Stat Card 2: Years Active — Secondary Indigo */}
            <div className="group relative bg-gradient-to-br from-indigo-900 via-indigo-800/80 to-slate-900 border border-indigo-400/25 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-800/30 hover:-translate-y-1 overflow-hidden sm:mt-6 text-white">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-400/20 rounded-full blur-2xl opacity-80 group-hover:bg-indigo-400/30 transition-colors" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-600/10 rounded-full blur-xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-400/30 flex items-center justify-center shadow-inner text-indigo-300">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-3xl font-black bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent tracking-tight">8+</p>
                  <p className="text-[10px] font-mono text-indigo-300/80 uppercase tracking-widest mt-1">Years Active</p>
                </div>
                <p className="text-[11px] text-indigo-100/60 font-light leading-relaxed">
                  Continuous technology innovation and digital marketing leadership.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ── SECTION 3: CTA Banner ── */}
        {/* <div className="relative rounded-[40px] bg-gradient-to-br from-[#0c0817] to-[#1e0a2e] text-white p-10 lg:p-16 overflow-hidden border border-white/10 shadow-2xl">
        
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-600/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-pink-600/10 rounded-full blur-[90px] pointer-events-none" />

       
          <div className="absolute bottom-4 right-8 text-[160px] font-black text-white/[0.015] leading-none pointer-events-none select-none uppercase tracking-tighter">
            DR
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
      
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-[9px] font-bold text-indigo-300 uppercase tracking-widest">
                <span>⚡ NEXT LEVEL GROWTH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Let&apos;s Build<br />
                Something <span className="text-indigo-400">Extraordinary</span>
              </h2>

              <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed max-w-lg">
                We bring together digital marketing, SEO, social media, website development and mobile app development to help businesses build stronger digital brands and create meaningful customer experiences.
              </p>

       
              <div className="space-y-2.5 pt-2">
                {[
                  "15-Minute Discovery & Strategy Call",
                  "Customized Digital Growth Blueprint",
                  "Execution Roadmap & Pricing Estimates"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6 flex flex-col justify-between shadow-xl">
              
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Consultation Request</p>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">Get a Free Audit</h3>
                <p className="text-[10px] text-white/50 font-light">Average response time: less than 24 hours</p>
              </div>

        
              <div className="flex items-center gap-3 py-2 border-y border-white/[0.06]">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="w-8 h-8 rounded-full border-2 border-[#130b24] bg-indigo-650 flex items-center justify-center text-[9px] font-bold text-white uppercase select-none">
                      {num === 1 ? "DR" : num === 2 ? "MK" : "DEV"}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-white">4.9 / 5 Rating</p>
                  <p className="text-[9px] text-white/40 font-mono uppercase tracking-wider">Based on 150+ reviews</p>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-lg group"
                >
                  <span>Schedule Strategy Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/5 text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-all"
                >
                  <span>Explore Services</span>
                </Link>
              </div>

            </div>

          </div>
        </div> */}

      </div>

    </section>
  );
}
