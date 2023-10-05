import { Header } from "antd/es/layout/layout";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import routes from "@routes";

export const NonAuthHeader = () => {
  const navigate = useNavigate();
  return (
    <Header className="h-[64pxa] w-full flex justify-between bg-white items-center">
      <div className="child:mr-4 child:cursor-pointer">
        <span>About us</span>
        <span>Contacts</span>
      </div>
      <div className="space-x-2">
        <Button type="text" onClick={() => navigate(routes.login)}>
          Login
        </Button>
        <Button
          type="primary"
          className="bg-blue-accent-400"
          onClick={() => navigate(routes.register)}
        >
          Register
        </Button>
      </div>
    </Header>
  );
};
