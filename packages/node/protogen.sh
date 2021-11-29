#!/bin/sh
git submodule foreach git pull origin main

set -e
# remove lib/mongorpc directory if it exists
if [ -d lib/mongorpc ]; then
    rm -rf lib/mongorpc
fi

# check if lib directory exists
if [ ! -d lib ]; then
    mkdir lib
fi

# check if lib/mongorpc directory exists
if [ ! -d lib/mongorpc ]; then
    mkdir lib/mongorpc
fi

grpc_tools_node_protoc -I=../../proto --proto_path=../../proto --js_out=import_style=commonjs,binary:lib \
   --grpc_out=grpc_js:lib \
   --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    ../../proto/mongorpc/*.proto

protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=import_style=commonjs:./lib  \
    -I=../../proto --proto_path=../../proto \
    ../../proto/mongorpc/*.proto
