import axios from "axios";

const api = axios.create({
  baseURL: "https://ruddy-temporal-law.glitch.me"
})

const getTests = async () => {
  const { data } = await api.get("/test");
  return data;
}

const postTestResult = async (testResult) => {
  await api.post("/testResults", testResult);
}

const getAllTestResults = async () => {
  const { data } = await api.get(`/testResults`);
  return data;
}

const getPrivateTestResults = async (userId) => {
  const { data } = await api.get(`/testResults?userId=${userId}`);
  return data;
}

const PatchBatchProfile = (id, nickname) => {
  return api.patch(`/testResults/${id}`, { nickname });
}

const testApi = {
  getTests,
  postTestResult,
  getAllTestResults,
  getPrivateTestResults,
  PatchBatchProfile
}

export default testApi;
