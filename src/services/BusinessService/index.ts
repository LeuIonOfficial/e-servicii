import { $api } from "@http";

export default class BusinessService {
  async addBusiness(data: {
    name: string;
    description: string;
    phone: string;
  }) {
    return $api.post("/business/create", data);
  }
}
