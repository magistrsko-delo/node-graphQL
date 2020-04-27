#!/bin/bash

BASEDIR=$(dirname "$0")
# shellcheck disable=SC2164
cd ${BASEDIR}/../

PROTO_DEST=$PWD/src/proto

mkdir -p ${PROTO_DEST}

echo $PWD

# JavaScript code generation
yarn run grpc_tools_node_protoc \
    src/proto/project-metadata/projectmetadata_service.proto \
    --js_out=import_style=commonjs,binary:. \
    --grpc_out=. \
    --plugin=protoc-gen-grpc=$PWD/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd \

# TypeScript code generation
yarn run grpc_tools_node_protoc \
    src/proto/project-metadata/projectmetadata_service.proto --plugin=protoc-gen-ts=$PWD/node_modules/.bin/protoc-gen-ts.cmd --ts_out=.
