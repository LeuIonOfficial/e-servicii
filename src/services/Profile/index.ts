import { $api } from "@http";

export class Profile {
  async getProfile() {
    return await $api.get("/user/me");
  }
}
