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

protoc --proto_path=proto --js_out=lib/mongorpc \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:lib \
    proto/mongorpc/*.proto