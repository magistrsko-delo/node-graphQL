#!/bin/bash

BASEDIR=$(dirname "$0")
# shellcheck disable=SC2164
cd ${BASEDIR}/../

PROTO_DEST=./src/proto

mkdir -p ${PROTO_DEST}


echo PROTO_DEST

# JavaScript code generation
yarn run grpc_tools_node_protoc ./proto/projectmetadata_service.proto \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out= . \
    --plugin=protoc-gen-grpc=%CD%/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd \

# TypeScript code generation
yarn run grpc_tools_node_protoc ./proto/projectmetadata_service.proto \
    --plugin=protoc-gen-ts=%CD%/node_modules/.bin/protoc-gen-ts.cmd \
    --ts_out= . \
