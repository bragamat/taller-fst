import React from "react";
import { ListAppointmentsProvider } from "../features/ListAppointments/context/list-appointments-provider";
import AppointmentList from "../features/ListAppointments/appointments-list";
const ListAppointmentsPage: React.FC = () => {
  return (
    <ListAppointmentsProvider>
      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Appointments</h1>
        <AppointmentList />
      </div>
    </ListAppointmentsProvider>
  );
};

export default ListAppointmentsPage
