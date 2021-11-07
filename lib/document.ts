import { MongoRPCClient } from "../proto/mongorpc_pb_service";
import { GetDocumentRequest, Value } from "../proto/mongorpc_pb";
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

  public get() : Promise<Value> {
    const request = new GetDocumentRequest();
    request.setDatabase(this.parent.parent.name);
    request.setCollection(this.parent.name);
    request.setDocumentId(this.documentID);

    return new Promise((resolve, reject) => {
      this.client.getDocument(request, (err, response) => {
        if (err) {
          reject(err);
        } else {
          // TODO: convert proto value to javascript value
          resolve(response.getDocument());
        }
      });
    });
  }
}

export { Document };
