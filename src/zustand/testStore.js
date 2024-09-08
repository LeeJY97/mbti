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
      fetchTestResults: async (userId) => {
        const path = !userId ? `/testResults` : `/testResults?userId=${userId}`

        const { data } = await testApi.get(path);
        return data;
      }
    }
  }
}))



export const useTest = () => testStore((state) => state);
export const useTestAction = () => testStore((state) => state.action);