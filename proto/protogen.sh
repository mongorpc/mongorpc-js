#!/bin/sh
set -e

if [ -f mongorpc.proto ]
then 
    rm mongorpc.proto
fi 

wget https://raw.githubusercontent.com/mongorpc/mongorpc/main/proto/mongorpc.proto

protoc -I=. mongorpc.proto --js_out=import_style=commonjs:.
