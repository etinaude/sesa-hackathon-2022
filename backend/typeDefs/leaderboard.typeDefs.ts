import { gql } from "apollo-server";

export const leaderboardTypeDef = gql`

type Leaderboard {
    _id: ID
    name: String
    time: String
    image: String
}

input LeaderboardInput {
    name: String
    time: String
    image: String
}

type Query {
    leaderboards: [Leaderboard]
}

type Mutation {
    createLeaderboardTime(leaderboardInput: LeaderboardInput): Leaderboard!
}
`