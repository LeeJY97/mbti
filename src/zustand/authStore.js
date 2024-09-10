import authApi from "../axios/auth";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const userStore = create(
  immer((set, get) => {
    return {
      // TODO tanstack
      // tanstack => initialState
      // onSuccess => localStorage
      token: sessionStorage.getItem('token'),
      isLoggedIn: false,
      userinfo: null,
      action: {
        signUp: async (userFormData) => {
          await authApi.register(userFormData);

          // get().action.signIn 
          // set(async (state) => {
          //   await state.action.signIn(userFormData);
          // });

        },
        signIn: async (userFormData) => {
          const userData = await authApi.login(userFormData);

          sessionStorage.setItem('token', userData.accessToken);

          set((state) => {
            state.token = userData.accessToken;
            state.isLoggedIn = true;
            state.userinfo = {
              id: userData.userId,
              nickname: userData.nickname
            }
          });
        },
        setAuth: (userData) => {
          set((state) => {
            state.isLoggedIn = true;
            state.userinfo = {
              id: userData.id,
              nickname: userData.nickname
            }
          })
        },

        validateToken: async () => {
          const data = await authApi.user();
          return data;
        },
        signOut: () => {
          sessionStorage.removeItem('token');
          set((state) => {
            state.token = "";
            state.isLoggedIn = false;
            state.userinfo = {};
          })
        },
        updateProfile: async (updateUserinfo) => {
          const newUserinfo = await authApi.patchProfile(updateUserinfo);

          set((state) => {
            state.userinfo.nickname = newUserinfo.nickname;
          })
        }
      }
    }
  }),
)

export const useUser = () => userStore(state => state);
export const useUserAction = () => userStore(state => state.action);