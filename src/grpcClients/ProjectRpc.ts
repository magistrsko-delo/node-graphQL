/*import grpc from 'grpc';
import services from '../proto/projectmetadata_service_grpc_pb.d';
import {ProjectResponse, ProjectResponseRepeated} from '../proto/projectmetadata_service_pb.d';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

export class ProjectRpc {
    client: services.ProjectMetadataClient

    constructor() {
        this.client = new services.ProjectMetadataClient(`localhost:9005`, grpc.credentials.createInsecure());
    }

    public getAllProject(): Promise<ProjectResponseRepeated>{
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

}*/