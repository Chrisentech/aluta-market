import { gql } from "@apollo/client";

const STORE_FIELDS = gql`
fragment StoreFields on Store{
    id
    link
    name
    user
    products
    description
    followers
    has_physical_address
    wallet
}
`

export const GET_MY_STORES = gql`
 ${STORE_FIELDS}
  query {$user: String!}{
    stores(user:$user){
        ...StoreFields
    }
  }
  `;

export const GET_MY_STORE = gql``

export const UPDATE_MY_STORE = gql``

export const CONFIGURE_MY_STORE = gql``; //This would be used to either disable/delete store

export const GET_REVIEWS = gql`` //might be removed
