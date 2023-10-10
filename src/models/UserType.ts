export interface UserType {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  role: string;
  businesses: BusinessType[];
}

export interface BusinessType {
  name: string;
  description: string;
  phone: string;
}
