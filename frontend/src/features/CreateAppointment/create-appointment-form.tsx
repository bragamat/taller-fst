
import React, { useState } from "react";
import { useCreateAppointment } from "./use-create-appointment";

export const CreateAppointmentForm: React.FC = () => {
  const { addAppointment } = useCreateAppointment();
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addAppointment(customerName);
    setCustomerName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input className="border p-2 w-full" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Enter Name" required />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2 w-full">Add Appointment</button>
    </form>
  );
};

