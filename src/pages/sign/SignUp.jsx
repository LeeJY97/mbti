import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

const SignUp = () => {
  return (
    <AuthForm>
      <h2 className="text-2xl">회원가입</h2>
      <input type="text" placeholder="아이디를 입력하세요" className="border border-grey-500 " />
      <input type="password" placeholder="비밀번호를 입력하세요" className="border border-grey-500 " />
      <button onClick={() => {}}>회원가입</button>
      <Link to="/auth/sign-in">
        <span>로그인</span>
      </Link>
    </AuthForm>
  );
};

export default SignUp;
