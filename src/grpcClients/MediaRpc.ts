import grpc from 'grpc';
import services from '../proto/media-metadata/mediametadata_service_grpc_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import {ConfigModel} from "../Models/Convig-model";
import {ConfigEnv} from "../config";
import {
    GetMediaMetadataRequest, GetOneProjectMedia, GetProjectMediasRequest,
    MediaMetadataResponse,
    MediaMetadataResponseRepeated, UpdateMediaRequest
} from "../proto/media-metadata/mediametadata_service_pb";
import {UpdateMedia} from "../graph/schemas/MediaMetadata";

export class MediaRpc {
    client: services.MediaMetadataClient

    constructor() {
        const config: ConfigModel = ConfigEnv.getConfig();
        try {
            this.client = new services.MediaMetadataClient(config.mediaMetadataGrpcServer + ':' + config.mediaMetadataGrpcPort, grpc.credentials.createInsecure());
        } catch (e) {
            console.log(e);
        }
    }

    public async getLiveMedias(): Promise<MediaMetadataResponseRepeated>{
        return new Promise<MediaMetadataResponseRepeated>(
            (resolve, reject) => {
                this.client.getLiveMedias(new Empty(), (err, rsp) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rsp);
                })
            }
        )
    }

    public async getMediasInProgress(): Promise<MediaMetadataResponseRepeated>{
        return new Promise<MediaMetadataResponseRepeated>(
            (resolve, reject) => {
                this.client.getMediasInProgress(new Empty(), (err, rsp) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rsp);
                })
            }
        )
    }

    public async getMedia(mediaId: number): Promise<MediaMetadataResponse>{
        let mediaMetadataRequest: GetMediaMetadataRequest = new GetMediaMetadataRequest();
        mediaMetadataRequest.setMediaid(mediaId);

        return new Promise<MediaMetadataResponse>(
            (resolve, reject) => {
                this.client.getMediaMetadata(mediaMetadataRequest, (err, rsp) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rsp);
                })
            }
        )
    }

    public async getProjectMedias(projectId: number): Promise<MediaMetadataResponseRepeated>{
        const projectMediasRequest: GetProjectMediasRequest = new GetProjectMediasRequest();
        projectMediasRequest.setProjectid(projectId);
        return new Promise<MediaMetadataResponseRepeated>(
            (resolve, reject) => {
                this.client.getProjectMediasMetadata(projectMediasRequest, (err, rsp) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rsp);
                })
            }
        )
    }

    public async getOneProjectMedias(projectId: number, mediaId: number): Promise<MediaMetadataResponse>{
        const projectMediasRequest: GetOneProjectMedia = new GetOneProjectMedia();
        projectMediasRequest.setProjectid(projectId);
        projectMediasRequest.setMediaid(mediaId);
        return new Promise<MediaMetadataResponse>(
            (resolve, reject) => {
                this.client.getOneProjectMediasMetadata(projectMediasRequest, (err, rsp) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rsp);
                })
            }
        )
    }

    public async getAllMedia(): Promise<MediaMetadataResponseRepeated>{
        return new Promise<MediaMetadataResponseRepeated>(
            (resolve, reject) => {
                this.client.getAllMediaMetadata(new Empty(), (err, rsp) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rsp);
                })
            }
        )
    }

    public async updateMedia(mediaData: UpdateMedia): Promise<MediaMetadataResponse>{
        let updateMediaRequest: UpdateMediaRequest = new UpdateMediaRequest();
        updateMediaRequest.setMediaid(mediaData.mediaId);
        updateMediaRequest.setName(mediaData.name);
        updateMediaRequest.setSitename(mediaData.siteName);
        updateMediaRequest.setLength(mediaData.length);
        updateMediaRequest.setStatus(mediaData.status);
        updateMediaRequest.setThumbnail(mediaData.thumbnail);
        updateMediaRequest.setProjectid(mediaData.projectId);
        updateMediaRequest.setAwsbucketwholemedia(mediaData.awsBucketWholeMedia);
        updateMediaRequest.setAwsstoragenamewholemedia(mediaData.awsStorageNameWholeMedia);
        updateMediaRequest.setCreatedat(mediaData.createdAt);

        return new Promise<MediaMetadataResponse>(
            (resolve, reject) => {
                this.client.updateMediaMetadata(updateMediaRequest, (err, rsp) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rsp);
                })
            }
        )
    }

}