import { useQuery } from "@apollo/client";
import { GET_APPOINTMENTS } from "./fetch-appointments-query";

export const useListAppointments = () => {
  const { data, loading, error, refetch } = useQuery(GET_APPOINTMENTS);
  return { appointments: data?.appointments || [], loading, error, refetch };
};
