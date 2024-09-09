import axios from "axios"

const api = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr"
});

const getToken = () => {
  return sessionStorage.getItem('token');
};

const register = async (userFormData) => {
  const data = await api.post("/register", userFormData);

  console.log('data', data);
  return data;
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

    console.log('token', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
);

api.interceptors.response.use(
  (response) => {
    console.log(`Success '${response.config.url}'`);
    return response;
  },
  (error) => {
    console.log("응답 실패", error);
    alert(error.response.data.message);
  }
)
const authApi = {
  register,
  login,
  user,
  patchProfile
}

export default authApi;