import {
  CalendarOutlined,
  DashboardOutlined,
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
      label: <div>Profile</div>,
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
      key: routes.authenticated.dashboard,
      icon: <DashboardOutlined />,
      label: <span>Dashboard</span>,
    },
    {
      key: routes.authenticated.calendar,
      icon: <CalendarOutlined />,
      label: "Calendar",
    },
  ];
};
