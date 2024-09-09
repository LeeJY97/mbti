import { MBTI_DESCRIPTIONS } from "../../utils/constants";
import { useUser } from "../../zustand/authStore";
import IntpCard from "./IntpCard";

const MbtiCard = ({ data }) => {
  const { userinfo } = useUser();

  return (
    // <li className="flex flex-col items-center gap-3 p-4 border border-grey-500 rounded-lg w-52 h-52">
    <>
      {/* {data.mbti !== "intp" ? ( */}
      <li
        className={`w-[190px] h-[254px] flex flex-col items-center justify-between gap-3 p-4 border-4 border-${data.mbti} rounded-lg relative`}
      >
        <div className="absolute top-0 left-0 text-xs">
          <p>{data.nickname}</p>
        </div>
        <div>
          <div className={`flex flex-col items-center  text-${data.mbti}`}>
            <div>
              <span className={`text-2xl text-${data.mbti}`}>{data.mbti.toUpperCase()}</span>
            </div>
            <p className={`text-2xl text-${data.mbti}`}>{MBTI_DESCRIPTIONS[data.mbti].keyword}</p>
          </div>
        </div>
        <div>
          <p>{MBTI_DESCRIPTIONS[data.mbti].description}</p>
        </div>
        {data.userId === userinfo.id ? (
          <div className="flex justify-between items-center gap-4">
            <button className="w-[50px] h-[20px] text-white bg-red-500 rounded-s-xl rounded-e-xl text-xs">삭제</button>
            {data.visible && (
              <button className="w-[50px] h-[20px] text-white bg-red-500 rounded-s-xl rounded-e-xl text-xs">
                숨기기
              </button>
            )}
            {!data.visible && (
              <button className="w-[50px] h-[20px] text-white bg-blue-500 rounded-s-xl rounded-e-xl text-xs">
                보이기
              </button>
            )}
          </div>
        ) : (
          <div className="h-[20px]"></div>
        )}
      </li>
      {/* ) : (
        <IntpCard></IntpCard>
      )} */}
    </>
  );
};

export default MbtiCard;
