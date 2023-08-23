export const routes = {
  root: '/',
  login: '/login',
  dashboard: '/dashboard',
  masterclass: '/masterclass',
};

export type DashboardRoutes = (typeof routes)[keyof typeof routes];
