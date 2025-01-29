import { useContext } from "react";
import { CreateAppointmentContext } from "./context";

export const useCreateAppointment = () => {
  const context = useContext(CreateAppointmentContext);
  if (!context) throw new Error("useCreateAppointment must be used within a CreateAppointmentProvider");
  return context;
};
