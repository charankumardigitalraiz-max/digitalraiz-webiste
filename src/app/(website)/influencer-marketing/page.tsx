import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import ScrollReveal from "@/components/ScrollReveal";
import InfluencerMarketingHero from "@/components/website/influencer-marketing/InfluencerMarketingHero";
import InfluencerPlatformTicker from "@/components/website/influencer-marketing/InfluencerPlatformTicker";
import InfluencerServicesGrid from "@/components/website/influencer-marketing/InfluencerServicesGrid";
import InfluencerCreatorTiers from "@/components/website/influencer-marketing/InfluencerCreatorTiers";
import InfluencerCampaignWorkflow from "@/components/website/influencer-marketing/InfluencerCampaignWorkflow";

export default function InfluencerMarketingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        <ScrollReveal direction="up">
          <InfluencerMarketingHero />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={50}>
          <InfluencerPlatformTicker />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <InfluencerServicesGrid />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <InfluencerCreatorTiers />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <InfluencerCampaignWorkflow />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <ServiceCtaBanner
            badge="Influencer Campaign Growth"
            title="Ready to Scale Your Brand with Top Creator Influencers?"
            description="UGC Reels • Creator Matchmaking • Multi-Platform Campaign Strategy in Hyderabad"
          />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
