import { gql } from "apollo-server";

export const busSchema = gql`
  type Bus {
    id: ID!
    code: String!
    messages: [Message!]!
  }

  type Query {
    busses: [Bus]
  }

`;

export const busResolver = {
  Query: {
    busses: () => busData,
  },
};

export const busData = [
  {
    id:  "123",
    code: "asdf",
    messages: []
  }
];
