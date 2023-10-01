import { useDispatch } from "react-redux";
import { apolloClient } from "../../Services/graphql/apolloClient";
import {
  IVerifyOTPProps,
  LoginFormValues,
  RegisterFormValues,
} from "../../Interfaces";
import {
  CREATE_USER,
  GET_MY_CART,
  LOGIN_USER,
  VERIFY_OTP,
} from "../../Services/graphql/users";
import { actions } from "./userSlice";

export default function useUsers() {
  const dispatch = useDispatch();
  const createUser = async (input: RegisterFormValues) => {
    const response = await apolloClient.mutate({
      mutation: CREATE_USER,
      variables: { input },
    });
    if (response.data.createUser)
      dispatch(actions.registerUser(response.data.createUser));
  };

  const verifyOTP = async (input: IVerifyOTPProps) => {
    const response = await apolloClient.mutate({
      mutation: VERIFY_OTP,
      variables: { input },
    });
    if (response.data.verifyOTP)
      dispatch(actions.registerUser(response.data.verifyOTP));
  };

  const loginUser = async (input: LoginFormValues) => {
    const response = await apolloClient.mutate({
      mutation: LOGIN_USER,
      variables: { input },
    });
    if (response.data.loginUser)
      dispatch(actions.registerUser(response.data.loginUser));
  };

  const getCart = async (userId: number) => {
    if (userId) {
      const response = await apolloClient.query({
        query: GET_MY_CART,
        variables: { user: userId },
      });
      console.log(response);
    } else {
      let cart: any = window.sessionStorage.getItem("cart");
      cart ? JSON.parse(cart) : null;
      console.log("Cart from session Storage: ", cart);
      dispatch(actions.getMyCart(cart));
    }
  };

  return {
    createUser,
    loginUser,
    verifyOTP,
    getCart,
  };
}
