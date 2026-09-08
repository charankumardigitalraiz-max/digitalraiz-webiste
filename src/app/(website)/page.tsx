"use client";

import Header from "@/components/Header";
import Hero from "@/components/website/home/Hero";
import Services from "@/components/website/home/Services";
import GrowthSection from "@/components/website/home/GrowthSection";
import CapabilitiesSection from "@/components/website/home/CapabilitiesSection";
import SolutionsSection from "@/components/website/home/SolutionsSection";
import BlogSection from "@/components/website/home/BlogSection";
import Contact from "@/components/website/home/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans overflow-x-hidden lg:pr-[80px]">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Layout with Content PDF integration */}
      <main>
        {/* Hero Section (Contains H1 tag & intro copy) */}
        <ScrollReveal direction="up">
          <Hero />
        </ScrollReveal>

        {/* Interactive Services / Solutions Section */}
        <ScrollReveal direction="up">
          <Services />
        </ScrollReveal>

        {/* Capabilities Section (Contains H5 & H6 capability matrices) */}
        <ScrollReveal direction="up">
          <CapabilitiesSection />
        </ScrollReveal>

        {/* Growth Section (Contains H2, H3, H4 content) */}
        <ScrollReveal direction="up">
          <GrowthSection />
        </ScrollReveal>

        {/* Solutions Section (Contains H7, H8, H9 partner details) */}
        <ScrollReveal direction="up">
          <SolutionsSection />
        </ScrollReveal>

        {/* Dynamic Studio Blog & Thought Leadership Section */}
        <ScrollReveal direction="up">
          <BlogSection />
        </ScrollReveal>

        {/* Interactive Inquiry Form */}
        {/* <Contact /> */}
      </main>

      {/* Branding Footer details */}
      <Footer />
    </div>
  );
}


