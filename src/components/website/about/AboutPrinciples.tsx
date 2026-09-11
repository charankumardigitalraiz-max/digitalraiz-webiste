"use client";

import { Sparkles, Search, Lightbulb, Eye, Zap, HeartHandshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const principles = [
  {
    title: "Curiosity",
    desc: "Curiosity keeps us learning.",
    icon: <Search className="w-5 h-5 text-pink-500" />,
    color: "from-pink-50/80 to-purple-50/30",
    border: "border-pink-200/80",
    accent: "from-pink-500 to-purple-500",
    num: "01",
  },
  {
    title: "Creativity",
    desc: "Creativity helps us look beyond conventional solutions.",
    icon: <Lightbulb className="w-5 h-5 text-purple-500" />,
    color: "from-purple-50/80 to-violet-50/30",
    border: "border-purple-200/80",
    accent: "from-purple-500 to-violet-500",
    num: "02",
  },
  {
    title: "Clarity",
    desc: "Clarity keeps our work focused on the real objective.",
    icon: <Eye className="w-5 h-5 text-indigo-500" />,
    color: "from-indigo-50/80 to-blue-50/30",
    border: "border-indigo-200/80",
    accent: "from-indigo-500 to-blue-500",
    num: "03",
  },
  {
    title: "Quality",
    desc: "Quality shapes the way we design, develop and deliver.",
    icon: <Zap className="w-5 h-5 text-cyan-500" />,
    color: "from-cyan-50/80 to-teal-50/30",
    border: "border-cyan-200/80",
    accent: "from-cyan-500 to-teal-500",
    num: "04",
  },
  {
    title: "Partnership",
    desc: "Partnership reminds us that successful outcomes are built together.",
    icon: <HeartHandshake className="w-5 h-5 text-emerald-500" />,
    color: "from-emerald-50/80 to-green-50/30",
    border: "border-emerald-200/80",
    accent: "from-emerald-500 to-green-500",
    num: "05",
  },
];

export default function AboutPrinciples() {
  return (
    <div className="space-y-8 pt-8 ">
      <ScrollReveal direction="up">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-mono font-bold text-purple-600 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            <span>Our Principles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
            What Drives Us
          </h2>
          <p className="text-slate-500 text-xs font-medium">
            Technology is constantly changing, but our principles remain consistent.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {principles.map((p, idx) => (
          <ScrollReveal key={idx} delay={idx * 80} direction="up" className="h-full">
            <div className={`relative rounded-2xl p-5 bg-gradient-to-br ${p.color} border ${p.border} shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-400 flex flex-col h-full group space-y-3 overflow-hidden`}>
              {/* Top accent on hover */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${p.accent} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Number */}
              <span className="absolute top-3 right-3 text-[10px] font-mono font-black text-slate-300 group-hover:text-slate-400 transition-colors select-none">
                {p.num}
              </span>

              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                {p.icon}
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight group-hover:text-pink-600 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-normal">{p.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal direction="up" delay={300}>
        <p className="text-center text-xs text-slate-400 font-mono italic">
          These principles influence how we communicate with clients, approach challenges and build solutions.
        </p>
      </ScrollReveal>
    </div>
  );
}
