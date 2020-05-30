import * as dotenv from "dotenv";
import {ConfigModel} from "./Models/Convig-model";

let config: ConfigModel

export class ConfigEnv {

    public static InitConfig(){
        dotenv.config();
        config = new ConfigModel(
            process.env.NODE_ENV,
            process.env.APP_ID,
            process.env.PROJECT_METADATA_GRPC_SERVER,
            process.env.PROJECT_METADATA_GRPC_PORT,
            process.env.MEDIA_METADATA_GRPC_SERVER,
            process.env.MEDIA_METADATA_GRPC_PORT,
            process.env.SEQUENCE_METADATA_GRPC_SERVER,
            process.env.SEQUENCE_METADATA_GRPC_PORT,
            process.env.SEQUENCE_MANAGER_URL,
            process.env.PROJECT_MEDIA_MANAGER_URL,
            process.env.JAEGER_AGENT_HOST,
            process.env.JAEGER_AGENT_PORT,
            process.env.JAEGER_COLLECTOR,
        )
    }

    public static getConfig(): ConfigModel {
        return config;
    }

}
