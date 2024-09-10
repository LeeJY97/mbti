import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { useUserAction } from "../../zustand/authStore";

const ToggleLink = () => {
  return <Link to="/auth/sign-up">아직 회원이 아니신가요?</Link>;
};

const SignIn = () => {
  const { signIn } = useUserAction();
  const navigate = useNavigate();

  const signInHandler = (id, password) => {
    if (signIn({ id: `mbti-test-${id}`, password })) {
      navigate("/");
    }
  };

  return <AuthForm type="로그인" action={signInHandler} ToggleLink={ToggleLink}></AuthForm>;
};

export default SignIn;
