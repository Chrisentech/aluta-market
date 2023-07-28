import { gql } from "@apollo/client";

const PRODUCT_FIELDS = gql`
  fragment ProductFields on Product {
    id
    name
    price
    description
    discount
    image
    title
  }
`;

export const GET_PRODUCTS = gql`
  ${PRODUCT_FIELDS}
  query {$title: String!}{
    products(title:$title){
        ...ProductFields
    }
  }
`;

export const GET_PRODUCT = gql`
  ${PRODUCT_FIELDS}
  query {$id: number}{
    products(id:$id){
        ...ProductFields
    }
  }
`;

export const CREATE_PRODUCT = gql`
  ${PRODUCT_FIELDS}
  mutation ($input: CreateProductInput!) {
    
    (input: $input) {
      ...ProductFields
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  ${PRODUCT_FIELDS}
  mutation ($id: String!, $input: UpadteProductInput!) {
    updateProduct(id: $id, input: $input) {
      ...ProductFields
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation ($id: String!) {
    deleteProduct(id: $id)
  }
`;
