import "./index.css";
import { useEffect, useState } from "react";
import { useUserAction } from "./zustand/authStore";
import Loading from "./components/Loading";
import Routes from "./routes/TestIndex";
function App() {
  // 여기에 새로고침 하면 token ...
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const { validateToken, setAuth } = useUserAction();

  useEffect(() => {
    const initAuth = async () => {
      const token = sessionStorage.getItem("token");
      if (token) {
        const userData = await validateToken();

        if (userData) {
          setAuth(userData);
        }
      }
      sessionStorage.removeItem("token");
    };
    setIsAuthChecked(true);
    initAuth();
  }, []);

  console.log("isAuthChecked", isAuthChecked);

  if (!isAuthChecked) {
    return <Loading />;
  }
  return (
    <>
      <Routes></Routes>
      {/* <Layout></Layout> */}
    </>
  );
}

export default App;
