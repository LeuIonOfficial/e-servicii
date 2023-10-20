import { $api } from "@http";
import {
  PostBusinessType,
  UpdateBusinessType,
} from "@models/request/BusinessRequest.ts";

export default class BusinessService {
  async postBusiness(data: PostBusinessType) {
    return $api.post("/business/create", data).catch((e) => e);
  }

  async putBusiness(data: UpdateBusinessType) {
    const { id, ...values } = { ...data };
    return $api.put(`business/modify/${id}`, values).catch((e) => e);
  }
}
