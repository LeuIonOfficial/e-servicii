import { $api } from "@http";
import { CreateServiceType } from "@models/request/ServicesRequest.ts";

export class BusinessServices {
  async createBusinessService(data: CreateServiceType) {
    return $api.post("/services/create", data);
  }
  async getBusinessServices(id: number | undefined) {
    return $api.get(`/services/read/${id}`);
  }
}
