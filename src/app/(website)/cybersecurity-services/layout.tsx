import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Services & Solutions for Digital Businesses | Digital Raiz",
  description:
    "Digital Raiz provides cybersecurity services to strengthen applications, cloud infrastructure and digital environments through security testing, vulnerability assessment and risk management.",
  keywords: [
    "Cybersecurity Services",
    "Digital Security Solutions",
    "Web Application Security",
    "Mobile Application Security",
    "Cloud Security",
    "Network Security",
    "Vulnerability Assessment",
    "Security Testing",
    "Information Security",
    "Risk Assessment",
    "Application Security",
    "Digital Raiz Cybersecurity"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/cybersecurity-services/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Cybersecurity Services & Solutions for Digital Businesses | Digital Raiz",
    description:
      "Digital Raiz provides cybersecurity services to strengthen applications, cloud infrastructure and digital environments through security testing, vulnerability assessment and risk management.",
    url: "https://digitalraiz.com/cybersecurity-services/",
    siteName: "Digital Raiz",
    locale: "en_US",
    type: "website"
  }
};

export default function CybersecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
