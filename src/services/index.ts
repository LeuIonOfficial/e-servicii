import AuthService from "./AuthService";
import { Profile } from "./Profile";
import BusinessService from "./BusinessService";
import { BusinessServices } from "./BusinessServices";

const auth = new AuthService();
const profile = new Profile();
const business = new BusinessService();
const service = new BusinessServices();

export const Api = {
  auth,
  profile,
  business,
  service,
};
