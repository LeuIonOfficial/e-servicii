const authenticatedRoot = "/u";

const routes = {
  home: "/",
  authenticated: {
    root: authenticatedRoot,
    dashboard: authenticatedRoot + "/dashboard",
    settings: authenticatedRoot + "/settings",
    about: {
      business: authenticatedRoot + "/about/business",
      user: authenticatedRoot + "/about/user",
    },
  },
  login: "/login",
  register: "/register",
  notFound: "*",
  badRequest: "/400",
};

export default routes;
