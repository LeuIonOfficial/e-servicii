import { createBrowserRouter } from "react-router-dom";

import routes from "@routes";
import { NonAuthLayout, AuthLayout } from "@layouts";
import {
  HomePage,
  NotFound,
  Dashboard,
  LoginPage,
  RegisterPage,
  ProfilePage,
  CalendarPage,
} from "@pages";

// const DashboardRedirect = () => <Navigate to={routes.authenticated.calendar} />;

const router = createBrowserRouter([
  // {
  //   index: true,
  //   element: <DashboardRedirect />,
  // },
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
        path: routes.authenticated.about,
        element: <ProfilePage />,
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
