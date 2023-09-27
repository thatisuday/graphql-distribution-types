import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = `#graphql
    type Author {
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

export const schema = makeExecutableSchema({ typeDefs, resolvers });
