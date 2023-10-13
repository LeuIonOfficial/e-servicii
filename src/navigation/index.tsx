import { Navigate, createBrowserRouter } from "react-router-dom";

import routes from "@routes";
import { NonAuthLayout, AuthLayout } from "@layouts";
import { HomePage, NotFound, Dashboard, LoginPage, RegisterPage } from "@pages";
import { ProfileInfo, BusinessInfo } from "../pages/Profile";
import CalendarPage from "../pages/CalendarPage";
import Services from "../pages/Profile/compontents/Services";

const DashboardRedirect = () => <Navigate to={routes.authenticated.calendar} />;

const router = createBrowserRouter([
  {
    index: true,
    element: <DashboardRedirect />,
  },
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
        path: routes.authenticated.about.services,
        element: <Services />,
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
