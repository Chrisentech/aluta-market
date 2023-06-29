import { APIRequestType } from "./Interfaces";
import useApi from "./Shared/Hooks/useApi";

const API = <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  data?: T
) => {
  const options: APIRequestType = {
    url,
    method,
    data,
  };

  return useApi<T>(options);
};

export default API;
