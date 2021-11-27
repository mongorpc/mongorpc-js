import { Database } from "./database";
import { Interceptor } from "./interceptor";
import { MongoRPCPromiseClient } from "./mongorpc/mongorpc_grpc_web_pb";

class MongoRPC {
  private client: MongoRPCPromiseClient;

  public constructor(host: string, interceptors?: [Interceptor]) {
    let options = null;
    if (interceptors) {
      options = {
        unaryInterceptors: interceptors,
        streamInterceptors: interceptors,
      };
    }

    this.client = new MongoRPCPromiseClient(host, null, options);
  }

  public debug(enabled: boolean): void {
    if (enabled) {
      // @ts-ignore
      const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
      enableDevTools([this.client]);
    }
  }

  public database(name: string): Database {
    return new Database(name, this.client);
  }
}

export { MongoRPC };
