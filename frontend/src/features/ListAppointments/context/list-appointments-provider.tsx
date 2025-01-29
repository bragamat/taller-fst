import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_APPOINTMENTS } from "../fetch-appointments-query";
import { Appointment } from "../../../globals/types";

type ListAppointmentsContextType = {
  appointments: Appointment[];
  loading: boolean;
}

const ListAppointmentsContext = createContext<ListAppointmentsContextType | undefined>(undefined);

export const ListAppointmentsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data, loading } = useQuery(GET_APPOINTMENTS);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    if (data?.appointments) {
      setAppointments(data.appointments);
    }
  }, [data]);

  return (
    <ListAppointmentsContext.Provider value={{ appointments, loading }}>
      {children}
    </ListAppointmentsContext.Provider>
  );
};

export const useListAppointments = () => {
  const context = useContext(ListAppointmentsContext);
  if (!context) throw new Error("useListAppointments must be used within a ListAppointmentsProvider");
  return context;
};
