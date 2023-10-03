import { LoggedIn } from "@pages/index.ts";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  // /me request verification with context here
  return (
    <LoggedIn>
      <Outlet />
    </LoggedIn>
  );
};

export default AuthLayout;
