import { useQuery } from "@tanstack/react-query";
import { officeContactDetails, contactProcessSteps } from "@/data/contactData";
import { OfficeContactDetails, ContactProcessStep } from "@/interfaces/contact";

export function useContactDetails() {
  return useQuery({
    queryKey: ["contact-details"],
    queryFn: async (): Promise<{ officeDetails: OfficeContactDetails; processSteps: ContactProcessStep[] }> => {
      return {
        officeDetails: officeContactDetails,
        processSteps: contactProcessSteps,
      };
    },
    initialData: {
      officeDetails: officeContactDetails,
      processSteps: contactProcessSteps,
    },
    staleTime: 1000 * 60 * 60,
  });
}
