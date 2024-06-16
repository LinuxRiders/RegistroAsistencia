import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ validate, to = "/" }) {
  return validate ? <Outlet /> : <Navigate to={to} replace />;
}
