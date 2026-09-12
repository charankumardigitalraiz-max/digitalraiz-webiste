"use client";

import { Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutHyderabad() {
  return (
    <section className="py-10 sm:py-10 bg-white relative overflow-hidden">
      {/* subtle bg */}
      <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600">
                <Globe className="w-3.5 h-3.5 text-indigo-500" />
                <span>Regional Foundation & Beyond</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase leading-tight">
                Growing from Hyderabad,{" "}
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Thinking Beyond
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <div className="space-y-3 text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                <p>
                  Hyderabad is an important part of our journey. It is a city shaped by technology, entrepreneurship and an increasingly ambitious business community.
                </p>
                <p>
                  From here, Digital Raiz works with businesses looking to strengthen their digital presence and embrace new possibilities through technology.
                </p>
                <p>
                  While our foundation is in Hyderabad, our thinking is not limited by geography. Digital businesses can reach audiences across India and around the world, and we approach our work with that wider potential in mind.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              {/* The Digital Raiz Difference Box */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight group-hover:text-pink-600 transition-colors duration-300">
                  The Digital Raiz Difference
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-normal">
                  We do not believe there is a universal formula for digital success. Every business has its own challenges, customers and ambitions. Our responsibility is to understand those differences and create a solution that feels right for that particular business.
                </p>
                <p className="text-slate-700 text-xs font-semibold pt-1">
                  That is what we strive to bring to every engagement—a thoughtful strategy, purposeful technology, creative execution and a partnership built on trust.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="right" delay={200} className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                <img
                  src="/about/hyderabad-it-hub-network-white.webp"
                  alt="Digital Raiz Hyderabad HQ & Global Reach"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
