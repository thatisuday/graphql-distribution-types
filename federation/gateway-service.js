import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildHTTPExecutor } from '@graphql-tools/executor-http';
import { schemaFromExecutor } from '@graphql-tools/wrap';
import { stitchSchemas } from '@graphql-tools/stitch';

const getExecutableSubSchema = async (endpoint) => {
    const executor = buildHTTPExecutor({
        endpoint
    });

    const schema = await schemaFromExecutor(executor);

    return {
        schema,
        executor
    }
}

const getGatewaySchema = async () => {
    const bookSubSchema = await getExecutableSubSchema('http://localhost:8081');
    const authorSubSchema = await getExecutableSubSchema('http://localhost:8082')

    const gatewaySchema = stitchSchemas({
        subschemas: [bookSubSchema, authorSubSchema]
    });

    return gatewaySchema;
}

const server = new ApolloServer({
    schema: await getGatewaySchema(),
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 8080 },
});

console.log(`🚀 Gateway service ready at: ${url}`);