export const ROUTE = {
  //Buyer Routes
  HOME: "/",
  BUYER_DASHBOARD: "/buyer/dashboard/",
  SEARCH: "/search",
  STORE: "/store",
  CART: "/product/cart",
  ADDRESS: "/address/",
  WISHLIST: "/product/wishlist/",
  LOGIN: "/auth/login/",
  REGISTER: "/auth/register/",
  VERIFY: "/auth/verify-otp/",
  FORGOT: "/auth/forgot-password/",
  TWOFA: "/auth/two-fa/setup/",
  CHECKOUT: "/checkout/",
  TERMS: "/terms-and-conditions",
  // product Routes
  PRODUCTVIEW: "/product/view/:id",
  CHANGEADDRESS: "/product/view/change-address",

  //Seller Routes
  SELLER_NEWPRODUCT: "/seller/product/new",
  SELLER_ADDPRODUCT: "/seller/product/add",
  SELLER_DASHBOARD: "/seller/dashboard",
  SELLER_CREATESTORE: "/seller/dashboard/create-store",
  SELLER_PRODUCTS: "/seller/products/",
  SELLER_PAYMENT: "/seller/payment/",
  SELLER_REVIEWS: "/seller/reviews",
  SELLER_PAYMENT_REG: "/seller/payment/reg",
  SELLER_PROFILE: "/seller/profile/",
  SELLER_ORDERS: "/seller/orders",
  SELLER_ORDER_DETAIL: "/seller/orders/order-details",
  REMOVEPRODUCT: "/product/remove",
  EDITPRODUCT: "/product/edit",
  SELLER_STORESETTINGS: "/seller/store-settings",
};

export const BreakPoints = {
  xs: "max-width:576px", //For phones
  small: "min-width:576px",
  medium: "min-width:768px",
  large: "min-width:992px",
  xl: "min-width:1200px",
  xxl: "min-width:1400px",
};

export const AppColors = {
  brandColor: "",
  brandBackgroundColor: "",
  brandGray: "#bdc4cd",
  brandOrange: "#ff001f",
  brandPink: "rgba(250, 52, 52, 0.1)",
  brandYellow: "#ff9017",
};

export const AppDetails = {
  title: "Aluta Market",
  tokenExpiryTime: "5min",
};
