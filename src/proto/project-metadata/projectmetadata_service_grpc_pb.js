// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_proto_project$metadata_projectmetadata_service_pb = require('../../../src/proto/project-metadata/projectmetadata_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_ProjectDeleteResponse(arg) {
  if (!(arg instanceof src_proto_project$metadata_projectmetadata_service_pb.ProjectDeleteResponse)) {
    throw new Error('Expected argument of type ProjectDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ProjectDeleteResponse(buffer_arg) {
  return src_proto_project$metadata_projectmetadata_service_pb.ProjectDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ProjectIdRequest(arg) {
  if (!(arg instanceof src_proto_project$metadata_projectmetadata_service_pb.ProjectIdRequest)) {
    throw new Error('Expected argument of type ProjectIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ProjectIdRequest(buffer_arg) {
  return src_proto_project$metadata_projectmetadata_service_pb.ProjectIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ProjectResponse(arg) {
  if (!(arg instanceof src_proto_project$metadata_projectmetadata_service_pb.ProjectResponse)) {
    throw new Error('Expected argument of type ProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ProjectResponse(buffer_arg) {
  return src_proto_project$metadata_projectmetadata_service_pb.ProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ProjectResponseRepeated(arg) {
  if (!(arg instanceof src_proto_project$metadata_projectmetadata_service_pb.ProjectResponseRepeated)) {
    throw new Error('Expected argument of type ProjectResponseRepeated');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ProjectResponseRepeated(buffer_arg) {
  return src_proto_project$metadata_projectmetadata_service_pb.ProjectResponseRepeated.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateProjectRequest(arg) {
  if (!(arg instanceof src_proto_project$metadata_projectmetadata_service_pb.UpdateProjectRequest)) {
    throw new Error('Expected argument of type UpdateProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateProjectRequest(buffer_arg) {
  return src_proto_project$metadata_projectmetadata_service_pb.UpdateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProjectMetadataService = exports.ProjectMetadataService = {
  getProject: {
    path: '/ProjectMetadata/getProject',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_project$metadata_projectmetadata_service_pb.ProjectIdRequest,
    responseType: src_proto_project$metadata_projectmetadata_service_pb.ProjectResponse,
    requestSerialize: serialize_ProjectIdRequest,
    requestDeserialize: deserialize_ProjectIdRequest,
    responseSerialize: serialize_ProjectResponse,
    responseDeserialize: deserialize_ProjectResponse,
  },
  getAllProjects: {
    path: '/ProjectMetadata/getAllProjects',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: src_proto_project$metadata_projectmetadata_service_pb.ProjectResponseRepeated,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ProjectResponseRepeated,
    responseDeserialize: deserialize_ProjectResponseRepeated,
  },
  updateProject: {
    path: '/ProjectMetadata/updateProject',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_project$metadata_projectmetadata_service_pb.UpdateProjectRequest,
    responseType: src_proto_project$metadata_projectmetadata_service_pb.ProjectResponse,
    requestSerialize: serialize_UpdateProjectRequest,
    requestDeserialize: deserialize_UpdateProjectRequest,
    responseSerialize: serialize_ProjectResponse,
    responseDeserialize: deserialize_ProjectResponse,
  },
  deleteProject: {
    path: '/ProjectMetadata/deleteProject',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_project$metadata_projectmetadata_service_pb.ProjectIdRequest,
    responseType: src_proto_project$metadata_projectmetadata_service_pb.ProjectDeleteResponse,
    requestSerialize: serialize_ProjectIdRequest,
    requestDeserialize: deserialize_ProjectIdRequest,
    responseSerialize: serialize_ProjectDeleteResponse,
    responseDeserialize: deserialize_ProjectDeleteResponse,
  },
};

exports.ProjectMetadataClient = grpc.makeGenericClientConstructor(ProjectMetadataService);
