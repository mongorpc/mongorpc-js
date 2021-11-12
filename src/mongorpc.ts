import { MongoRPCClient } from "./proto";
import { Database } from "./database";

class AuthInterceptor {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  intercept(request: any, invoker: any) {
    const metadata = request.getMetadata();
    metadata.Authorization = "Bearer " + this.token;
    return invoker(request);
  }
}

class MongoRPC {
  private client: MongoRPCClient;

  public constructor(host: string, token?: string) {
    let options = null;
    if (token) {
      const authInterceptor = new AuthInterceptor(token);
      options = {
        unaryInterceptors: [authInterceptor],
        streamInterceptors: [authInterceptor]
      }
    }

    this.client = new MongoRPCClient(host, null, options);
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
