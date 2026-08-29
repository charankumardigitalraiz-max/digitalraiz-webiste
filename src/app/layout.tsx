import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Poppins, Lexend } from "next/font/google";
import FloatingSocials from "@/components/FloatingSocials";
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
  title: "Digital Marketing, SEO & App Development Company in Hyderabad | Digital Raiz",
  description: "Digital Raiz is a digital marketing, SEO, website development and mobile app development company in Hyderabad, helping businesses grow through strategic digital and technology solutions.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Digital Marketing, SEO & App Development Company in Hyderabad | Digital Raiz",
    description: "Digital Raiz is a digital marketing, SEO, website development and mobile app development company in Hyderabad, helping businesses grow through strategic digital and technology solutions.",
    url: "https://digitalraiz.com/",
    siteName: "Digital Raiz",
    images: [
      {
        url: "/logo/logo.png",
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
    title: "Digital Marketing, SEO & App Development Company in Hyderabad | Digital Raiz",
    description: "Digital Raiz is a digital marketing, SEO, website development and mobile app development company in Hyderabad, helping businesses grow through strategic digital and technology solutions.",
    images: ["/logo/digital-raiz-logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${poppins.variable} ${lexend.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-800 relative">
        {children}
        <FloatingSocials />
      </body>
    </html>
  );
}
