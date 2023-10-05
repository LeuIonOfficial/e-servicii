import AuthService from "./AuthService";
import { Profile } from "./Profile";

const auth = new AuthService();
const profile = new Profile();

export const Api = {
  auth,
  profile,
};
