import { createBrowserRouter } from "react-router-dom";

import routes from "@routes";
import { NonAuthLayout, AuthLayout } from "@layouts";
import { HomePage, NotFound, Dashboard, LoginPage, RegisterPage } from "@pages";
import { ProfileInfo, BusinessInfo } from "../pages/About";
import CalendarPage from "../pages/CalendarPage";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <NonAuthLayout />,
    children: [
      {
        path: routes.home,
        element: <HomePage />,
      },
      {
        path: routes.register,
        element: <RegisterPage />,
      },
      {
        path: routes.login,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: routes.authenticated.root,
    element: <AuthLayout />,
    children: [
      {
        path: routes.authenticated.dashboard,
        element: <Dashboard />,
      },
      {
        path: routes.authenticated.about.user,
        element: <ProfileInfo />,
      },
      {
        path: routes.authenticated.about.business,
        element: <BusinessInfo />,
      },
      {
        path: routes.authenticated.calendar,
        element: <CalendarPage />,
      },
    ],
  },
  {
    path: routes.notFound,
    element: <NotFound />,
  },
]);

export default router;
