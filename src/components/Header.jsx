import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <ul className='flex justify-center w-screen gap-1'>
      <li className={pathname === "/test" ? "bg-blue-500 text-white p-2 rounded" : "p-2"}>
        <Link to='/test'>검사하기</Link>
      </li>
      <li className={pathname === "/my-test-result" ? "bg-blue-500 text-white p-2 rounded" : "p-2"}>
        <Link to='/my-test-result'>기록</Link>
      </li>
      <li className={pathname === "/all-test-result" ? "bg-blue-500 text-white p-2 rounded" : "p-2"}>
        <Link to='/all-test-result'>타인</Link>
      </li>
      <li className={pathname === "/#" ? "bg-blue-500 text-white p-2 rounded" : "p-2"}>
        <Link to='/#'>로그아웃</Link>
      </li>
    </ul>
  );
};

export default Header;
