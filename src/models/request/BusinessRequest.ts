export interface PostBusinessType {
  name: string;
  description: string;
  phone: string;
}

export interface UpdateBusinessType extends PostBusinessType {
  id: number;
}
