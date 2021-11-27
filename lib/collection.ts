import { Database } from "./database";
import { Document } from "./document";
import { MongoRPCPromiseClient } from "./mongorpc/mongorpc_grpc_web_pb";

export class Collection {
  private client: MongoRPCPromiseClient;
  name: string;
  parent: Database;

  public constructor(
    name: string,
    parent: Database,
    client: MongoRPCPromiseClient
  ) {
    this.name = name;
    this.parent = parent;
    this.client = client;
  }

  public document(id: string): Document {
    return new Document(id, this, this.client);
  }
}
