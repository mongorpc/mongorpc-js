import { MongoRPCClient } from "./proto";
import { Collection } from "./collection";
import { ListDocumentsRequest } from "./proto/pb/mongorpc_pb";
import { DecodeValue } from "./decoder";

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

  public async listCollections(): Promise<Collection[]> {
    const request = new ListDocumentsRequest();
    request.setDatabase(this.name);

    try {
      const response = await this.client.listCollections(request);
      const collections = response.getCollections();
      if (collections) {
        let values = collections.getValuesList().map((value) => {
          return DecodeValue(value);
        });
        return values.map((value) => {
          return new Collection(value.toString(), this, this.client);
        });
      }

      return [];
    } catch (error) {
      throw error;
    }
  }
}

export { Database };
