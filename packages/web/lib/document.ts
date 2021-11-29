import { Collection } from "./collection";
import { DecodeValue } from "./decoder";
import { EncodeValue } from "./encoder";
import { MongoRPCPromiseClient } from "./mongorpc/mongorpc_grpc_web_pb";
import {
  DeleteDocumentRequest,
  GetDocumentRequest,
  UpdateDocumentRequest,
} from "./mongorpc/mongorpc_pb";
import { ObjectId } from "./mongorpc/value_pb";

export class Document {
  private client: MongoRPCPromiseClient;
  documentID: string;
  parent: Collection;

  _objectID: ObjectId;

  public constructor(
    documentID: string,
    parent: Collection,
    client: MongoRPCPromiseClient
  ) {
    this.documentID = documentID;
    this.parent = parent;
    this.client = client;

    const objectID = new ObjectId();
    objectID.setId(this.documentID);
    this._objectID = objectID;
  }

  public async get(): Promise<any> {
    const request = new GetDocumentRequest();
    request.setDatabase(this.parent.parent.name);
    request.setCollection(this.parent.name);
    request.setDocumentId(this._objectID);

    try {
      const response = await this.client.getDocument(request);
      return DecodeValue(response);
    } catch (error) {
      throw error;
    }
  }

  public async update(data: any): Promise<any> {
    const request = new UpdateDocumentRequest();
    request.setDatabase(this.parent.parent.name);
    request.setCollection(this.parent.name);
    request.setDocumentId(this._objectID);
    request.setDocument(EncodeValue(data));

    try {
      const response = await this.client.updateDocument(request);
      return DecodeValue(response);
    } catch (error) {
      throw error;
    }
  }

  public async delete(): Promise<any> {
    const request = new DeleteDocumentRequest();
    request.setDatabase(this.parent.parent.name);
    request.setCollection(this.parent.name);
    request.setDocumentId(this._objectID);

    try {
      const response = await this.client.deleteDocument(request);
      return DecodeValue(response);
    } catch (error) {
      throw error;
    }
  }
}
