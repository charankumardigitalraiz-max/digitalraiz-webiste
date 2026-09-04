"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Cloud,
  GitMerge,
  Database,
  FileCheck
} from "lucide-react";

export default function SapConnectedEnterpriseSection() {
  const corePillars = [
    {
      step: "01",
      title: "SAP Cloud Adoption & Modernization",
      desc: "Modernizing legacy enterprise ERP environments and migrating workload databases onto SAP Cloud & SAP S/4HANA architecture.",
      icon: Cloud,
      gradient: "from-pink-500 via-violet-500 to-pink-600",
      accentBorder: "group-hover:border-pink-400"
    },
    {
      step: "02",
      title: "Enterprise Application Integration",
      desc: "Connecting Salesforce, HubSpot, e-commerce portals, and third-party systems directly with SAP back-office operations via SAP Integration Suite.",
      icon: GitMerge,
      gradient: "from-violet-500 via-indigo-500 to-violet-600",
      accentBorder: "group-hover:border-violet-400"
    },
    {
      step: "03",
      title: "Custom ABAP & SAP BTP Logic",
      desc: "Tailoring backend ABAP code, SAP Business Technology Platform modules, and custom database views for specialized enterprise workflows.",
      icon: Database,
      gradient: "from-pink-500 via-rose-500 to-pink-500",
      accentBorder: "group-hover:border-rose-400"
    },
    {
      step: "04",
      title: "Connected Data & HANA Analytics",
      desc: "Establishing real-time analytics dashboards, visibility across inventory shipping, transaction volumes, and operational metrics.",
      icon: FileCheck,
      gradient: "from-indigo-600 via-violet-600 to-indigo-700",
      accentBorder: "group-hover:border-indigo-400"
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/40 to-white text-slate-900 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full space-y-8 relative z-10">

        {/* Compact Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-500" />
            Connected Cohesion
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Engineering a Connected Enterprise Through{" "}
            <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              SAP Cloud
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-2xl mx-auto">
            Digital Raiz helps organizations leverage SAP Cloud to bring greater cohesion to their technology landscape. We work across cloud environments, enterprise applications, system integration and business data to create more connected digital operations.
          </p>
        </div>

        {/* Compact 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Visual Image Stage (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="relative rounded-2xl bg-white p-3  overflow-hidden group h-full flex flex-col justify-between">
              <div className="relative w-full h-full min-h-[280px] rounded-xl overflow-hidden bg-slate-900/5">
                <Image
                  src="/sap/enterprise_server_square.png"
                  alt="SAP Cloud Infrastructure Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: 4 Compact Capability Cards Grid (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar, i) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={i}
                  className={`group relative p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${pillar.accentBorder}`}
                >
                  <div className="space-y-3.5">
                    {/* Top Bar: Icon Badge & Step Counter */}
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${pillar.gradient} flex items-center justify-center text-white shadow-md shadow-pink-500/15 group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-extrabold text-slate-300 group-hover:text-pink-600 transition-colors">
                        {pillar.step}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-pink-600 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
