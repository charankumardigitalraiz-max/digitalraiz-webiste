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
  title: "Digital Marketing, SEO & App Development Company in Hyderabad | Digital Raiz",
  description: "Digital Raiz is a digital marketing, SEO, website development and mobile app development company in Hyderabad, helping businesses grow through strategic digital and technology solutions.",
  keywords: [
    "digital marketing company in hyderabad",
    "digital marketing services in hyderabad",
    "digital marketing agency in hyderabad",
    "seo company in hyderabad",
    "seo services in hyderabad",
    "seo agency in hyderabad",
    "social media marketing company in hyderabad",
    "social media marketing services in hyderabad",
    "website development company in hyderabad",
    "website development services in hyderabad",
    "web development company in hyderabad",
    "mobile app development company in hyderabad",
    "mobile app development services in hyderabad",
    "mobile application development company in hyderabad",
    "android app development company in hyderabad",
    "ios app development company in hyderabad",
    "software development company in hyderabad",
    "software development services in hyderabad"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Digital Marketing, SEO & App Development Company in Hyderabad | Digital Raiz",
    description: "Digital Raiz is a digital marketing, SEO, website development and mobile app development company in Hyderabad, helping businesses grow through strategic digital and technology solutions.",
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
    title: "Digital Marketing, SEO & App Development Company in Hyderabad | Digital Raiz",
    description: "Digital Raiz is a digital marketing, SEO, website development and mobile app development company in Hyderabad, helping businesses grow through strategic digital and technology solutions.",
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
        <Contact />
      </main>

      {/* Branding Footer details */}
      <Footer />
    </div>
  );
}

