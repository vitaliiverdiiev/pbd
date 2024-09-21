import { AppRoute } from '../types/app-route';

type RouteNames = 'test';

export const routes: Record<RouteNames, AppRoute> = {
  test: {
    name: 'test',
    path: () => '/test'
  },
};
