import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      {/* <div className="w-[650px] mx-auto">{children}</div> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
