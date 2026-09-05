import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyPolicyView from "@/components/privacy-policy/PrivacyPolicyView";

export const metadata: Metadata = {
  title: "Privacy Policy | Digital Raiz",
  description: "Read the official Privacy Policy of DigitalRaiz to understand how we collect, use, and protect your personal information and visitor data rights.",
  alternates: {
    canonical: "https://digitalraiz.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />
      <PrivacyPolicyView />
      <Footer />
    </div>
  );
}
