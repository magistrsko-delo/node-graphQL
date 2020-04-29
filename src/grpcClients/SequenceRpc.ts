import grpc from 'grpc';
import services from '../proto/sequence-metadata/sequencemetadata_service_grpc_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import {ConfigModel} from "../Models/Convig-model";
import {ConfigEnv} from "../config";
import {
    GetProjectSequencesRequest,
    ProjectSequencesResponse
} from "../proto/sequence-metadata/sequencemetadata_service_pb";

export class SequenceRpc {
    client: services.SequenceMetadataClient

    constructor() {
        const config: ConfigModel = ConfigEnv.getConfig();
        try {
            this.client = new services.SequenceMetadataClient(config.sequenceMetadataGrpcServer + ':' + config.sequenceMetadataGrpcPort, grpc.credentials.createInsecure());
        } catch (e) {
            console.log(e);
        }
    }

    public async getProjectSeqeuences(projectId: number): Promise<ProjectSequencesResponse>{
        const getProjectSequenceRequest = new GetProjectSequencesRequest();
        getProjectSequenceRequest.setProjectid(projectId);

        return new Promise<ProjectSequencesResponse>(
            (resolve, reject) => {
                this.client.getProjectSequences(getProjectSequenceRequest, (err, rsp) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rsp);
                })
            }
        )
    }
}