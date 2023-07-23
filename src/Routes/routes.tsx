import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ROUTE } from "../Shared/Constants";
import { Homepage, Loginpage ,Registerpage} from "../Pages/Public";
import { DashboardPage } from "../Pages/Private";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOME} element={<Homepage />} />
        <Route path={ROUTE.LOGIN} element={<Loginpage />} />
        <Route path={ROUTE.REGISTER} element={<Registerpage />} />
        <Route
          path={ROUTE.BUYER_DASHBOARD}
          element={<PrivateRoute component={DashboardPage} authRoute />}
        />
      </Routes>
    </BrowserRouter>
  );
};

interface PrivateRouteProps {
  component: React.ComponentType;
  authRoute?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  authRoute,
}) => {
  const isAuthenticated = true; // logic to check if the user is authenticated

  if (authRoute && !isAuthenticated) {
    return <Navigate to={ROUTE.LOGIN} replace />;
  }

  return <Component />;
};

export default Router;
