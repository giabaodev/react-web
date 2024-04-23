import { lazy } from 'react';
import { privatePaths, publicPaths } from '../constants/routePath';

export const publicRoutes = [
  {
    path: publicPaths.login,
    element: lazy(() => import('../pages/Auth/Login')),
  },
];

export const privateRoutes = [
  {
    path: privatePaths.statistic,
    element: lazy(() => import('../pages/Home')),
    icon: undefined,
  },
];
