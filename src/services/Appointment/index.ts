import { $api } from '@http';

export default class Appointment {
  async getAppointments() {
    return $api.get('/appointments');
  }
}
