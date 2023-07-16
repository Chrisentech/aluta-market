import { useState, useEffect } from "react";
import axios, {
  AxiosResponse,
} from "axios";
import { APIRequestType, APIResponseType } from "../../Interfaces";

const useApi = <T,>(options: APIRequestType): APIResponseType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [interceptor, setInterceptor]:any = useState(null);

  useEffect(() => {
    const axiosInstance = async () => {
      setIsLoading(true);

      try {
        const { url, method, data } = options;

        // Set up Axios request interceptor to pass authentication headers
        const requestInterceptor = axios.interceptors.request.use((config) => {
          // Add your authentication logic here
          // For example, you can set the authorization header with a token
          const token = "YOUR_AUTH_TOKEN";
          config.headers.Authorization = `Bearer ${token}`;
          return config;
        });

        setInterceptor(requestInterceptor);

        let response: AxiosResponse<T>  | any;

        if (method === "GET") {
          response = await axios.get<T>(url);
        } else if (method === "POST") {
          response = await axios.post<T>(url, data);
        } else if (method === "PATCH") {
          response = await axios.patch<T>(url, data);
        } else if (method === "PUT") {
          response = await axios.put<T>(url, data);
        } else if (method === "DELETE") {
          response = await axios.delete<T>(url);
        }
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    axiosInstance();

    // Clean up the interceptor when the component unmounts
    return () => {
      if (interceptor) {
        axios.interceptors.request.eject(interceptor);
      }
    };
  }, [options]);

  return { data, error, isLoading };
};

export default useApi;
