import { gql } from "@apollo/client";

export const GET_SESSION = gql`
  query GET_SESSION {
    session {
      user {
        firstName
        lastName
        email
        id
      }
    }
  }
`;

export const GET_USERS = gql`
  query GET_USERS {
    users {
      id
      email
      firstName
      lastName
    }
  }
`;
