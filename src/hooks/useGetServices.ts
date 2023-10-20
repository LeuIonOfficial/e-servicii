import { Api } from "@services";
import { useQuery } from "react-query";

const useGetServices = (id: number | undefined) => {
  const query = async () => Api.service.getBusinessServices(id);

  const {
    isSuccess,
    data: services,
    isFetching,
  } = useQuery(["services"], query, {
    select: (response) => {
      return response.data;
    },
  });

  return {
    isSuccess,
    services,
    isFetching,
  };
};
export default useGetServices;
