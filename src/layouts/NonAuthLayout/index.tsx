import { HomePage } from "@pages/index.ts";
import { Outlet } from "react-router-dom";

const NonAuthLayout = () => {
  return (
    <HomePage>
      <Outlet />
    </HomePage>
  );
};

export default NonAuthLayout;
