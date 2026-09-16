"use client";

import React, { useState } from "react";
import { Briefcase, Plus, ExternalLink } from "lucide-react";

export default function AdminPortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: "P-101",
      name: "Soloo Hearts Dating Application",
      category: "Mobile App",
      tech: ["React Native", "Node.js", "WebSockets"],
      status: "Featured Live",
      image: "/portfolio/soloohearts.webp",
    },
    {
      id: "P-102",
      name: "Healthcare Diagnostic Platform",
      category: "Web Development",
      tech: ["Next.js 16", "TailwindCSS", "PostgreSQL"],
      status: "Featured Live",
      image: "/services/digital-raiz-imac-showcase-vertical.webp",
    },
    {
      id: "P-103",
      name: "Autonomous AI Customer Service Bot",
      category: "AI & ML",
      tech: ["Python", "LangChain", "OpenAI"],
      status: "Live Project",
      image: "/services/ai-hero-matrix.webp",
    },
    {
      id: "P-104",
      name: "Enterprise DevSecOps Cloud Migration",
      category: "Cloud & DevOps",
      tech: ["AWS SageMaker", "Terraform", "Kubernetes"],
      status: "Live Project",
      image: "/services/cloud-hero-visual.webp",
    },
  ];

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "all" || p.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <Briefcase className="w-6 h-6 text-indigo-600" /> Portfolio Showcase Manager
          </h1>
          <p className="text-slate-600 text-xs font-normal">
            Manage showcase projects, client case studies, and technological feature tags
          </p>
        </div>

        <button className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 border-0 cursor-pointer">
          <Plus className="w-4 h-4" />
          <span>Add New Case Study</span>
        </button>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
        {["all", "Mobile App", "Web Development", "AI & ML", "Cloud & DevOps"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white border-indigo-500 shadow-md"
                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-slate-200 rounded-3xl p-5 space-y-4 hover:border-indigo-300 transition-all flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-3">
              <div className="relative aspect-video w-full rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 flex items-center justify-center p-2">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-xl" />
                <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-white/90 text-indigo-700 border border-slate-200 text-[9px] font-mono font-bold uppercase shadow-sm">
                  {project.status}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">{project.category}</span>
                <h3 className="text-sm font-extrabold text-slate-900">{project.name}</h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[9.5px] font-mono text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400">{project.id}</span>
              <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer border-0 bg-transparent">
                <span>Manage</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
