import { mergeSchemas } from '@graphql-tools/schema';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema as bookSchema } from '../schemas/book.js';
import { schema as authorSchema } from '../schemas/author.js';

export const mergerSchema = mergeSchemas({
    schemas: [bookSchema, authorSchema]
});

const server = new ApolloServer({
    schema: mergerSchema
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 8080 },
});

console.log(`🚀 Schema-merged service ready at: ${url}`);