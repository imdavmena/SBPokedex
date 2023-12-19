import { Route, Routes } from "react-router-dom";

import List from "@/components/pages/list";

import SigNing from "@/components/pages/signing";
import SignUp from "@/components/pages/signup";

import { AuthNavigation } from "@/components/template/authNavigation";
import { NoAuthNavigation } from "@/components/template/noAuthNavigation";

import { PrivateRoute } from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/pokemon"
        element={
          <PrivateRoute>
            <AuthNavigation />
          </PrivateRoute>
        }
      >
        <Route index path="list" element={<List />}></Route>
      </Route>
      <Route path="/" element={<NoAuthNavigation />}>
        <Route index  path="/login" element={<SigNing />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};
