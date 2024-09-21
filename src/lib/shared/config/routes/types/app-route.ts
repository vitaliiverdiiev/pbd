export type AppRoute = {
  name: string;
  path: (...args: string[]) => string;
  meta?: {
    needAuth?: boolean;
    permission?: string;
  }
}
