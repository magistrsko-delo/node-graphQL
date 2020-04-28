import {Arg, FieldResolver, Mutation, Query, Resolver, Root} from "type-graphql";

import {ProjectMetadata, UpdateProjectMetadata} from "../schemas/ProjectMetadata";
import {ProjectRpc} from "../../grpcClients/ProjectRpc";
import {ProjectmetadataModel} from "../../Models/projectmetadata-model";
import {ProjectMetadataTransformer} from "../transformers/ProjectMetadataTransformer";

@Resolver(of => ProjectMetadata)
export class ProjectMetadataResolver {

    projectRpcClient: ProjectRpc
    constructor() {
        this.projectRpcClient = new ProjectRpc()
    }

    @Query(returns => [ProjectMetadata], { nullable: false })
    async projectsMetadata(): Promise<Array<ProjectmetadataModel>> {
        try {
            let projectsRsp = await this.projectRpcClient.getAllProjects();
            return ProjectMetadataTransformer.TransformAllProjectMetadata(projectsRsp.getDataList());
        } catch (e) {
            throw new Error(e);
        }
    }

    @Query(returns => ProjectMetadata, { nullable: true })
    async oneProjectMetadata(@Arg("projectId") projectId: number): Promise<ProjectmetadataModel | null> {
        try {
            let projectsRsp = await this.projectRpcClient.getOneProject(projectId);
            return ProjectMetadataTransformer.TransformOneProject(projectsRsp);
        } catch (e) {
            return null;
        }
    }

    @Mutation(returns => ProjectMetadata, {nullable: false})
    async updateProjectMetadata(@Arg("projectUpdate") projectUpdate: UpdateProjectMetadata): Promise<ProjectmetadataModel> {
        try {
            let projectUpdateRsp = await this.projectRpcClient.UpdateProject(projectUpdate);
            return ProjectMetadataTransformer.TransformOneProject(projectUpdateRsp);
        } catch (e) {
            throw new Error(e);
        }
    }

    @Mutation(returns => [ProjectMetadata], {nullable: false})
    async deleteProject(@Arg("projectId") projectId: number): Promise<Array<ProjectmetadataModel>> {
        try {
            await this.projectRpcClient.deleteProject(projectId);
            let projectsRsp = await this.projectRpcClient.getAllProjects();
            return ProjectMetadataTransformer.TransformAllProjectMetadata(projectsRsp.getDataList());
        } catch (e) {
            throw new Error("delete for project unavaialable");
        }
    }

}