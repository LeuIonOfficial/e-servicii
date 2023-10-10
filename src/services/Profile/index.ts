import { $api } from "@http";

export class Profile {
  async getProfile() {
    return $api.get("/user/me");
  }
}
