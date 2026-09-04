"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Phone, ChevronDown, ChevronUp } from "lucide-react";

import { useContactStore } from "@/store";
import { useContactDetails } from "@/hooks/useContactDetails";

export default function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(true);
  const [isFooterInView, setIsFooterInView] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  // TanStack Query for Data Fetching & Caching
  const { data: contactData } = useContactDetails();
  // Zustand Store Fallback
  const storeOfficeDetails = useContactStore((state) => state.officeDetails);
  const officeDetails = contactData?.officeDetails || storeOfficeDetails;

  useEffect(() => {
    const footerElement = document.querySelector("footer");
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterInView(entry.isIntersecting);
      },
      { root: null, threshold: 0.05 }
    );

    observer.observe(footerElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleHeaderToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      if (typeof customEvent.detail?.open === "boolean") {
        setIsHeaderOpen(customEvent.detail.open);
      }
    };

    window.addEventListener("header-toggle", handleHeaderToggle);
    return () => window.removeEventListener("header-toggle", handleHeaderToggle);
  }, []);

  if (isFooterInView || isHeaderOpen) {
    return null;
  }

  const primaryPhone = officeDetails.phones[0] || "+91-9494613601";
  const whatsappNum = primaryPhone.replace(/[^0-9]/g, "");
  const telNum = primaryPhone.replace(/[^0-9+]/g, "");

  const getSocialUrl = (name: string, fallback: string) => {
    const found = officeDetails.socialLinks?.find(
      (s) => s.name.toLowerCase() === name.toLowerCase()
    );
    return found ? found.url : fallback;
  };

  const socials = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      href: `https://wa.me/${whatsappNum}`,
      bgColor: "bg-emerald-500 hover:bg-emerald-600",
      textColor: "text-white",
      glow: "shadow-emerald-500/30",
      badge: "Fast Reply"
    },
    {
      name: "Call Support",
      icon: <Phone className="w-4.5 h-4.5" />,
      href: `tel:${telNum}`,
      bgColor: "bg-[#1e1b4b] hover:bg-indigo-900",
      textColor: "text-white",
      glow: "shadow-indigo-900/30"
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      href: getSocialUrl("Instagram", "https://www.instagram.com/digital_raiz/"),
      bgColor: "bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90",
      textColor: "text-white",
      glow: "shadow-pink-500/30"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: getSocialUrl("LinkedIn", "https://www.linkedin.com/company/digital-raiz/"),
      bgColor: "bg-[#0a66c2] hover:bg-[#084e96]",
      textColor: "text-white",
      glow: "shadow-blue-500/30"
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
      href: getSocialUrl("Facebook", "https://www.facebook.com/digitalraiz/"),
      bgColor: "bg-[#1877f2] hover:bg-[#0d65d9]",
      textColor: "text-white",
      glow: "shadow-blue-600/30"
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: getSocialUrl("YouTube", "https://www.youtube.com/@digitalraiz2023/featured"),
      bgColor: "bg-[#ff0000] hover:bg-[#cc0000]",
      textColor: "text-white",
      glow: "shadow-red-500/30"
    }
  ];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-4.5 py-1.5 rounded-full shadow-lg border border-white/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 cursor-pointer group select-none"
        aria-label="Open Social Links"
      >
        {/* Animated Chevron Badge */}
        <div className="w-5.5 h-5.5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          <ChevronUp className="w-3.5 h-3.5 animate-bounce" />
        </div>

        {/* Text */}
        <span className="tracking-wider text-white font-extrabold drop-shadow-sm">
          Connect With Us
        </span>

        {/* Live Animated Pulse Badge */}
        <span className="relative flex h-2.5 w-2.5 ml-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-white/50" />
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 flex items-center gap-2 sm:gap-2.5 p-2 rounded-full bg-white/80 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset] select-none pointer-events-auto transition-all duration-300">
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className={`group relative w-10 sm:w-9 h-10 sm:h-9 rounded-full ${item.bgColor} ${item.textColor} flex items-center justify-center shadow-md ${item.glow} hover:scale-115 active:scale-95 transition-all duration-300 border border-white/40`}
        >
          {item.icon}

          {/* WhatsApp Live Pulse Dot */}
          {item.name === "WhatsApp" && (
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-white" />
            </span>
          )}

          {/* Hover Tooltip Ribbon (Appears ABOVE the button) */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-white/15 text-white text-[10px] font-mono font-bold uppercase tracking-wider whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-200 shadow-2xl flex items-center gap-1.5">
            <span>{item.name}</span>
            {item.badge && (
              <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/30 text-emerald-300 text-[8px]">
                {item.badge}
              </span>
            )}
          </div>
        </a>
      ))}

      {/* Minimize Dock Button (ChevronDown) */}
      <button
        onClick={() => setIsOpen(false)}
        className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-slate-100/90 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all duration-200 border border-slate-200/60 ml-0.5 cursor-pointer group"
        aria-label="Minimize Social Bar"
        title="Minimize Social Bar"
      >
        <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
