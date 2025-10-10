"use client";

import axios from "axios";
import { getAccessToken } from "./jwt/token";
import authApi from "./jwt/api";
import { BASE_URL } from "./base";

const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Pasang Authorization header setiap request
apiInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// Tangani error global
apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;

    if (status === 401) {
      console.warn("⚠️ Token expired atau invalid — redirect ke /login");
      authApi.logout();
    }

    return Promise.reject(error);
  }
);

export const clientApi = apiInstance;
