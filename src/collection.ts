import { MongoRPCClient } from "./proto";
import { Database } from "./database";
import { Document } from "./document";
import { ListDocumentsRequestBuilder } from "./query";
import { CreateDocumentRequest } from "./proto/pb/mongorpc_pb";
import { EncodeValue, ObjectID } from "./encoder";

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

  public documents(): ListDocumentsRequestBuilder {
    return new ListDocumentsRequestBuilder(this.client, this.parent, this.name);
  }

  public async create(document: any): Promise<ObjectID> {
    const request = new CreateDocumentRequest()
    request.setDatabase(this.parent.name);
    request.setCollection(this.name);
    request.setDocument(EncodeValue(document));

    try {
      const response = await this.client.createDocument(request);
      const id = response.getDocumentId();
      return { id };
    } catch (error) {
      throw error;
    }
  }
}

export { Collection };
