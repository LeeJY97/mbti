import { useMutation, useQueryClient } from "@tanstack/react-query";
import testApi from "../axios/test";

async function addTestResult(testResult) {
  try {
    testApi.postTestResult(testResult);
  } catch (e) {
    alert("뭔가 에러");
    console.error(e.message);
  }
}

export const useAddTestResult = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["test-results"]);
    }
  });
  return mutate
}

const patchBatchProfile = async ({ userId, nickname }) => {
  const testResults = await testApi.getPrivateTestResults(userId);

  const updatePromises = testResults.map(item => {
    return testApi.patchBatchProfile(item.id, nickname);
  })
  Promise.all(updatePromises);
}


export const usePatchVisible = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: testApi.patchVisible,
    onSuccess: () => {
      queryClient.invalidateQueries(['test-results']);
    }
  })
  return mutate;
}


export const usePatchBatchProfile = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: patchBatchProfile,
    onSuccess: () => {
      console.log('모든 유저 정보 수정 완료')
      queryClient.invalidateQueries(["test-results"]);
    }
  });
  return mutate;
}

export const useDeleteTestResult = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    // mutationFn: testApi.deleteTestResult,
    mutationFn: testApi.deleteTestResult,
    onSuccess: () => {
      alert("삭제 완료");
      queryClient.invalidateQueries(["test-results"]);
    }
  });
  return mutate;
}