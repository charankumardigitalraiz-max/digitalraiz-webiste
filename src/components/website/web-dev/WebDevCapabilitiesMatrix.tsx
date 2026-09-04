"use client";

import React from "react";
import { CheckCircle2, Cpu, ShoppingBag, Search, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";
import { webAppCards } from "@/data/webDevData";

export default function WebDevCapabilitiesMatrix() {
  return (
    <section className="py-10 sm:py-10 bg-white relative  overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {[
            {
              title: "Web Application Development",
              subtitle: "Custom SaaS & Enterprise Portals",
              desc: "As businesses become more digitally connected, conventional websites may not always be enough. We build customized web applications, customer portals, dashboards, booking systems, and marketplaces engineered around your exact workflows.",
              tag: "SaaS & Portals Engine",
              icon: Cpu,
              gradient: "from-pink-500 to-rose-600",
              badgeBg: "bg-pink-50 text-pink-600 border-pink-100",
              pulseColor: "bg-pink-500",
              checkColor: "text-pink-500",
              hoverBorder: "hover:border-pink-300",
              features: ["Custom Dashboards", "Role-Based Access", "API Workflows"]
            },
            {
              title: "WordPress & E-Commerce Stores",
              subtitle: "High-Converting Retail Platforms",
              desc: "From flexible WordPress sites designed for easy content management to full-fledged e-commerce stores with product catalogs, shopping carts, payment gateways, and automated order workflows that scale online sales.",
              tag: "Retail & E-Com Suite",
              icon: ShoppingBag,
              gradient: "from-violet-600 to-indigo-600",
              badgeBg: "bg-violet-50 text-violet-600 border-violet-100",
              pulseColor: "bg-violet-600",
              checkColor: "text-violet-600",
              hoverBorder: "hover:border-violet-300",
              features: ["Product Catalogs", "Secure Gateways", "Cart System"]
            },
            {
              title: "Responsive & SEO-Friendly Architecture",
              subtitle: "Core Web Vitals & Speed First",
              desc: "Designed to provide a consistent experience across desktops, tablets, and smartphones. Our SEO-friendly website development considers page speed, semantic HTML structure, clean URLs, internal linking, and mobile responsiveness.",
              tag: "SEO & Speed Core",
              icon: Search,
              gradient: "from-emerald-500 to-teal-600",
              badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
              pulseColor: "bg-emerald-500",
              checkColor: "text-emerald-500",
              hoverBorder: "hover:border-emerald-300",
              features: ["100/100 Lighthouse", "Semantic HTML5", "Mobile First"]
            }
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 100} className="h-full">
                <div
                  onClick={() => openContactModal("Web Development", `Web Dev: ${card.title}`)}
                  className={`group relative bg-white border border-slate-200/80 ${card.hoverBorder} rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1.5 h-full flex flex-col justify-between space-y-4 cursor-pointer overflow-hidden`}
                >
                  {/* Top Accent Line on Hover */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Ambient Glow */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-pink-400/10 via-violet-500/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    {/* Header: Icon Box & Status Tag */}
                    {/* <div className="flex items-center justify-between">
                          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} text-white flex items-center justify-center shadow-md shadow-pink-500/15 group-hover:scale-105 transition-transform shrink-0`}>
                            <Icon className="w-5 h-5 stroke-[2]" />
                          </div>
                          <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[9.5px] font-mono font-bold uppercase tracking-wider ${card.badgeBg}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${card.pulseColor} animate-pulse`} />
                            <span>{card.tag}</span>
                          </div>
                        </div> */}

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                        {card.title}
                      </h3>
                      <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {card.subtitle}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs font-normal leading-relaxed">
                      {card.desc}
                    </p>

                    {/* Compact Feature Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {card.features.map((feat, fIdx) => (
                        <div key={fIdx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-[10.5px] font-semibold text-slate-700 group-hover:bg-slate-100 transition-all hover:scale-105">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${card.checkColor} shrink-0`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action CTA */}
                  {/* <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between relative z-10">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 group-hover:text-pink-600 transition-colors">
                          Explore Capability
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-pink-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs">
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div> */}
                </div>
              </ScrollReveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}
