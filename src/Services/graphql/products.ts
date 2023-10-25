import { gql } from "@apollo/client";

const PRODUCT_FIELDS = gql`
  fragment ProductFields on Product {
    id
    name
    price
    description
    discount
    image
    slug
    quantity
    status
    thumbnail
    store
    category
    subcategory
   # variant
  }
`;
// const CATEGORY_FIELD = gql`
// fragment CategoryFields on Category{
//   id
//   name
//   slug
//   subcategories
// }
// `;

// export const GET_CATEGORY = gql`
// query ($id: String!){
//   ${CATEGORY_FIELD}
//     Category(id:$id){
//         ...CategoryFields
//     }
//   }
// `;
// export const GET_CATEGORIES = gql`
// query (){
//   ${CATEGORY_FIELD}
//     Categories(){
//         ...CategoryFields
//     }
//   }
// `;

// export const GET_PRODUCTS = gql`
//   ${PRODUCT_FIELDS}
//   query ($title: String!){
//     Products(title:$title){
//         ...ProductFields
//     }
//   }
// `;

export const GET_PRODUCT = gql`
  ${PRODUCT_FIELDS}
  query Product($productId: Int!){
    Product(id: $productId){
        ...ProductFields
    }
  }
`;

// export const CREATE_PRODUCT = gql`
//   ${PRODUCT_FIELDS}
//   mutation ($input: NewProduct!) {
//     (input: $input) {
//       ...ProductFields
//     }
//   }
// `;

// export const UPDATE_PRODUCT = gql`
//   ${PRODUCT_FIELDS}
//   mutation ($id: String!, $input: UpadteProductInput!) {
//     updateProduct(id: $id, input: $input) {
//       ...ProductFields
//     }
//   }
// `;

// export const DELETE_PRODUCT = gql`
//   mutation ($id: String!) {
//     deleteProduct(id: $id)
//   }
// `;

// export const GET_WISHLISTED_PRODUCTS = gql``;

// export const REMOVE_WISHLISTED_PRODUCT = gql``;

// export const GET_SEARCHED_PRODUCTS = gql``;

// export const GET_RECOMMENDED_PRODUCT = gql``;
