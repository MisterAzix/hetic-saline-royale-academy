export const routes = {
  root: '/',
  login: '/login',
  dashboard: '/dashboard',
  content: '/content',
};

export type DashboardRoutes = (typeof routes)[keyof typeof routes];
