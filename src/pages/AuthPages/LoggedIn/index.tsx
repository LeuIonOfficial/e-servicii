import { FC, ReactNode } from "react";
import { Content } from "antd/es/layout/layout";
import { Layout, theme } from "antd";
import AuthSider from "./Sider";
import CustomHeader from "./Header";

const LoggedIn: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="h-[100vh]">
      <AuthSider />
      <Layout>
        <CustomHeader />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LoggedIn;
