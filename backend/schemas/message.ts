import { gql } from "apollo-server";

export const messageSchema = gql`
  scalar Date
 
  type Message {
    id: ID!
    message: String!
    date: String! 
    reply: ID
  }

  type Query {
    messages: [Message]
  }

`;

export const messageResolver = {
  Query: {
    messages: () => messageData,
  },
};

export const messageData = [
  {
    id:  "123",
    message: "hello",
    date: "2022-07-23T14:03:30Z"
  }
];
