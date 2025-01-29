import { gql } from "@apollo/client";

export const ADD_APPOINTMENT = gql`
  mutation AddAppointment($customerName: String!, $salonId: Int!, $serviceName: String!, $appointmentTime: String!) {
    addAppointment(customerName: $customerName, salonId: $salonId, serviceName: $serviceName, appointmentTime: $appointmentTime) {
      id
      customerName
    }
  }
`;
