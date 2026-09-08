import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Cybersecurity & VAPT Services | Digital Raiz",
  description:
    "Zero-Trust cyber defense, vulnerability assessment & pentesting (VAPT), 24/7 SIEM SOC monitoring, and ISO 27001 / SOC2 compliance automation by Digital Raiz.",
  keywords: [
    "Enterprise Cybersecurity Services",
    "VAPT Pentesting Company",
    "Zero-Trust Architecture",
    "24/7 SIEM SOC Threat Monitoring",
    "ISO 27001 SOC2 Compliance",
    "Digital Raiz Cybersecurity"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/cybersecurity-services"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Enterprise Cybersecurity & VAPT Services | Digital Raiz",
    description:
      "Zero-Trust cyber defense, vulnerability assessment & pentesting (VAPT), 24/7 SIEM SOC monitoring, and ISO 27001 / SOC2 compliance automation by Digital Raiz.",
    url: "https://digitalraiz.com/cybersecurity-services",
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
