import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { sendLeadNotificationEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    let body: any;
    try {
      body = await req.json();
    } catch (parseErr) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, service, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Auto-generate lead ID (e.g., LD-8942)
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const leadId = `LD-${randomDigits}`;

    const newLead = await Lead.create({
      leadId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : "",
      subject: subject ? subject.trim() : "",
      service: service || "General Inquiry",
      message: message.trim(),
      status: "New Inquiry",
    });

    // Send email notification to info@digitalraiz.com, digitalraizinst@gmail.com, hr@digitalraiz.com
    try {
      await sendLeadNotificationEmail({
        leadId: newLead.leadId,
        name: newLead.name,
        email: newLead.email,
        phone: newLead.phone,
        subject: newLead.subject,
        service: newLead.service,
        message: newLead.message,
      });
    } catch (emailErr) {
      console.error("Email notification dispatch error (non-fatal):", emailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your inquiry has been received. Our team will get back to you shortly.",
        data: {
          leadId: newLead.leadId,
          createdAt: newLead.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error. Failed to save inquiry." },
      { status: 500 }
    );
  }
}
