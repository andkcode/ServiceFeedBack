import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default layout("./layout.tsx", [
  index("./pages/Main"),
  route("about", "./pages/About"),

  layout("./pages/auth/layout.tsx", [
    route("login", "./pages/auth/login.tsx"),
    route("register", "./pages/auth/register.tsx"),
  ]),

  ...prefix("concerts", [
    index("./pages/concerts/home.tsx"),
    route(":city", "./pages/concerts/city.tsx"),
    route("trending", "./pages/concerts/trending.tsx"),
  ]),
]) satisfies RouteConfig;
