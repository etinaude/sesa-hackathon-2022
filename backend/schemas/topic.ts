import { gql } from "apollo-server";

export const topicSchema = gql`
  type Topic {
    id: ID!
    name: String!
    messages: [Message!]!
    date: String!
  }

  type Query {
    topics: [Topic]
  }

`;

export const topicResolver = {
  Query: {
    topics: () => topicData,
  },
};

export const topicData = [
  {
    id: "123",
    name: "name",
    messages: [],
    date: "2022-07-23T14:03:30Z"
  }
];
