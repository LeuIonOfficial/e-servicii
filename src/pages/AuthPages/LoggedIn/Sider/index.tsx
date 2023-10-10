import Sider from "antd/es/layout/Sider";
import { useMenuItems } from "./constants.tsx";
import style from "./style.module.scss";

import { FC, useState } from "react";

import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
const AuthSider: FC = ({}) => {
  const items = useMenuItems();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

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
      />
    </Sider>
  );
};
export default AuthSider;
