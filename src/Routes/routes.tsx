import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';
import { ROUTE } from "../Shared/Constants";
import { Homepage, Loginpage, Registerpage, SearchPage } from "../Pages/Public";
import {
  BuyerDashboard,
  SellerDashboard,
  SellerProducts,
  NewSellerProduct,
  AddNewProducts,
  SellerPayment,
  PaymentRegScreen,
  ProductView,
  Cart,
} from "../Pages/Private";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <BreadcrumbsProvider> */}
          <Route path={ROUTE.HOME} element={<Homepage />} />
          <Route path={ROUTE.SEARCH} element={<SearchPage />} />
          <Route path={ROUTE.LOGIN} element={<Loginpage />} />
          <Route path={ROUTE.REGISTER} element={<Registerpage />} />
          <Route
            path={ROUTE.BUYER_DASHBOARD}
            element={<PrivateRoute component={BuyerDashboard} authRoute />}
          />
          <Route
            path={ROUTE.CART}
            element={<PrivateRoute component={Cart} authRoute />}
          />
          <Route
            path={ROUTE.SELLER_DASHBOARD}
            element={<PrivateRoute component={SellerDashboard} authRoute />}
          />
          <Route
            path={ROUTE.SELLER_PRODUCTS}
            element={<PrivateRoute component={SellerProducts} authRoute />}
          />
          <Route
            path={ROUTE.SELLER_NEWPRODUCT}
            element={<PrivateRoute component={NewSellerProduct} authRoute />}
          />
          <Route
            path={ROUTE.SELLER_ADDPRODUCT}
            element={<PrivateRoute component={AddNewProducts} authRoute />}
          />
          <Route
            path={ROUTE.SELLER_PAYMENT}
            element={<PrivateRoute component={SellerPayment} authRoute />}
          />

          <Route
            path={ROUTE.PRODUCTVIEW}
            element={<PrivateRoute component={ProductView} authRoute />}
          />

          <Route
            path={ROUTE.SELLER_PAYMENT_REG + "/:step"}
            element={<PrivateRoute component={PaymentRegScreen} authRoute />}
          />
        {/* </BreadcrumbsProvider> */}
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
