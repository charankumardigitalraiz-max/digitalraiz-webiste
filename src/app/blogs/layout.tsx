import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & Technology Blog | Digital Raiz Hyderabad",
  description:
    "Explore the Digital Raiz blog for insights on digital marketing, SEO, social media, website development, mobile apps, AI, technology trends and business growth.",
  keywords: [
    "digital marketing blog",
    "seo insights hyderabad",
    "web development tutorials",
    "mobile app development blog",
    "digital raiz blog"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/insights/blog/"
  },
  openGraph: {
    title: "Digital Marketing & Technology Blog | Digital Raiz Hyderabad",
    description:
      "Explore the Digital Raiz blog for insights on digital marketing, SEO, social media, website development, mobile apps, AI, technology trends and business growth.",
    url: "https://digitalraiz.com/insights/blog/",
    siteName: "Digital Raiz",
    type: "website"
  }
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
