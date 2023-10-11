import { UpdateBusinessType } from "../models/request/BusinessRequest.ts";
import { Api } from "@services";
import { useMutation, useQueryClient } from "react-query";
import { notification } from "antd";
import { Dispatch, SetStateAction } from "react";

const usePutUpdateBusiness = (
  setOpen: Dispatch<SetStateAction<"create" | "update" | "closed">>,
) => {
  const client = useQueryClient();
  const mutation = async (data: UpdateBusinessType) => {
    return Api.business.putBusiness(data);
  };

  const {
    data: updateResponse,
    isSuccess: isUpdated,
    mutateAsync: updateBusiness,
  } = useMutation(mutation);

  if (isUpdated) {
    notification.success({
      message: "You have successfully updated business",
    });
    client.invalidateQueries(["user"]);
    setOpen("closed");
  }

  return {
    updateResponse,
    updateBusiness,
  };
};

export default usePutUpdateBusiness;
