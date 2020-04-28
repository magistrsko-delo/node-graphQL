// package: 
// file: src/proto/media-metadata/mediametadata_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_proto_media_metadata_mediametadata_service_pb from "../../../src/proto/media-metadata/mediametadata_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IMediaMetadataService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    newMediaMetadata: IMediaMetadataService_InewMediaMetadata;
    updateMediaMetadata: IMediaMetadataService_IupdateMediaMetadata;
    getMediaMetadata: IMediaMetadataService_IgetMediaMetadata;
    getAllMediaMetadata: IMediaMetadataService_IgetAllMediaMetadata;
    getProjectMediasMetadata: IMediaMetadataService_IgetProjectMediasMetadata;
    getOneProjectMediasMetadata: IMediaMetadataService_IgetOneProjectMediasMetadata;
    getLiveMedias: IMediaMetadataService_IgetLiveMedias;
    getMediasInProgress: IMediaMetadataService_IgetMediasInProgress;
}

interface IMediaMetadataService_InewMediaMetadata extends grpc.MethodDefinition<src_proto_media_metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse> {
    path: string; // "/.MediaMetadata/newMediaMetadata"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest>;
    requestDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest>;
    responseSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse>;
    responseDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse>;
}
interface IMediaMetadataService_IupdateMediaMetadata extends grpc.MethodDefinition<src_proto_media_metadata_mediametadata_service_pb.UpdateMediaRequest, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse> {
    path: string; // "/.MediaMetadata/updateMediaMetadata"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.UpdateMediaRequest>;
    requestDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.UpdateMediaRequest>;
    responseSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse>;
    responseDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse>;
}
interface IMediaMetadataService_IgetMediaMetadata extends grpc.MethodDefinition<src_proto_media_metadata_mediametadata_service_pb.GetMediaMetadataRequest, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse> {
    path: string; // "/.MediaMetadata/getMediaMetadata"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.GetMediaMetadataRequest>;
    requestDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.GetMediaMetadataRequest>;
    responseSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse>;
    responseDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse>;
}
interface IMediaMetadataService_IgetAllMediaMetadata extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated> {
    path: string; // "/.MediaMetadata/getAllMediaMetadata"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated>;
    responseDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated>;
}
interface IMediaMetadataService_IgetProjectMediasMetadata extends grpc.MethodDefinition<src_proto_media_metadata_mediametadata_service_pb.GetProjectMediasRequest, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated> {
    path: string; // "/.MediaMetadata/getProjectMediasMetadata"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.GetProjectMediasRequest>;
    requestDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.GetProjectMediasRequest>;
    responseSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated>;
    responseDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated>;
}
interface IMediaMetadataService_IgetOneProjectMediasMetadata extends grpc.MethodDefinition<src_proto_media_metadata_mediametadata_service_pb.GetOneProjectMedia, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse> {
    path: string; // "/.MediaMetadata/getOneProjectMediasMetadata"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.GetOneProjectMedia>;
    requestDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.GetOneProjectMedia>;
    responseSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse>;
    responseDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse>;
}
interface IMediaMetadataService_IgetLiveMedias extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated> {
    path: string; // "/.MediaMetadata/getLiveMedias"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated>;
    responseDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated>;
}
interface IMediaMetadataService_IgetMediasInProgress extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated> {
    path: string; // "/.MediaMetadata/getMediasInProgress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated>;
    responseDeserialize: grpc.deserialize<src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated>;
}

export const MediaMetadataService: IMediaMetadataService;

export interface IMediaMetadataServer {
    newMediaMetadata: grpc.handleUnaryCall<src_proto_media_metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse>;
    updateMediaMetadata: grpc.handleUnaryCall<src_proto_media_metadata_mediametadata_service_pb.UpdateMediaRequest, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse>;
    getMediaMetadata: grpc.handleUnaryCall<src_proto_media_metadata_mediametadata_service_pb.GetMediaMetadataRequest, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse>;
    getAllMediaMetadata: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated>;
    getProjectMediasMetadata: grpc.handleUnaryCall<src_proto_media_metadata_mediametadata_service_pb.GetProjectMediasRequest, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated>;
    getOneProjectMediasMetadata: grpc.handleUnaryCall<src_proto_media_metadata_mediametadata_service_pb.GetOneProjectMedia, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse>;
    getLiveMedias: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated>;
    getMediasInProgress: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated>;
}

export interface IMediaMetadataClient {
    newMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    newMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    newMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    updateMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.UpdateMediaRequest, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    updateMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.UpdateMediaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    updateMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.UpdateMediaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    getMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetMediaMetadataRequest, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    getMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetMediaMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    getMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetMediaMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    getAllMediaMetadata(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    getAllMediaMetadata(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    getAllMediaMetadata(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    getProjectMediasMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetProjectMediasRequest, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    getProjectMediasMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetProjectMediasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    getProjectMediasMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetProjectMediasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    getOneProjectMediasMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetOneProjectMedia, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    getOneProjectMediasMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetOneProjectMedia, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    getOneProjectMediasMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetOneProjectMedia, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    getLiveMedias(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    getLiveMedias(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    getLiveMedias(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    getMediasInProgress(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    getMediasInProgress(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    getMediasInProgress(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
}

export class MediaMetadataClient extends grpc.Client implements IMediaMetadataClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public newMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    public newMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    public newMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    public updateMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.UpdateMediaRequest, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    public updateMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.UpdateMediaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    public updateMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.UpdateMediaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    public getMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetMediaMetadataRequest, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    public getMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetMediaMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    public getMediaMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetMediaMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    public getAllMediaMetadata(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    public getAllMediaMetadata(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    public getAllMediaMetadata(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    public getProjectMediasMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetProjectMediasRequest, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    public getProjectMediasMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetProjectMediasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    public getProjectMediasMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetProjectMediasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    public getOneProjectMediasMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetOneProjectMedia, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    public getOneProjectMediasMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetOneProjectMedia, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    public getOneProjectMediasMetadata(request: src_proto_media_metadata_mediametadata_service_pb.GetOneProjectMedia, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponse) => void): grpc.ClientUnaryCall;
    public getLiveMedias(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    public getLiveMedias(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    public getLiveMedias(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    public getMediasInProgress(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    public getMediasInProgress(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
    public getMediasInProgress(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_media_metadata_mediametadata_service_pb.MediaMetadataResponseRepeated) => void): grpc.ClientUnaryCall;
}
