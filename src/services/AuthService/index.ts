import { $api } from "@http";
import {
  UserLoginType,
  UserRegisterType,
} from "@models/request/AuthRequest.ts";
import { AxiosResponse } from "axios";

const storageKeyAccessToken = "access_token";

export default class AuthService {
  private accessToken: string;

  constructor() {
    this.accessToken = localStorage.getItem(storageKeyAccessToken) ?? "";
  }
  async login(data: UserLoginType): Promise<AxiosResponse> {
    return $api
      .post("/user/login", data)
      .then((response) => {
        if (response.status === 201) {
          this.accessToken = response.data["access_token"];
          localStorage.setItem(storageKeyAccessToken, this.accessToken);
        }
        return response;
      })
      .catch((e) => e.response);
  }
  async register(data: UserRegisterType): Promise<AxiosResponse> {
    return $api
      .post("/user/create", data)
      .then((response) => {
        if (response.status === 201) {
          this.accessToken = response.data["access_token"];
          localStorage.setItem(storageKeyAccessToken, this.accessToken);
        }
        return response;
      })
      .catch((e) => e.response);
  }

  async logout() {
    await $api.get("/user/logout");
    this.accessToken = "";
    localStorage.removeItem(storageKeyAccessToken);
  }
}
