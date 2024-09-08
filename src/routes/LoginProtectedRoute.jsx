import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import { useUser } from "../zustand/authStore";

export const LoginProtectedRoute = () => {
  const { isLoggedIn, validateToken } = useUser();

  console.log("로그인 된 사람 route", isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
