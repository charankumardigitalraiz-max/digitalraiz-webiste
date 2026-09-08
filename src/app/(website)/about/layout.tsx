import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Digital Raiz | Technology & Digital Solutions Company",
  description:
    "Learn about Digital Raiz, a technology and digital solutions company in Hyderabad. Discover our vision, mission, methodology, and core principles shaping digital possibilities.",
  keywords: [
    "About Digital Raiz",
    "Technology Solutions Company in Hyderabad",
    "Digital Solutions Company Hyderabad",
    "Digital Agency Principles Vision Mission"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/about"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "About Digital Raiz | Technology & Digital Solutions Company",
    description:
      "Learn about Digital Raiz, a technology and digital solutions company in Hyderabad. Discover our vision, mission, methodology, and core principles shaping digital possibilities.",
    url: "https://digitalraiz.com/about",
    siteName: "Digital Raiz",
    locale: "en_US",
    type: "website"
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
