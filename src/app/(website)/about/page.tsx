"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSlider from "@/components/BannerSlider";
import ScrollReveal from "@/components/ScrollReveal";

import AboutHero from "@/components/website/about/AboutHero";
import AboutVisionMission from "@/components/website/about/AboutVisionMission";
import AboutApproach from "@/components/website/about/AboutApproach";
import AboutPrinciples from "@/components/website/about/AboutPrinciples";
import AboutAI from "@/components/website/about/AboutAI";
import AboutHyderabad from "@/components/website/about/AboutHyderabad";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">

        {/* 1. Hero */}
        <AboutHero />

        {/* 2. Vision · Mission · Approach · Principles · AI */}
        <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-16">

            {/* Vision & Mission */}
            <AboutVisionMission />

            {/* Our Approach */}
            <AboutApproach />

            {/* What Drives Us */}
            <AboutPrinciples />

            {/* AI Section */}
            <AboutAI />

          </div>
        </section>

        {/* 3. Banner Slider */}
        <section className="py-4 bg-white border-y border-slate-200/80 overflow-hidden">
          <BannerSlider />
        </section>

        {/* 4. Growing from Hyderabad */}
        <AboutHyderabad />

      </main>

      <Footer />
    </div>
  );
}
