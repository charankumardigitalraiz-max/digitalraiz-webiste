import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import FloatingSocials from "@/components/FloatingSocials";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & App Development Company in Hyderabad | Digital Raiz",
  description: "Digital Raiz is a digital marketing, SEO, website development and mobile app development company in Hyderabad, helping businesses grow through strategic digital and technology solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-800 relative">
        {children}
        <FloatingSocials />
      </body>
    </html>
  );
}
