"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Cloud } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function CloudDevopsHero() {
  return (
    <section className="relative pt-28 pb-10 sm:py-10 bg-white border-b border-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-indigo-50/15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content Column */}
        <ScrollReveal direction="left" className="space-y-6 flex-grow max-w-2xl order-last lg:order-first">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600">
            <Cloud className="w-3.5 h-3.5" />
            Cloud &amp; DevOps Services
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Cloud &amp; DevOps Services Built for <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">Continuous Digital Evolution</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
            Digital businesses cannot afford infrastructure that becomes a constraint as applications, users and workloads grow. Digital Raiz delivers Cloud and DevOps services focused on creating technology environments that are adaptable, automated and engineered for sustained performance.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => openContactModal("Cloud & DevOps")}
              className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white text-[10px] font-black uppercase tracking-widest shadow-md hover:scale-[1.02] transition-all duration-300 active:scale-95 group border-0 cursor-pointer"
            >
              <span>Consult DevOps Team</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </ScrollReveal>

        {/* Right Hero Image Stage */}
        <ScrollReveal direction="right" delay={150} className="w-full lg:w-[500px] shrink-0 order-first lg:order-last">
          <Image
            src="/cloud-and-devops/isometric-server-cluster-cloud-network.png"
            alt="Isometric Server Cluster & Cloud DevOps Network Architecture"
            width={900}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
