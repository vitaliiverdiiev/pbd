import { AppRoute } from "../types/app-route";

type RouteNames = 'dashboard';

export const routes: Record<RouteNames, AppRoute> = {
  dashboard: {
    name: 'dashboard',
    path: () => '/dashboard',
    meta: {
      needAuth: false
    }
  },
};
