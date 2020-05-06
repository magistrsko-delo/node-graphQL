import grpc from 'grpc';
import services from '../proto/sequence-metadata/sequencemetadata_service_grpc_pb';
import {ConfigModel} from "../Models/Convig-model";
import {ConfigEnv} from "../config";
import {
    GetProjectSequencesRequest,
    NewSequenceRequest,
    ProjectSequencesResponse,
    SequenceIdRequest,
    SequenceMediaRequest,
    SequenceMediaResponse,
    StatusResponse,
    UpdateSequenceRequest
} from "../proto/sequence-metadata/sequencemetadata_service_pb";
import {InputSequenceType} from "../graph/schemas/SequenceMetadata";

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

    public async addMediaToSequence(sequenceId: number, mediaId: number): Promise<StatusResponse> {
        const addMediaReq: SequenceMediaRequest = new SequenceMediaRequest();
        addMediaReq.setMediaid(mediaId);
        addMediaReq.setSequenceid(sequenceId);

        return new Promise<StatusResponse>(
            (resolve, reject) => {
                this.client.addMediaToSequence(addMediaReq, (error, response) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(response);
                })
            }
        );
    }

    public async deleteMediaFromSequence(sequenceId: number, mediaId: number): Promise<StatusResponse> {
        const deleteMediaReq: SequenceMediaRequest = new SequenceMediaRequest();
        deleteMediaReq.setMediaid(mediaId);
        deleteMediaReq.setSequenceid(sequenceId);

        return new Promise<StatusResponse>(
            (resolve, reject) => {
                this.client.deleteMediaFromSequence(deleteMediaReq, (error, response) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(response);
                });
            }
        );
    }

    public async createSequence(newSequenceData: InputSequenceType): Promise<SequenceMediaResponse> {
        const newSequenceRequest: NewSequenceRequest = new NewSequenceRequest();
        newSequenceRequest.setName(newSequenceData.name);
        newSequenceRequest.setProjectid(newSequenceData.projectId);
        newSequenceRequest.setThumbnail(newSequenceData.thumbnail);

        return new Promise<SequenceMediaResponse>(
            (resolve, reject) => {
                this.client.createSequence(newSequenceRequest, (error, response) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(response);
                });
            }
        );
    }

    public async updateSequence(newSequenceData: InputSequenceType): Promise<SequenceMediaResponse> {
        const updateSequenceRequest: UpdateSequenceRequest = new UpdateSequenceRequest();

        updateSequenceRequest.setName(newSequenceData.name);
        updateSequenceRequest.setProjectid(newSequenceData.projectId);
        updateSequenceRequest.setThumbnail(newSequenceData.thumbnail);
        updateSequenceRequest.setStatus(newSequenceData.status);
        updateSequenceRequest.setSequenceid(newSequenceData.sequenceId);

        return new Promise<SequenceMediaResponse>(
            (resolve, reject) => {
                this.client.updateSequence(updateSequenceRequest, (error, response) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(response);
                });
            }
        );
    }

    public async deleteSequence(sequenceId: number): Promise<StatusResponse> {
        const deleteSequenceReq: SequenceIdRequest = new SequenceIdRequest();
        deleteSequenceReq.setSequenceid(sequenceId);

        return new Promise<StatusResponse>(
            (resolve, reject) => {
                this.client.deleteSequence(deleteSequenceReq, (error, response) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(response);
                });
            }
        );
    }
}
