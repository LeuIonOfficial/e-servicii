import routes from "@routes";
import { useContext } from "react";
import { UserContext } from "@store";
import { Api } from "@services";
import { useNavigate } from "react-router-dom";

export const navigation = [
  { name: "Dashboard", href: routes.authenticated.dashboard, current: false },
  { name: "Calendar", href: routes.authenticated.calendar, current: false },
];
export const useUserNavigation = () => {
  const navigate = useNavigate();
  return [
    { name: "Your Profile", href: routes.authenticated.about },
    { name: "Settings", href: "#" },
    {
      name: "Sign out",
      href: "#",
      onClick: async () => {
        await Api.auth.logout();
        navigate(routes.home);
      },
    },
  ];
};

export const useUser = () => {
  const user = useContext(UserContext);
  return {
    name: user?.name,
    email: user?.email,
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
};
