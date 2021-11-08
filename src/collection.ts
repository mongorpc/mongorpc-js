import { MongoRPCClient } from "./proto";
import { Database } from "./database";
import { Document } from "./document";

class Collection {
  private client: MongoRPCClient;
  name: string;
  parent: Database;

  public constructor(name: string, parent: Database, client: MongoRPCClient) {
    this.name = name;
    this.parent = parent;
    this.client = client;
  }

  public document(id: string): Document {
    return new Document(id, this, this.client);
  }
}

export { Collection };
