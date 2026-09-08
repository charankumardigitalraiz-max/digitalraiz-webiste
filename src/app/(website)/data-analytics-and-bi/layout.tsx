import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analytics & Business Intelligence Services | Digital Raiz",
  description:
    "Digital Raiz provides data analytics and business intelligence services that turn complex data into actionable insights, intelligent dashboards and better business decisions.",
  keywords: [
    "Data Analytics Services",
    "Business Intelligence Dashboards",
    "Snowflake Cloud Warehousing",
    "PowerBI Executive Scorecards",
    "Kafka Real-time Event Streaming",
    "Digital Raiz Data Services"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/data-analytics-and-bi"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Data Analytics & Business Intelligence Services | Digital Raiz",
    description:
      "Digital Raiz provides data analytics and business intelligence services that turn complex data into actionable insights, intelligent dashboards and better business decisions.",
    url: "https://digitalraiz.com/data-analytics-and-bi",
    siteName: "Digital Raiz",
    locale: "en_US",
    type: "website"
  }
};

export default function DataAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
