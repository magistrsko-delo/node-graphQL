// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_proto_sequence$metadata_sequencemetadata_service_pb = require('../../../src/proto/sequence-metadata/sequencemetadata_service_pb.js');

function serialize_GetProjectSequencesRequest(arg) {
  if (!(arg instanceof src_proto_sequence$metadata_sequencemetadata_service_pb.GetProjectSequencesRequest)) {
    throw new Error('Expected argument of type GetProjectSequencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetProjectSequencesRequest(buffer_arg) {
  return src_proto_sequence$metadata_sequencemetadata_service_pb.GetProjectSequencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NewSequenceRequest(arg) {
  if (!(arg instanceof src_proto_sequence$metadata_sequencemetadata_service_pb.NewSequenceRequest)) {
    throw new Error('Expected argument of type NewSequenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NewSequenceRequest(buffer_arg) {
  return src_proto_sequence$metadata_sequencemetadata_service_pb.NewSequenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ProjectSequencesResponse(arg) {
  if (!(arg instanceof src_proto_sequence$metadata_sequencemetadata_service_pb.ProjectSequencesResponse)) {
    throw new Error('Expected argument of type ProjectSequencesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ProjectSequencesResponse(buffer_arg) {
  return src_proto_sequence$metadata_sequencemetadata_service_pb.ProjectSequencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SequenceIdRequest(arg) {
  if (!(arg instanceof src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceIdRequest)) {
    throw new Error('Expected argument of type SequenceIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SequenceIdRequest(buffer_arg) {
  return src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SequenceMediaRequest(arg) {
  if (!(arg instanceof src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceMediaRequest)) {
    throw new Error('Expected argument of type SequenceMediaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SequenceMediaRequest(buffer_arg) {
  return src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceMediaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SequenceMediaResponse(arg) {
  if (!(arg instanceof src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceMediaResponse)) {
    throw new Error('Expected argument of type SequenceMediaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SequenceMediaResponse(buffer_arg) {
  return src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceMediaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StatusResponse(arg) {
  if (!(arg instanceof src_proto_sequence$metadata_sequencemetadata_service_pb.StatusResponse)) {
    throw new Error('Expected argument of type StatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StatusResponse(buffer_arg) {
  return src_proto_sequence$metadata_sequencemetadata_service_pb.StatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateSequenceRequest(arg) {
  if (!(arg instanceof src_proto_sequence$metadata_sequencemetadata_service_pb.UpdateSequenceRequest)) {
    throw new Error('Expected argument of type UpdateSequenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateSequenceRequest(buffer_arg) {
  return src_proto_sequence$metadata_sequencemetadata_service_pb.UpdateSequenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SequenceMetadataService = exports.SequenceMetadataService = {
  getProjectSequences: {
    path: '/SequenceMetadata/getProjectSequences',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_sequence$metadata_sequencemetadata_service_pb.GetProjectSequencesRequest,
    responseType: src_proto_sequence$metadata_sequencemetadata_service_pb.ProjectSequencesResponse,
    requestSerialize: serialize_GetProjectSequencesRequest,
    requestDeserialize: deserialize_GetProjectSequencesRequest,
    responseSerialize: serialize_ProjectSequencesResponse,
    responseDeserialize: deserialize_ProjectSequencesResponse,
  },
  getSequenceMedia: {
    path: '/SequenceMetadata/getSequenceMedia',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceIdRequest,
    responseType: src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceMediaResponse,
    requestSerialize: serialize_SequenceIdRequest,
    requestDeserialize: deserialize_SequenceIdRequest,
    responseSerialize: serialize_SequenceMediaResponse,
    responseDeserialize: deserialize_SequenceMediaResponse,
  },
  createSequence: {
    path: '/SequenceMetadata/createSequence',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_sequence$metadata_sequencemetadata_service_pb.NewSequenceRequest,
    responseType: src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceMediaResponse,
    requestSerialize: serialize_NewSequenceRequest,
    requestDeserialize: deserialize_NewSequenceRequest,
    responseSerialize: serialize_SequenceMediaResponse,
    responseDeserialize: deserialize_SequenceMediaResponse,
  },
  updateSequence: {
    path: '/SequenceMetadata/updateSequence',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_sequence$metadata_sequencemetadata_service_pb.UpdateSequenceRequest,
    responseType: src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceMediaResponse,
    requestSerialize: serialize_UpdateSequenceRequest,
    requestDeserialize: deserialize_UpdateSequenceRequest,
    responseSerialize: serialize_SequenceMediaResponse,
    responseDeserialize: deserialize_SequenceMediaResponse,
  },
  deleteSequence: {
    path: '/SequenceMetadata/deleteSequence',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceIdRequest,
    responseType: src_proto_sequence$metadata_sequencemetadata_service_pb.StatusResponse,
    requestSerialize: serialize_SequenceIdRequest,
    requestDeserialize: deserialize_SequenceIdRequest,
    responseSerialize: serialize_StatusResponse,
    responseDeserialize: deserialize_StatusResponse,
  },
  addMediaToSequence: {
    path: '/SequenceMetadata/addMediaToSequence',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceMediaRequest,
    responseType: src_proto_sequence$metadata_sequencemetadata_service_pb.StatusResponse,
    requestSerialize: serialize_SequenceMediaRequest,
    requestDeserialize: deserialize_SequenceMediaRequest,
    responseSerialize: serialize_StatusResponse,
    responseDeserialize: deserialize_StatusResponse,
  },
  deleteMediaFromSequence: {
    path: '/SequenceMetadata/deleteMediaFromSequence',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_sequence$metadata_sequencemetadata_service_pb.SequenceMediaRequest,
    responseType: src_proto_sequence$metadata_sequencemetadata_service_pb.StatusResponse,
    requestSerialize: serialize_SequenceMediaRequest,
    requestDeserialize: deserialize_SequenceMediaRequest,
    responseSerialize: serialize_StatusResponse,
    responseDeserialize: deserialize_StatusResponse,
  },
};

exports.SequenceMetadataClient = grpc.makeGenericClientConstructor(SequenceMetadataService);
