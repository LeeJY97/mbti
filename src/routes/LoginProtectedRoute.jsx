import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import { useUser } from "../zustand/authStore";

export const LoginProtectedRoute = () => {
  const { isLoggedIn } = useUser();

  if (!isLoggedIn) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
