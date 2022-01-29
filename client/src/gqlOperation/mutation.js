import { gql } from "@apollo/client";

export const LOGIN_USER=gql`
mutation Login($email: String, $password: String) {
  login(email: $email, password: $password) {
    token
    userId
  }
}

`

export const REGISTER_USER =gql`
mutation CreateUser($input: UserInput!) {
  createUser(input: $input) {
    username
    email
  }
}

`