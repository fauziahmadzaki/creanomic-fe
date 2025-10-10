import { serverApi } from "./server";
import { clientApi } from "./client";
import { Axios, AxiosInstance } from "axios";

function isServer() {
  return typeof window === "undefined";
}

export async function getQuery<T>(url: string, config?: any): Promise<T> {
  const api = isServer() ? await serverApi() : clientApi;
  const res = await api.get(url, config);
  return res.data;
}

export async function postQuery<T>(
  url: string,
  body: any,
  config?: any
): Promise<T> {
  const api = isServer() ? await serverApi() : clientApi;
  const res = await api.post(url, body, config);
  return res.data;
}
