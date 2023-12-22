import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./provider/authProvider";

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
