"use client";

import { useState } from "react";
import { Cpu, Bot, BarChart3, BrainCircuit, Sparkles, CheckCircle2 } from "lucide-react";

export default function AiExplorerSection() {
  const [activeTab, setActiveTab] = useState(0);

  const aiPillars = [
    {
      id: "automation",
      tag: "Workflow Automation",
      title: "Intelligent Process Automation",
      subtitle: "Streamlining complex operations with self-learning AI workflows.",
      desc: "We integrate intelligent automation engines into enterprise business systems, reducing operational overhead, eliminating manual data entry bottlenecks, and optimizing resource allocation.",
      icon: Bot,
      deliverable: "Custom NLP Workflows & Automated Task Triage Systems",
      img: "/about/digital-process-automation-white.png",
    },
    {
      id: "apps",
      tag: "GenAI Engineering",
      title: "AI-Powered Custom Web & Apps",
      subtitle: "Enriching web and mobile platforms with large language models.",
      desc: "From smart conversational assistants to generative content recommenders, we build web and mobile applications powered by custom fine-tuned AI models and secure API pipelines.",
      icon: Cpu,
      deliverable: "LLM Integration Pipelines, Vector Search & Neural APIs",
      img: "/about/futuristic-web-architecture-white.png",
    },
    {
      id: "analytics",
      tag: "Predictive Analytics",
      title: "Data-Driven Business Insights",
      subtitle: "Transforming raw data streams into predictive growth decisions.",
      desc: "We implement machine learning algorithms that analyze user behavior, forecast demand trends, detect anomalies, and uncover actionable business intelligence.",
      icon: BarChart3,
      deliverable: "Behavioral Analytics & Predictive Forecasting Engines",
      img: "/about/data-visualization-dashboard-white.png",
    },
    {
      id: "ux",
      tag: "Contextual UX",
      title: "Smart Customer UX Experiences",
      subtitle: "Personalizing customer journeys in real-time.",
      desc: "Delivering adaptive user interfaces that react dynamically to user intent, personalizing content, recommendations, and assistance across every digital touchpoint.",
      icon: BrainCircuit,
      deliverable: "Intent-Based Personalization & Smart Context Engine",
      img: "/about/neural-brain-mesh-white.png",
    },
  ];

  const currentPillar = aiPillars[activeTab];

  return (
    <section className="py-10 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-10 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-[10px] font-mono font-bold uppercase tracking-widest text-violet-600">
            <Cpu className="w-3.5 h-3.5 text-violet-500" />
            Emerging Technology • AI Integration
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Exploring Practical Possibilities of AI
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto">
            Technology continues to reshape how businesses operate. At Digital Raiz, we explore practical ways to integrate AI into digital products, business processes, and customer experiences.
          </p>
        </div>

        {/* Interactive Studio Explorer Card */}
        <div className="bg-white border border-slate-200/90 rounded-lg p-6 sm:p-8 space-y-8 relative overflow-hidden">

          {/* Top Interactive Segmented Studio Pill Switcher */}
          <div className="bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-1.5 shadow-inner">
            {aiPillars.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs transition-colors duration-150 cursor-pointer text-left outline-none focus:outline-none focus:ring-0 focus-visible:outline-none select-none ${
                    isActive
                      ? "bg-white text-slate-900 shadow-sm border border-slate-200/80 font-extrabold"
                      : "text-slate-600 hover:text-slate-900 font-semibold hover:bg-white/60"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-150 ${
                      isActive
                        ? "bg-pink-50 text-pink-600 border border-pink-100"
                        : "bg-slate-200/60 text-slate-500"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <span className="text-[8.5px] font-mono font-bold block text-slate-400 uppercase tracking-wider leading-none mb-0.5">
                      0{idx + 1}. {item.tag.split(" ")[0]}
                    </span>
                    <span className="text-[11.5px] font-extrabold truncate block leading-tight">
                      {item.tag}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tab Inspector Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">

            {/* Left Column: Description & Practical Rule */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9.5px] font-mono font-bold text-pink-700 uppercase">
                  <Sparkles className="w-3 h-3 text-pink-500" />
                  {currentPillar.tag}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {currentPillar.title}
                </h3>
                <p className="text-pink-600 text-xs sm:text-sm font-bold">
                  {currentPillar.subtitle}
                </p>
              </div>

              <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-normal">
                {currentPillar.desc}
              </p>

              {/* Strategic Rule Callout Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block">Our Practical AI Principle</span>
                <p className="text-slate-800 text-xs font-semibold leading-relaxed">
                  💡 &quot;Use AI where it solves a real problem, improves an experience, or creates a meaningful competitive advantage for your business.&quot;
                </p>
              </div>
            </div>

            {/* Right Column: Visual Image Showcase */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <img
                src={currentPillar.img}
                alt={currentPillar.title}
                className="w-full h-48 sm:h-56 object-cover rounded-2xl"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
