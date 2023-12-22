import { Route, Routes } from "react-router-dom";

import List from "@/components/pages/list";

import SigNing from "@/components/pages/signing";

import { NoAuthNavigation } from "@/components/template/noAuthNavigation";

import { PrivateRoute } from "./PrivateRouter";
import { AppTemplate } from "./components/template/app";
import { Home } from "./components/pages/home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <NoAuthNavigation>
            <SigNing />
          </NoAuthNavigation>
        }
      />
      <Route
        index
        path="/"
        element={
          <AppTemplate>
            <Home />
          </AppTemplate>
        }
      />

      <Route
        path="/pokedex/list"
        element={
          <AppTemplate>
            <List />
          </AppTemplate>
        }
      />
    </Routes>
  );
};
