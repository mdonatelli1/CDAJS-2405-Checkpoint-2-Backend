import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";

import { dataSource } from "./config/db";
import { CountryMutations } from "./resolvers/CountryMutations";
import { CountryQueries } from "./resolvers/CountryQueries";

async function launchApolloServer() {
    const schema = await buildSchema({
        resolvers: [CountryQueries, CountryMutations],
    });

    const server = new ApolloServer({
        schema,
    });

    await dataSource.initialize();

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`Le serveur a démarré à l'url : ${url}`);
}
launchApolloServer();
