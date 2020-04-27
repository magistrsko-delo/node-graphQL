import grpc from 'grpc';
import services from '../proto/project-metadata/projectmetadata_service_grpc_pb';
import {ProjectResponse, ProjectResponseRepeated} from '../proto/project-metadata/projectmetadata_service_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

export class ProjectRpc {
    client: services.ProjectMetadataClient

    constructor() {
        try {
            this.client = new services.ProjectMetadataClient(`0.0.0.0:9005`, grpc.credentials.createInsecure());
        } catch (e) {
            console.log(e);
        }

    }

    public async getAllProjects(): Promise<ProjectResponseRepeated>{
        return new Promise<ProjectResponseRepeated>(
            (resolve, reject) => {
                this.client.getAllProjects(new Empty(), (err, rsp) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rsp)
                })
            }
        )
    }

}