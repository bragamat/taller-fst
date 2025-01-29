import React from "react";
import { CreateAppointmentProvider } from "../features/CreateAppointment/context/create-appointment-provider";
import { CreateAppointmentForm } from "../features/CreateAppointment/create-appointment-form";

const CreateAppointmentPage: React.FC = () => {
  return (
    <CreateAppointmentProvider>
      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Create Appointment</h1>
        <CreateAppointmentForm />
      </div>
    </CreateAppointmentProvider>
  );
};

export default CreateAppointmentPage;
