"use client";

export function getAccessToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

export function saveAccessToken(token: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem("token", token);
}

export function clearAccessToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
}
