import { getCookie } from '@/helpers/cookies';
import { Navigate } from 'react-router-dom';

const NavigateRoute = (): JSX.Element => {
  if (getCookie('access_token')) return <Navigate to={'/admin'} replace />;
  else return <Navigate to={'/login'} replace />;
};

export default NavigateRoute;
