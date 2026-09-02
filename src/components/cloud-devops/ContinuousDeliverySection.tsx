"use client";

import React from "react";
import {
  RefreshCw,
  Cloud,
  Server,
  Globe,
  Layers,
  GitBranch,
  Terminal,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Activity
} from "lucide-react";

export default function ContinuousDeliverySection() {
  const devopsMatrix = [
    {
      name: "AWS Cloud Platform",
      desc: "EC2, S3, EKS, Lambda, CloudFront",
      icon: Cloud,
      gradient: "from-amber-500 via-orange-500 to-indigo-600",
      tags: ["EC2", "S3", "EKS", "Lambda", "CloudFront"]
    },
    {
      name: "Microsoft Azure",
      desc: "AKS, App Services, Azure DevOps",
      icon: Server,
      gradient: "from-blue-500 via-indigo-600 to-purple-600",
      tags: ["AKS", "App Services", "Azure DevOps"]
    },
    {
      name: "Google Cloud (GCP)",
      desc: "GKE, Compute Engine, Cloud Run",
      icon: Globe,
      gradient: "from-emerald-500 via-teal-600 to-indigo-600",
      tags: ["GKE", "Compute Engine", "Cloud Run"]
    },
    {
      name: "Kubernetes & Docker",
      desc: "Container Orchestration & Scaling",
      icon: Layers,
      gradient: "from-indigo-600 via-violet-600 to-cyan-500",
      tags: ["Microservices", "Helm", "Istio Mesh", "HPA"]
    },
    {
      name: "CI/CD Automation",
      desc: "GitHub Actions, GitLab CI, Jenkins",
      icon: GitBranch,
      gradient: "from-pink-500 via-rose-500 to-violet-600",
      tags: ["GitHub Actions", "GitLab CI", "Jenkins"]
    },
    {
      name: "Terraform & Ansible",
      desc: "Declarative Infrastructure as Code",
      icon: Terminal,
      gradient: "from-purple-600 via-pink-600 to-indigo-600",
      tags: ["Terraform", "Ansible", "OpenTofu", "IaC"]
    }
  ];

  const pipelineSteps = [
    { num: "01", name: "Source Commit", detail: "Git Trigger" },
    { num: "02", name: "Automated Build", detail: "Docker & Lint" },
    { num: "03", name: "Security Audit", detail: "Vulnerability Scan" },
    { num: "04", name: "Canary Rollout", detail: "Zero Downtime" },
    { num: "05", name: "Production Active", detail: "99.99% Uptime" }
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
            <RefreshCw className="w-3.5 h-3.5 text-pink-500" />
            Continuous Delivery
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            The Discipline Behind{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent">
              Faster, More Reliable Releases
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            Modern software delivery demands more than development speed. It requires a dependable system for building, testing, deploying and observing applications throughout their lifecycle. Digital Raiz applies DevOps practices to create automated delivery pipelines, repeatable deployments, infrastructure workflows, monitoring processes and stronger collaboration between development and operations.
          </p>
        </div>

        {/* 6 Grid Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devopsMatrix.map((item, i) => {
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
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    Production Ready
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Delivery Pipeline Flow Bar */}
        {/* <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-400">
                <Activity className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Automated Delivery Pipeline Flow</h4>
                <p className="text-xs text-slate-400 font-mono">Continuous Integration & Deployment Matrix</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              GITOPS ENGINE ACTIVE
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
            {pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 hover:border-pink-500/50 transition-colors"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>STEP {step.num}</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="text-xs font-bold text-white">{step.name}</div>
                <div className="text-[10px] font-mono text-indigo-300">{step.detail}</div>
              </div>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
}
