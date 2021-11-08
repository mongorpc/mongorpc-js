#!/bin/sh
set -e

if [ -f mongorpc.proto ]
then 
    rm mongorpc.proto
fi 

wget https://raw.githubusercontent.com/mongorpc/mongorpc/main/proto/mongorpc.proto

# protoc -I=. mongorpc.proto --js_out=import_style=commonjs:.

protoc -I=. mongorpc.proto \
  --js_out=import_style=commonjs:pb \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:pb

# Path to this plugin
# PROTOC_GEN_TS_PATH="../node_modules/.bin/protoc-gen-ts"

# # Directory to write generated code to (.js and .d.ts files)
# OUT_DIR="."

# protoc \
#     --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
#     --js_out="import_style=commonjs,binary:${OUT_DIR}" \
#     --ts_out="service=grpc-web:${OUT_DIR}" \
#     mongorpc.proto