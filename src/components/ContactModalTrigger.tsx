"use client";

import React from "react";
import { openContactModal } from "@/components/ContactModal";

interface ContactModalTriggerProps {
  serviceName: string;
  children: React.ReactNode;
  className?: string;
}

export default function ContactModalTrigger({
  serviceName,
  children,
  className,
}: ContactModalTriggerProps) {
  return (
    <button
      onClick={() => openContactModal(serviceName)}
      className={className}
    >
      {children}
    </button>
  );
}
