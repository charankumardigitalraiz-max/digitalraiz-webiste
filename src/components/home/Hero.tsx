"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[56.25vw] max-h-[500px] min-h-[220px] md:min-h-screen overflow-hidden flex flex-col items-center justify-between bg-black text-white font-sans">
      {/* Background Video (Scaled to 16:9 Aspect Ratio on Mobile) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100"
        style={{ pointerEvents: "none" }}
      >
        <source src="/video/no_i_want_another_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle Top & Bottom Vignette Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10 pointer-events-none" /> */}


      {/* <div className="max-w-6xl mx-auto px-6 pt-36 pb-20 relative z-20 text-center flex flex-col items-center justify-center my-auto space-y-8">


        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-cyan-300 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Strategic Digital & Technology Solutions</span>
        </div>


        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-tight max-w-4xl">
          Digital Marketing, Website & <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-400">
            Mobile App Development Company in Hyderabad
          </span>
        </h1>


        <div className="max-w-3xl space-y-4 text-white/80 text-xs sm:text-sm font-light leading-relaxed">
          <p>
            Build a stronger digital presence with Digital Raiz, a digital marketing, SEO, website development and mobile app development company in Hyderabad. We help startups, growing businesses and established organizations build stronger brands, connect with the right audiences and create digital experiences that support measurable business growth.
          </p>
          <p className="hidden sm:block">
            Our capabilities combine digital marketing services in Hyderabad, search engine optimization, social media marketing, website development and mobile app development to bring strategy, creativity and technology together to deliver solutions around your business objectives.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 font-bold text-xs uppercase tracking-widest text-white shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md font-bold text-xs uppercase tracking-widest text-white hover:bg-white/20 transition-all duration-300"
          >
            <span>OUR SERVICES</span>
          </Link>
        </div>

      </div> */}

      {/* Scroll indicator (Desktop Only) */}
      <div className="hidden md:flex relative z-20 pb-8 flex-col items-center gap-2">
        <span className="text-[10px] text-white/40 tracking-widest uppercase">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border border-white/30 p-1 flex justify-center">
          <div className="w-1 h-2 rounded-full bg-pink-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
