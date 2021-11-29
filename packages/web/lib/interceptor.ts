export interface Interceptor {
  intercept(request: any, invoker: any): any;
}

export class AuthInterceptor implements Interceptor {
  token: string;

  public constructor(token: string) {
    this.token = token;
  }

  intercept(request: any, invoker: any) {
    const metadata = request.getMetadata();
    metadata.Authorization = "Bearer " + this.token;
    return invoker(request);
  }
}
