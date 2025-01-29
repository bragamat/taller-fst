import React from "react";
import { Loader } from "../../globals/Loader";
import { useListAppointments } from "./use-list-appointments";

export const AppointmentList: React.FC = () => {
  const { appointments, loading } = useListAppointments();

  if (loading) return <Loader />;

  if (appointments.length === 0) return (<div>
    <p>No appointments found.</p>
  </div>)

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Appointments</h2>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id} className="border p-2 mb-2">
            {appt.customerName} - {appt.serviceName} - {new Date(appt.appointmentTime).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};
