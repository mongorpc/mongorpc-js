import { MongoRPCClient } from "../proto/mongorpc_pb_service";
import { Database } from "./database";

class MongoRPC {
  private client: MongoRPCClient;

  public constructor(host: string) {
    this.client = new MongoRPCClient(host);
  }

  public database(name: string): Database {
    return new Database(name, this.client);
  }
}

export { MongoRPC };
