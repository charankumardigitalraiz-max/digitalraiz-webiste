import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salesforce Services & Enterprise CRM Solutions | Digital Raiz",
  description:
    "Digital Raiz provides end-to-end Salesforce services including consulting, implementation, custom LWC & Apex development, Sales Cloud, Service Cloud, Marketing Cloud, CPQ, and integration.",
  keywords: [
    "Salesforce Services",
    "Enterprise CRM Solutions",
    "Salesforce Consulting",
    "Lightning Web Components LWC",
    "Apex Development",
    "Sales Cloud",
    "Service Cloud",
    "Marketing Cloud",
    "CPQ Integration",
    "Digital Raiz Salesforce"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/salesforce-services"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Salesforce Services & Enterprise CRM Solutions | Digital Raiz",
    description:
      "Digital Raiz provides end-to-end Salesforce services including consulting, implementation, custom LWC & Apex development, Sales Cloud, Service Cloud, Marketing Cloud, CPQ, and integration.",
    url: "https://digitalraiz.com/salesforce-services",
    siteName: "Digital Raiz",
    locale: "en_US",
    type: "website"
  }
};

export default function SalesforceServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
