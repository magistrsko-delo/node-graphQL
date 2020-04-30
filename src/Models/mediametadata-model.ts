import {Model} from "./Model";

export class MediametadataModel{
    mediaId: number;
    name: string;
    siteName: string;
    length: number;
    status: number;
    thumbnail?: string;
    projectId: number;
    awsBucketWholeMedia?: string;
    awsStorageNameWholeMedia?: string;
    createdAt: number;
    updatedAt: number;
    keywords?: string[];
    constructor(
        mediaId: number,
        name: string,
        siteName: string,
        length: number,
        status: number,
        thumbnail: string,
        projectId: number,
        awsBucketWholeMedia: string,
        awsStorageNameWholeMedia: string,
        createdAt: number,
        updatedAt: number,
        keywords: string[]
    ) {
        this.mediaId = mediaId;
        this.name = name;
        this.siteName = siteName;
        this.length = length;
        this.status = status;
        this.thumbnail = thumbnail;
        this.projectId = projectId;
        this.awsBucketWholeMedia = awsBucketWholeMedia;
        this.awsStorageNameWholeMedia = awsStorageNameWholeMedia;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.keywords = keywords;
    }

}