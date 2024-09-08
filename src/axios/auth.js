import axios from "axios"

const getToken = () => {
  return sessionStorage.getItem('token');
};

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr"
});

authApi.interceptors.request.use(
  (config) => {
    const token = getToken();

    console.log('token', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
);