import { Appointment } from "@prisma/client";
import { AppointmentsService } from "./appointments.service";

export const AppointmentsResolvers = {
  Query: {
    appointments: () => AppointmentsService.getAllAppointments(),
  },

  Mutation: {
    updateAppointment: (_: any, { id, data }: { id: number; data: Partial<Appointment> }) =>
      AppointmentsService.updateAppointment(id, data),
    addAppointment: (_: any, args: { customerName: string; salonId: number; serviceName: string; appointmentTime: string }) =>
      AppointmentsService.addAppointment(args),
    deleteAppointment: (_: any, { id }: { id: number }) =>
      AppointmentsService.deleteAppointment(id),
  },
};
