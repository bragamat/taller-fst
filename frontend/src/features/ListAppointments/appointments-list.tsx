import React from "react";
import { Loader } from "../../globals/Loader";
import { useListAppointments } from "./use-list-appointments";
import { Appointment } from "../../globals/types";

export const AppointmentList: React.FC = () => {
  const { appointments, loading } = useListAppointments();

  if (loading) return <Loader />;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul>
          {appointments.map((appt: Appointment) => (
            <li key={appt.id} className="border p-2 mb-2">
              {appt.customerName} - {appt.serviceName} - {new Date(appt.appointmentTime).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
