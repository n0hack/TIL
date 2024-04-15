import { AxiosResponse } from 'axios';

namespace ErrorSubClassing {
  interface ErrorResponse {
    status: string;
    serverDateTime: string;
    errorCode: string;
    errorMessage: string;
  }

  class OrderHttpError extends Error {
    private readonly privateResponse?: AxiosResponse<ErrorResponse>;

    constructor(message?: string, response?: AxiosResponse<ErrorResponse>) {
      super(message);
      this.name = 'OrderHttpError';
      this.privateResponse = response;
    }

    get response(): AxiosResponse<ErrorResponse> | undefined {
      return this.privateResponse;
    }
  }

  class NetworkError extends Error {
    constructor(message?: string) {
      super(message);
      this.name = 'NetworkError';
    }
  }
}
