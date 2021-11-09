import { GetDocumentRequest, MongoRPCClient, Value } from "./proto";
import { Collection } from "./collection";
import { DecodeValue } from "./decoder";
import { UpdateDocumentRequest } from "./proto/pb/mongorpc_pb";
import { EncodeValue } from "./encoder";

class Document {
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

  public async get(): Promise<any> {
    const request = new GetDocumentRequest();
    request.setDatabase(this.parent.parent.name);
    request.setCollection(this.parent.name);
    request.setDocumentId(this.documentID);

    try {
      const response = await this.client.getDocument(request);
      const document = response.getDocument();
      if (document) {
        return DecodeValue(document);
      }

      return null;
    } catch (error) {
      throw error;
    }
  }

  public async update(data: any): Promise<{
    matchedCount: number;
    modifiedCount: number;
    upsertedCount: number;
  }> {
    const request = new UpdateDocumentRequest();
    request.setDatabase(this.parent.parent.name);
    request.setCollection(this.parent.name);
    request.setDocumentId(this.documentID);
    request.setDocument(EncodeValue(data));

    try {
      const response = await this.client.updateDocument(request);
      const matchedCount = response.getUpsertedCount();
      const modifiedCount = response.getMatchedCount();
      const upsertedCount = response.getModifiedCount();

      return {
        matchedCount,
        modifiedCount,
        upsertedCount,
      };
    } catch (error) {
      throw error;
    }
  }
}

export { Document };
