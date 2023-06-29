export interface APIRequestType {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: any;
}

export interface APIResponseType<T> {
  data: T | null;
  error: any;
  isLoading: boolean;
}
