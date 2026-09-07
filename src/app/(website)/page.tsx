import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import GrowthSection from "@/components/home/GrowthSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import BlogSection from "@/components/home/BlogSection";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";

// SEO Metadata from Page 1 of the Content PDF
export const metadata: Metadata = {
  title: "IT Solutions Company in Hyderabad | Digital Raiz",
  description: "Digital solutions company in Hyderabad offering AI, cloud, software development, data analytics, SEO, digital marketing, and cybersecurity services to help businesses grow.",
  keywords: [
    "Web Development Services in Hyderabad",
    "AI Solutions in Hyderabad",
    "AI Development Services in Hyderabad",
    "Software Solutions in Hyderabad",
    "IT Solutions in Hyderabad",
    "digital servies in hyderabad",
    "digital services in hyderabad",
    "AI Development Company in Hyderabad",
    "IT Solutions Company in Hyderabad",
    "Application Development Hyderabad",
    "Business Software Solutions Hyderabad",
    "Automation Testing Services Hyderabad",
    "Enterprise Application Development Hyderabad",
    "app development company in hyderabad",
  ],
  alternates: {
    canonical: "https://digitalraiz.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "IT Solutions Company in Hyderabad | Digital Raiz",
    description: "Digital solutions company in Hyderabad offering AI, cloud, software development, data analytics, SEO, digital marketing, and cybersecurity services to help businesses grow.",
    url: "https://digitalraiz.com/",
    siteName: "Digital Raiz",
    images: [
      {
        url: "/logo/digital-raiz-logo.png",
        width: 1200,
        height: 630,
        alt: "Digital Raiz Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Solutions Company in Hyderabad | Digital Raiz",
    description: "Digital solutions company in Hyderabad offering AI, cloud, software development, data analytics, SEO, digital marketing, and cybersecurity services to help businesses grow.",
    images: ["/logo/digital-raiz-logo.png"],
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans overflow-x-hidden lg:pr-[80px]">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Layout with Content PDF integration */}
      <main>
        {/* Hero Section (Contains H1 tag & intro copy) */}
        <Hero />

        {/* Interactive Services / Solutions Section */}
        <Services />

        {/* Capabilities Section (Contains H5 & H6 capability matrices) */}
        <CapabilitiesSection />

        {/* Growth Section (Contains H2, H3, H4 content) */}
        <GrowthSection />

        {/* Solutions Section (Contains H7, H8, H9 partner details) */}
        <SolutionsSection />

        {/* Dynamic Studio Blog & Thought Leadership Section */}
        <BlogSection />

        {/* Interactive Inquiry Form */}
        {/* <Contact /> */}
      </main>

      {/* Branding Footer details */}
      <Footer />
    </div>
  );
}

