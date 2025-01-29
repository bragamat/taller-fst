import { gql } from "@apollo/client";
import { Appointment } from "../../globals/types";

export const GET_APPOINTMENTS = gql`
  query GetAppointments {
    appointments {
      id
      customerName
      serviceName
      appointmentTime
    }
  }
`;
