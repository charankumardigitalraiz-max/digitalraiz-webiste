"use client";

import React from "react";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import { openContactModal } from "@/components/ContactModal";

export default function SapCtaBanner() {
  return (
    <ServiceCtaBanner
      badge="Connected Enterprise Foundation"
      title="Build a More Connected, Intelligent & Future-Ready Foundation"
      description="Digital Raiz brings SAP Cloud and enterprise technology together to help organizations build a more connected, intelligent and future-ready digital foundation."
      buttonText="Consult SAP Team"
      onButtonClick={() => openContactModal("SAP Cloud Services")}
    />
  );
}
