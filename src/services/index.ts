import AuthService from "./AuthService";
import { Profile } from "./Profile";
import BusinessService from "./BusinessService";

const auth = new AuthService();
const profile = new Profile();
const business = new BusinessService();

export const Api = {
  auth,
  profile,
  business,
};
