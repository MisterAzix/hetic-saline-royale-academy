export const routes = {
  root: '/',
  login: '/login',
  dashboard: '/dashboard',
  masterclass: '/masterclass',
  course: '/course',
};

export type DashboardRoutes = (typeof routes)[keyof typeof routes];
