import { useEffect, useRef, useState } from "react";
import { useUser, useUserAction } from "../../zustand/authStore";
import { useTestAction } from "../../zustand/testStore";

const Profile = () => {
  const { userinfo } = useUser();
  const { updateProfile } = useUserAction();
  const { fetchBatchPatch } = useTestAction();
  const [inputActive, setInputActive] = useState(false);
  const [nickname, setNickname] = useState(userinfo?.nickname);
  const inputRef = useRef();

  useEffect(() => {
    if (inputActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputActive]);

  const handleUpdateUser = () => {
    updateProfile({ nickname });
    setInputActive(false);
    // json-server에 있는거 전부 ..
    fetchBatchPatch({ userId: userinfo.id, nickname });
  };

  return (
    <div className="flex flex-col">
      <h2>profile</h2>
      {!inputActive && <p className="bg-slate-500">{nickname}</p>}
      {inputActive && (
        <input
          type="text"
          className="border-2"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          ref={inputRef}
        />
      )}
      {!inputActive && <button onClick={() => setInputActive(true)}>수정</button>}
      {inputActive && <button onClick={handleUpdateUser}>완료</button>}
    </div>
  );
};

export default Profile;
