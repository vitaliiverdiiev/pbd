import { AppRoute } from './types/app-route';
import { routes as auth } from './routes/auth';
import { routes as dashboard } from './routes/dashboard';
import { routes as dev } from './routes/dev';


const routes = {
  ...auth,
  ...dashboard,
  ...dev
};

export const appRoutes: Record<keyof typeof routes, AppRoute> = routes;

export function findRoute (pathOrName: string): AppRoute | null {
  const keys = Object.keys(appRoutes) as Array<keyof typeof appRoutes>;

  const key = keys.find((r) => {
    if (pathOrName === routes[r].name) {
      return true;
    }

    const pathname = pathOrName
      .split('?')[0]
      .replace(/\/\d+\//g, '/*/')
      .replace(/\/\d+$/g, '/*');

    const routePath = routes[r]
      .path.apply(null, Array(5).fill('*'))
      .split('?')[0];

    if (pathname === routePath) {
      return true;
    }

    return false;
  });

  if (!key) {
    return null;
  }

  return routes[key];
}
