const authenticatedRoot = "/u";

const routes = {
  home: "/",
  authenticated: {
    root: authenticatedRoot,
    dashboard: authenticatedRoot + "/dashboard",
    about: authenticatedRoot + "/profile",
    appointment: authenticatedRoot + "/appointment",
    business: authenticatedRoot + "/business",
  },
  login: "/login",
  register: "/register",
  notFound: "*",
  badRequest: "/400",
};

export default routes;
