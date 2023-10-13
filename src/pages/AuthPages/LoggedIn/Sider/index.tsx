import Sider from "antd/es/layout/Sider";
import { useMenuItems } from "./constants.tsx";
import style from "./style.module.scss";

import { FC, useState } from "react";

import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const AuthSider: FC = ({}) => {
  const items = useMenuItems();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      className={style.sider}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        theme="dark"
        mode="inline"
        items={items}
        onClick={(e) => navigate(e.key)}
        defaultSelectedKeys={[location.pathname]}
      />
    </Sider>
  );
};
export default AuthSider;
