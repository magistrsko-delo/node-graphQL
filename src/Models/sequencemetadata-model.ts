export class SequencemetadataModel {
    sequenceId: number;
    name: string;
    projectId: number;
    thumbnail: string;
    status: number;
    createdAt: number;
    updatedAt: number;
    constructor(sequenceId: number, name: string, projectId: number, thumbnail: string, status: number, createdAt: number, updatedAt: number) {
        this.sequenceId = sequenceId;
        this.name = name;
        this.projectId = projectId;
        this.thumbnail = thumbnail;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}