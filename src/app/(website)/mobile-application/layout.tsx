import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Company in Hyderabad | Digital Raiz",
  description:
    "Digital Raiz is a mobile app development company in Hyderabad offering Android, iOS and cross-platform app development services to build scalable digital solutions.",
  keywords: [
    "Mobile App Development Company in Hyderabad",
    "Mobile App Development Services in Hyderabad",
    "Hire Mobile App Developers from Hyderabad",
    "Android App Development Hyderabad",
    "iOS App Development Hyderabad",
    "Cross-Platform App Development",
    "Flutter App Development",
    "React Native Development Company",
    "Digital Raiz Mobile Apps"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/mobile-app-development-company-in-hyderabad/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Mobile App Development Company in Hyderabad | Digital Raiz",
    description:
      "Digital Raiz is a mobile app development company in Hyderabad offering Android, iOS and cross-platform app development services to build scalable digital solutions.",
    url: "https://digitalraiz.com/mobile-application",
    siteName: "Digital Raiz",
    locale: "en_US",
    type: "website"
  }
};

export default function MobileApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
