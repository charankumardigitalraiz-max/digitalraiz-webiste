"use client";

import React from "react";
import {
  ShieldCheck,
  Cloud,
  GitMerge,
  Settings,
  Code,
  BarChart3,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function SapCloudIntelligenceSection() {
  const sapMatrix = [
    {
      name: "SAP S/4HANA Cloud",
      desc: "Next-Gen Enterprise ERP",
      icon: Cloud,
      gradient: "from-pink-500 via-violet-500 to-indigo-600",
      tags: ["ERP", "Finance", "Supply Chain", "S/4HANA"]
    },
    {
      name: "SAP Integration Suite",
      desc: "Multi-Cloud Integration & APIs",
      icon: GitMerge,
      gradient: "from-violet-500 via-indigo-600 to-purple-600",
      tags: ["API Management", "Cloud Integration", "Event Mesh"]
    },
    {
      name: "SAP BTP Platform",
      desc: "Business Technology Extension",
      icon: Settings,
      gradient: "from-indigo-500 via-violet-600 to-pink-500",
      tags: ["AppGyver", "Kyma", "CAP", "BTP"]
    },
    {
      name: "ABAP Cloud Programming",
      desc: "Custom Business Logic Modules",
      icon: Code,
      gradient: "from-purple-600 via-indigo-600 to-pink-500",
      tags: ["ABAP RESTful", "Cloud Native", "OData"]
    },
    {
      name: "SAP Fiori / UI5",
      desc: "Intuitive Modern UX Frameworks",
      icon: ShieldCheck,
      gradient: "from-pink-500 via-rose-500 to-violet-600",
      tags: ["Fiori Elements", "UI5", "Web Components"]
    },
    {
      name: "HANA Data Warehouse",
      desc: "Real-Time Enterprise Analytics",
      icon: BarChart3,
      gradient: "from-violet-600 via-pink-600 to-indigo-600",
      tags: ["Data Sphere", "SAC", "Embedded Analytics"]
    }
  ];

  return (
    <section className="py-10 sm:py-10 bg-white relative overflow-hidden">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full space-y-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-500" />
            Enterprise Modernization
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            From Enterprise Complexity to{" "}
            <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Cloud Intelligence
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            Cloud modernization is not simply about moving systems to the cloud. It is about creating an architecture capable of supporting better decisions, more responsive operations and continuous business evolution. Digital Raiz combines SAP Cloud capabilities with expertise across software development, digital platforms and emerging technologies to help organizations build connected enterprise ecosystems.
          </p>
        </div>

        {/* 6 Grid Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sapMatrix.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-pink-300 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-pink-500/10 via-indigo-500/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div className="space-y-4">
                  {/* Card Header: Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center text-white shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-pink-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Individual Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/80 group-hover:border-pink-200/80 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Status Bar */}
                {/* <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    Enterprise Grade
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" />
                </div> */}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
