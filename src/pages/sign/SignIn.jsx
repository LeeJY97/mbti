import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { useUserAction } from "../../zustand/authStore";

const ToggleLink = () => {
  return <Link to="/auth/sign-up">아직 회원이 아니신가요?</Link>;
};

const SignIn = () => {
  const { signIn } = useUserAction();
  const navigate = useNavigate();

  const signInHandler = async (id, password) => {
    // if (signIn({ id: `mbti-test-${id}`, password })) {
    //   navigate("/");
    // }
    try {
      await signIn({ id: `mbti-test-${id}`, password });
      navigate("/");
    } catch (e) {
      alert(`로그인에 실패했습니다. ${e.response.data.message}`);
    }
  };

  return <AuthForm type="로그인" action={signInHandler} ToggleLink={ToggleLink}></AuthForm>;
};

export default SignIn;
