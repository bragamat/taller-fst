import { Appointment } from "@prisma/client";
import { prisma } from "../../config/prisma";

export const AppointmentsService = {
  async getAllAppointments() {
    return prisma.appointment.findMany({
      include: {
        salon: { select: { name: true } },
        service: { select: { name: true } },
      },
    });
  },

  async addAppointment(data: Omit<Appointment, "id">): Promise<Appointment> {
    return prisma.appointment.create({ data });
  },

  async deleteAppointment(id: number): Promise<Appointment> {
    return prisma.appointment.delete({ where: { id } });
  },


  async updateAppointment(id: number, data: Partial<Appointment>) {
    return prisma.appointment.update({ where: { id }, data });
  },

};
