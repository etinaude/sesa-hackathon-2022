import {ApolloServer, gql} from 'apollo-server'
import { messageResolver, messageSchema } from './schemas/message';
import { busSchema, busResolver } from './schemas/bus';
import { topicSchema, topicResolver } from './schemas/topic';

const baseTypeDefs = gql`
  type Query
`

const server = new ApolloServer({
//   typeDefs: [baseTypeDefs, Bus],
  typeDefs: [busSchema, messageSchema, topicSchema],
  resolvers: [busResolver, messageResolver, topicResolver],
  csrfPrevention: true,
  introspection: true,
  cache: 'bounded',
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});