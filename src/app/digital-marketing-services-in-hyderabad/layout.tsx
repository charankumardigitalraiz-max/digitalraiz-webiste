import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Hyderabad | Digital Raiz",
  description:
    "Digital Raiz provides digital marketing services in Hyderabad, including SEO, social media marketing, Google Ads, content marketing and lead generation for growing businesses.",
  keywords:
    "digital marketing services in hyderabad, digital marketing company in hyderabad, digital marketing agency in hyderabad, online marketing services in hyderabad, internet marketing services in hyderabad, digital marketing agency hyderabad, seo services in hyderabad, social media marketing services in hyderabad, google ads services in hyderabad, performance marketing services in hyderabad, lead generation services in hyderabad, content marketing services in hyderabad",
  alternates: {
    canonical: "https://digitalraiz.com/digital-marketing-services-in-hyderabad/",
  },
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
