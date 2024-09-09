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

    }
  }
}))



export const useTest = () => testStore((state) => state);
export const useTestAction = () => testStore((state) => state.action);