import { Collection } from "./collection";
import { MongoRPCPromiseClient } from "./mongorpc/mongorpc_grpc_web_pb";

export class Database {
  private client: MongoRPCPromiseClient;
  name: string;

  public constructor(name: string, client: MongoRPCPromiseClient) {
    this.name = name;
    this.client = client;
  }

  public collection(name: string): Collection {
    return new Collection(name, this, this.client);
  }
}
