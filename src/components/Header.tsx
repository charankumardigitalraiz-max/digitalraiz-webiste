"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalService, setModalService] = useState("Web Development");

  useEffect(() => {
    const handleCustomOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.service) {
        setModalService(customEvent.detail.service);
      }
      setContactModalOpen(true);
    };

    window.addEventListener("open-contact-modal", handleCustomOpen);
    return () => {
      window.removeEventListener("open-contact-modal", handleCustomOpen);
    };
  }, []);

  const services = [
    { name: "Digital Marketing", href: "/digital-marketing-services-in-hyderabad" },
    { name: "Web Development", href: "/web-development" },
    { name: "Mobile App Development", href: "/mobile-application" },
    { name: "Influencer Marketing", href: "/influencer-marketing" },
    { name: "SAP Cloud Services", href: "/sap-cloud-services" },
    { name: "Artificial Intelligence", href: "/artificial-intelligence" },
    { name: "Machine Learning", href: "/machine-learning" }
  ];

  return (
    <>
      {/* Fixed Top-Left Main Branding Header Logo Bar */}
      <header className="fixed top-3 left-4 sm:top-5 sm:left-6 z-40 flex items-center pointer-events-auto">
        <Link
          href="/"
          className="group flex items-center bg-white/90 backdrop-blur-md p-3 sm:px-2.5 sm:py-1 rounded-full border border-slate-200/80 shadow-lg hover:shadow-xl hover:border-pink-300/60 transition-all duration-300"
        >
          <Image
            src="/logo/digital-raiz-logo.webp"
            alt="Digital Raiz Logo"
            width={220}
            height={60}
            className="h-11 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>
      </header>

      {/* Backdrop overlay (Only active when menu is fully opened) */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-xs transition-opacity duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Side Dock Menu Panel (Thin sidebar strip on desktop, sliding menu drawer on mobile) */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 bg-white border-l border-slate-200/60 shadow-2xl flex flex-col justify-between transition-all duration-500 ease-in-out ${menuOpen
          ? "w-full sm:w-[320px] translate-x-0"
          : "w-[80px] translate-x-full lg:translate-x-0"
          }`}
      >

        {/* === STATE 1: COLLAPSED (Thin vertical bar strip - Desktop Only) === */}
        {!menuOpen && (
          <div className="absolute inset-0 hidden lg:flex flex-col items-center justify-between py-10 z-10 pointer-events-auto">

            {/* Brand Mark Icon at the top (scaled to fit sidebar width without squishing) */}
            <div className="w-14 flex items-center justify-center p-1 hover:scale-105 transition-transform duration-200">
              <Link href="/">
                <Image
                  src="/logo/digital-raiz-logo.webp"
                  alt="Digital Raiz Logo"
                  width={150}
                  height={40}
                  className="w-full h-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Rotated Navigation Links stacked vertically */}
            <div className="flex flex-col items-center gap-8 my-auto py-4">
              <Link
                href="/"
                className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-700 hover:text-pink-600 transition-all duration-200 hover:scale-110 py-1"
              >
                Home
              </Link>
              <button
                onClick={() => {
                  setMenuOpen(true);
                  setServicesExpanded(true);
                }}
                className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-700 hover:text-pink-600 transition-all duration-200 hover:scale-110 py-1 cursor-pointer focus:outline-none"
              >
                Services
              </button>
              <Link
                href="/portfolio"
                className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-700 hover:text-pink-600 transition-all duration-200 hover:scale-110 py-1"
              >
                Portfolio
              </Link>
              <Link
                href="/blogs"
                className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-700 hover:text-pink-600 transition-all duration-200 hover:scale-110 py-1"
              >
                Blogs
              </Link>
              <Link
                href="/about"
                className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-700 hover:text-pink-600 transition-all duration-200 hover:scale-110 py-1"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-700 hover:text-pink-600 transition-all duration-200 hover:scale-110 py-1"
              >
                Contact
              </Link>
            </div>

            {/* Hamburger Button at the bottom */}
            <button
              onClick={() => setMenuOpen(true)}
              className="w-12 h-12 rounded-full bg-primary border border-white/10 flex items-center justify-center text-white cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none shadow-md"
              aria-label="Open Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* === STATE 2: EXPANDED (Full navigation details) === */}
        {menuOpen && (
          <div className="flex flex-col justify-between h-full p-8 sm:p-10 z-25 overflow-y-auto w-full no-scrollbar">

            {/* Top Row: Full Horizontal Logo & Close Button */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/logo/digital-raiz-logo.webp"
                  alt="Digital Raiz Logo"
                  width={240}
                  height={65}
                  className="w-full h-auto max-w-[150px] -my-3 object-contain hover:scale-[1.02] transition-transform duration-200"
                  priority
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1.5 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors focus:outline-none cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Navigation links */}
            <nav className="flex flex-col gap-4 py-4">
              {/* 01. Home */}
              <div className="group flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-350 pt-1">01</span>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-tight text-slate-800 hover:text-pink-600 group-hover:translate-x-1.5 transition-all duration-300"
                >
                  Home
                </Link>
              </div>

              {/* 02. Services (Accordion Expandable) */}
              <div className="group flex flex-col">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono font-bold text-slate-350 pt-1">02</span>
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    className="flex items-center gap-1.5 text-xl font-bold uppercase tracking-tight text-slate-800 hover:text-pink-600 focus:outline-none text-left cursor-pointer"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${servicesExpanded ? "grid-rows-[1fr] opacity-100 mt-1.5" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden pl-4 space-y-1 border-l-2 border-pink-400/40 ml-6 my-1">
                    {services.map((svc, i) => (
                      <Link
                        key={i}
                        href={svc.href}
                        onClick={() => setMenuOpen(false)}
                        className="group/item flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-pink-600 transition-all duration-200 py-1 pl-0 hover:pl-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 scale-0 group-hover/item:scale-100 transition-transform duration-200 shrink-0" />
                        <span>{svc.name}</span>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      onClick={() => setMenuOpen(false)}
                      className="group/item flex items-center gap-1.5 text-[11px] font-bold text-pink-600 hover:text-pink-700 transition-all duration-200 pt-1.5 pb-0.5 border-t border-slate-100 mt-1"
                    >
                      <ArrowRight className="w-3 h-3 text-pink-500" />
                      <span>View All Services</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 03. Portfolio */}
              <div className="group flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-350 pt-1">03</span>
                <Link
                  href="/portfolio"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-tight text-slate-800 hover:text-pink-600 group-hover:translate-x-1.5 transition-all duration-300"
                >
                  Portfolio
                </Link>
              </div>

              {/* 04. Blogs */}
              <div className="group flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-350 pt-1">04</span>
                <Link
                  href="/blogs"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-tight text-slate-800 hover:text-pink-600 group-hover:translate-x-1.5 transition-all duration-300"
                >
                  Blogs
                </Link>
              </div>

              {/* 05. About */}
              <div className="group flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-350 pt-1">05</span>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-tight text-slate-800 hover:text-pink-600 group-hover:translate-x-1.5 transition-all duration-300"
                >
                  About
                </Link>
              </div>

              {/* 06. Contact */}
              <div className="group flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-350 pt-1">06</span>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-tight text-slate-800 hover:text-pink-600 group-hover:translate-x-1.5 transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </nav>

            {/* Bottom Panel Details */}
            <div className="space-y-4 border-t border-slate-100 pt-6">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium text-slate-800">info@digitalraiz.com</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium text-slate-800">+91-9494613601</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-800 leading-tight">
                    #616, Manjeera Majestic Commercial, KPHB-JNTU Road, Hyderabad
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-md hover:scale-102 active:scale-98 transition-all cursor-pointer"
              >
                <span>CONNECT NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

      </div>

      {/* Floating Logo/Menu Trigger for Mobile (Visible when menu is closed) */}
      {!menuOpen && (
        <button
          onClick={() => setMenuOpen(true)}
          className="fixed top-4 right-4 z-50 lg:hidden w-14 h-14 rounded-full border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-center group overflow-hidden transition-all duration-300 cursor-pointer active:scale-95 outline-none"
          aria-label="Open Navigation"
        >
          {/* Logo Mark (Fades out / shrinks on hover) */}
          <div className="absolute inset-0 flex items-center justify-center p-1 transition-all duration-300 transform scale-100 opacity-100 group-hover:scale-0 group-hover:opacity-0 pointer-events-none">
            <img
              src="/logo/digital-raiz-logo.webp"
              alt="Brand Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Menu Icon (Rotates in / expands on hover) */}
          <div className="absolute inset-0 flex items-center justify-center text-slate-800 transition-all duration-300 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:rotate-180 pointer-events-none">
            <Menu className="w-5 h-5" />
          </div>
        </button>
      )}

      {/* Global Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
