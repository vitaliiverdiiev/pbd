import { AppRoute } from "../types/app-route";

type RouteNames = "signIn" | "signUp"; // | "authError"

export const routes: Record<RouteNames, AppRoute> = {
  signIn: {
    name: "signIn",
    path: () => "/auth/sign-in",
    meta: {
      needAuth: false,
    },
  },

  signUp: {
    name: "signUp",
    path: () => "/auth/sign-up",
    meta: {
      needAuth: false,
    },
  },

  // authError: {
  //   name: 'authError',
  //   path: () => '/auth/error',
  //   meta: {
  //     needAuth: false
  //   }
  // }
};
