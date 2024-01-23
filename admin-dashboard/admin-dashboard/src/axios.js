import axios from "axios";
import { router } from "./router";

class AxiosSetup {
  constructor() {
    this.axiosClient = axios.create({
      baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    });

    this.axiosClient.interceptors.request.use((config) => {
      const token = localStorage.getItem('TOKEN');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    this.axiosClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('TOKEN');
          router.navigate('/login/admin');
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
    );
  }

  getAxiosInstance() {
    return this.axiosClient;
  }
}

const axiosSetup = new AxiosSetup();
const axiosInstance = axiosSetup.getAxiosInstance();

export default axiosInstance;
