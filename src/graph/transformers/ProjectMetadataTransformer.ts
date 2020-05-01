import {ProjectmetadataModel} from "../../Models/projectmetadata-model";
import {ProjectResponse} from "../../proto/project-metadata/projectmetadata_service_pb";


export class ProjectMetadataTransformer {

    public static TransformOneProject(project: ProjectResponse): ProjectmetadataModel {
        return new ProjectmetadataModel(project.getProjectid(), project.getName(), project.getThumbnail(), project.getCreatedat(), project.getUpdatedat());
    }

    public static TransformAllProjectMetadata(projectsRsp: Array<ProjectResponse>): Array<ProjectmetadataModel> {
        let  projectMetadata: Array<ProjectmetadataModel> = [];

        for (let project of projectsRsp) {
            projectMetadata.push(
                this.TransformOneProject(project)
            )
        }
        return projectMetadata
    }
}
