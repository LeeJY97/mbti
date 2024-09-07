import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../zustand/store";

export const NotLoginProtectedRoute = () => {
  const { isLoggedIn } = useUser();

  if (isLoggedIn) {
    console.log("isLoggedIn");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
