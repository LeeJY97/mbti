import Routes from "./routes";
import "./index.css";
import { useEffect, useState } from "react";
import { useUserAction } from "./zustand/authStore";
function App() {
  // 여기에 새로고침 하면 token ...
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [testTime, setTestTime] = useState(false);
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

  setTimeout(() => {
    setTestTime(true);
  }, 3000);

  console.log("isAuthChecked", isAuthChecked);

  if (!isAuthChecked || !testTime) {
    return <>??????</>;
  }
  return (
    <>
      <Routes></Routes>
      {/* <Layout></Layout> */}
    </>
  );
}

export default App;
