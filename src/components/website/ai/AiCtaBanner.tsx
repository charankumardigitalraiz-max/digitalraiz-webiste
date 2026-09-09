"use client";

import React from "react";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import { openContactModal } from "@/components/ContactModal";

export default function AiCtaBanner() {
  return (
    <ServiceCtaBanner
      badge="Purposeful AI Solutions"
      title="Technology Serving a Clear Business Purpose"
      description="From AI development and Machine Learning to Generative AI integration, Digital Raiz focuses on one principle: technology should serve a clear business purpose. We combine technical expertise with strategic thinking to build intelligent solutions that are practical today and ready for tomorrow."
      buttonText="Consult AI Team"
      onButtonClick={() => openContactModal("Artificial Intelligence")}
    />
  );
}
