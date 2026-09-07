"use client";

import React from "react";
import {
  HeartPulse,
  Home,
  GraduationCap,
  Landmark,
  ShoppingBag,
  Factory,
  Truck,
  Cpu,
  ShoppingCart,
  Briefcase,
  Globe2,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function SalesforceIndustriesSection() {
  const industries = [
    { name: "Healthcare", desc: "HIPAA-compliant patient portals & care coordination.", icon: HeartPulse, color: "text-rose-600", bg: "bg-rose-50" },
    { name: "Real Estate", desc: "Property lead tracking, lease management & broker CRMs.", icon: Home, color: "text-amber-600", bg: "bg-amber-50" },
    { name: "Education", desc: "Student lifecycle management & institutional portals.", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Finance", desc: "Fintech integrations, wealth management & banking support.", icon: Landmark, color: "text-emerald-600", bg: "bg-emerald-50" },
    { name: "Retail", desc: "Omnichannel customer profiles & loyalty automation.", icon: ShoppingBag, color: "text-pink-600", bg: "bg-pink-50" },
    { name: "Manufacturing", desc: "Supply chain visibility, ERP sync & distributor portals.", icon: Factory, color: "text-indigo-600", bg: "bg-indigo-50" },
    { name: "Logistics", desc: "Fleet tracking, partner portals & dispatch workflows.", icon: Truck, color: "text-sky-600", bg: "bg-sky-50" },
    { name: "Technology", desc: "SaaS subscription CPQ, developer portals & ticket routing.", icon: Cpu, color: "text-purple-600", bg: "bg-purple-50" },
    { name: "E-Commerce", desc: "Storefront integrations, cart recovery & customer analytics.", icon: ShoppingCart, color: "text-teal-600", bg: "bg-teal-50" },
    { name: "Professional Services", desc: "Client onboarding, time-tracking sync & project analytics.", icon: Briefcase, color: "text-slate-700", bg: "bg-slate-100" },
  ];

  return (
    <section className="py-10 sm:py-10 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Globe2 className="w-3.5 h-3.5 text-pink-500" />
              <span>Vertical Domain Expertise</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Industries We{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Serve
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
              Tailored Salesforce implementations configured to meet compliance, workflow, and customer demands across diverse industry verticals.
            </p>
          </div>
        </ScrollReveal>

        {/* 10 Industries Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <ScrollReveal key={i} delay={(i % 5) * 50} direction="up">
                <div className="group p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-pink-300/80 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-3 h-full">
                  <div className={`w-12 h-12 rounded-xl ${ind.bg} ${ind.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-snug font-normal">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
