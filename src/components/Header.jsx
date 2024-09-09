import { Link, useLocation } from "react-router-dom";
import { useUser, useUserAction } from "../zustand/authStore";

const Header = () => {
  const { pathname } = useLocation();
  const { userinfo } = useUser();
  const { signOut } = useUserAction();

  return (
    <div className="flex justify-between">
      <div>MBTI</div>
      <ul className="flex justify-center bg-main-color gap-1 border-b-2 h-12">
        <li className={pathname === "/test" ? "bg-sub-color text-white p-2 rounded" : "p-2"}>
          <Link to="/test">검사하기</Link>
        </li>
        <li className={pathname === "/my-test-result" ? "bg-sub-color text-white p-2 rounded" : "p-2"}>
          <Link to="/my-test-result">기록</Link>
        </li>
        <li className={pathname === "/all-test-result" ? "bg-sub-color text-white p-2 rounded" : "p-2"}>
          <Link to="/all-test-result">타인</Link>
        </li>
        <li className={pathname === "/profile" ? "bg-sub-color text-white p-2 rounded" : "p-2"}>
          <Link to="/profile">{userinfo?.nickname}</Link>
        </li>
        <li className={pathname === "/#" ? "bg-sub-color text-white p-2 rounded" : "p-2"} onClick={signOut}>
          <Link to="/#">로그아웃</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
