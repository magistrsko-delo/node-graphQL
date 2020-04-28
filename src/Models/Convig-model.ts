export class ConfigModel {
    appId: string | undefined;
    nodeEnv: string | undefined;
    projectMetadataGrpcServer: string | undefined;
    projectMetadataGrpcPort: string | undefined;
    mediaMetadataGrpcServer: string | undefined;
    mediaMetadataGrpcPort: string | undefined;

    constructor(nodeEnv: string | undefined,
                appId: string | undefined,
                projectMetadataGrpcServer: string | undefined,
                projectMetadataGrpcPort: string | undefined,
                mediaMetadataGrpcServer: string | undefined,
                mediaMetadataGrpcPort: string | undefined
    ) {
        this.appId = appId;
        this.nodeEnv = nodeEnv;
        this.projectMetadataGrpcServer = projectMetadataGrpcServer;
        this.projectMetadataGrpcPort = projectMetadataGrpcPort;
        this.mediaMetadataGrpcServer = mediaMetadataGrpcServer;
        this.mediaMetadataGrpcPort = mediaMetadataGrpcPort;
    }
}