import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];


const resolvers = {
    Query: {
        books: () => books,
    },
};


export const schema = makeExecutableSchema({ typeDefs, resolvers });