"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeBannerCarousel() {
  const banners = [
    {
      img: "/home/digital-raiz-web-platforms-banner-v2.webp",
      alt: "Web & Mobile Platforms Showcase",
    },
    {
      img: "/home/digital-raiz-digital-marketing-seo-banner-v2.webp",
      alt: "Digital Marketing & SEO Growth",
    },
    {
      img: "/home/digital-raiz-mobile-app-engineering-banner-v2.webp",
      alt: "Next-Gen Mobile App Development",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="py-2 bg-white select-none w-full overflow-hidden">
      <div className="w-full">
        <div className="relative group w-full overflow-hidden bg-white">

          {/* 100% Full-Width Edge-to-Edge Screen Banner Strip */}
          <div className="relative w-full aspect-[5/1] min-h-[160px] sm:min-h-[240px] md:min-h-[300px] lg:min-h-[360px] overflow-hidden bg-white">
            {banners.map((b, idx) => (
              <img
                key={idx}
                src={b.img}
                alt={b.alt}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${idx === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
                  }`}
              />
            ))}
          </div>

          {/* Left Navigation Arrow */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-pink-600 text-white flex items-center justify-center z-20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
            aria-label="Previous Banner"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % banners.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-pink-600 text-white flex items-center justify-center z-20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
            aria-label="Next Banner"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? "w-6 bg-pink-500" : "w-2 bg-white/60 hover:bg-white"
                  }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
