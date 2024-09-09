import { useQuery } from '@tanstack/react-query';
import testApi from '../axios/test';

const getTests = async () => {
  const { data } = await testApi.get("/test");
  return data;
};

const getAllTestResults = async () => {
  const allTestResults = testApi.getAllTestResults();
  return allTestResults;
};
const getPrivateTestResults = async (userId) => {
  const privateTestResults = testApi.getPrivateTestResults(userId);
  return privateTestResults;
};
// const PatchBatchProfile = async ({ userId, nickname }) => {
//   const testResults = await testApi.getPrivateTestResults(userId);

//   const updatePromises = testResults.map(item => {
//     return testApi.PatchBatchProfile(item.id, nickname);
//   })

//   Promise.all(updatePromises);
// }

export const useGetTestsQuery = () => {
  return useQuery({
    queryKey: ["test"],
    queryFn: getTests
  });
}
export const useGetPrivateTestResultsQuery = (userId) => {
  return useQuery({
    queryKey: ["test-results"],
    queryFn: () => getPrivateTestResults(userId)
  });
}
export const useGetAllTestResultsQuery = () => {
  return useQuery({
    queryKey: ["test-results"],
    queryFn: getAllTestResults
  });
}

// export const getAllTestResults = () => {
//   return useQuery({
//     queryKey: ["test"],
//     queryFn: getTests
//   });
// }
