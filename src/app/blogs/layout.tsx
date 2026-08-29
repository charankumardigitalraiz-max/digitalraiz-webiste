import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & Technology Insights Blog | Digital Raiz",
  description:
    "Explore latest articles, growth playbooks, technical tutorials, and digital marketing insights from Digital Raiz experts in Hyderabad.",
  keywords: [
    "digital marketing blog",
    "seo insights hyderabad",
    "web development tutorials",
    "mobile app development blog",
    "digital raiz blog"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/blogs/"
  },
  openGraph: {
    title: "Digital Marketing & Technology Insights Blog | Digital Raiz",
    description:
      "Explore latest articles, growth playbooks, technical tutorials, and digital marketing insights from Digital Raiz experts in Hyderabad.",
    url: "https://digitalraiz.com/blogs/",
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
