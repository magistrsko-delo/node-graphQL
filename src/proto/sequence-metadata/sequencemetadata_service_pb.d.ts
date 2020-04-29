// package: 
// file: src/proto/sequence-metadata/sequencemetadata_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetProjectSequencesRequest extends jspb.Message { 
    getProjectid(): number;
    setProjectid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProjectSequencesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProjectSequencesRequest): GetProjectSequencesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProjectSequencesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProjectSequencesRequest;
    static deserializeBinaryFromReader(message: GetProjectSequencesRequest, reader: jspb.BinaryReader): GetProjectSequencesRequest;
}

export namespace GetProjectSequencesRequest {
    export type AsObject = {
        projectid: number,
    }
}

export class SequenceIdRequest extends jspb.Message { 
    getSequenceid(): number;
    setSequenceid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SequenceIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SequenceIdRequest): SequenceIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SequenceIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SequenceIdRequest;
    static deserializeBinaryFromReader(message: SequenceIdRequest, reader: jspb.BinaryReader): SequenceIdRequest;
}

export namespace SequenceIdRequest {
    export type AsObject = {
        sequenceid: number,
    }
}

export class SequenceMediaRequest extends jspb.Message { 
    getSequenceid(): number;
    setSequenceid(value: number): void;

    getMediaid(): number;
    setMediaid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SequenceMediaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SequenceMediaRequest): SequenceMediaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SequenceMediaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SequenceMediaRequest;
    static deserializeBinaryFromReader(message: SequenceMediaRequest, reader: jspb.BinaryReader): SequenceMediaRequest;
}

export namespace SequenceMediaRequest {
    export type AsObject = {
        sequenceid: number,
        mediaid: number,
    }
}

export class NewSequenceRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getProjectid(): number;
    setProjectid(value: number): void;

    getThumbnail(): string;
    setThumbnail(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewSequenceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewSequenceRequest): NewSequenceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewSequenceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewSequenceRequest;
    static deserializeBinaryFromReader(message: NewSequenceRequest, reader: jspb.BinaryReader): NewSequenceRequest;
}

export namespace NewSequenceRequest {
    export type AsObject = {
        name: string,
        projectid: number,
        thumbnail: string,
    }
}

export class UpdateSequenceRequest extends jspb.Message { 
    getSequenceid(): number;
    setSequenceid(value: number): void;

    getName(): string;
    setName(value: string): void;

    getStatus(): number;
    setStatus(value: number): void;

    getProjectid(): number;
    setProjectid(value: number): void;

    getThumbnail(): string;
    setThumbnail(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSequenceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSequenceRequest): UpdateSequenceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSequenceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSequenceRequest;
    static deserializeBinaryFromReader(message: UpdateSequenceRequest, reader: jspb.BinaryReader): UpdateSequenceRequest;
}

export namespace UpdateSequenceRequest {
    export type AsObject = {
        sequenceid: number,
        name: string,
        status: number,
        projectid: number,
        thumbnail: string,
    }
}

export class ProjectSequencesResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Sequence>;
    setDataList(value: Array<Sequence>): void;
    addData(value?: Sequence, index?: number): Sequence;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectSequencesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectSequencesResponse): ProjectSequencesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectSequencesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectSequencesResponse;
    static deserializeBinaryFromReader(message: ProjectSequencesResponse, reader: jspb.BinaryReader): ProjectSequencesResponse;
}

export namespace ProjectSequencesResponse {
    export type AsObject = {
        dataList: Array<Sequence.AsObject>,
    }
}

export class SequenceMediaResponse extends jspb.Message { 

    hasSequence(): boolean;
    clearSequence(): void;
    getSequence(): Sequence | undefined;
    setSequence(value?: Sequence): void;

    clearMediaidsList(): void;
    getMediaidsList(): Array<number>;
    setMediaidsList(value: Array<number>): void;
    addMediaids(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SequenceMediaResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SequenceMediaResponse): SequenceMediaResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SequenceMediaResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SequenceMediaResponse;
    static deserializeBinaryFromReader(message: SequenceMediaResponse, reader: jspb.BinaryReader): SequenceMediaResponse;
}

export namespace SequenceMediaResponse {
    export type AsObject = {
        sequence?: Sequence.AsObject,
        mediaidsList: Array<number>,
    }
}

export class StatusResponse extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): void;

    getMessage(): string;
    setMessage(value: string): void;

    getData(): boolean;
    setData(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusResponse;
    static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse;
}

export namespace StatusResponse {
    export type AsObject = {
        status: number,
        message: string,
        data: boolean,
    }
}

export class Sequence extends jspb.Message { 
    getSequenceid(): number;
    setSequenceid(value: number): void;

    getName(): string;
    setName(value: string): void;

    getProjectid(): number;
    setProjectid(value: number): void;

    getThumbnail(): string;
    setThumbnail(value: string): void;

    getStatus(): number;
    setStatus(value: number): void;

    getCreatedat(): number;
    setCreatedat(value: number): void;

    getUpdatedat(): number;
    setUpdatedat(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sequence.AsObject;
    static toObject(includeInstance: boolean, msg: Sequence): Sequence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sequence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sequence;
    static deserializeBinaryFromReader(message: Sequence, reader: jspb.BinaryReader): Sequence;
}

export namespace Sequence {
    export type AsObject = {
        sequenceid: number,
        name: string,
        projectid: number,
        thumbnail: string,
        status: number,
        createdat: number,
        updatedat: number,
    }
}
