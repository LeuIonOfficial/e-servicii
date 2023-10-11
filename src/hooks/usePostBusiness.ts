import { Api } from "@services";
import { useMutation, useQueryClient } from "react-query";
import { PostBusinessType } from "../models/request/BusinessRequest.ts";
import { Dispatch, SetStateAction } from "react";
import { notification } from "antd";

const usePostBusiness = (
  setOpen: Dispatch<SetStateAction<"closed" | "create" | "update">>,
) => {
  const client = useQueryClient();
  const mutation = async (data: PostBusinessType) =>
    Api.business.postBusiness(data);

  const {
    data: postResponse,
    mutateAsync: postBusiness,
    isSuccess: isPosted,
  } = useMutation(mutation);

  if (isPosted) {
    notification.success({
      message: "You have successfully added new business",
    });
    client.invalidateQueries(["user"]);
    setOpen("closed");
  }

  return {
    postResponse,
    postBusiness,
  };
};

export default usePostBusiness;
