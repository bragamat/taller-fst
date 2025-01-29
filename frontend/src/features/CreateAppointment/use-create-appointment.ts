import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "./mutations";

export const useCreateAppointment = () => {
  const [addAppointment] = useMutation(ADD_APPOINTMENT);

  return { addAppointment };
};
