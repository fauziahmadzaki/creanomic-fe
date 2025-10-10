import { cookies } from "next/headers";
import { createAxiosInstance } from "./base";
import { AxiosInstance } from "axios";

export async function serverApi(): Promise<AxiosInstance> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (token) return createAxiosInstance(token);
}
