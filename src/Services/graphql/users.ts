import { gql } from "@apollo/client";

const USER_FIELDS = gql`
  fragment UserFields on User {
    id
    fullname
    email
    campus
    password
    # avatar
    password
    phone
    usertype
    # stores
    active
    access_token
    refresh_token
    twofa
    code
    codeexpiry
  }
`;

export const CREATE_USER = gql`
  ${USER_FIELDS}
  mutation ($input: NewUser!) {
    createUser(input: $input) {
      ...UserFields
    }
  }
`;

export const VERIFY_OTP = gql`
  ${USER_FIELDS}
  mutation ($input: NewVerifyOTP!) {
    loginUser(input: $input) {
      ...UserFields
    }
  }
`;

export const LOGIN_USER = gql`
  mutation ($input: LoginReq!) {
    loginUser(input: $input) {
      ...UserFields
    }
  }
`;

export const MY_PROFILE = gql`
  ${USER_FIELDS}
  query ($id: String!) {
    User(id: $id) {
      ...UserFields
    }
  }
`;

// export const UPDATE_MY_PROFILE = gql``;

// export const SET_TWOFA = gql``;

export const ADD_TO_WISHLIST = gql`
  mutation ($userId: Int!, $productID: Int!) {
    addWishListedProduct(userId: $userId, productId: $produtcId) {
      ...UserFields
    }
  }
`;

export const GET_MY_CART = gql`
  query ($id: Int!) {
    Cart(user: $id) {
      ...Cart
    }
  }
`;

// export const ADD_TO_CART = gql``;

// export const REMOVE_FROM_CART = gql``;

// export const MAKE_PAYMENT = gql``;

// export const ADD_REVIEW = gql``;

// export const REPORT_STORE = gql``; //to be implemented
