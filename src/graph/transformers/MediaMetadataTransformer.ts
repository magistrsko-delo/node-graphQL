import {MediaMetadataResponse} from "../../proto/media-metadata/mediametadata_service_pb";
import {MediametadataModel} from "../../Models/mediametadata-model";

export class MediaMetadataTransformer {

    public static TransformMedia(media: MediaMetadataResponse): MediametadataModel {
        return new MediametadataModel(
            media.getMediaid(),
            media.getName(),
            media.getSitename(),
            media.getLength(),
            media.getStatus(),
            media.getThumbnail(),
            media.getProjectid(),
            media.getAwsbucketwholemedia(),
            media.getAwsstoragenamewholemedia(),
            media.getCreatedat(),
            media.getUpdatedat(),
            media.getKeywordsList()
        );
    }

    public static TransformMediasMetadata(mediasRsp: Array<MediaMetadataResponse>): Array<MediametadataModel> {
        let mediasMetadata: Array<MediametadataModel> = [];

        for(let media of mediasRsp) {
            mediasMetadata.push(
                this.TransformMedia(media)
            )
        }

        return mediasMetadata;
    }

}