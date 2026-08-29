"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getDirectionStyles = () => {
    if (isVisible) return "opacity-100 translate-x-0 translate-y-0 scale-100";
    switch (direction) {
      case "up":
        return "opacity-0 translate-y-10 scale-[0.98]";
      case "down":
        return "opacity-0 -translate-y-10 scale-[0.98]";
      case "left":
        return "opacity-0 translate-x-10";
      case "right":
        return "opacity-0 -translate-x-10";
      case "fade":
      default:
        return "opacity-0 scale-[0.96]";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${getDirectionStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
