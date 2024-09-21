import { AppRoute } from "../types/app-route";

type RouteNames = "dashboard" | "todos";

export const routes: Record<RouteNames, AppRoute> = {
  dashboard: {
    name: "dashboard",
    path: () => "/dashboard",
    meta: {
      needAuth: false,
    },
  },
  todos: {
    name: "todos",
    path: () => "/dashboard/todos",
    meta: {
      needAuth: false,
    },
  },
};
