// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_proto_media$metadata_mediametadata_service_pb = require('../../../src/proto/media-metadata/mediametadata_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_CreateNewMediaMetadataRequest(arg) {
  if (!(arg instanceof src_proto_media$metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest)) {
    throw new Error('Expected argument of type CreateNewMediaMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateNewMediaMetadataRequest(buffer_arg) {
  return src_proto_media$metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetMediaMetadataRequest(arg) {
  if (!(arg instanceof src_proto_media$metadata_mediametadata_service_pb.GetMediaMetadataRequest)) {
    throw new Error('Expected argument of type GetMediaMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetMediaMetadataRequest(buffer_arg) {
  return src_proto_media$metadata_mediametadata_service_pb.GetMediaMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetOneProjectMedia(arg) {
  if (!(arg instanceof src_proto_media$metadata_mediametadata_service_pb.GetOneProjectMedia)) {
    throw new Error('Expected argument of type GetOneProjectMedia');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetOneProjectMedia(buffer_arg) {
  return src_proto_media$metadata_mediametadata_service_pb.GetOneProjectMedia.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetProjectMediasRequest(arg) {
  if (!(arg instanceof src_proto_media$metadata_mediametadata_service_pb.GetProjectMediasRequest)) {
    throw new Error('Expected argument of type GetProjectMediasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetProjectMediasRequest(buffer_arg) {
  return src_proto_media$metadata_mediametadata_service_pb.GetProjectMediasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MediaMetadataResponse(arg) {
  if (!(arg instanceof src_proto_media$metadata_mediametadata_service_pb.MediaMetadataResponse)) {
    throw new Error('Expected argument of type MediaMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MediaMetadataResponse(buffer_arg) {
  return src_proto_media$metadata_mediametadata_service_pb.MediaMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MediaMetadataResponseRepeated(arg) {
  if (!(arg instanceof src_proto_media$metadata_mediametadata_service_pb.MediaMetadataResponseRepeated)) {
    throw new Error('Expected argument of type MediaMetadataResponseRepeated');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MediaMetadataResponseRepeated(buffer_arg) {
  return src_proto_media$metadata_mediametadata_service_pb.MediaMetadataResponseRepeated.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateMediaRequest(arg) {
  if (!(arg instanceof src_proto_media$metadata_mediametadata_service_pb.UpdateMediaRequest)) {
    throw new Error('Expected argument of type UpdateMediaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateMediaRequest(buffer_arg) {
  return src_proto_media$metadata_mediametadata_service_pb.UpdateMediaRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var MediaMetadataService = exports.MediaMetadataService = {
  newMediaMetadata: {
    path: '/MediaMetadata/newMediaMetadata',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_media$metadata_mediametadata_service_pb.CreateNewMediaMetadataRequest,
    responseType: src_proto_media$metadata_mediametadata_service_pb.MediaMetadataResponse,
    requestSerialize: serialize_CreateNewMediaMetadataRequest,
    requestDeserialize: deserialize_CreateNewMediaMetadataRequest,
    responseSerialize: serialize_MediaMetadataResponse,
    responseDeserialize: deserialize_MediaMetadataResponse,
  },
  updateMediaMetadata: {
    path: '/MediaMetadata/updateMediaMetadata',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_media$metadata_mediametadata_service_pb.UpdateMediaRequest,
    responseType: src_proto_media$metadata_mediametadata_service_pb.MediaMetadataResponse,
    requestSerialize: serialize_UpdateMediaRequest,
    requestDeserialize: deserialize_UpdateMediaRequest,
    responseSerialize: serialize_MediaMetadataResponse,
    responseDeserialize: deserialize_MediaMetadataResponse,
  },
  getMediaMetadata: {
    path: '/MediaMetadata/getMediaMetadata',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_media$metadata_mediametadata_service_pb.GetMediaMetadataRequest,
    responseType: src_proto_media$metadata_mediametadata_service_pb.MediaMetadataResponse,
    requestSerialize: serialize_GetMediaMetadataRequest,
    requestDeserialize: deserialize_GetMediaMetadataRequest,
    responseSerialize: serialize_MediaMetadataResponse,
    responseDeserialize: deserialize_MediaMetadataResponse,
  },
  getAllMediaMetadata: {
    path: '/MediaMetadata/getAllMediaMetadata',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: src_proto_media$metadata_mediametadata_service_pb.MediaMetadataResponseRepeated,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_MediaMetadataResponseRepeated,
    responseDeserialize: deserialize_MediaMetadataResponseRepeated,
  },
  getProjectMediasMetadata: {
    path: '/MediaMetadata/getProjectMediasMetadata',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_media$metadata_mediametadata_service_pb.GetProjectMediasRequest,
    responseType: src_proto_media$metadata_mediametadata_service_pb.MediaMetadataResponseRepeated,
    requestSerialize: serialize_GetProjectMediasRequest,
    requestDeserialize: deserialize_GetProjectMediasRequest,
    responseSerialize: serialize_MediaMetadataResponseRepeated,
    responseDeserialize: deserialize_MediaMetadataResponseRepeated,
  },
  getOneProjectMediasMetadata: {
    path: '/MediaMetadata/getOneProjectMediasMetadata',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_media$metadata_mediametadata_service_pb.GetOneProjectMedia,
    responseType: src_proto_media$metadata_mediametadata_service_pb.MediaMetadataResponse,
    requestSerialize: serialize_GetOneProjectMedia,
    requestDeserialize: deserialize_GetOneProjectMedia,
    responseSerialize: serialize_MediaMetadataResponse,
    responseDeserialize: deserialize_MediaMetadataResponse,
  },
  getLiveMedias: {
    path: '/MediaMetadata/getLiveMedias',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: src_proto_media$metadata_mediametadata_service_pb.MediaMetadataResponseRepeated,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_MediaMetadataResponseRepeated,
    responseDeserialize: deserialize_MediaMetadataResponseRepeated,
  },
  getMediasInProgress: {
    path: '/MediaMetadata/getMediasInProgress',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: src_proto_media$metadata_mediametadata_service_pb.MediaMetadataResponseRepeated,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_MediaMetadataResponseRepeated,
    responseDeserialize: deserialize_MediaMetadataResponseRepeated,
  },
};

exports.MediaMetadataClient = grpc.makeGenericClientConstructor(MediaMetadataService);
