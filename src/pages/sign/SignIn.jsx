import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { useUserAction } from "../../zustand/authStore";
import { useState } from "react";

const SignIn = () => {
  // const [id, setId] = useState("");
  // const [password, setPassword] = useState("");
  const [id, setId] = useState("admin");
  const [password, setPassword] = useState("123123");
  const { signIn } = useUserAction();
  const navigate = useNavigate();

  const signInHandler = () => {
    if (signIn({ id: `mbti-test-${id}`, password })) {
      navigate("/");
    }
  };

  return (
    <AuthForm>
      <h2 className="text-2xl">로그인</h2>
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
      <button onClick={signInHandler}>로그인</button>
      <Link to="/auth/sign-up">
        <span>회원가입</span>
      </Link>
    </AuthForm>
  );
};

export default SignIn;
