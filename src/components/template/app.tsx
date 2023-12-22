import { PropsWithChildren, ReactNode } from "react";

import {
  ListItem,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";

import pokemonLogo from "../../assets/logo/pokemon.png";
import { useAuth } from "@/provider/authProvider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AuthProviderProps
  extends PropsWithChildren<{
    children: ReactNode;
  }> {}

export const AppTemplate: React.FC<AuthProviderProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  return (
    <>
      <NavigationMenu className="bg-[#F5DB13] max-w-full shadow-xl">
        <ul className="flex w-full gap-3 p-4 justify-between">
          <NavigationMenuItem>
            <NavigationMenuLink href="/">
              <img src={pokemonLogo} alt="logo" className="w-full h-full" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          {!isAuthenticated() &&
            components.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
              />
            ))}
          {isAuthenticated() && (
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@imdavmena"
              />
              <AvatarFallback>{user?.username}</AvatarFallback>
            </Avatar>
          )}
        </ul>
      </NavigationMenu>
      {children}
    </>
  );
};

const components: { title: string; href: string }[] = [
  {
    title: "Login",
    href: "/login",
  },
];
