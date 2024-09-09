import { useQuery } from '@tanstack/react-query';
import testApi from '../axios/test';

const getTests = async () => {
  const data = testApi.getTests();
  return data;
};

const getAllTestResults = async () => {
  const allTestResults = testApi.getAllTestResults();
  console.log('allTestResults', allTestResults);
  return allTestResults;
};
const getPrivateTestResults = async (userId) => {
  const privateTestResults = testApi.getPrivateTestResults(userId);
  return privateTestResults;
};

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