const ResolveRoutes = (route) => {
  if (route.length <= 7) {
    let validateRoute =
      route === "/" ||
      route === "login" ||
      route === "signup" ||
      route === "acount"
        ? route
        : "/:fdcId";
    return validateRoute;
  }
  return `${route}`;
};

export default ResolveRoutes;
