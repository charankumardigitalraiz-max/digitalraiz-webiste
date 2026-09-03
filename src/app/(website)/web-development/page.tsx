"use client";

import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebDevHero from "@/components/website/web-dev/WebDevHero";
import WebDevServicesGrid from "@/components/website/web-dev/WebDevServicesGrid";
import WebDevDesignExperience from "@/components/website/web-dev/WebDevDesignExperience";
import WebDevCapabilitiesMatrix from "@/components/website/web-dev/WebDevCapabilitiesMatrix";
import WebDevTalentBanner from "@/components/website/web-dev/WebDevTalentBanner";
import WebDevPortfolioShowcase from "@/components/website/web-dev/WebDevPortfolioShowcase";
import WebDevCtaSection from "@/components/website/web-dev/WebDevCtaSection";
import { usePortfolioStore, getWebProjects } from "@/store";
import { usePortfolioProjects } from "@/hooks/usePortfolioProjects";

export default function WebServicePage() {
  const storeProjects = usePortfolioStore((state) => state.projects);
  const { data: allProjects = storeProjects } = usePortfolioProjects();

  const webPortfolio = useMemo(() => {
    return getWebProjects(allProjects, 10);
  }, [allProjects]);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeWebProject = useMemo(() => {
    return webPortfolio[activeIndex % webPortfolio.length] || webPortfolio[0];
  }, [webPortfolio, activeIndex]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || !webPortfolio.length) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === webPortfolio.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [webPortfolio.length, isPaused]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION — Modern Clean Studio Layout */}
        <WebDevHero />

        {/* SECTION 1: WEBSITE DEVELOPMENT SERVICES BUILT AROUND YOUR BUSINESS */}
        <WebDevServicesGrid />

        {/* SECTION 2 & 3: WEBSITE DESIGN & CUSTOM SOLUTIONS (2-COL SPLIT BLUEPRINT) */}
        <WebDevDesignExperience />

        {/* SECTION 4, 5, 6: WEB APPS, WORDPRESS, E-COMMERCE & SEO */}
        <WebDevCapabilitiesMatrix />

        {/* SECTION 7 & 8: HIRE DEVELOPERS & WHY CHOOSE DIGITAL RAIZ */}
        <WebDevTalentBanner />

        {/* WEB PORTFOLIO SHOWCASE SECTION */}
        <WebDevPortfolioShowcase
          webPortfolio={webPortfolio}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setIsPaused={setIsPaused}
          activeWebProject={activeWebProject}
        />

        {/* SECTION 9: BUILD YOUR DIGITAL PRESENCE & FINAL CTA */}
        <WebDevCtaSection />
      </main>

      <Footer />
    </div>
  );
}
