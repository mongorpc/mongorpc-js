import { MongoRPCClient } from "../proto/MongorpcServiceClientPb";
import { GetDocumentRequest } from "../proto/mongorpc_pb";
import { Collection } from "./collection";

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

  public async get() {
    const request = new GetDocumentRequest();
    request.setDatabase(this.parent.parent.name);
    request.setCollection(this.parent.name);
    request.setDocumentId(this.documentID);

    try {
      const response = await this.client.getDocument(request, null);
      // TODO: convert proto.value to interface
      return response.getDocument();
    } catch (error) {
      throw error;
    }
  }
}

export { Document };
