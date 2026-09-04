"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

interface ServiceCtaBannerProps {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  service?: string;
  subject?: string;
  onButtonClick?: () => void;
  useLink?: boolean;
}

export default function ServiceCtaBanner({
  badge = "Digital Growth & Engineering",
  title = "Ready to Build Your Digital Future with Digital Raiz?",
  description = "Web Development • Mobile Apps • AI & Cloud • Performance Marketing Solutions in Hyderabad",
  buttonText = "Get In Touch With Us",
  buttonHref = "/contact",
  service,
  subject,
  onButtonClick,
  useLink = false,
}: ServiceCtaBannerProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onButtonClick) {
      onButtonClick();
    } else if (!useLink) {
      e.preventDefault();
      openContactModal(service || badge || "General Service Proposal", subject || `Inquiry: ${title}`);
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-pink-50 via-purple-50/70 to-indigo-50 border-t border-b border-slate-200/80 py-8 sm:py-10 px-6 sm:px-12 relative overflow-hidden">
      {/* Subtle Ambient Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(100,80,200,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <ScrollReveal direction="up">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          {/* Left Content */}
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-pink-200/60 shadow-2xs text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-pink-500" />
              {badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#1e1b4b]">
              {title}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-normal">
              {description}
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            {useLink ? (
              <Link
                href={buttonHref}
                className="inline-flex items-center gap-2.5 py-3.5 px-8 rounded-2xl bg-[#1e1b4b] hover:bg-[#2d2a6e] text-white text-[10px] font-black uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-pink-400" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center gap-2.5 py-3.5 px-8 rounded-2xl bg-[#1e1b4b] hover:bg-[#2d2a6e] text-white text-[10px] font-black uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-pink-400" />
              </button>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

