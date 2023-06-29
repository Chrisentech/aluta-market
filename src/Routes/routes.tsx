import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ROUTE } from "../Shared/Constants";
import HomePage from "../Pages/Public/Homepage/homepage";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOME} element={<HomePage/>} />
        <Route path={ROUTE.LOGIN} element={<LoginPage />} />
        <Route
          path={ROUTE.BUYER_DASHBOARD}
          element={<PrivateRoute component={Dashboard} authRoute  />}
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


const LoginPage: React.FC = () => {
  return <div>Login</div>;
};

const Dashboard: React.FC = () => {
  return <div>Hello Dashboard</div>;
};

export default Router;
