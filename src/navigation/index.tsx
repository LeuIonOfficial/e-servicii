import { createBrowserRouter } from "react-router-dom";
import routes from "../routes";

import { Dashboard, LoginPage, NotFound } from "@pages/index.ts";
import AuthLayout from "../layouts/AuthLayout";
import { NonAuthLayout } from "../layouts";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <NonAuthLayout />,
    children: [
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
    ],
  },
  {
    path: routes.notFound,
    element: <NotFound />,
  },
]);

export default router;
