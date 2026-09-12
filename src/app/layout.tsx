import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Poppins, Lexend } from "next/font/google";
import FloatingSocials from "@/components/FloatingSocials";
import FloatingPortfolioWidget from "@/components/FloatingPortfolioWidget";
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalraiz.com"),
  title: "IT Solutions Company in Hyderabad | Digital Raiz",
  description: "Digital solutions company in Hyderabad offering AI, cloud, software development, data analytics, SEO, digital marketing, and cybersecurity services to help businesses grow.",
  keywords: [
    "Web Development Services in Hyderabad",
    "AI Solutions in Hyderabad",
    "AI Development Services in Hyderabad",
    "Software Solutions in Hyderabad",
    "IT Solutions in Hyderabad",
    "digital servies in hyderabad",
    "digital services in hyderabad",
    "AI Development Company in Hyderabad",
    "IT Solutions Company in Hyderabad",
    "Application Development Hyderabad",
    "Business Software Solutions Hyderabad",
    "Automation Testing Services Hyderabad",
    "Enterprise Application Development Hyderabad",
    "app development company in hyderabad",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.webp", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.webp", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.webp", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "IT Solutions Company in Hyderabad | Digital Raiz",
    description: "Digital solutions company in Hyderabad offering AI, cloud, software development, data analytics, SEO, digital marketing, and cybersecurity services to help businesses grow.",
    url: "https://digitalraiz.com/",
    siteName: "Digital Raiz",
    images: [
      {
        url: "/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "Digital Raiz Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Solutions Company in Hyderabad | Digital Raiz",
    description: "Digital solutions company in Hyderabad offering AI, cloud, software development, data analytics, SEO, digital marketing, and cybersecurity services to help businesses grow.",
    images: ["/logo/digital-raiz-logo.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${poppins.variable} ${lexend.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-800 relative">
        <QueryProvider>
          {children}
          <FloatingPortfolioWidget />
          <FloatingSocials />
        </QueryProvider>
      </body>
    </html>
  );
}
