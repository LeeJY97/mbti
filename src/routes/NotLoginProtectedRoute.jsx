import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../zustand/authStore";

export const NotLoginProtectedRoute = () => {
  const { isLoggedIn, token } = useUser();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
