import { UserType } from "../UserType.ts";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: UserType;
}
