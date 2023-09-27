import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloLogPlugin } from 'apollo-log';
import { schema } from '../schemas/author.js';

const server = new ApolloServer({
    schema,
    plugins: [ApolloLogPlugin({
        events: { executionDidStart: true }
    })]
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 8082 },
});

console.log(`🚀 Author service ready at: ${url}`);