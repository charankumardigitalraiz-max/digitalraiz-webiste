import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsAndConditionsView from "@/components/terms-and-conditions/TermsAndConditionsView";

export const metadata: Metadata = {
  title: "Terms and Conditions | Digital Raiz",
  description: "Read the official Terms and Conditions of DigitalRaiz Creative Solutions PVT LTD outlining rules, regulations, licensing, and policies for using our website.",
  alternates: {
    canonical: "https://digitalraiz.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />
      <TermsAndConditionsView />
      <Footer />
    </div>
  );
}
