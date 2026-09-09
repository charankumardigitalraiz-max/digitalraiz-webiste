import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services in Hyderabad | DigitalRaiz",
  description:
    "Explore IT services in Hyderabad from DigitalRaiz, including SAP, Salesforce, AI, cloud, cybersecurity, software development, web, mobile, and digital marketing solutions.",
  keywords: [
    "IT services in Hyderabad",
    "IT company in Hyderabad",
    "software company in Hyderabad",
    "IT service provider in Hyderabad",
    "software development services Hyderabad",
    "IT consulting services Hyderabad",
  ],
  alternates: {
    canonical: "https://digitalraiz.com/services/",
  },
  openGraph: {
    title: "IT Services in Hyderabad | DigitalRaiz",
    description:
      "Explore IT services in Hyderabad from DigitalRaiz, including SAP, Salesforce, AI, cloud, cybersecurity, software development, web, mobile, and digital marketing solutions.",
    url: "https://digitalraiz.com/services/",
    siteName: "DigitalRaiz",
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
