import axios from "axios";

const api = axios.create({
  baseURL: "https://ruddy-temporal-law.glitch.me"
})

const getAllTestResults = async () => {
  const { data } = await api.get(`/testResults`);
  return data;
}

const getPrivateTestResults = async (userId) => {
  const { data } = await api.get(`/testResults?userId=${userId}`);
  return data;
}

const testApi = {
  getAllTestResults,
  getPrivateTestResults
}

export default testApi;
