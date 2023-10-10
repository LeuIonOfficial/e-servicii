import { Api } from "@services";
import { useMutation } from "react-query";
import { PostBusinessType } from "../models/request/BusinessRequest.ts";

const usePostBusiness = () => {
  const mutation = async (data: PostBusinessType) =>
    Api.business.addBusiness(data);

  const {
    data: response,
    mutateAsync: postBusiness,
    isSuccess,
  } = useMutation(mutation);

  return {
    response,
    postBusiness,
    isSuccess,
  };
};

export default usePostBusiness;
