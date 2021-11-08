import { GetDocumentRequest, MongoRPCClient, Value } from "./proto";
import { Collection } from "./collection";
import { DecodeValue } from "./decoder";

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
}

export { Document };
