"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function AboutHero() {
  return (
    <section className="relative pt-28 pb-10 sm:py-16 lg:py-20 bg-white text-slate-900 overflow-hidden border-b border-slate-200/80">
      {/* Micro Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      {/* Ambient glow */}
      {/* <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-3xl pointer-events-none" /> */}
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-last lg:order-first">
            <ScrollReveal direction="up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                About Digital Raiz
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                Shaping Ideas into{" "}
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Possibilities
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-3 text-slate-600">
                <p className="font-semibold text-slate-800 text-sm sm:text-base leading-snug">
                  Digital Raiz is a technology and digital solutions company based in Hyderabad, bringing together strategy, creativity and technology to help businesses move forward in a digital-first world.
                </p>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Our work spans digital marketing, SEO, social media, website development, web application development and mobile app development — but what defines us is not just our range. It is the way we approach every challenge: with curiosity, clarity and a strong understanding of the business behind the requirement.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => openContactModal("General Agency Inquiry")}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-pink-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-sm"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex items-center justify-center order-first lg:order-last">
            <ScrollReveal direction="up" delay={200} className="w-full">
              <div className="relative w-full rounded-3xl overflow-hidden group ">
                <Image
                  src="/about/digital-raiz-technologies-showcase-1200x900-source.png"
                  alt="Digital Raiz Technologies Showcase"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0  pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
