import { getCookie } from '@/helpers/cookies';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute(): JSX.Element {
  if (getCookie('access_token')) {    
    return <Outlet />;
  }
  return <Navigate to={'/login'} replace />;
}
