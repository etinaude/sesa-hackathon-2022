import { gql } from "apollo-server";

export const messageSchema = gql`
  scalar Date

  type Message {
    id: ID!
    name: String!
    message: String!
    date: String!
    reply: ID
    likes: Int!
  }

  type Query {
    messages: [Message]
  }

  type Mutation {
    addMessage(
      id: ID!
      name: String!
      message: String!
      date: String!
      reply: ID
    ): Message
    setLiked(id: ID!, liked: Boolean!): Message
  }
`;

export const messageResolver = {
  Query: {
    messages: () => messageData,
  },
  Mutation: {
    addMessage: (parent, args) => {
      console.log(args);
      messageData.push(args);
    },
    setLiked: (parent, args) => {
      console.log("hit endpoint");
      const index = messageData.findIndex((x) => x.id === "123");

      if (args.liked) {
        messageData[index].likes += 1;
      } else {
        messageData[index].likes -= 1;
      }

      // Clamp to zero likes
      messageData[index].likes = Math.max(messageData[index].likes, 0);

      return messageData[index];
    },
  },
};

export const messageData = [
  {
    id: "123",
    name: "Bob",
    message: "hello",
    date: "2022-07-23T14:03:30Z",
    likes: 0,
  },
];
