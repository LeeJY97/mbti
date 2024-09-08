import { authApi } from "../axios/auth";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const userStore = create(
  immer((set) => {
    return {
      token: sessionStorage.getItem('token'),
      isLoggedIn: false,
      userinfo: null,
      action: {
        signUp: async (userFormData) => {
          try {
            await authApi.post("/register", userFormData);

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

            sessionStorage.setItem('token', data.accessToken);

            set((state) => {
              state.token = data.accessToken;
              state.isLoggedIn = true;
              state.userinfo = {
                id: data.userId,
                nickname: data.nickname
              }
            });
          } catch (e) {
            alert(e.response.data.message);
          }
        },

        validateToken: async () => {
          try {
            // const { data } = await authApi.get("/user");
            const { data } = await authApi.getUser("/user");

            return data;

          } catch (e) {
            console.log('error => validateToken', e.response.data.message);
          }
        },
        signOut: () => {
          sessionStorage.removeItem('token');
          set((state) => {
            console.log("signOut");
            state.token = "";
            state.isLoggedIn = false;
            state.userinfo = {};
          })
        },
        updateProfile: async (updateUserinfo) => {
          const { data: newUserinfo } = await authApi.patch("/profile", updateUserinfo);

          console.log('newUserinfo', newUserinfo);
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