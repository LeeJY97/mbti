import { useState } from "react";
import { getTodayMonth } from "../../utils";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
`;

const AuthForm = ({ type, action, ToggleLink }) => {
  const [id, setId] = useState("admin");
  const [password, setPassword] = useState("123123");

  const todayMonth = getTodayMonth();
  return (
    <StyledContainer className="w-full h-full absolute top-0 flex justify-center items-center">
      <div className="w-full h-[500px] flex flex-col justify-center items-center gap-4">
        <div className="w-[326px] h-[204px] mx-auto flex flex-col justify-between bg-gray-800 rounded-lg p-4 ">
          <div className="flex justify-between">
            <h2 className="text-sm text-slate-400 font-semibold">MBTI Test</h2>
            <button className="text-sm text-slate-100 font-semibold" onClick={() => action(id, password)}>
              {type}
            </button>
          </div>
          <div className="flex flex-col gap-1 first-line:w-full">
            <input
              type="text"
              className="w-full border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디를 입력하세요."
              // ref={inputRef}
            />
            <input
              type="password"
              className="w-full border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요."
              // ref={inputRef}
            />
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-slate-400 font-semibold">
              INTP INTJ ISTP INFJ<span className="text-xs"> 우대</span>
            </p>
            <p className="text-sm text-slate-400 font-semibold">{todayMonth}</p>
          </div>
        </div>
        <ToggleLink />
      </div>
    </StyledContainer>
  );
};

export default AuthForm;
