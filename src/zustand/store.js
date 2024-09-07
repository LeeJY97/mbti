import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useTestStore = create(immer((set) => {
  return {
    selected: {},
    action: {
      setSelected: (id, answer) => {
        set(state => {
          state.selected[id] = answer;
        })
      }
    }
  }
}))

export const useTest = () => {
  return useTestStore((state) => state);
}

export const useTestAction = () => {
  return useTestStore((state) => state.action);
}

