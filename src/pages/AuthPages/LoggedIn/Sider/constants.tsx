import {
  CalendarOutlined,
  DashboardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { UserContext } from "@store";
import routes from "@routes";
import { generatePath, useNavigate } from "react-router-dom";

export const useMenuItems = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  return [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: <div>Profile</div>,
      children: [
        {
          key: "user",
          label: (
            <div
              className="flex justify-between"
              onClick={() => navigate(routes.authenticated.about.user)}
            >
              <span>User</span>
              <span>{user?.name}</span>
            </div>
          ),
        },
        {
          key: "business",
          label: (
            <div className="flex justify-between m-0">
              <span>Business</span>
              <span>{user?.businesses.length}</span>
            </div>
          ),
          children: user?.businesses.map((el) => {
            return {
              key: `business ${el.id}`,
              label: (
                <div
                  onClick={() =>
                    navigate(
                      generatePath(routes.authenticated.about.business, {
                        id: el.id,
                      }),
                    )
                  }
                >
                  <span>{el.name}</span>
                </div>
              ),
            };
          }),
        },
      ],
    },
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: (
        <div onClick={() => navigate(routes.authenticated.dashboard)}>
          Dashboard
        </div>
      ),
    },
    {
      key: "calendar",
      icon: <CalendarOutlined />,
      label: (
        <div onClick={() => navigate(routes.authenticated.calendar)}>
          Calendar
        </div>
      ),
    },
  ];
};
