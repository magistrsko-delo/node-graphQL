// package: 
// file: src/proto/project-metadata/projectmetadata_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ProjectIdRequest extends jspb.Message { 
    getProjectid(): number;
    setProjectid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectIdRequest): ProjectIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectIdRequest;
    static deserializeBinaryFromReader(message: ProjectIdRequest, reader: jspb.BinaryReader): ProjectIdRequest;
}

export namespace ProjectIdRequest {
    export type AsObject = {
        projectid: number,
    }
}

export class UpdateProjectRequest extends jspb.Message { 
    getProjectid(): number;
    setProjectid(value: number): void;

    getThumbnail(): string;
    setThumbnail(value: string): void;

    getName(): string;
    setName(value: string): void;

    getCreatedat(): number;
    setCreatedat(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateProjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateProjectRequest): UpdateProjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateProjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateProjectRequest;
    static deserializeBinaryFromReader(message: UpdateProjectRequest, reader: jspb.BinaryReader): UpdateProjectRequest;
}

export namespace UpdateProjectRequest {
    export type AsObject = {
        projectid: number,
        thumbnail: string,
        name: string,
        createdat: number,
    }
}

export class ProjectResponse extends jspb.Message { 
    getProjectid(): number;
    setProjectid(value: number): void;

    getName(): string;
    setName(value: string): void;

    getThumbnail(): string;
    setThumbnail(value: string): void;

    getCreatedat(): number;
    setCreatedat(value: number): void;

    getUpdatedat(): number;
    setUpdatedat(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectResponse): ProjectResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectResponse;
    static deserializeBinaryFromReader(message: ProjectResponse, reader: jspb.BinaryReader): ProjectResponse;
}

export namespace ProjectResponse {
    export type AsObject = {
        projectid: number,
        name: string,
        thumbnail: string,
        createdat: number,
        updatedat: number,
    }
}

export class ProjectResponseRepeated extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<ProjectResponse>;
    setDataList(value: Array<ProjectResponse>): void;
    addData(value?: ProjectResponse, index?: number): ProjectResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectResponseRepeated.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectResponseRepeated): ProjectResponseRepeated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectResponseRepeated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectResponseRepeated;
    static deserializeBinaryFromReader(message: ProjectResponseRepeated, reader: jspb.BinaryReader): ProjectResponseRepeated;
}

export namespace ProjectResponseRepeated {
    export type AsObject = {
        dataList: Array<ProjectResponse.AsObject>,
    }
}

export class ProjectDeleteResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectDeleteResponse): ProjectDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectDeleteResponse;
    static deserializeBinaryFromReader(message: ProjectDeleteResponse, reader: jspb.BinaryReader): ProjectDeleteResponse;
}

export namespace ProjectDeleteResponse {
    export type AsObject = {
        message: string,
    }
}
