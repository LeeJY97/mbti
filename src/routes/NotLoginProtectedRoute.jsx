import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../zustand/authStore";

export const NotLoginProtectedRoute = () => {
  const { isLoggedIn } = useUser();

  console.log("로그인 안된 사람 route", isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
