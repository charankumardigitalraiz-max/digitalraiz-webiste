import { create } from "zustand";
import { ContactFormData, ContactProcessStep, OfficeContactDetails } from "@/interfaces/contact";
import { contactProcessSteps, officeContactDetails } from "@/data/contactData";

interface ContactStoreState {
  // Data State
  processSteps: ContactProcessStep[];
  officeDetails: OfficeContactDetails;

  // Form State
  formData: ContactFormData;
  submitting: boolean;
  submitted: boolean;

  // Actions
  setFormField: (field: keyof ContactFormData, value: string) => void;
  setFormData: (data: Partial<ContactFormData>) => void;
  resetForm: () => void;
  submitForm: (e?: React.FormEvent) => Promise<void>;
}

const initialFormState: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  service: "General Inquiry",
  message: "",
};

export const useContactStore = create<ContactStoreState>((set, get) => ({
  processSteps: contactProcessSteps,
  officeDetails: officeContactDetails,

  formData: initialFormState,
  submitting: false,
  submitted: false,

  setFormField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),

  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  resetForm: () =>
    set({
      formData: initialFormState,
      submitted: false,
      submitting: false,
    }),

  submitForm: async (e) => {
    if (e) e.preventDefault();
    set({ submitting: true });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(get().formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        set({
          submitting: false,
          submitted: true,
          formData: initialFormState,
        });
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (err: any) {
      console.error("Contact Form Submission Error:", err);
      set({
        submitting: false,
        submitted: false,
      });
      alert(err.message || "Failed to submit lead inquiry. Please try again.");
    }
  },
}));
