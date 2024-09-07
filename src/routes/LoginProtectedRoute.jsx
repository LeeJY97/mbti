import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout";

export const LoginProtectedRoute = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) return <Navigate to="/auth/sign-in" replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
