import "reflect-metadata";
import { ApolloServer, Config } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import express from "express";
import depthLimit from "graphql-depth-limit";
import cors from "cors";
import compression from "compression";
import { createServer } from "http";
import { RpcClientRegistry, Settings } from 'grpc-client-ts';

import ProjectResolver from "./resolvers/ProjectResolver";
import TaskResolver from "./resolvers/TaskResolver";
import {settings} from "cluster";
import {ProjectRpc} from "./grpcClients/ProjectRpc";
import {ProjectResponseRepeated} from "./proto/project-metadata/projectmetadata_service_pb";

const app = express();
const port = process.env.PORT || 3000;

async function main() {
    const schema = await buildSchema({
        resolvers: [ProjectResolver ,TaskResolver],
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

    const projectRpc: ProjectRpc = new ProjectRpc()
    projectRpc.getAllProject()
        .then(
            (rsp: ProjectResponseRepeated) => {
                console.log("in rsp: ")
                console.log(rsp.getDataList());
            }
        ).catch( err => {
            console.log(err)
    })

    const server = new ApolloServer(serverConfig);

    app.use('*', cors());
    app.use(compression()); // for faster app data compression
    server.applyMiddleware({ app, path: '/graphql' });
    const httpServer = createServer(app);
    await httpServer.listen(
        { port: port },
        (): void => {
            console.log(`\n🚀      GraphQL is now running on http://localhost:` + port  +`/graphql`)
            console.log(__dirname);
        }
    );
}

main()