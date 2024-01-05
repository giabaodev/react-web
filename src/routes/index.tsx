import { lazy } from 'react';
import { publicPaths } from '../constants/routePath';
import { HomeOutlined } from '@mui/icons-material';

export const publicRoutes = [
  {
    path: publicPaths.login,
    element: lazy(() => import('../pages/Auth/Login')),
  },
];

export const privateRoutes = [
  {
    path: publicPaths.login,
    element: lazy(() => import('../pages/Auth/Login')),
    icon: <HomeOutlined />,
  },
];
