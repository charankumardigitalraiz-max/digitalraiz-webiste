"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function MobileAppTalentBanner() {
  const whyChoosePoints = [
    "User-centric UI/UX design tailored for intuitive user journeys",
    "Clean, modular and scalable mobile application architecture",
    "Secure backend systems and microservice API integrations",
    "Performance-focused development with sub-second response times",
    "Flexible and future-ready technology stack selections",
    "Structured automated testing and rigorous quality assurance",
    "Transparent communication and sprint milestone tracking",
    "Post-launch maintenance, OS upgrades, and continuous support"
  ];

  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        <ScrollReveal direction="up">
          <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#090d16] rounded-3xl border border-violet-500/20 shadow-2xl p-6 sm:p-10 lg:p-12 xl:p-14 relative overflow-hidden text-white space-y-10">

            {/* Background Glow Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center relative z-10">

              {/* Left Column (5 cols) — Copy & Onboarding Badges */}
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-white leading-tight">
                  Hire Mobile App Developers <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">from Hyderabad</span>
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  Finding the right development team can make a significant difference to the success of a mobile application. When you hire mobile app developers from Hyderabad through Digital Raiz, you get access to professionals who focus on both technical requirements and the business purpose behind your application.
                </p>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  Our developers work closely with clients to understand workflows, user requirements, and future expansion plans before development begins — reducing unnecessary complexity and ensuring long-term scalability.
                </p>

                {/* Trust Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-[10px] sm:text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>48-Hr Developer Match</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5">
                    <div className="w-2 h-2 rounded-full bg-pink-400" />
                    <span>100% IP Protection</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openContactModal("Mobile App Development", "Start Mobile Application Today")}
                    className="inline-flex items-center gap-2.5 py-4 px-8 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-[0_10px_25px_rgba(236,72,153,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
                  >
                    <span>Start Mobile Application Today</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column (7 cols) — Why Choose Digital Raiz 8 Glass Cards */}
              <div className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-9 border border-white/10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    Why Choose Digital Raiz?
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
                    8 Core Pillars
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChoosePoints.map((point, i) => (
                    <div
                      key={i}
                      className="p-4 sm:p-4.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/40 transition-all duration-300 flex items-start gap-3.5 group"
                    >
                      <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 text-white font-mono font-black text-[10px] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform mt-0.5">
                        0{i + 1}
                      </div>
                      <span className="text-xs sm:text-sm font-normal text-slate-200 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
