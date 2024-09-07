import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { authApi } from "../axios/auth";

const testStore = create(immer((set) => {
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

const userStore = create(
  immer((set) => {
    return {
      SID: "",
      isLoggedIn: false,
      userinfo: {},
      signUp: async (userFormData) => {
        try {

          const response = await authApi.post("/register", userFormData);
          console.log('Up response', response);

          set((state) => {
            state.signIn(userFormData);
          })
        } catch (e) {
          alert(e.response.data.message);
        }
      },
      signIn: async (userFormData) => {
        try {
          const { data } = await authApi.post("/login", userFormData);
          console.log('response', data);

          set((state) => {
            state.SID = data.accessToken;
            state.isLoggedIn = true;
            state.userinfo = {
              id: data.id,
              nickname: data.nickname,
            }
          })
        } catch (e) {
          alert(e.response.data.message);
        }
      },
      signOut: () => {
        set((state) => {
          state.SID = "";
          state.isLoggedIn = false;
          state.userinfo = {};
        })
      }
    }
  }),
)

export const useTest = () => testStore((state) => state);

export const useTestAction = () => testStore((state) => state.action);

export const useUser = () => userStore(state => state);
