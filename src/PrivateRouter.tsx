import React, { PropsWithChildren, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface AuthProviderProps
  extends PropsWithChildren<{
    children: ReactNode;
  }> {}

export const PrivateRoute: React.FC<AuthProviderProps> = ({ children }) => {
  const { state } = useLocation();

  return state?.logged ? children : <Navigate to="/login" />;
};
