"use client";

import React from "react";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import { openContactModal } from "@/components/ContactModal";

export default function SapCtaBanner() {
  return (
    <ServiceCtaBanner
      badge="Enterprise SAP Solutions"
      title="Build a More Connected & Intelligent Foundation"
      description="From seamless integrations to custom enhancements, we help organizations shape SAP technologies around their strategic operational goals."
      buttonText="Consult SAP Team"
      onButtonClick={() => openContactModal("SAP Cloud Services")}
    />
  );
}
