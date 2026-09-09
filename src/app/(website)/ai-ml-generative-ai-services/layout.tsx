import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI, ML & Generative AI Solutions | Digital Raiz",
  description:
    "Digital Raiz delivers AI, Machine Learning and Generative AI solutions for businesses, including intelligent applications, automation and AI-powered experiences.",
  keywords: [
    "AI Machine Learning Solutions",
    "Generative AI Innovations",
    "LLM RAG Vector Databases",
    "Predictive Analytics Models",
    "Digital Raiz AI Services"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/ai-ml-generative-ai-services"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "AI, ML & Generative AI Solutions | Digital Raiz",
    description:
      "Digital Raiz delivers AI, Machine Learning and Generative AI solutions for businesses, including intelligent applications, automation and AI-powered experiences.",
    url: "https://digitalraiz.com/ai-ml-generative-ai-services",
    siteName: "Digital Raiz",
    locale: "en_US",
    type: "website"
  }
};

export default function AiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
