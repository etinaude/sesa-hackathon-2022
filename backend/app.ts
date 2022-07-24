import { ApolloServer } from "apollo-server";
import mongoose from 'mongoose';
import { messageTypeDef } from "./typeDefs/message.typeDefs";
import { messageResolver } from "./resolvers/message.resolvers";
import { leaderboardTypeDef } from "./typeDefs/leaderboard.typeDefs";
import { leaderboardResolver } from "./resolvers/leaderboard.resolvers";

const MONGODB_URI = "mongodb+srv://jadejaguar:jadejaguarsesahack2022@cluster0.tkjkt8t.mongodb.net/test?retryWrites=true&w=majority";

const server = new ApolloServer({
    typeDefs: [messageTypeDef, leaderboardTypeDef],
    resolvers: [messageResolver, leaderboardResolver]
});

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("MongoDB connection successful");
        return server.listen({ port: 4000 })
    })
    .then((res) => {
        console.log(`server running at ${res.url}`);
    });