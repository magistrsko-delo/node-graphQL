import {Arg, Args, FieldResolver, Mutation, Query, Resolver, Root} from "type-graphql";

import {CutMediaType, GetMediaSearchArgs, MediaMetadata, UpdateMedia} from "../schemas/MediaMetadata";
import {MediaRpc} from "../../grpcClients/MediaRpc";
import {MediametadataModel} from "../../Models/mediametadata-model";
import {MediaMetadataTransformer} from "../transformers/MediaMetadataTransformer";
import {MediaMetadataResponseRepeated} from "../../proto/media-metadata/mediametadata_service_pb";
import {ProjectMediaManagerHttpClient} from "../../httpClients/ProjectMediaManagerHttpClient";

@Resolver(of => MediaMetadata)
export class MediaMetadataResolver {

    mediaRpcClient: MediaRpc;
    projectMediaManagerHttpClient: ProjectMediaManagerHttpClient;
    constructor() {
        this.mediaRpcClient = new MediaRpc();
        this.projectMediaManagerHttpClient = new ProjectMediaManagerHttpClient();
    }

    @Query(returns => [MediaMetadata], { nullable: false })
    async searchMedias(@Args() {status, mediaId, projectId}: GetMediaSearchArgs): Promise<Array<MediametadataModel>> {
        if (status && status >= 0) { // search based on status..
            try {
                let mediasMetadataRsp: MediaMetadataResponseRepeated;
                if (status === 3) {
                    mediasMetadataRsp = await this.mediaRpcClient.getLiveMedias();
                } else {
                    mediasMetadataRsp = await this.mediaRpcClient.getMediasInProgress();
                }
                return MediaMetadataTransformer.TransformMediasMetadata(mediasMetadataRsp.getDataList());
            } catch (e) {
                throw new Error(e);
            }
        } else if (projectId && projectId >= 0) {
            if (mediaId && mediaId >= 0) {
                const mediaMetadataRsp = await this.mediaRpcClient.getOneProjectMedias(projectId,mediaId);
                return [MediaMetadataTransformer.TransformMedia(mediaMetadataRsp)];

            } else {
                try {
                    let mediasMetadataRsp = await this.mediaRpcClient.getProjectMedias(projectId);
                    return MediaMetadataTransformer.TransformMediasMetadata(mediasMetadataRsp.getDataList());
                } catch (e) {
                    throw new Error(e);
                }
            }
        } else if (mediaId && mediaId >= 0) {
            try {
                const mediaMetadataRsp = await this.mediaRpcClient.getMedia(mediaId);
                return [MediaMetadataTransformer.TransformMedia(mediaMetadataRsp)];
            } catch (e) {
                throw Error(e);
            }
        } else {
            try{
                const mediasMetadataRsp = await this.mediaRpcClient.getAllMedia();
                return MediaMetadataTransformer.TransformMediasMetadata(mediasMetadataRsp.getDataList());
            } catch (e) {
                throw Error(e);
            }

        }
    }

    @Mutation(returns => [MediaMetadata], {nullable: false})
    async updateMedia(@Arg("mediaData") mediaData: UpdateMedia): Promise<Array<MediametadataModel>> {
        try {
            const updateMediaRsp = await this.mediaRpcClient.updateMedia(mediaData);
            return [MediaMetadataTransformer.TransformMedia(updateMediaRsp)];
        } catch (e) {
            throw new Error(e);
        }
    }

    @Mutation(returns => [MediaMetadata], {nullable: false})
    async cutMedia(@Arg("cutMediaInput") cutMediaInput: CutMediaType): Promise<Array<MediametadataModel>> {
        try {
            const newMediaId = await this.projectMediaManagerHttpClient.cutMedia(cutMediaInput);
            const mediaMetadataRsp = await this.mediaRpcClient.getMedia(newMediaId);
            return [MediaMetadataTransformer.TransformMedia(mediaMetadataRsp)];
        } catch (e) {
            throw new Error(e);
        }
    }

}