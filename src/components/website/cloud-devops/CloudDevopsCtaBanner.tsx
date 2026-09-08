"use client";

import React from "react";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import { openContactModal } from "@/components/ContactModal";

export default function CloudDevopsCtaBanner() {
  return (
    <ServiceCtaBanner
      badge="Modernize Your Infrastructure"
      title="Build a More Scalable & Resilient Foundation"
      description="Whether modernizing an existing environment, integrating applications or establishing a new cloud strategy, we focus on architecture, interoperability and business value."
      buttonText="Consult DevOps Team"
      onButtonClick={() => openContactModal("Cloud & DevOps")}
    />
  );
}
