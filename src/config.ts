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
            process.env.PROJECT_METADATA_GRPC_port
        )
    }

    public static getConfig(): ConfigModel {
        return config;
    }

}