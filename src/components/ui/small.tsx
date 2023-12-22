import { PropsWithChildren, ReactNode } from "react";

interface AuthProviderProps
  extends PropsWithChildren<{
    children: ReactNode;
  }> {}

export const Small: React.FC<AuthProviderProps> = ({ children }) => {
  return (
     <small className="text-sm font-medium leading-none">
      {children}
    </small>
  );
};
