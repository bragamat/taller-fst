import { gql, TypedDocumentNode } from "@apollo/client";
import { Appointment } from "../../globals/types";

export const GET_APPOINTMENTS: TypedDocumentNode<{ appointments: Appointment[] }> = gql`
  query GetAppointments {
    appointments {
      id
      customerName
      serviceName
      appointmentTime
    }
  }
`;
