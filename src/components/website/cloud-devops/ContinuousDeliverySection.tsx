"use client";

import React from "react";
import {
  RefreshCw,
  Cloud,
  Server,
  Globe,
  Layers,
  GitBranch,
  Terminal
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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

  return (
    <section className="py-10 sm:py-10 bg-white relative overflow-hidden">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full space-y-12 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
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

            <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              <p>
                Modern software delivery demands more than development speed. It requires a dependable system for building, testing, deploying and observing applications throughout their lifecycle.
              </p>
              <p>
                Digital Raiz applies DevOps practices to create automated delivery pipelines, repeatable deployments, infrastructure workflows, monitoring processes and stronger collaboration between development and operations. By reducing avoidable manual processes and improving visibility across environments, teams can release changes with greater consistency while maintaining operational stability.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Grid Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devopsMatrix.map((item, i) => {
            const Icon = item.icon;

            return (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div
                  className="group relative p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-pink-300 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full"
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
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Paragraph 3 Callout: Engineering Discipline */}
        <ScrollReveal direction="up" delay={150}>
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl relative overflow-hidden border border-indigo-900/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-pink-400">
                Engineering Discipline
              </span>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-200">
                From cloud architecture to continuous delivery, we build the underlying engineering discipline that allows digital products to evolve without compromising reliability.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
