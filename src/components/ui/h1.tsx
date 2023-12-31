import { PropsWithChildren, ReactNode } from "react";

interface AuthProviderProps
  extends PropsWithChildren<{
    children: ReactNode;
  }> {}
  
export const H1: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}
