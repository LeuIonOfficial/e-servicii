import { UpdateBusinessType } from "../models/request/BusinessRequest.ts";
import { Api } from "@services";
import { useMutation, useQueryClient } from "react-query";
import { notification } from "antd";
import { useEffect } from "react";

const usePutUpdateBusiness = () => {
  const client = useQueryClient();
  const mutation = async (data: UpdateBusinessType) => {
    return Api.business.putBusiness(data);
  };

  const {
    data: updateResponse,
    isSuccess: isUpdated,
    mutateAsync: updateBusiness,
  } = useMutation(mutation);

  useEffect(() => {
    if (isUpdated) {
      notification.success({
        message: "You have successfully updated business",
      });
      client.invalidateQueries(["user"]);
    }
  }, [isUpdated, client]);

  return {
    updateResponse,
    updateBusiness,
  };
};

export default usePutUpdateBusiness;
