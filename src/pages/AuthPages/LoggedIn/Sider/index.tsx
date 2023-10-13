import Sider from 'antd/es/layout/Sider';
import { useMenuItems } from './constants.tsx';
import style from './style.module.scss';

import { FC, useState, useEffect } from 'react';

import { Menu } from 'antd';
const AuthSider: FC = () => {
  const items = useMenuItems();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string | null>(
    localStorage.getItem('selectedKey') || null
  );

  useEffect(() => {
    if (selectedKey) {
      localStorage.setItem('selectedKey', selectedKey);
    }
  }, [selectedKey]);

  const handleMenuClick = ({ key }: { key: string }) => {
    setSelectedKey(key);
  };

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
        onClick={handleMenuClick}
        defaultSelectedKeys={selectedKey ? [selectedKey] : []}
      />
    </Sider>
  );
};
export default AuthSider;
