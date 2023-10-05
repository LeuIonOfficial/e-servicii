import { NonAuthHeader } from "./Header";
import { Outlet } from "react-router-dom";
import NonAuthSider from "./Sider";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

const NonAuthLayout = () => {
  return (
    <>
      <Layout>
        <NonAuthSider />
        <Layout>
          <NonAuthHeader />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default NonAuthLayout;
