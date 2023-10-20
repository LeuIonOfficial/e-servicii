import { Api } from "@services";
import { useMutation } from "react-query";
import { CreateServiceType } from "@models/request/ServicesRequest.ts";

const usePostService = () => {
  const mutation = async (data: CreateServiceType) =>
    Api.service.createBusinessService(data);

  const { data: createServiceResponse, mutateAsync: createService } =
    useMutation(mutation);

  return {
    createServiceResponse,
    createService,
  };
};

export default usePostService;
