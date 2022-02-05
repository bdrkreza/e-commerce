import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      userId
    }
  }
`;

export const REGISTER_USER = gql`
  mutation CreateUser($input: registerInput!) {
    createUser(input: $input) {
      username
      email
      role
    }
  }
`;

export const USER_ORDER_PRODUCT = gql`
  mutation AddToBasket($input: AddItemInput) {
    addToBasket(input: $input) {
      email
      username
      basket {
        id
        price
      }
    }
  }
`;
