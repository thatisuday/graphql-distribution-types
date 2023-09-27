# GraphQL distribution

Learning different ways of hosting distributed GraphQL services.

### Prerequisite

```bash
$ npm install
```

## Schema Merge

When GraphQL services are modules/libraries (done for separation of concerns) but they are not hosted independently. So their schema will be merged and exposed from a single service.

```bash
$ npm run start:schema-merge
```

## Schema Stitching

When GraphQL services are hosted independently but do not share much common between each other such as shared types. In this case, a proxy or gateway service will stich the schema together at runtime and expose both services from a single endpoint.

```bash
$ npm run start:schema-stitching::book-service
$ npm run start:schema-stitching::author-service
$ npm run start:schema-stitching::gateway-service
```

## GraphQL federation

It's similar to Schema Stitching but these services can share types between each other without hardcoding the logic of merging data for these types at gateway level.

### Prerequisite

-   Install [Rover CLI](https://www.apollographql.com/docs/federation/quickstart/setup)
-   `$ cd federation`
-   Perform [Schema Composition](https://www.apollographql.com/docs/federation/quickstart/local-composition)

```bash
$ npm run start:federation::book-service
$ npm run start:federation::author-service
$ npm run start:federation::router
```
