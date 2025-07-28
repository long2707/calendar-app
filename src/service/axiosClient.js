import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  paramsSerializer: {
    encode: (params) =>
      queryString.stringify(params, { arrayFormat: "bracket" }),
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const newConfig = { ...config };
  const token = localStorage.getItem("accessToken") ?? "";
  if (token) {
    newConfig.headers = newConfig.headers ?? {};
  }
  return newConfig;
});

export default axiosClient;