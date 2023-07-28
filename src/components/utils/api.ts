import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const baseUrl = "http://localhost:4000/api";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const apiRequest = async <T>(
  _obj: any,
  url: any,
  method: HttpMethod
): Promise<AxiosResponse<T>> => {
  try {
    const saved = window.localStorage.getItem("data");
    const accesstoken = JSON.parse(saved ?? "null") as string | null;

    const header: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${accesstoken ?? ""}`,
      },
    };

    let data: AxiosResponse<T>;
    switch (method.toUpperCase()) {
      case "GET":
        data = await axios.get<T>(baseUrl+url, header);
        break;
      case "POST":
        data = await axios.post<T>(baseUrl+url, _obj, header);
        break;
      case "PUT":
        data = await axios.put<T>(baseUrl+url, _obj, header);
        break;
      case "DELETE":
        data = await axios.delete<T>(baseUrl+url, header);
        break;
      default:
        throw new Error(`Invalid method: ${method}`);
    }

    return data;
  } catch (error: any) {
    console.error(error?.response);
    throw error?.response;
  }
};

export {};
