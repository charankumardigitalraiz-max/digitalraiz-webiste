import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAP Cloud Services & Solutions for Enterprise | Digital Raiz",
  description:
    "Digital Raiz delivers SAP Cloud services and solutions for connected enterprise operations, cloud integration, modernization, scalability and digital growth.",
  keywords: [
    "SAP Cloud Services",
    "SAP S/4HANA Cloud Modernization",
    "SAP Integration Suite",
    "ABAP Cloud Programming",
    "HANA Enterprise Analytics",
    "Digital Raiz SAP Solutions"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/sap-cloud-services"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "SAP Cloud Services & Solutions for Enterprise | Digital Raiz",
    description:
      "Digital Raiz delivers SAP Cloud services and solutions for connected enterprise operations, cloud integration, modernization, scalability and digital growth.",
    url: "https://digitalraiz.com/sap-cloud-services",
    siteName: "Digital Raiz",
    locale: "en_US",
    type: "website"
  }
};

export default function SapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
