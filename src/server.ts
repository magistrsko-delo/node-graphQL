import "reflect-metadata";
import { ApolloServer, Config } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import express from "express";
import depthLimit from "graphql-depth-limit";
import cors from "cors";
import compression from "compression";
import { createServer } from "http";

import {ProjectMetadataResolver} from "./graph/resolvers/ProjectMetadataResolver";
import {ConfigEnv} from "./config";
import {MediaRpc} from "./grpcClients/MediaRpc";
import {MediaMetadataResolver} from "./graph/resolvers/MediaMetadataResolver";

const app = express();
const port = process.env.PORT || 3000;

async function main() {
    ConfigEnv.InitConfig()

    const schema = await buildSchema({
        resolvers: [ProjectMetadataResolver, MediaMetadataResolver],
        emitSchemaFile: true,
    })

    const serverConfig: Config = {
        schema,
        playground: {
            settings: {
                'editor.theme': 'dark', // change to light if you prefer
                'editor.cursorShape': 'line', // possible values: 'line', 'block', 'underline'
            },
        },
        validationRules: [depthLimit(7)],
    };

    /*const mediaRpc = new MediaRpc();
    try {
        const medias = await mediaRpc.getLiveMedias();
        console.log(medias);
    } catch (e) {
        console.log(e);
    }*/



    const server = new ApolloServer(serverConfig);

    app.use('*', cors());
    app.use(compression()); // for faster app data compression
    server.applyMiddleware({ app, path: '/graphql' });
    const httpServer = createServer(app);
    await httpServer.listen(
        { port: port },
        (): void => {
            console.log(`\n🚀      GraphQL is now running on http://localhost:` + port  +`/graphql`)
            console.log("Config: ", ConfigEnv.getConfig());
        }
    );
}

main()