import { BASE_URL } from "@/constants";
import { useAuthStore } from "@/store/authStore";
import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

axiosInstance.defaults.withCredentials = true;

// axiosInstance.interceptors.request.use((config) => {
//   const { accessToken } = useAuthStore();
//   if (accessToken) {
//     config.headers["Authorization"] = `Bearer ${accessToken}`;
//   }
//   return config;
// });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      const { logout } = useAuthStore();
      logout();
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
