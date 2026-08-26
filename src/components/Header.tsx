"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const services = [
    { name: "Web Development", href: "/services#web" },
    { name: "Mobile App Development", href: "/services#mobile" },
    { name: "Digital Marketing", href: "/services#marketing" },
    { name: "SAP Cloud Services", href: "/services#sap" },
    { name: "Artificial Intelligence", href: "/services#ai" },
    { name: "Machine Learning", href: "/services#ml" }
  ];

  return (
    <>
      {/* Backdrop overlay (Only active when menu is fully opened) */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-xs transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Side Dock Menu Panel (Always visible on the right as a vertical strip) */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 bg-white border-l border-slate-200/60 shadow-2xl flex flex-col justify-between transition-all duration-500 ease-in-out ${
          menuOpen ? "w-full sm:w-[320px]" : "w-[80px]"
        }`}
      >
        
        {/* === STATE 1: COLLAPSED (Thin vertical bar strip) === */}
        {!menuOpen && (
          <div className="absolute inset-0 flex flex-col items-center justify-between py-10 z-10 pointer-events-auto">
            
            {/* Brand Mark Icon at the top (scaled to fit sidebar width without squishing) */}
            <div className="w-14 flex items-center justify-center p-1 hover:scale-105 transition-transform duration-200">
              <Link href="/">
                <Image
                  src="/logo/Digital Raiz logo.png"
                  alt="Digital Raiz Logo"
                  width={150}
                  height={40}
                  className="w-full h-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Rotated Navigation Links stacked vertically */}
            <div className="flex flex-col items-center gap-16 my-auto">
              <Link
                href="/"
                className="inline-block -rotate-90 origin-center text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-800 hover:text-primary-hover transition-all duration-200 hover:scale-105 py-2 px-1"
              >
                Home
              </Link>
              <button
                onClick={() => {
                  setMenuOpen(true);
                  setServicesExpanded(true);
                }}
                className="inline-block -rotate-90 origin-center text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-800 hover:text-primary-hover transition-all duration-200 hover:scale-105 py-2 px-1 cursor-pointer focus:outline-none"
              >
                Services
              </button>
              <Link
                href="/about"
                className="inline-block -rotate-90 origin-center text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-800 hover:text-primary-hover transition-all duration-200 hover:scale-105 py-2 px-1"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="inline-block -rotate-90 origin-center text-[10px] font-mono font-black uppercase tracking-[0.25em] text-slate-800 hover:text-primary-hover transition-all duration-200 hover:scale-105 py-2 px-1"
              >
                Contact
              </Link>
            </div>

            {/* Hamburger Button at the bottom */}
            <button
              onClick={() => setMenuOpen(true)}
              className="w-12 h-12 rounded-full bg-primary border border-white/10 flex items-center justify-center text-white cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none"
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
                  src="/logo/Digital Raiz logo.png"
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
            <nav className="flex flex-col gap-6 py-8">
              {/* 01. Home */}
              <div className="group flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-350 pt-1">01</span>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-tight text-primary-hover hover:text-primary group-hover:translate-x-1.5 transition-all duration-300"
                >
                  Home
                </Link>
              </div>

              {/* 02. Services (Accordion Expandable) */}
              <div className="group flex flex-col gap-2">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono font-bold text-slate-350 pt-1">02</span>
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    className="flex items-center gap-1.5 text-xl font-bold uppercase tracking-tight text-primary-hover hover:text-primary focus:outline-none text-left cursor-pointer"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    servicesExpanded ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pl-5 space-y-1.5 border-l-2 border-slate-100 ml-6 my-1">
                    {services.map((svc, i) => (
                      <Link
                        key={i}
                        href={svc.href}
                        onClick={() => setMenuOpen(false)}
                        className="group/item flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary-hover transition-all duration-300 py-1 pl-0 hover:pl-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400 scale-0 group-hover/item:scale-100 transition-transform duration-300 shrink-0" />
                        <span>{svc.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* 03. About */}
              <div className="group flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-350 pt-1">03</span>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-tight text-primary-hover hover:text-primary group-hover:translate-x-1.5 transition-all duration-300"
                >
                  About
                </Link>
              </div>

              {/* 04. Contact */}
              <div className="group flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-350 pt-1">04</span>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-tight text-primary-hover hover:text-primary group-hover:translate-x-1.5 transition-all duration-300"
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

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-primary text-white text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-primary-hover hover:scale-102 active:scale-98 transition-all"
              >
                <span>CONNECT NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        )}

      </div>
    </>
  );
}
