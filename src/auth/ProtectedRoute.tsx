import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCookie } from "../helpers/Cookies";

export default function ProtectedRoute() {
  const location = useLocation();
  if (location.pathname === '/' || !getCookie('token')) {
    return <Navigate to={'/'} replace />;
  }
  return <Outlet />;
}
