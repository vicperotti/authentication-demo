import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  input CreateUserInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    confirmPassword: String!
  }

  input EditUserInput {
    firstName: String
    lastName: String
    email: String
  }

  type Session {
    user: User
  }

  type Location {
    line: Int
    number: Int
  }

  type Exception {
    stacktrace: [String]
  }

  type Extensions {
    code: String
    exception: Exception
  }

  type Error {
    message: String!
    locations: [Location]
    path: [String]
    extensions: Extensions
  }

  type Result {
    ok: Boolean
    errors: [Error]
  }

  type AuthenticationResult {
    ok: Boolean
    errors: [Error]
    user: User
  }

  type Query {
    user(id: ID!): User
    users: [User]
    session: Session
  }

  type Mutation {
    createUser(input: CreateUserInput!): Result
    updateUser(id: ID!, input: CreateUserInput!): Result
    authenticate(username: String!, password: String!): AuthenticationResult
    logout: Result
  }
`;
