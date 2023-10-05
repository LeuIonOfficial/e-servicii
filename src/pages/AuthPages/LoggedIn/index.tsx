import { FC, ReactNode, useContext } from "react";
import { Content } from "antd/es/layout/layout";
import { Button, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Api } from "@services";
import { UserContext } from "@store";
import { useNavigate } from "react-router-dom";
import routes from "@routes";

const LoggedIn: FC<{ children: ReactNode }> = ({ children }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider
        className="h-[100vh] p-5 child:flex child:flex-col child:justify-between child:items-center"
        style={{ backgroundColor: "#fff" }}
      >
        <div>Logo for {user?.name}</div>
        <div>Menu</div>
        <div>
          <Button
            type="text"
            onClick={async () => {
              await Api.auth.logout();
              navigate(routes.home);
            }}
          >
            Logout
          </Button>
        </div>
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LoggedIn;
