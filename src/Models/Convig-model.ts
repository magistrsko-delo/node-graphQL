export class ConfigModel {
    appId: string | undefined;
    nodeEnv: string | undefined;
    projectMetadataGrpcServer: string | undefined;
    projectMetadataGrpcPort: string | undefined;
    mediaMetadataGrpcServer: string | undefined;
    mediaMetadataGrpcPort: string | undefined;
    sequenceMetadataGrpcServer: string | undefined;
    sequenceMetadataGrpcPort: string | undefined;
    sequenceManagerUrl: string | undefined;
    projectMediaManagerUrl: string | undefined;
    jaegerAgentHost: string | undefined;
    jaegerAgentPort: string | undefined;
    jaegerCollector: string | undefined;

    constructor(nodeEnv: string | undefined,
                appId: string | undefined,
                projectMetadataGrpcServer: string | undefined,
                projectMetadataGrpcPort: string | undefined,
                mediaMetadataGrpcServer: string | undefined,
                mediaMetadataGrpcPort: string | undefined,
                sequenceMetadataGrpcServer: string | undefined,
                sequenceMetadataGrpcPort: string | undefined,
                sequenceManagerUrl: string | undefined,
                projectMediaManagerUrl: string | undefined,
                jaegerAgentHost: string | undefined,
                jaegerAgentPort: string | undefined,
                jaegerCollector: string | undefined
    ) {
        this.appId = appId;
        this.nodeEnv = nodeEnv;
        this.projectMetadataGrpcServer = projectMetadataGrpcServer;
        this.projectMetadataGrpcPort = projectMetadataGrpcPort;
        this.mediaMetadataGrpcServer = mediaMetadataGrpcServer;
        this.mediaMetadataGrpcPort = mediaMetadataGrpcPort;
        this.sequenceMetadataGrpcServer = sequenceMetadataGrpcServer;
        this.sequenceMetadataGrpcPort = sequenceMetadataGrpcPort;
        this.sequenceManagerUrl = sequenceManagerUrl;
        this.projectMediaManagerUrl = projectMediaManagerUrl;
        this.jaegerAgentHost = jaegerAgentHost;
        this.jaegerAgentPort = jaegerAgentPort;
        this.jaegerCollector = jaegerCollector;
    }
}
