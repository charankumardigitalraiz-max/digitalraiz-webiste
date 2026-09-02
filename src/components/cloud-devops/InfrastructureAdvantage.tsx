"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Cloud,
  GitBranch,
  Layers,
  Terminal,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function InfrastructureAdvantage() {
  const corePillars = [
    {
      step: "01",
      title: "Cloud Architecture & Migration",
      desc: "Architecting, migrating, and optimizing multi-cloud environments (AWS, Azure, GCP) tailored to changing workloads and operational priorities.",
      icon: Cloud,
      gradient: "from-indigo-600 via-purple-600 to-indigo-700",
      accentBorder: "group-hover:border-indigo-400"
    },
    {
      step: "02",
      title: "Automated Release Pipelines",
      desc: "Creating automated CI/CD deployment pipelines, repeatable environment workflows, and continuous delivery systems for release consistency.",
      icon: GitBranch,
      gradient: "from-pink-500 via-rose-500 to-violet-600",
      accentBorder: "group-hover:border-pink-400"
    },
    {
      step: "03",
      title: "Containerization & Kubernetes",
      desc: "Microservices orchestration using Docker and Kubernetes for high-availability cluster management, fault tolerance, and auto-scaling.",
      icon: Layers,
      gradient: "from-violet-600 via-indigo-600 to-cyan-600",
      accentBorder: "group-hover:border-violet-400"
    },
    {
      step: "04",
      title: "Infrastructure as Code (IaC)",
      desc: "Automated cloud provisioning using Terraform, CloudFormation, and Ansible to eliminate manual steps and enforce repeatability.",
      icon: Terminal,
      gradient: "from-indigo-600 via-pink-600 to-purple-600",
      accentBorder: "group-hover:border-purple-400"
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/40 to-white text-slate-900 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full space-y-8 relative z-10">

        {/* Compact Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
            Architecture Advantage
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Where Infrastructure Becomes an{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
              Engineering Advantage
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-2xl mx-auto">
            A well-designed cloud environment should give technology teams freedom to build, scale and respond without constantly reworking the foundation underneath. Digital Raiz helps organizations architect, migrate and optimize cloud environments around their applications, workloads and operational priorities.
          </p>
        </div>

        {/* Compact 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Visual Image Stage (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl bg-white   p-3 sm:p-4 overflow-hidden group h-full flex flex-col justify-between">

              <div className="relative rounded-xl overflow-hidden bg-slate-900/5 flex-grow flex items-center justify-center">
                <Image
                  src="/cloud-and-devops/square-realistic-cloud-devops-infrastructure.png"
                  alt="Futuristic Cloud & DevOps Infrastructure Architecture"
                  width={650}
                  height={450}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-102 transition-transform duration-500"
                  priority
                />

                {/* Floating Top SLA Badge */}
                {/* <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md border border-slate-200/80 px-2.5 py-1 rounded-full shadow-xs text-[10px] font-mono font-bold text-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>99.99% SLA Uptime</span>
                </div> */}
              </div>

              {/* <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-700 px-1">
                <span className="flex items-center gap-1.5 text-indigo-950">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  Production-Grade Setup
                </span>
                <span className="text-[10px] font-mono text-slate-400">AWS · Azure · GCP</span>
              </div> */}
            </div>
          </div>

          {/* Right Column: 4 Compact Capability Cards Grid (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar, i) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={i}
                  className={`group relative p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${pillar.accentBorder}`}
                >
                  <div className="space-y-3">
                    {/* Top Bar: Icon Badge & Step Counter */}
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${pillar.gradient} flex items-center justify-center text-white shadow-md shadow-indigo-500/15 group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-extrabold text-slate-300 group-hover:text-indigo-600 transition-colors">
                        {pillar.step}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Line */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5 text-indigo-950">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      Production-Grade Setup
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
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
