"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import DigitalMarketingHero from "@/components/website/digital-marketing/DigitalMarketingHero";
import DigitalMarketingCapabilities from "@/components/website/digital-marketing/DigitalMarketingCapabilities";
import DigitalMarketingVerticals from "@/components/website/digital-marketing/DigitalMarketingVerticals";
import DigitalMarketingIntegratedStrategy from "@/components/website/digital-marketing/DigitalMarketingIntegratedStrategy";
import DigitalMarketingWhyChooseUs from "@/components/website/digital-marketing/DigitalMarketingWhyChooseUs";

export default function DigitalMarketingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800 lg:pr-[80px] w-full max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <ScrollReveal direction="up">
          <DigitalMarketingHero />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <DigitalMarketingCapabilities />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <DigitalMarketingVerticals />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <DigitalMarketingIntegratedStrategy />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <DigitalMarketingWhyChooseUs />
        </ScrollReveal>

        {/* CALL TO ACTION BANNER */}
        <ServiceCtaBanner
          badge="Digital Marketing Growth"
          title="Ready to Grow Your Business with Digital Raiz?"
          description="SEO • Google Ads PPC • Social Media Marketing • Lead Generation Solutions in Hyderabad"
        />
      </main>

      <Footer />
    </div>
  );
}
