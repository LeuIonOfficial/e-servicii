import useGetAppointments from "@hooks/useGetAppointments";

export const useReadAppointments = () => {
  const { isSuccess, isFetching, appointments } = useGetAppointments();

  console.log(appointments);
  console.log(isSuccess);
  console.log(isFetching);

  return [
    {
      client_name: "Lindsay Walton",
      hour: "4:00 PM",
      date: "March 22, 2021",
      service: "Haircut",
    },
  ];
};
