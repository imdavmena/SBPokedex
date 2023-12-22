import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
  ReactNode,
} from "react";


import { AuthContextProps, User } from "@/model/auth";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps
  extends PropsWithChildren<{
    children: ReactNode;
  }> {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);    
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = (): boolean => !!user;

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
