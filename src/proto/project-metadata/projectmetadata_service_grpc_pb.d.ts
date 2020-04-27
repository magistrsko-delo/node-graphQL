// package: 
// file: src/proto/project-metadata/projectmetadata_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_proto_project_metadata_projectmetadata_service_pb from "../../../src/proto/project-metadata/projectmetadata_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IProjectMetadataService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getProject: IProjectMetadataService_IgetProject;
    getAllProjects: IProjectMetadataService_IgetAllProjects;
    updateProject: IProjectMetadataService_IupdateProject;
    deleteProject: IProjectMetadataService_IdeleteProject;
}

interface IProjectMetadataService_IgetProject extends grpc.MethodDefinition<src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse> {
    path: string; // "/.ProjectMetadata/getProject"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest>;
    requestDeserialize: grpc.deserialize<src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest>;
    responseSerialize: grpc.serialize<src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse>;
    responseDeserialize: grpc.deserialize<src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse>;
}
interface IProjectMetadataService_IgetAllProjects extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, src_proto_project_metadata_projectmetadata_service_pb.ProjectResponseRepeated> {
    path: string; // "/.ProjectMetadata/getAllProjects"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<src_proto_project_metadata_projectmetadata_service_pb.ProjectResponseRepeated>;
    responseDeserialize: grpc.deserialize<src_proto_project_metadata_projectmetadata_service_pb.ProjectResponseRepeated>;
}
interface IProjectMetadataService_IupdateProject extends grpc.MethodDefinition<src_proto_project_metadata_projectmetadata_service_pb.UpdateProjectRequest, src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse> {
    path: string; // "/.ProjectMetadata/updateProject"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_project_metadata_projectmetadata_service_pb.UpdateProjectRequest>;
    requestDeserialize: grpc.deserialize<src_proto_project_metadata_projectmetadata_service_pb.UpdateProjectRequest>;
    responseSerialize: grpc.serialize<src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse>;
    responseDeserialize: grpc.deserialize<src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse>;
}
interface IProjectMetadataService_IdeleteProject extends grpc.MethodDefinition<src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, src_proto_project_metadata_projectmetadata_service_pb.ProjectDeleteResponse> {
    path: string; // "/.ProjectMetadata/deleteProject"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest>;
    requestDeserialize: grpc.deserialize<src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest>;
    responseSerialize: grpc.serialize<src_proto_project_metadata_projectmetadata_service_pb.ProjectDeleteResponse>;
    responseDeserialize: grpc.deserialize<src_proto_project_metadata_projectmetadata_service_pb.ProjectDeleteResponse>;
}

export const ProjectMetadataService: IProjectMetadataService;

export interface IProjectMetadataServer {
    getProject: grpc.handleUnaryCall<src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse>;
    getAllProjects: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, src_proto_project_metadata_projectmetadata_service_pb.ProjectResponseRepeated>;
    updateProject: grpc.handleUnaryCall<src_proto_project_metadata_projectmetadata_service_pb.UpdateProjectRequest, src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse>;
    deleteProject: grpc.handleUnaryCall<src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, src_proto_project_metadata_projectmetadata_service_pb.ProjectDeleteResponse>;
}

export interface IProjectMetadataClient {
    getProject(request: src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    getProject(request: src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    getProject(request: src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    getAllProjects(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponseRepeated) => void): grpc.ClientUnaryCall;
    getAllProjects(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponseRepeated) => void): grpc.ClientUnaryCall;
    getAllProjects(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponseRepeated) => void): grpc.ClientUnaryCall;
    updateProject(request: src_proto_project_metadata_projectmetadata_service_pb.UpdateProjectRequest, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    updateProject(request: src_proto_project_metadata_projectmetadata_service_pb.UpdateProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    updateProject(request: src_proto_project_metadata_projectmetadata_service_pb.UpdateProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    deleteProject(request: src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectDeleteResponse) => void): grpc.ClientUnaryCall;
    deleteProject(request: src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectDeleteResponse) => void): grpc.ClientUnaryCall;
    deleteProject(request: src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class ProjectMetadataClient extends grpc.Client implements IProjectMetadataClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getProject(request: src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public getProject(request: src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public getProject(request: src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public getAllProjects(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponseRepeated) => void): grpc.ClientUnaryCall;
    public getAllProjects(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponseRepeated) => void): grpc.ClientUnaryCall;
    public getAllProjects(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponseRepeated) => void): grpc.ClientUnaryCall;
    public updateProject(request: src_proto_project_metadata_projectmetadata_service_pb.UpdateProjectRequest, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public updateProject(request: src_proto_project_metadata_projectmetadata_service_pb.UpdateProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public updateProject(request: src_proto_project_metadata_projectmetadata_service_pb.UpdateProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public deleteProject(request: src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectDeleteResponse) => void): grpc.ClientUnaryCall;
    public deleteProject(request: src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectDeleteResponse) => void): grpc.ClientUnaryCall;
    public deleteProject(request: src_proto_project_metadata_projectmetadata_service_pb.ProjectIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_project_metadata_projectmetadata_service_pb.ProjectDeleteResponse) => void): grpc.ClientUnaryCall;
}
