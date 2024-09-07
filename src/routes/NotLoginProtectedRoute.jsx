import { Navigate, Outlet } from "react-router-dom";

export const NotLoginProtectedRoute = () => {
  const isLoggedIn = false;

  if (isLoggedIn) {
    console.log("isLoggedIn");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
