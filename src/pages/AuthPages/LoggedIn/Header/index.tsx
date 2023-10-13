import { Header } from "antd/es/layout/layout";
import { Button, theme } from "antd";
import { FC } from "react";
import { Api } from "@services";
import { useNavigate } from "react-router-dom";
import routes from "@routes";

const CustomHeader: FC = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{ padding: 15, background: colorBgContainer }}
      className="flex items-center justify-end"
    >
      <Button
        type="text"
        onClick={async () => {
          await Api.auth.logout();
          navigate(routes.home);
        }}
      >
        Logout
      </Button>
    </Header>
  );
};

export default CustomHeader;
