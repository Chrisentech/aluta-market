import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';
import { ROUTE } from "../Shared/Constants";
import {
	Homepage,
	Loginpage,
	Registerpage,
	SearchPage,
	Store,
	ProductView,
	TermsAndConditions,
	AboutPage,
	FaqPage,
	PrivacyPage,
	ContactPage,
	CheckoutPage,
} from "../Pages/Public";
import {
	SellerDashboard,
	SellerProducts,
	NewSellerProduct,
	AddNewProducts,
	SellerPayment,
	Cart,
	SellerProfile,
	CreateStore,
	StoreSettings,
	SellerReviews,
	SellerOrders,
	OrderDetail,
	ProductType,
	Messaging,
	BuyerOrder,
	BuyerProfile,
	BuyerOrderDetail,
	SavedForLater,
	FollowedStores,
	BuyerReview,
	BuyerReviewInner,
	SellerProductReviews,
	CreateInvoicePage,
	EditProduct,
	DownloadPage,
} from "../Pages/Private";
import useAuthentication from "../Shared/Hooks/useAuth";
import { setRedirectPath } from "../Shared/Utils/helperFunctions";
import { useSelector } from "react-redux";
import { selectActiveModal } from "../Features/modal/modalSlice";
// import { Reviews } from "../Shared/Components";

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* Public Routes */}
				<Route path={ROUTE.HOME} element={<Homepage />} />
				<Route path={ROUTE.SEARCH} element={<SearchPage />} />
				<Route path={"/:id" + ROUTE.STORE} element={<Store />} />
				<Route path={ROUTE.LOGIN} element={<Loginpage />} />
				<Route path="/reset_password" element={<Loginpage />} />
				<Route path={ROUTE.REGISTER} element={<Registerpage />} />
				<Route path={ROUTE.PRODUCTVIEW} element={<ProductView />} />
				<Route path={ROUTE.TERMS} element={<TermsAndConditions />} />
				<Route path={ROUTE.ABOUT} element={<AboutPage />} />
				<Route path={ROUTE.FAQ} element={<FaqPage />} />
				<Route path={ROUTE.PRIVACY} element={<PrivacyPage />} />
				<Route path={ROUTE.CONTACT} element={<ContactPage />} />

				{/* Protected Routes */}
				<Route
					path={ROUTE.BUYER_ORDER}
					element={
						<PrivateRoute
							component={BuyerOrder}
							authRoute
							route={ROUTE.BUYER_ORDER}
						/>
					}
				/>
				<Route
					path={ROUTE.BUYER_ORDER + ":id"}
					element={
						<PrivateRoute
							component={BuyerOrderDetail}
							authRoute
							route={ROUTE.BUYER_ORDER}
						/>
					}
				/>
				<Route
					path={ROUTE.BUYER_PROFILE}
					element={
						<PrivateRoute
							component={BuyerProfile}
							authRoute
							route={ROUTE.BUYER_PROFILE}
						/>
					}
				/>
				<Route
					path={ROUTE.BUYER_DOWNLOAD}
					element={
						<PrivateRoute
							component={DownloadPage}
							authRoute
							route={ROUTE.BUYER_DOWNLOAD}
						/>
					}
				/>
				<Route
					path={ROUTE.BUYER_SAVED_ORDER}
					element={
						<PrivateRoute
							component={SavedForLater}
							authRoute
							route={ROUTE.BUYER_SAVED_ORDER}
						/>
					}
				/>
				<Route
					path={ROUTE.BUYER_STORES_FOLLOWED}
					element={
						<PrivateRoute
							component={FollowedStores}
							authRoute
							route={ROUTE.BUYER_STORES_FOLLOWED}
						/>
					}
				/>
				<Route
					path={ROUTE.BUYER_PRODUCT_REVIEW}
					element={
						<PrivateRoute
							component={BuyerReview}
							authRoute
							route={ROUTE.BUYER_PRODUCT_REVIEW}
						/>
					}
				/>
				<Route
					path={"/seller/payment/invoice/generate"}
					element={
						<PrivateRoute
							component={CreateInvoicePage}
							authRoute
							route={"/seller/payment/invoice/generate"}
						/>
					}
				/>
				<Route
					path={ROUTE.BUYER_PRODUCT_REVIEW + ":id"}
					element={
						<PrivateRoute
							component={BuyerReviewInner}
							authRoute
							route={ROUTE.BUYER_PRODUCT_REVIEW}
						/>
					}
				/>
				<Route
					path={ROUTE.CART}
					element={
						<PrivateRoute component={Cart} authRoute route={ROUTE.CART} />
					}
				/>
				<Route
					path={"/checkout"}
					element={
						<PrivateRoute
							component={CheckoutPage}
							authRoute
							route={"/checkout"}
						/>
					}
				/>
				<Route
					path={ROUTE.MESSAGING + "/:me"}
					element={
						<PrivateRoute
							component={Messaging}
							authRoute
							route={ROUTE.MESSAGING + "/:me"}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_DASHBOARD + "/:state?"}
					element={
						<PrivateRoute
							component={SellerDashboard}
							authRoute
							route={ROUTE.SELLER_DASHBOARD}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_CREATESTORE}
					element={
						<PrivateRoute
							component={CreateStore}
							authRoute
							route={ROUTE.SELLER_CREATESTORE}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_PRODUCTS}
					element={
						<PrivateRoute
							component={SellerProducts}
							authRoute
							route={ROUTE.SELLER_PRODUCTS}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_PRODUCTTYPE}
					element={
						<PrivateRoute
							component={ProductType}
							authRoute
							route={ROUTE.SELLER_PRODUCTTYPE}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_NEWPRODUCT}
					element={
						<PrivateRoute
							component={NewSellerProduct}
							authRoute
							route={ROUTE.SELLER_NEWPRODUCT}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_EDITPRODUCT + "/:id"}
					element={
						<PrivateRoute
							component={EditProduct}
							authRoute
							route={ROUTE.SELLER_EDITPRODUCT + "/:id"}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_ADDPRODUCT}
					element={
						<PrivateRoute
							component={AddNewProducts}
							authRoute
							route={ROUTE.SELLER_ADDPRODUCT}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_PAYMENT}
					element={
						<PrivateRoute
							component={SellerPayment}
							authRoute
							route={ROUTE.SELLER_PAYMENT}
						/>
					}
				/>

				<Route
					path={ROUTE.SELLER_ORDERS}
					element={
						<PrivateRoute
							component={SellerOrders}
							authRoute
							route={ROUTE.SELLER_ORDERS}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_ORDER_DETAIL + "/:id"}
					element={
						<PrivateRoute
							component={OrderDetail}
							authRoute
							route={ROUTE.SELLER_ORDERS}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_REVIEWS}
					element={
						<PrivateRoute
							component={SellerReviews}
							authRoute
							route={ROUTE.SELLER_REVIEWS}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_REVIEWS + "/:id"}
					element={
						<PrivateRoute
							component={SellerProductReviews}
							authRoute
							route={ROUTE.SELLER_REVIEWS + ":/id"}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_PROFILE}
					element={
						<PrivateRoute
							component={SellerProfile}
							authRoute
							route={ROUTE.SELLER_PROFILE}
						/>
					}
				/>
				<Route
					path={ROUTE.SELLER_STORESETTINGS}
					element={
						<PrivateRoute
							component={StoreSettings}
							authRoute
							route={ROUTE.SELLER_STORESETTINGS}
						/>
					}
				/>
				{/* </BreadcrumbsProvider> */}
			</Routes>
		</BrowserRouter>
	);
};

interface PrivateRouteProps {
	component: React.ComponentType;
	authRoute?: boolean;
	route: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
	component: Component,
	authRoute,
	route,
}) => {
	const { isAuthenticated } = useAuthentication();
	const activeModal = useSelector(selectActiveModal);

	useEffect(() => {
		if (route && activeModal === "logout") {
			setRedirectPath(route);
			// alert(route);
		}
	}, [activeModal]);

	if (authRoute && !isAuthenticated) {
		setRedirectPath(route);
		return <Navigate to={ROUTE.LOGIN} replace />;
	}

	return <Component />;
};

export default Router;
