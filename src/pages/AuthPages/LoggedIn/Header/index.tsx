import { Header } from "antd/es/layout/layout";
import { theme } from "antd";
import { FC } from "react";

const CustomHeader: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header style={{ padding: 15, background: colorBgContainer }}></Header>
  );
};

export default CustomHeader;
