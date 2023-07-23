export const ROUTE = {
  //Buyer Routes
  HOME: "/",
  BUYER_DASHBOARD: "/buyer/dashboard/",
  CART: "/product/cart/",
  ADDRESS: "/address/",
  WISHLIST: "/product/wishlist/",
  LOGIN: "/auth/login/",
  REGISTER: "/auth/register/",
  VERIFY: "/auth/verify-otp/",
  FORGOT: "/auth/forgot-password/",
  TWOFA: "/auth/two-fa/setup/",
  CHECKOUT: "/checkout/",

  //Seller Routes
  ADDPRODUCT: "/product/add",
  REMOVEPRODUCT: "/product/remove",
  EDITPRODUCT: "/product/edit",
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
  title:"Aluta Market",
  tokenExpiryTime:"5min",
}
