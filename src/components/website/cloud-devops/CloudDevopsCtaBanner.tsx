"use client";

import React from "react";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import { openContactModal } from "@/components/ContactModal";

export default function CloudDevopsCtaBanner() {
  return (
    <ServiceCtaBanner
      badge="Continuous Cloud Evolution"
      title="Turn Infrastructure Into an Engineering Advantage"
      description="Digital Raiz helps businesses turn infrastructure into an advantage—creating cloud environments and delivery systems designed to keep pace with continuous change."
      buttonText="Consult DevOps Team"
      onButtonClick={() => openContactModal("Cloud & DevOps")}
    />
  );
}
