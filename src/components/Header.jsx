import { useUser, useUserAction } from "@/zustand/authStore";
import { Link, useLocation } from "react-router-dom";

const customHeaderStyle = "custom-header-item custom-header-item-after";

const Header = () => {
  const { pathname } = useLocation();
  const { userinfo } = useUser();
  const { signOut } = useUserAction();

  return (
    <div className="bg-main-color fixed w-full left-0 top-0 h-[40px] z-[9999]">
      {/* <div className="w-[600px] flex justify-between "> */}
      <div className="flex justify-around min-w-[600px]">
        <div className="w-[300px] flex flex-col justify-center">
          <Link to="/">
            <h2 className="font-bold">MBTI</h2>
          </Link>
        </div>
        <ul className="w-[300px] text-sm flex justify-center gap-1">
          <li className={pathname === "/test" ? customHeaderStyle : "custom-header-item"}>
            <Link to="/test">검사하기</Link>
          </li>
          <li className={pathname === "/my-test-result" ? customHeaderStyle : "custom-header-item"}>
            <Link to="/my-test-result">내 결과</Link>
          </li>
          <li className={pathname === "/all-test-result" ? customHeaderStyle : "custom-header-item"}>
            <Link to="/all-test-result">모든 사람의 결과</Link>
          </li>
        </ul>
        <ul className="w-[300px] text-sm flex justify-end gap-1">
          <li className={pathname === "/profile" ? customHeaderStyle : "custom-header-item"}>
            <Link to="/profile">{userinfo?.nickname}</Link>
          </li>
          <li className={pathname === "/#" ? customHeaderStyle : "custom-header-item"} onClick={signOut}>
            <Link to="/#">로그아웃</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
