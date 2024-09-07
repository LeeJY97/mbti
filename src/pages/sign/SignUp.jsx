import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import { useUser } from "../../zustand/store";
import { useState } from "react";
import { generateRandomNickname } from "../../utils";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUser();
  const nickname = generateRandomNickname();
  return (
    <AuthForm>
      <h2 className="text-2xl">회원가입</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="아이디를 입력하세요"
        className="border border-grey-500 "
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호를 입력하세요"
        className="border border-grey-500 "
      />
      <button onClick={() => signUp({ id: `mbti-test-${id}`, password, nickname })}>회원가입</button>
      <Link to="/auth/sign-in">
        <span>로그인</span>
      </Link>
    </AuthForm>
  );
};

export default SignUp;
