import { createContext } from "react";

export type CreateAppointmentContextType = {
  addAppointment: (customerName: string) => Promise<void>;
}

export const CreateAppointmentContext = createContext<CreateAppointmentContextType | undefined>(undefined);

