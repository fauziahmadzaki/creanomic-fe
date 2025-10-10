import { clearAccessToken } from "./token";

const authApi = {
  logout() {
    clearAccessToken();
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  },
};

export default authApi;
