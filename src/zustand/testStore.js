import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const testStore = create(immer((set) => {
  return {
    selected: {},
    action: {
      setSelected: (id, answer) => {
        set(state => {
          state.selected[id] = answer;
        })
      },
      initSelected: () => {
        set(state => {
          state.selected = {};
        })
      }
    }
  }
}))



export const useTest = () => testStore((state) => state);
export const useTestAction = () => testStore((state) => state.action);