import { useEffect, useRef, useState } from "react";
import { useUser, useUserAction } from "../../zustand/authStore";
import { usePatchBatchProfile } from "../../hooks/testMutates";
import { getTodayMonth } from "../../utils";

const Profile = () => {
  const { userinfo } = useUser();
  const { updateProfile } = useUserAction();
  const [inputActive, setInputActive] = useState(false);
  const [nickname, setNickname] = useState(userinfo?.nickname);
  const inputRef = useRef();

  useEffect(() => {
    if (inputActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputActive]);

  const mutateProfile = usePatchBatchProfile();

  const handleUpdateUser = () => {
    updateProfile({ nickname });
    setInputActive(false);
    mutateProfile({ userId: userinfo.id, nickname });
  };

  const todayMonth = getTodayMonth();

  return (
    <div className="w-full h-[500px] flex justify-center items-center">
      <div className="w-[326px] h-[204px] mx-auto flex flex-col justify-between bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between">
          <h2 className="text-sm text-slate-400 font-semibold">MBTI Profile</h2>
          {!inputActive && (
            <button onClick={() => setInputActive(true)}>
              <img src="/assets/수정.png" className="w-5" />
            </button>
          )}
          {inputActive && <button onClick={handleUpdateUser}>완료</button>}
        </div>
        <div className="flex w-full">
          {!inputActive && <p className="w-full text-sm text-slate-400 font-semibold">{nickname}</p>}
          {inputActive && (
            <input
              type="text"
              className="w-full border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              ref={inputRef}
            />
          )}
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-slate-400 font-semibold">INTP INTJ ISTP ISFJ</p>
          <p className="text-sm text-slate-400 font-semibold">{todayMonth}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
