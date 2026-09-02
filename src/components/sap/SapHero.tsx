"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Building2 } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";

export default function SapHero() {
  return (
    <section className="relative py-10 sm:py-10 bg-white border-b border-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-pink-50/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content Column */}
        <div className="space-y-6 flex-grow max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 shadow-2xs">
            <Building2 className="w-3.5 h-3.5" />
            SAP Cloud Services
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            SAP Cloud Services <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">for the Intelligent Enterprise</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            Enterprise technology should do more than support operations—it should create a connected foundation for how an organization grows, adapts and competes. Digital Raiz delivers SAP Cloud services that help businesses modernize enterprise environments, connect critical systems and create greater visibility across their operations.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => openContactModal("SAP Cloud Services")}
              className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-full bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[10px] font-black uppercase tracking-widest shadow-md hover:scale-[1.02] transition-all duration-300 active:scale-95 group border-0"
            >
              <span>Consult SAP Team</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Right Hero Image Stage */}
        <div className="w-full lg:w-[500px] shrink-0">
          <Image
            src="/sap/sap-enterprise-cloud-architecture.png"
            alt="SAP Cloud Architecture"
            width={900}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
