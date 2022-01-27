import { gql } from "@apollo/client";

export const LOGIN_USER=gql`
mutation Login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      email
      username
    }
  }
}

`

export const REGISTER_USER =gql`
mutation Register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
  jwt  
  user {
    username
    email
  }
  }
}


`