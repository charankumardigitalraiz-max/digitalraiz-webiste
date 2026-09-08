"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "zoom" | "flip";
  once?: boolean;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = false,
  duration = 700
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once]);

  const getTransformStyles = (): React.CSSProperties => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (isVisible) {
      return {
        opacity: 1,
        transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale(1)",
        transition: baseTransition,
        willChange: "transform, opacity"
      };
    }

    let initialTransform = "";
    switch (direction) {
      case "up":
        initialTransform = "perspective(1200px) rotateX(8deg) translate3d(0, 32px, 0) scale(0.97)";
        break;
      case "down":
        initialTransform = "perspective(1200px) rotateX(-8deg) translate3d(0, -32px, 0) scale(0.97)";
        break;
      case "left":
        initialTransform = "perspective(1200px) rotateY(-8deg) translate3d(32px, 0, 0) scale(0.97)";
        break;
      case "right":
        initialTransform = "perspective(1200px) rotateY(8deg) translate3d(-32px, 0, 0) scale(0.97)";
        break;
      case "zoom":
        initialTransform = "perspective(1200px) rotateX(0deg) translate3d(0, 16px, 0) scale(0.90)";
        break;
      case "flip":
        initialTransform = "perspective(1200px) rotateX(20deg) translate3d(0, 36px, -40px) scale(0.93)";
        break;
      case "fade":
      default:
        initialTransform = "perspective(1200px) translate3d(0, 0, 0) scale(0.96)";
        break;
    }

    return {
      opacity: 0,
      transform: initialTransform,
      transition: baseTransition,
      willChange: "transform, opacity"
    };
  };

  return (
    <div
      ref={ref}
      style={getTransformStyles()}
      className={`transform-gpu ${className}`}
    >
      {children}
    </div>
  );
}
