import {
  DashboardOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { UserContext } from "@store";
import routes from "@routes";

export const useMenuItems = () => {
  const user = useContext(UserContext);
  return [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: <span>Profile</span>,
      children: [
        {
          key: routes.authenticated.about.user,
          label: (
            <div className="flex justify-between">
              <span>User</span>
              <span>{user?.name}</span>
            </div>
          ),
        },
        {
          key: routes.authenticated.about.business,
          label: (
            <div className="flex justify-between m-0">
              <span>Business</span>
              <span>{user?.businesses.length}</span>
            </div>
          ),
        },
        {
          key: routes.home,
          label: <span>Logout</span>,
        },
      ],
    },
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: <span>Dashboard</span>,
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];
};
