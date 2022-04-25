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
