import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { useUserAction } from "../../zustand/authStore";
import { generateRandomNickname } from "../../utils";

const ToggleLink = () => {
  return <Link to="/auth/sign-in">이미 회원이신가요?</Link>;
};

const SignUp = () => {
  const { signUp, signIn } = useUserAction();
  const nickname = generateRandomNickname();
  const navigate = useNavigate();

  const signUpHandler = async (id, password) => {
    try {
      await signUp({ id: `mbti-test-${id}`, password, nickname });
      await signIn({ id: `mbti-test-${id}`, password, nickname });
      navigate("/");
    } catch (e) {
      alert(`회원가입에 실패했습니다. ${e.response.data.message}`);
    }
  };

  return <AuthForm type="회원가입" action={signUpHandler} ToggleLink={ToggleLink}></AuthForm>;
};

export default SignUp;
