// package: 
// file: src/proto/media-metadata/mediametadata_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class CreateNewMediaMetadataRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getSitename(): string;
    setSitename(value: string): void;

    getLength(): number;
    setLength(value: number): void;

    getStatus(): number;
    setStatus(value: number): void;

    getThumbnail(): string;
    setThumbnail(value: string): void;

    getProjectid(): number;
    setProjectid(value: number): void;

    getAwsbucketwholemedia(): string;
    setAwsbucketwholemedia(value: string): void;

    getAwsstoragenamewholemedia(): string;
    setAwsstoragenamewholemedia(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateNewMediaMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateNewMediaMetadataRequest): CreateNewMediaMetadataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateNewMediaMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateNewMediaMetadataRequest;
    static deserializeBinaryFromReader(message: CreateNewMediaMetadataRequest, reader: jspb.BinaryReader): CreateNewMediaMetadataRequest;
}

export namespace CreateNewMediaMetadataRequest {
    export type AsObject = {
        name: string,
        sitename: string,
        length: number,
        status: number,
        thumbnail: string,
        projectid: number,
        awsbucketwholemedia: string,
        awsstoragenamewholemedia: string,
    }
}

export class MediaMetadataResponseRepeated extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<MediaMetadataResponse>;
    setDataList(value: Array<MediaMetadataResponse>): void;
    addData(value?: MediaMetadataResponse, index?: number): MediaMetadataResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MediaMetadataResponseRepeated.AsObject;
    static toObject(includeInstance: boolean, msg: MediaMetadataResponseRepeated): MediaMetadataResponseRepeated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MediaMetadataResponseRepeated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MediaMetadataResponseRepeated;
    static deserializeBinaryFromReader(message: MediaMetadataResponseRepeated, reader: jspb.BinaryReader): MediaMetadataResponseRepeated;
}

export namespace MediaMetadataResponseRepeated {
    export type AsObject = {
        dataList: Array<MediaMetadataResponse.AsObject>,
    }
}

export class MediaMetadataResponse extends jspb.Message { 
    getMediaid(): number;
    setMediaid(value: number): void;

    getName(): string;
    setName(value: string): void;

    getSitename(): string;
    setSitename(value: string): void;

    getLength(): number;
    setLength(value: number): void;

    getStatus(): number;
    setStatus(value: number): void;

    getThumbnail(): string;
    setThumbnail(value: string): void;

    getProjectid(): number;
    setProjectid(value: number): void;

    getAwsbucketwholemedia(): string;
    setAwsbucketwholemedia(value: string): void;

    getAwsstoragenamewholemedia(): string;
    setAwsstoragenamewholemedia(value: string): void;

    clearKeywordsList(): void;
    getKeywordsList(): Array<string>;
    setKeywordsList(value: Array<string>): void;
    addKeywords(value: string, index?: number): string;

    getCreatedat(): number;
    setCreatedat(value: number): void;

    getUpdatedat(): number;
    setUpdatedat(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MediaMetadataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MediaMetadataResponse): MediaMetadataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MediaMetadataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MediaMetadataResponse;
    static deserializeBinaryFromReader(message: MediaMetadataResponse, reader: jspb.BinaryReader): MediaMetadataResponse;
}

export namespace MediaMetadataResponse {
    export type AsObject = {
        mediaid: number,
        name: string,
        sitename: string,
        length: number,
        status: number,
        thumbnail: string,
        projectid: number,
        awsbucketwholemedia: string,
        awsstoragenamewholemedia: string,
        keywordsList: Array<string>,
        createdat: number,
        updatedat: number,
    }
}

export class UpdateMediaRequest extends jspb.Message { 
    getMediaid(): number;
    setMediaid(value: number): void;

    getName(): string;
    setName(value: string): void;

    getSitename(): string;
    setSitename(value: string): void;

    getLength(): number;
    setLength(value: number): void;

    getStatus(): number;
    setStatus(value: number): void;

    getThumbnail(): string;
    setThumbnail(value: string): void;

    getProjectid(): number;
    setProjectid(value: number): void;

    getAwsbucketwholemedia(): string;
    setAwsbucketwholemedia(value: string): void;

    getAwsstoragenamewholemedia(): string;
    setAwsstoragenamewholemedia(value: string): void;

    getCreatedat(): number;
    setCreatedat(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateMediaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateMediaRequest): UpdateMediaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateMediaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateMediaRequest;
    static deserializeBinaryFromReader(message: UpdateMediaRequest, reader: jspb.BinaryReader): UpdateMediaRequest;
}

export namespace UpdateMediaRequest {
    export type AsObject = {
        mediaid: number,
        name: string,
        sitename: string,
        length: number,
        status: number,
        thumbnail: string,
        projectid: number,
        awsbucketwholemedia: string,
        awsstoragenamewholemedia: string,
        createdat: number,
    }
}

export class GetMediaMetadataRequest extends jspb.Message { 
    getMediaid(): number;
    setMediaid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMediaMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMediaMetadataRequest): GetMediaMetadataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMediaMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMediaMetadataRequest;
    static deserializeBinaryFromReader(message: GetMediaMetadataRequest, reader: jspb.BinaryReader): GetMediaMetadataRequest;
}

export namespace GetMediaMetadataRequest {
    export type AsObject = {
        mediaid: number,
    }
}

export class GetProjectMediasRequest extends jspb.Message { 
    getProjectid(): number;
    setProjectid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProjectMediasRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProjectMediasRequest): GetProjectMediasRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProjectMediasRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProjectMediasRequest;
    static deserializeBinaryFromReader(message: GetProjectMediasRequest, reader: jspb.BinaryReader): GetProjectMediasRequest;
}

export namespace GetProjectMediasRequest {
    export type AsObject = {
        projectid: number,
    }
}

export class GetOneProjectMedia extends jspb.Message { 
    getMediaid(): number;
    setMediaid(value: number): void;

    getProjectid(): number;
    setProjectid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOneProjectMedia.AsObject;
    static toObject(includeInstance: boolean, msg: GetOneProjectMedia): GetOneProjectMedia.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOneProjectMedia, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOneProjectMedia;
    static deserializeBinaryFromReader(message: GetOneProjectMedia, reader: jspb.BinaryReader): GetOneProjectMedia;
}

export namespace GetOneProjectMedia {
    export type AsObject = {
        mediaid: number,
        projectid: number,
    }
}
