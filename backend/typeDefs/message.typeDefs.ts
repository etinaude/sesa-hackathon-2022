import { gql } from "apollo-server";

export const messageTypeDef = gql`

type Message {
    _id: ID
    name: String
    content: String
    likes: Int
    isLiked: Boolean
    replies: [String]
    replyTo: String
    createdAt: String
    image: String
}

input MessageInput {
    name: String
    content: String
    image: String
}

input MessageLikesInput {
    likes: Int
    isLiked: Boolean
}

type Query {
    messages: [Message]
}

type Mutation {
    createMessage(messageInput: MessageInput): Message!
    setLikes(ID: ID!, likesInput: MessageLikesInput): Message!
}
`