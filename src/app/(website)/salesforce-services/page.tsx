import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SalesforceHero from "@/components/salesforce/SalesforceHero";
import SalesforceServicesGrid from "@/components/salesforce/SalesforceServicesGrid";
import SalesforceWhyChooseUs from "@/components/salesforce/SalesforceWhyChooseUs";
import SalesforceIndustriesSection from "@/components/salesforce/SalesforceIndustriesSection";
import SalesforceCtaBanner from "@/components/salesforce/SalesforceCtaBanner";

export const metadata = {
  title: "Salesforce Services & Enterprise CRM Solutions | Digital Raiz",
  description: "Digital Raiz provides end-to-end Salesforce services including consulting, implementation, custom LWC & Apex development, Sales Cloud, Service Cloud, Marketing Cloud, CPQ, and integration.",
  alternates: {
    canonical: "https://digitalraiz.com/salesforce-services",
  },
};

export default function SalesforceServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* ── HERO SECTION ── */}
        <SalesforceHero />

        {/* ── SECTION 1: 11 CORE SALESFORCE SERVICES ── */}
        <SalesforceServicesGrid />

        {/* ── SECTION 2: WHY CHOOSE US ── */}
        <SalesforceWhyChooseUs />

        {/* ── SECTION 3: INDUSTRIES WE SERVE ── */}
        <SalesforceIndustriesSection />

        {/* ── CALL TO ACTION BANNER ── */}
        <SalesforceCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
