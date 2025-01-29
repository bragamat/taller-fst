import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Salon {
    id: ID!
    name: String!
    location: String!
  }

  type Appointment {
    id: ID!
    customerName: String!
    salonId: Int!
    serviceName: String!
    appointmentTime: String!
  }

  type Query {
    appointments: [Appointment]
  }

  type Mutation {
    addAppointment(customerName: String!, salonId: Int!, serviceName: String!, appointmentTime: String!): Appointment
    deleteAppointment(id: ID!): Appointment
  }
`;
