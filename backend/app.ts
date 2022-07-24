import { ApolloServer } from "apollo-server";
import mongoose from 'mongoose';
import { messageTypeDef } from "./typeDefs/message.typeDefs";
import { messageResolver } from "./resolvers/message.resolvers";

const MONGODB_URI = "mongodb+srv://jadejaguar:jadejaguarsesahack2022@cluster0.tkjkt8t.mongodb.net/test?retryWrites=true&w=majority";

const server = new ApolloServer({
    typeDefs: [messageTypeDef],
    resolvers: [messageResolver]
});

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("MongoDB connection successful");
        return server.listen({ port: 4000 })
    })
    .then((res) => {
        console.log(`server running at ${res.url}`);
    });