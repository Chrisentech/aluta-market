import { APIRequestType } from "./Interfaces";
import API from "./Shared/Hooks/useApi";

const createAPI = <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  data?: T
) => {
  const options: APIRequestType = {
    url,
    method,
    data,
  };

  const api: any = API<T>(options);
  api
    .then((resp: any) => {
      return resp;
    })
    .catch((err: any) => {
      return err;
    });

  // return api;
};

export default createAPI;
