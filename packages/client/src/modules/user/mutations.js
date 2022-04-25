import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation REGISTER_USER($input: CreateUserInput!) {
    createUser(input: $input) {
      ok
      errors {
        message
      }
    }
  }
`;

export const AUTHENTICATE_USER = gql`
  mutation AUTHENTICATE_USER($username: String!, $password: String!) {
    authenticate(username: $username, password: $password) {
      ok
      errors {
        message
      }
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation LOGOUT_USER {
    logout {
      ok
      errors {
        message
      }
    }
  }
`;
