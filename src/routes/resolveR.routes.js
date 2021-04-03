const ResolveRoutes = (route) => {
  let validateRoute =
    route === "/" ||
    route === "login" ||
    route === "signup" ||
    route === "acount"
      ? route
      : "404";
  return validateRoute;
};

export default ResolveRoutes;
