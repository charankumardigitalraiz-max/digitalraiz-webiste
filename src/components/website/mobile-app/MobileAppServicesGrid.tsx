"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Sparkles, Smartphone, Layers, ShieldCheck, Layout, Zap, Workflow } from "lucide-react";

export default function MobileAppServicesGrid() {
  const industryUseCases = [
    {
      title: "Customer Engagement",
      desc: "Interactive loyalty programs, reward engines, and direct customer engagement mobile experiences.",
      tag: "Engagement",
      icon: <Smartphone className="w-5 h-5 text-pink-500" />,
      color: "from-pink-50 to-pink-100/30",
      border: "border-pink-200/60 text-pink-700"
    },
    {
      title: "E-Commerce & Retail",
      desc: "Mobile shopping portals featuring secure payment checkouts, catalog filters, and real-time order tracking.",
      tag: "E-Commerce",
      icon: <Layers className="w-5 h-5 text-violet-500" />,
      color: "from-violet-50 to-violet-100/30",
      border: "border-violet-200/60 text-violet-700"
    },
    {
      title: "Healthcare & Telemedicine",
      desc: "Doctor consultations, clinical reports comparison engines, and instant appointment booking interfaces.",
      tag: "HealthTech",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      color: "from-emerald-50 to-emerald-100/30",
      border: "border-emerald-200/60 text-emerald-700"
    },
    {
      title: "Education & E-Learning",
      desc: "Virtual classrooms, digital course delivery, interactive testing modules, and offline study resource access.",
      tag: "EdTech",
      icon: <Layout className="w-5 h-5 text-indigo-500" />,
      color: "from-indigo-50 to-indigo-100/30",
      border: "border-indigo-200/60 text-indigo-700"
    },
    {
      title: "Logistics & Delivery",
      desc: "Real-time GPS vehicle tracking, automated driver dispatch logging, and dynamic route optimization engines.",
      tag: "Logistics",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      color: "from-amber-50 to-amber-100/30",
      border: "border-amber-200/60 text-amber-700"
    },
    {
      title: "Booking & Marketplaces",
      desc: "On-demand service booking, multi-vendor marketplace management, and scheduling workflow portals.",
      tag: "On-Demand",
      icon: <Workflow className="w-5 h-5 text-rose-500" />,
      color: "from-rose-50 to-rose-100/30",
      border: "border-rose-200/60 text-rose-700"
    }
  ];

  return (
    <section id="mobile-services" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-12">

        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              Tailored Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1e1b4b] tracking-tight leading-tight">
              Mobile App Development Services{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                in Hyderabad
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto">
              Our mobile app development services are designed around the specific needs of each business — from initial concept to deployment and maintenance.
            </p>
          </div>
        </ScrollReveal>

        {/* Industry Use Case Cards — Upgraded Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryUseCases.map((uc, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="up" className="h-full flex flex-col">
              <div
                className={`p-6 rounded-2xl bg-gradient-to-br ${uc.color} border border-slate-200/70 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between space-y-5 group h-full`}
              >
                <div className="space-y-4">
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {uc.icon}
                    </div>
                    <span className={`text-[8px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border ${uc.border}`}>
                      {uc.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-black uppercase tracking-tight text-[#1e1b4b] group-hover:text-pink-600 transition-colors">
                      {uc.title}
                    </h3>
                    <p className="text-slate-700 font-medium text-xs sm:text-[13px] leading-relaxed group-hover:text-slate-900 transition-colors">
                      {uc.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
