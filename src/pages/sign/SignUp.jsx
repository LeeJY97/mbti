import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { useUserAction } from "../../zustand/authStore";
import { generateRandomNickname } from "../../utils";

const ToggleLink = () => {
  return <Link to="/auth/sign-in">이미 회원이신가요?</Link>;
};

const SignUp = () => {
  const { signUp } = useUserAction();
  const nickname = generateRandomNickname();
  const navigate = useNavigate();

  const signUpHandler = async (id, password) => {
    try {
      await signUp({ id: `mbti-test-${id}`, password, nickname });

      // navigate("/");
    } catch (e) {
      console.log("e", e);
    }
  };

  return <AuthForm type="회원가입" action={signUpHandler} ToggleLink={ToggleLink}></AuthForm>;

  // return (
  //   <AuthForm>
  //     <h2 className="text-2xl">회원가입</h2>
  //     <input
  //       type="text"
  //       value={id}
  //       onChange={(e) => setId(e.target.value)}
  //       placeholder="아이디를 입력하세요"
  //       className="border border-grey-500 "
  //     />
  //     <input
  //       type="password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //       placeholder="비밀번호를 입력하세요"
  //       className="border border-grey-500 "
  //     />
  //     <button onClick={() => signUp({ id: `mbti-test-${id}`, password, nickname })}>회원가입</button>
  //     <Link to="/auth/sign-in">
  //       <span>로그인</span>
  //     </Link>
  //   </AuthForm>
  // );
};

export default SignUp;
