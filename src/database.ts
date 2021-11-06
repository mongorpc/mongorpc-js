import { MongoRPCClient } from "../proto/MongorpcServiceClientPb";
import { Collection } from "./collection";

class Database {
  private client: MongoRPCClient;
  name: string;

  public constructor(name: string, client: MongoRPCClient) {
    this.name = name;
    this.client = client;
  }

  public collection(name: string): Collection {
    return new Collection(name, this, this.client);
  }
}

export { Database };
