"use client";

import React from "react";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import { openContactModal } from "@/components/ContactModal";

export default function AiCtaBanner() {
  return (
    <ServiceCtaBanner
      badge="AI Engineering & Machine Learning"
      title="Technology Serving a Clear Business Purpose"
      description="We combine technical AI expertise with strategic thinking to build intelligent solutions that are practical today and ready for tomorrow."
      buttonText="Consult AI Team"
      onButtonClick={() => openContactModal("Artificial Intelligence")}
    />
  );
}
