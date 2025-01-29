import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../mutations";
import { CreateAppointmentContext } from "./context";

export const CreateAppointmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [addAppointmentMutation] = useMutation(ADD_APPOINTMENT);

  const addAppointment = async (customerName: string) => {
    await addAppointmentMutation({
      variables: { customerName, salonId: 1, serviceName: "Haircut", appointmentTime: new Date().toISOString() },
    });
  };

  return (
    <CreateAppointmentContext.Provider value={{ addAppointment }}>
      {children}
    </CreateAppointmentContext.Provider>
  );
};

