import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloLogPlugin } from 'apollo-log';
import { schema } from '../schemas/book.js';

const server = new ApolloServer({
    schema,
    plugins: [ApolloLogPlugin({
        events: { executionDidStart: true }
    })]
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 8081 },
});

console.log(`🚀 Book service ready at: ${url}`);