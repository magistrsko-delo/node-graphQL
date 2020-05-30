import "reflect-metadata";
import { ApolloServer, Config } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import express from "express";
import depthLimit from "graphql-depth-limit";
import cors from "cors";
import compression from "compression";
import { createServer } from "http";
import * as health from '@cloudnative/health-connect'
import * as net from 'net'
var initTracer = require('jaeger-client').initTracer;
var promClient = require('prom-client');

import {ProjectMetadataResolver} from "./graph/resolvers/ProjectMetadataResolver";
import {ConfigEnv} from "./config";
import {MediaMetadataResolver} from "./graph/resolvers/MediaMetadataResolver";
import {SequenceMetadataResolver} from "./graph/resolvers/SequenceMetadataResolver";
import {ConfigModel} from "./Models/Convig-model";


const app = express();
const port = process.env.PORT || 3001;

async function main() {
    ConfigEnv.InitConfig()

    const schema = await buildSchema({
        resolvers: [ProjectMetadataResolver, MediaMetadataResolver, SequenceMetadataResolver],
    })

    const serverConfig: Config = {
        schema,
        playground: process.env.NODE_ENV !== 'production'
    };

    const server = new ApolloServer(serverConfig);

    let healthCheck = new health.HealthChecker();

    const conf: ConfigModel = ConfigEnv.getConfig();

    let liveCheck1 = new health.LivenessCheck("Media-metadata: " +  String(conf.mediaMetadataGrpcServer) + ":" + Number(conf.mediaMetadataGrpcPort), () => new Promise<void>((resolve, reject) => {
        var client = new net.Socket();
        client.connect(Number(conf.mediaMetadataGrpcPort), String(conf.mediaMetadataGrpcServer), function() {
            resolve();
        });
        client.setTimeout(4000);

        client.on('timeout', () => {
            client.destroy();
            reject(new Error("App is not functioning correctly"));
        });
    }));

    let liveCheck2 = new health.LivenessCheck("Project-metadata: " +  String(conf.projectMetadataGrpcServer) + ":" + Number(conf.projectMetadataGrpcPort), () => new Promise<void>((resolve, reject) => {
        var client = new net.Socket();
        client.connect(Number(conf.projectMetadataGrpcPort), String(conf.projectMetadataGrpcServer), function() {
            resolve();
        });
        client.setTimeout(4000);

        client.on('timeout', () => {
            client.destroy();
            reject(new Error("App is not functioning correctly"));
        });
    }));

    let liveCheck3 = new health.LivenessCheck("Sequence-metadata: " +  String(conf.sequenceMetadataGrpcServer) + ":" + Number(conf.sequenceMetadataGrpcPort), () => new Promise<void>((resolve, reject) => {
        var client = new net.Socket();
        client.connect(Number(conf.sequenceMetadataGrpcPort), String(conf.sequenceMetadataGrpcServer), function() {
            resolve();
        });
        client.setTimeout(4000);

        client.on('timeout', () => {
            client.destroy();
            reject(new Error("App is not functioning correctly"));
        });
    }));

    healthCheck.registerLivenessCheck(liveCheck1);
    healthCheck.registerLivenessCheck(liveCheck2);
    healthCheck.registerLivenessCheck(liveCheck3);

    var config = {
        serviceName: 'GQL',
        reporter: {
            collectorEndpoint: String(conf.jaegerCollector),
        },
        agentHost: String(conf.jaegerAgentHost),
        agentPort: Number(conf.jaegerAgentPort)
    };
    var options = {
        tags: {
            'GQL.version': '1.0.0',
        },
    };
    var tracer = initTracer(config, options);

    app.use('*', cors());
    app.use(compression()); // for faster app data compression
    app.use('/live', health.LivenessEndpoint(healthCheck));
    app.use('/ready', health.ReadinessEndpoint(healthCheck));
    app.use('/health', health.ReadinessEndpoint(healthCheck));
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
