const authenticatedRoot = "/u";

const routes = {
  home: "/",
  authenticated: {
    root: authenticatedRoot,
    dashboard: authenticatedRoot + "/dashboard",
    settings: authenticatedRoot + "/settings",
    about: authenticatedRoot + "/profile",
    calendar: authenticatedRoot + "/calendar",
  },
  login: "/login",
  register: "/register",
  notFound: "*",
  badRequest: "/400",
};

export default routes;
