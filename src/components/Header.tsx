"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { useContactStore } from "@/store";
import { useContactDetails } from "@/hooks/useContactDetails";
import ContactModal from "@/components/ContactModal";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalService, setModalService] = useState("Web Development");
  const [modalSubject, setModalSubject] = useState("");

  // TanStack Query for Data Fetching & Caching
  const { data: contactData } = useContactDetails();
  // Zustand Store Fallback
  const storeOfficeDetails = useContactStore((state) => state.officeDetails);
  const officeDetails = contactData?.officeDetails || storeOfficeDetails;

  useEffect(() => {
    const handleCustomOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.service) {
        setModalService(customEvent.detail.service);
      }
      if (customEvent.detail?.subject) {
        setModalSubject(customEvent.detail.subject);
      } else if (customEvent.detail?.service) {
        setModalSubject(`Inquiry regarding ${customEvent.detail.service}`);
      }
      setContactModalOpen(true);
    };

    window.addEventListener("open-contact-modal", handleCustomOpen);
    return () => {
      window.removeEventListener("open-contact-modal", handleCustomOpen);
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("header-toggle", { detail: { open: menuOpen } })
    );
  }, [menuOpen]);

  const services = [
    { name: "Web Development", href: "/web-development" },
    { name: "Mobile App Development", href: "/mobile-application" },
    { name: "AI & Generative AI Solutions", href: "/artificial-intelligence" },
    { name: "Data Analytics & BI", href: "/data-analytics-and-bi" },
    { name: "Cybersecurity Services", href: "/cybersecurity-services" },
    { name: "SAP Cloud Services", href: "/sap-cloud-services" },
    { name: "Cloud & DevOps Engineering", href: "/cloud-and-devops" },
    { name: "Testing & Quality Assurance", href: "/testing-and-quality-assurance" },
    { name: "Digital Marketing & SEO", href: "/digital-marketing-services-in-hyderabad" },
    { name: "Influencer Marketing", href: "/influencer-marketing" },
    // { name: "Machine Learning Studio", href: "/machine-learning" },

  ];

  return (
    <>
      {/* Fixed Top-Left Main Branding Header Logo Bar */}
      <header className="flex fixed top-3 left-4 sm:top-5 sm:left-6 z-40 items-center pointer-events-auto">
        <Link
          href="/"
          className="group inline-block transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logo/logo-without-txt.webp"
            alt="Digital Raiz Logo"
            width={180}
            height={60}
            className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-sm"
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
          <div className="absolute inset-0 hidden lg:flex flex-col items-center justify-between pt-6 pb-6 gap-6 z-10 pointer-events-auto">
            {/* Top Logo Icon */}
            <Link
              href="/"
              className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-200 p-1"
            >
              <Image
                src="/logo/logo-without-txt.webp"
                alt="Digital Raiz Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                priority
              />
            </Link>

            {/* Rotated Navigation Links stacked vertically centered */}
            <div className="flex flex-col items-center gap-6 sm:gap-7 my-auto">
              {/* <Link
                href="/"
                prefetch={true}
                className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-700 hover:text-pink-600 transition-all duration-200 hover:scale-110 py-1"
              >
                Home
              </Link> */}
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
                prefetch={true}
                className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-700 hover:text-pink-600 transition-all duration-200 hover:scale-110 py-1"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                prefetch={true}
                className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-700 hover:text-pink-600 transition-all duration-200 hover:scale-110 py-1"
              >
                About
              </Link>
              <Link
                href="/blogs"
                prefetch={true}
                className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-700 hover:text-pink-600 transition-all duration-200 hover:scale-110 py-1"
              >
                Blogs
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
              className="w-12 h-12 rounded-full bg-primary border border-white/10 flex items-center justify-center text-white cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none shadow-md shrink-0"
              aria-label="Open Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* === STATE 2: EXPANDED (Full navigation details) === */}
        {menuOpen && (
          <div className="flex flex-col h-full p-6 sm:p-8 z-25 overflow-y-auto w-full no-scrollbar">
            {/* Top Row: Drawer Logo & Independent Right-Aligned Close Button */}
            <div className="flex items-center justify-between pb-2 mb-2 shrink-0 w-full">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="group inline-block transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/logo/logo-without-txt.webp"
                  alt="Digital Raiz Logo"
                  width={180}
                  height={60}
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-xs"
                  priority
                />
              </Link>

              <button
                onClick={() => setMenuOpen(false)}
                className="ml-auto p-1.5 rounded-full border border-slate-200 text-slate-500 hover:bg-pink-50 hover:text-pink-600 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Navigation links - Centered vertically in opened drawer */}
            <nav className="flex flex-col gap-4.5 sm:gap-5 py-4 my-auto">
              {/* Services (Accordion Expandable) */}
              <div className="group flex flex-col">
                <div className="flex items-start">
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    className="flex items-center gap-1.5 text-xl font-bold uppercase tracking-tight text-slate-800 hover:text-pink-600 focus:outline-none text-left cursor-pointer"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${servicesExpanded ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${servicesExpanded
                    ? "grid-rows-[1fr] opacity-100 mt-1.5"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden pl-4 space-y-1.5 border-l-2 border-pink-400/40 ml-2 my-0.5">
                    {services.map((svc, i) => (
                      <Link
                        key={i}
                        href={svc.href}
                        prefetch={true}
                        onClick={() => setMenuOpen(false)}
                        className="group/item flex items-center gap-2.5 text-sm font-semibold text-slate-600 hover:text-pink-600 transition-all duration-200 py-1.5 pl-0 hover:pl-1.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-pink-500 scale-0 group-hover/item:scale-100 transition-transform duration-200 shrink-0" />
                        <span>{svc.name}</span>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      prefetch={true}
                      onClick={() => setMenuOpen(false)}
                      className="group/item flex items-center gap-2 text-xs font-bold text-pink-600 hover:text-pink-700 transition-all duration-200 pt-2 pb-1 border-t border-slate-100 mt-1.5"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-pink-500" />
                      <span>View All Services</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Portfolio */}
              <div className="group flex items-start">
                <Link
                  href="/portfolio"
                  prefetch={true}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-tight text-slate-800 hover:text-pink-600 group-hover:translate-x-1.5 transition-all duration-300"
                >
                  Portfolio
                </Link>
              </div>

              {/* About */}
              <div className="group flex items-start">
                <Link
                  href="/about"
                  prefetch={true}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-tight text-slate-800 hover:text-pink-600 group-hover:translate-x-1.5 transition-all duration-300"
                >
                  About
                </Link>
              </div>

              {/* Blogs */}
              <div className="group flex items-start">
                <Link
                  href="/blogs"
                  prefetch={true}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-tight text-slate-800 hover:text-pink-600 group-hover:translate-x-1.5 transition-all duration-300"
                >
                  Blogs
                </Link>
              </div>

              {/* Contact */}
              <div className="group flex items-start">
                <Link
                  href="/contact"
                  prefetch={true}
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
                  <Mail className="w-4 h-4 text-pink-600 shrink-0" />
                  <a
                    href={`mailto:${officeDetails.emails[0]}`}
                    className="font-medium text-slate-800 hover:text-pink-600 transition-colors"
                  >
                    {officeDetails.emails[0]}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Phone className="w-4 h-4 text-pink-600 shrink-0" />
                  <a
                    href={`tel:${officeDetails.phones[0].replace(/[^0-9+]/g, "")}`}
                    className="font-medium text-slate-800 hover:text-pink-600 transition-colors"
                  >
                    {officeDetails.phones[0]}
                  </a>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-800 leading-tight">
                    {officeDetails.addressLines[0]} {officeDetails.addressLines[1]}
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
        defaultService={modalService}
        defaultSubject={modalSubject}
      />
    </>
  );
}
