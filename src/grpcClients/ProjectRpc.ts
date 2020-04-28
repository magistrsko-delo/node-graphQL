import grpc from 'grpc';
import services from '../proto/project-metadata/projectmetadata_service_grpc_pb';
import {
    ProjectDeleteResponse,
    ProjectIdRequest,
    ProjectResponse,
    ProjectResponseRepeated, UpdateProjectRequest
} from '../proto/project-metadata/projectmetadata_service_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import {UpdateProjectMetadata} from "../graph/schemas/ProjectMetadata";
import {ConfigModel} from "../Models/Convig-model";
import {ConfigEnv} from "../config";

export class ProjectRpc {
    client: services.ProjectMetadataClient

    constructor() {
        const config: ConfigModel = ConfigEnv.getConfig();
        try {
            this.client = new services.ProjectMetadataClient(config.projectMetadataGrpcServer + ':' + config.projectMetadataGrpcPort, grpc.credentials.createInsecure());
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
                    return resolve(rsp);
                })
            }
        )
    }

    public async getOneProject(projectId: number): Promise<ProjectResponse>{
        const projectRequest: ProjectIdRequest = new ProjectIdRequest();
        projectRequest.setProjectid(projectId);

        return new Promise<ProjectResponse>(
            (resolve, reject) => {
                this.client.getProject(projectRequest, (err, rsp)=>{
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rsp);
                })
            }
        )
    }

    public async UpdateProject(project: UpdateProjectMetadata): Promise<ProjectResponse>{

        const updateRequest: UpdateProjectRequest = new UpdateProjectRequest();
        updateRequest.setProjectid(project.projectId);
        updateRequest.setName(project.name);
        updateRequest.setThumbnail(project.thumbnail);
        updateRequest.setCreatedat(project.createdAt);

        return new Promise<ProjectResponse>(
            (resolve, reject) => {
                this.client.updateProject(updateRequest, (err, rsp)=>{
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rsp);
                })
            }
        )
    }

    public async deleteProject(projectId: number): Promise<ProjectDeleteResponse>{
        const projectDeleteRequest: ProjectIdRequest = new ProjectIdRequest();
        projectDeleteRequest.setProjectid(projectId);

        return new Promise<ProjectDeleteResponse>(
            (resolve, reject) => {
                this.client.deleteProject(projectDeleteRequest, (err, rsp)=>{
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rsp);
                })
            }
        )
    }


}