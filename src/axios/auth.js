import axios from "axios"

const api = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr"
});

const getToken = () => {
  return sessionStorage.getItem('token');
};

const register = async (userFormData) => {
  api.post("/register", userFormData);

}

const login = async (userFormData) => {
  const { data } = await api.post("/login", userFormData);
  return data;
}

// 유저 토큰 확인
const user = async () => {
  const { data } = await api.get("/user");
  return data;
}

const patchProfile = async (updateUserinfo) => {
  const { data: newUserinfo } = await api.patch("/profile", updateUserinfo);
  return newUserinfo;
}

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // throw error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // alert(error.response.data.message);
    // throw error
    return Promise.reject(error);
  }
)
const authApi = {
  register,
  login,
  user,
  patchProfile
}

export default authApi;