import Layout from "./components/Layout";
import Routes from "./routes";
import "./index.css";
import { useEffect } from "react";
function App() {
  // 여기에 새로고침 하면 token ...
  useEffect(() => {}, []);
  return (
    <>
      <Routes></Routes>
      {/* <Layout></Layout> */}
    </>
  );
}

export default App;
