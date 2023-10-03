const authenticatedRoot = "/u";

const routes = {
  authenticated: {
    root: authenticatedRoot,
    dashboard: authenticatedRoot + "/dashboard",
  },
  home: "/",
  login: "/login",
  register: "/register",
  notFound: "*",
  badRequest: "/400",
};

export default routes;
