import { Collection } from "./collection";
import { DecodeValue } from "./decoder";
import { MongoRPCPromiseClient } from "./mongorpc/mongorpc_grpc_web_pb";
import { GetDocumentRequest } from "./mongorpc/mongorpc_pb";
import { ObjectId } from "./mongorpc/value_pb";

export class Document {
  private client: MongoRPCPromiseClient;
  documentID: string;
  parent: Collection;

  public constructor(
    documentID: string,
    parent: Collection,
    client: MongoRPCPromiseClient
  ) {
    this.documentID = documentID;
    this.parent = parent;
    this.client = client;
  }

  public async get(): Promise<any> {
    const objectID = new ObjectId();
    objectID.setId(this.documentID);

    const request = new GetDocumentRequest();
    request.setDatabase(this.parent.parent.name);
    request.setCollection(this.parent.name);
    request.setDocumentId(objectID);

    try {
      const response = await this.client.getDocument(request);
      return DecodeValue(response);
    } catch (error) {
      throw error;
    }
  }
}
