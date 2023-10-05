export interface UserRegisterType {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
}

export interface UserLoginType {
  email: string;
  password: string;
}
