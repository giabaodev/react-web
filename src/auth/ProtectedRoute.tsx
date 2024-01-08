import { getCookie } from "@/helpers/cookies";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const location = useLocation();
  if (location.pathname === '/admin') {
    return <Navigate to={'/'} replace />;
  }
  return <Outlet />;
}
