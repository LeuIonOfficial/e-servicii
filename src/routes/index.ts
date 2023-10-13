const authenticatedRoot = "/u";

const routes = {
  home: "/",
  authenticated: {
    root: authenticatedRoot,
    dashboard: authenticatedRoot + "/dashboard",
    settings: authenticatedRoot + "/settings",
    about: {
      business: authenticatedRoot + "/about/business/:id?",
      user: authenticatedRoot + "/about/user",
      services: authenticatedRoot + "/about/services",
    },
    calendar: authenticatedRoot + "/calendar",
  },
  login: "/login",
  register: "/register",
  notFound: "*",
  badRequest: "/400",
};

export default routes;
