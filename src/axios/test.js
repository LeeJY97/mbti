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

const patchBatchProfile = (id, nickname) => {
  return api.patch(`/testResults/${id}`, { nickname });
}

const deleteTestResult = (id) => {
  return api.delete(`/testResults/${id}`);
}

const patchVisible = async ({ id, visible }) => {
  console.log('patchVisible', visible);
  return api.patch(`/testResults/${id}`, { visible: !visible });
}

const tempVisible = async () => {
  const data = await getAllTestResults();

  data.map(async (result) => {
    await api.patch(`/testResults/${result.id}`, { visible: true });
  })
}

const testApi = {
  getTests,
  postTestResult,
  getAllTestResults,
  getPrivateTestResults,
  patchBatchProfile,
  deleteTestResult,
  patchVisible,
  tempVisible
}

export default testApi;
