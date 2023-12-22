import { PropsWithChildren, ReactNode } from "react";

interface AuthProviderProps
  extends PropsWithChildren<{
    children: ReactNode;
    className: ReactNode;
  }> {}

export const H2: React.FC<AuthProviderProps> = ({ children, className }) => {
  return (
    <h2
      className={`scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
};
