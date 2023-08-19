export const routes = {
  root: '/',
  login: '/login',
  register: '/register',
  explore: '/explore',
  profile: '/profile',
  courses: '/courses',
  progress: '/progress',
} as const;

export type DashboardRoutes = (typeof routes)[keyof typeof routes];
