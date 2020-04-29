// package: 
// file: src/proto/sequence-metadata/sequencemetadata_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_proto_sequence_metadata_sequencemetadata_service_pb from "../../../src/proto/sequence-metadata/sequencemetadata_service_pb";

interface ISequenceMetadataService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getProjectSequences: ISequenceMetadataService_IgetProjectSequences;
    getSequenceMedia: ISequenceMetadataService_IgetSequenceMedia;
    createSequence: ISequenceMetadataService_IcreateSequence;
    updateSequence: ISequenceMetadataService_IupdateSequence;
    deleteSequence: ISequenceMetadataService_IdeleteSequence;
    addMediaToSequence: ISequenceMetadataService_IaddMediaToSequence;
    deleteMediaFromSequence: ISequenceMetadataService_IdeleteMediaFromSequence;
}

interface ISequenceMetadataService_IgetProjectSequences extends grpc.MethodDefinition<src_proto_sequence_metadata_sequencemetadata_service_pb.GetProjectSequencesRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.ProjectSequencesResponse> {
    path: string; // "/.SequenceMetadata/getProjectSequences"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.GetProjectSequencesRequest>;
    requestDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.GetProjectSequencesRequest>;
    responseSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.ProjectSequencesResponse>;
    responseDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.ProjectSequencesResponse>;
}
interface ISequenceMetadataService_IgetSequenceMedia extends grpc.MethodDefinition<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse> {
    path: string; // "/.SequenceMetadata/getSequenceMedia"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest>;
    requestDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest>;
    responseSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse>;
    responseDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse>;
}
interface ISequenceMetadataService_IcreateSequence extends grpc.MethodDefinition<src_proto_sequence_metadata_sequencemetadata_service_pb.NewSequenceRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse> {
    path: string; // "/.SequenceMetadata/createSequence"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.NewSequenceRequest>;
    requestDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.NewSequenceRequest>;
    responseSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse>;
    responseDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse>;
}
interface ISequenceMetadataService_IupdateSequence extends grpc.MethodDefinition<src_proto_sequence_metadata_sequencemetadata_service_pb.UpdateSequenceRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse> {
    path: string; // "/.SequenceMetadata/updateSequence"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.UpdateSequenceRequest>;
    requestDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.UpdateSequenceRequest>;
    responseSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse>;
    responseDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse>;
}
interface ISequenceMetadataService_IdeleteSequence extends grpc.MethodDefinition<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse> {
    path: string; // "/.SequenceMetadata/deleteSequence"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest>;
    requestDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest>;
    responseSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse>;
}
interface ISequenceMetadataService_IaddMediaToSequence extends grpc.MethodDefinition<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse> {
    path: string; // "/.SequenceMetadata/addMediaToSequence"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest>;
    requestDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest>;
    responseSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse>;
}
interface ISequenceMetadataService_IdeleteMediaFromSequence extends grpc.MethodDefinition<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse> {
    path: string; // "/.SequenceMetadata/deleteMediaFromSequence"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest>;
    requestDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest>;
    responseSerialize: grpc.serialize<src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse>;
}

export const SequenceMetadataService: ISequenceMetadataService;

export interface ISequenceMetadataServer {
    getProjectSequences: grpc.handleUnaryCall<src_proto_sequence_metadata_sequencemetadata_service_pb.GetProjectSequencesRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.ProjectSequencesResponse>;
    getSequenceMedia: grpc.handleUnaryCall<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse>;
    createSequence: grpc.handleUnaryCall<src_proto_sequence_metadata_sequencemetadata_service_pb.NewSequenceRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse>;
    updateSequence: grpc.handleUnaryCall<src_proto_sequence_metadata_sequencemetadata_service_pb.UpdateSequenceRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse>;
    deleteSequence: grpc.handleUnaryCall<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse>;
    addMediaToSequence: grpc.handleUnaryCall<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse>;
    deleteMediaFromSequence: grpc.handleUnaryCall<src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse>;
}

export interface ISequenceMetadataClient {
    getProjectSequences(request: src_proto_sequence_metadata_sequencemetadata_service_pb.GetProjectSequencesRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.ProjectSequencesResponse) => void): grpc.ClientUnaryCall;
    getProjectSequences(request: src_proto_sequence_metadata_sequencemetadata_service_pb.GetProjectSequencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.ProjectSequencesResponse) => void): grpc.ClientUnaryCall;
    getProjectSequences(request: src_proto_sequence_metadata_sequencemetadata_service_pb.GetProjectSequencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.ProjectSequencesResponse) => void): grpc.ClientUnaryCall;
    getSequenceMedia(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    getSequenceMedia(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    getSequenceMedia(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    createSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.NewSequenceRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    createSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.NewSequenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    createSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.NewSequenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    updateSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.UpdateSequenceRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    updateSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.UpdateSequenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    updateSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.UpdateSequenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    deleteSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    deleteSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    deleteSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    addMediaToSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    addMediaToSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    addMediaToSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    deleteMediaFromSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    deleteMediaFromSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    deleteMediaFromSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
}

export class SequenceMetadataClient extends grpc.Client implements ISequenceMetadataClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getProjectSequences(request: src_proto_sequence_metadata_sequencemetadata_service_pb.GetProjectSequencesRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.ProjectSequencesResponse) => void): grpc.ClientUnaryCall;
    public getProjectSequences(request: src_proto_sequence_metadata_sequencemetadata_service_pb.GetProjectSequencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.ProjectSequencesResponse) => void): grpc.ClientUnaryCall;
    public getProjectSequences(request: src_proto_sequence_metadata_sequencemetadata_service_pb.GetProjectSequencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.ProjectSequencesResponse) => void): grpc.ClientUnaryCall;
    public getSequenceMedia(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    public getSequenceMedia(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    public getSequenceMedia(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    public createSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.NewSequenceRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    public createSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.NewSequenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    public createSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.NewSequenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    public updateSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.UpdateSequenceRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    public updateSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.UpdateSequenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    public updateSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.UpdateSequenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaResponse) => void): grpc.ClientUnaryCall;
    public deleteSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public deleteSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public deleteSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public addMediaToSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public addMediaToSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public addMediaToSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public deleteMediaFromSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public deleteMediaFromSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public deleteMediaFromSequence(request: src_proto_sequence_metadata_sequencemetadata_service_pb.SequenceMediaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_sequence_metadata_sequencemetadata_service_pb.StatusResponse) => void): grpc.ClientUnaryCall;
}
