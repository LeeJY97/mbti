import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import testApi from "../axios/test";

const testStore = create(immer((set) => {
  return {
    selected: {},
    action: {
      setSelected: (id, answer) => {
        set(state => {
          state.selected[id] = answer;
        })
      },
      // 함수 분리하기 가독성이 안좋다. (타인이 보기 힘듬)
      // 이게 좋으려면 차라리 type을 받는게 좋음 (privateResults, allResults)
      // zustand에서 하지 말고, tanstack으로 관리 하기
      getAllTestResults: async () => {
        const allTestResults = testApi.getAllTestResults();
        return allTestResults;
      },
      getPrivateTestResults: async (userId) => {
        const privateTestResults = testApi.getPrivateTestResults(userId);
        return privateTestResults;
      },
      PatchBatchProfile: async ({ userId, nickname }) => {
        const testResults = await testApi.getPrivateTestResults(userId);

        const updatePromises = testResults.map(item => {
          return testApi.PatchBatchProfile(item.id, nickname);
        })

        Promise.all(updatePromises);
      }
    }
  }
}))



export const useTest = () => testStore((state) => state);
export const useTestAction = () => testStore((state) => state.action);