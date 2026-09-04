import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SapHero from "@/components/sap/SapHero";
import SapConnectedEnterpriseSection from "@/components/sap/SapConnectedEnterpriseSection";
import SapCloudIntelligenceSection from "@/components/sap/SapCloudIntelligenceSection";
import SapCtaBanner from "@/components/sap/SapCtaBanner";

export const metadata = {
  title: "SAP Cloud Services & Solutions for Enterprise | Digital Raiz",
  description: "Digital Raiz provides SAP Cloud Services to help modern enterprises connect operations, modernize back-office workflows, and leverage SAP architecture.",
  alternates: {
    canonical: "https://digitalraiz.com/sap-cloud-services",
  },
};

export default function SapCloudServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* ── HERO SECTION ── */}
        <SapHero />

        {/* ── SECTION 1: Connected Enterprise Framework ── */}
        <SapConnectedEnterpriseSection />

        {/* ── SECTION 2: Cloud Intelligence Matrix Grid ── */}
        <SapCloudIntelligenceSection />

        {/* ── CALL TO ACTION BANNER (SLEEK LIGHT BANNER) ── */}
        <SapCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
