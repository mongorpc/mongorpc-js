import { Collection } from "./collection";
import { MongoRPCClient } from "./mongorpc/mongorpc_grpc_web_pb";

export class Document {
  private client: MongoRPCClient;
  documentID: string;
  parent: Collection;

  public constructor(
    documentID: string,
    parent: Collection,
    client: MongoRPCClient
  ) {
    this.documentID = documentID;
    this.parent = parent;
    this.client = client;
  }
}
