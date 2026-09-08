"use client";

import React from "react";
import {
  Award,
  Layers,
  Building2,
  ShieldCheck,
  Zap,
  GraduationCap,
  PiggyBank,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Headphones,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function SalesforceWhyChooseUs() {
  const reasons = [
    {
      title: "Certified Salesforce Professionals",
      desc: "Our team consists of certified Salesforce administrators, developers, integration specialists, and architects with proven ecosystem expertise.",
      icon: Award,
      badge: "Certified Team",
    },
    {
      title: "End-to-End Salesforce Services",
      desc: "From strategic planning, architecture, and custom LWC/Apex development to data migration, integration, and 24/7 maintenance support.",
      icon: Layers,
      badge: "Complete Spectrum",
    },
    {
      title: "Industry-Specific Solutions",
      desc: "Tailored CRM architecture designed to meet regulatory, workflow, and customer engagement demands across diverse verticals.",
      icon: Building2,
      badge: "Vertical Domains",
    },
    {
      title: "Scalable & Secure Implementations",
      desc: "Built following Salesforce best practices, strict governance models, data encryption, and role-based access control.",
      icon: ShieldCheck,
      badge: "Zero-Trust Security",
    },
    {
      title: "Agile Development Methodology",
      desc: "Iterative sprint delivery ensuring fast turnarounds, transparent progress tracking, and rapid time-to-market.",
      icon: Zap,
      badge: "Fast Time-to-Value",
    },
    {
      title: "Dedicated Support & Training",
      desc: "Comprehensive user onboarding, admin training, and ongoing technical support to guarantee maximum platform adoption.",
      icon: GraduationCap,
      badge: "User Enablement",
    },
    {
      title: "Cost-Effective Delivery Model",
      desc: "High-value enterprise solutions delivered with transparent pricing, optimized resource allocation, and measurable ROI.",
      icon: PiggyBank,
      badge: "Maximized ROI",
    },
  ];

  return (
    <section className="py-10 sm:py-10 bg-white border-t border-b border-slate-200/80 relative">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-pink-500" />
              Strategic Advantage
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Choose Digital Raiz for{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Salesforce Excellence?
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
              We blend technical mastery with industry domain insights to help your organization maximize productivity, customer retention, and revenue growth.
            </p>
          </div>
        </ScrollReveal>

        {/* 7 Reasons Grid + 1 Banner Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <ScrollReveal key={idx} delay={(idx % 3) * 60} direction="up">
                <div className="group relative bg-white border border-slate-200/80 hover:border-pink-300/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1.5 h-full flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-pink-50/80 border border-pink-100/80 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:border-transparent group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest bg-pink-50 px-2.5 py-1 rounded-full border border-pink-100">
                        {r.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight">
                      {r.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      {r.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono font-bold text-pink-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                    <span>Verified Advantage</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}

          {/* CTA Box filling the 8th slot in a 3-col grid */}
          <ScrollReveal delay={200} direction="up" className="md:col-span-2 lg:col-span-2">
            <div className="p-7 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white shadow-xl flex flex-col justify-between space-y-4 h-full">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-white/20 text-[9px] font-mono font-bold uppercase tracking-wider text-white">
                  Ready to Accelerate Growth?
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Let&apos;s Build Your Salesforce Strategy Today
                </h3>
                <p className="text-white/90 text-xs sm:text-sm max-w-xl font-normal leading-relaxed">
                  Connect with our certified Salesforce architects to evaluate your existing platform or plan a brand-new implementation tailored to your exact business objectives.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openContactModal("Salesforce Consulting", "Salesforce Architecture Strategy")}
                  className="inline-flex items-center gap-2.5 py-3 px-6 rounded-xl bg-white hover:bg-slate-50 text-slate-900 text-xs font-extrabold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300 border-0 cursor-pointer"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-pink-600" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Row */}
        <ScrollReveal direction="up" delay={250}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pt-8 border-t border-slate-200/80">
            {[
              {
                val: "100%",
                label: "Certified Engineers",
                sub: "Salesforce Accredited",
                icon: Award,
                cardStyle: "bg-pink-50/60 border-pink-200/60 hover:border-pink-300 hover:shadow-pink-500/10",
                gradient: "from-pink-500 via-rose-500 to-pink-600",
                iconBg: "bg-pink-100/80 text-pink-600 border border-pink-200/60",
                glow: "from-pink-400/20",
              },
              {
                val: "50+",
                label: "CRM Implementations",
                sub: "Enterprise Deployed",
                icon: Layers,
                cardStyle: "bg-violet-50/60 border-violet-200/60 hover:border-violet-300 hover:shadow-violet-500/10",
                gradient: "from-violet-600 via-indigo-600 to-purple-600",
                iconBg: "bg-violet-100/80 text-violet-600 border border-violet-200/60",
                glow: "from-violet-400/20",
              },
              {
                val: "99.9%",
                label: "SLA Uptime",
                sub: "Guaranteed Performance",
                icon: ShieldCheck,
                cardStyle: "bg-emerald-50/60 border-emerald-200/60 hover:border-emerald-300 hover:shadow-emerald-500/10",
                gradient: "from-emerald-600 via-teal-600 to-emerald-500",
                iconBg: "bg-emerald-100/80 text-emerald-600 border border-emerald-200/60",
                glow: "from-emerald-400/20",
              },
              {
                val: "24/7",
                label: "Ongoing Support",
                sub: "Continuous Monitoring",
                icon: Headphones,
                cardStyle: "bg-indigo-50/60 border-indigo-200/60 hover:border-indigo-300 hover:shadow-indigo-500/10",
                gradient: "from-indigo-600 via-blue-600 to-cyan-600",
                iconBg: "bg-indigo-100/80 text-indigo-600 border border-indigo-200/60",
                glow: "from-indigo-400/20",
              },
            ].map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className={`relative group p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl bg-white space-y-3 overflow-hidden ${st.cardStyle}`}
                >
                  {/* Subtle Background Glow */}
                  <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${st.glow} to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

                  {/* Header: Icon & Indicator */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xs ${st.iconBg}`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-pink-500 transition-colors duration-300" />
                  </div>

                  {/* Body: Value, Label, Subtitle */}
                  <div className="space-y-0.5 relative z-10">
                    <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${st.gradient} bg-clip-text text-transparent tracking-tight`}>
                      {st.val}
                    </div>
                    <div className="text-xs font-extrabold text-slate-900 tracking-tight leading-snug">
                      {st.label}
                    </div>
                    <div className="text-[9.5px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      {st.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}