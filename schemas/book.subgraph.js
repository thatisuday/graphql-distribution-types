import { buildSubgraphSchema } from '@apollo/subgraph';
import gql from 'graphql-tag';

const typeDefs = gql`#graphql
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key"])

    type Book @key(fields: "id") {
        id: String
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


export const schema = buildSubgraphSchema({ typeDefs, resolvers });