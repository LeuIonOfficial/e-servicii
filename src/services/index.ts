import AuthService from './AuthService';
import { Profile } from './Profile';
import BusinessService from './BusinessService';
import { BusinessServices } from './BusinessServices';
import Appointment from './Appointment';

const auth = new AuthService();
const profile = new Profile();
const business = new BusinessService();
const service = new BusinessServices();
const appointments = new Appointment();

export const Api = {
  auth,
  profile,
  business,
  service,
  appointments,
};
