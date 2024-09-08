import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import { useUser } from "../zustand/authStore";

export const LoginProtectedRoute = () => {
  const { isLoggedIn, validateToken } = useUser();

  // const isValidateToken = validateToken().then((res) => {
  //   console.log("res", res);
  // });

  // console.log("isValidateToken", isValidateToken);

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
