import { buildSubgraphSchema } from '@apollo/subgraph';
import gql from 'graphql-tag';

const typeDefs = gql`#graphql
    extend schema
        @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key"])

    type Author @key(fields: "id") {
        id: String
        name: String
        email: String
    }

    type Query {
        authors: [Author]
    }

`;

const authors = [
    {
        name: "Kate Chopin",
        email: "kate@gmail.com",
    },
    {
        name: "Paul Auster",
        email: "paul@gmail.com",
    },
];

const resolvers = {
    Query: {
        authors: () => authors,
    },
};

export const schema = buildSubgraphSchema({ typeDefs, resolvers });
