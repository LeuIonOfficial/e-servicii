import { Navigate, Outlet } from "react-router-dom";
import { Spin } from "antd";

import useGetProfile from "@hooks/useGetProfile.ts";
import routes from "@routes";
import { LoggedIn } from "@pages";
import { UserContext } from "@store";

const AuthLayout = () => {
  const { profile, isSuccess, isFetching } = useGetProfile();
  console.log(profile);

  if (isFetching) {
    return (
      <div className="w-full h-[100vh] flex flex-col items-center justify-center">
        <Spin size="large" />
        <h1 className="mt-5 text-blue-600">Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <UserContext.Provider value={profile}>
        <LoggedIn>
          <Outlet />
        </LoggedIn>
      </UserContext.Provider>
    );
  }

  return <Navigate to={routes.login} />;
};

export default AuthLayout;
