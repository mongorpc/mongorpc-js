import { Database } from "./database";
import { Document } from "./document";
import { EncodeValue } from "./encoder";
import { MongoRPCPromiseClient } from "./mongorpc/mongorpc_grpc_web_pb";
import { InsertDocumentRequest } from "./mongorpc/mongorpc_pb";

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

  public async insert(document: any): Promise<any> {
    const request = new InsertDocumentRequest();
    request.setDatabase(this.parent.name);
    request.setCollection(this.name);
    request.setDocument(EncodeValue(document));

    try {
      const response = await this.client.insertDocument(request);
      return response.getId();
    } catch (error) {
      throw error;
    }
  }
}
