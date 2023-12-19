export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface AuthContextProps {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}
