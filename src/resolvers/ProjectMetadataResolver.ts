import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";

import {ProjectMetadata} from "../schemas/ProjectMetadata";
import {ProjectResponse, ProjectResponseRepeated} from "../proto/project-metadata/projectmetadata_service_pb";
import {ProjectRpc} from "../grpcClients/ProjectRpc";
import {ProjectmetadataModel} from "../Models/projectmetadata-model";

@Resolver(of => ProjectMetadata)
export class ProjectMetadataResolver {

    projectRpcClient: ProjectRpc
    constructor() {
        this.projectRpcClient = new ProjectRpc()
    }

    @Query(returns => [ProjectMetadata], { nullable: false })
    async projectMetadata(): Promise<Array<ProjectmetadataModel>> {
        try {
            const  projectMetadata: Array<ProjectmetadataModel> = []

            let projectsRsp = await this.projectRpcClient.getAllProjects();

            for (let project of projectsRsp.getDataList()) {
                projectMetadata.push(
                    new ProjectmetadataModel(project.getProjectid(), project.getName(), project.getName(), project.getCreatedat(), project.getUpdatedat())
                )
            }

            return projectMetadata;
        } catch (e) {
            throw new Error(e);
        }
    }

}