import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const isLoggedIn = true;

  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <div className="w-4/6 mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
