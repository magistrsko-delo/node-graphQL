
interface IProjectmetadataModel {
    projectId: number;
    name: string;
    thumbnail: string;
    createdAt: number;
    updatedAt: number;
}

export class ProjectmetadataModel implements  IProjectmetadataModel{
    projectId: number;
    name: string;
    thumbnail: string;
    createdAt: number;
    updatedAt: number;
    constructor(projectId: number, name: string, thumbnail: string, createdAt: number, updatedAt: number) {
        this.projectId = projectId;
        this.name = name;
        this.thumbnail = thumbnail;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}