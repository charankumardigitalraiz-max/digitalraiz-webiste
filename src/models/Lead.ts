import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILead extends Document {
  leadId: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  service?: string;
  message: string;
  status: "New Inquiry" | "Contacted" | "Proposal Sent" | "Closed Won";
  createdAt?: Date;
  updatedAt?: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    leadId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, index: true },
    phone: { type: String, required: true },
    subject: { type: String, default: "" },
    service: { type: String, default: "General Inquiry" },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["New Inquiry", "Contacted", "Proposal Sent", "Closed Won"],
      default: "New Inquiry",
      index: true,
    },
  },
  { timestamps: true }
);

const Lead: Model<ILead> = mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;
