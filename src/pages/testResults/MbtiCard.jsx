import { useDeleteTestResult, usePatchVisible } from "../../hooks/testMutates";
import { MBTI_DESCRIPTIONS } from "../../utils/constants";
import { useUser } from "../../zustand/authStore";
import SpecialCard from "./SpecialCard";

const MbtiCard = ({ data }) => {
  const { userinfo } = useUser();
  const mutateDeleteTestResult = useDeleteTestResult();
  const mutatePatchVisible = usePatchVisible();

  console.log("data", data);

  if (userinfo.id !== data.userId && !data.visible) {
    return <></>;
  }

  const isSpecialCard = ["intp", "infj"].includes(data.mbti);

  return (
    // <li className="flex flex-col items-center gap-3 p-4 border border-grey-500 rounded-lg w-52 h-52">
    <>
      {/* {data.mbti !== "intp" ? ( */}
      {isSpecialCard ? (
        <SpecialCard data={data} userinfo={userinfo} />
      ) : (
        <li
          className={`w-[326px] h-[204px] flex flex-col justify-between bg-gray-800 rounded-lg p-1 gap-3 p-4 rounded-lg relative`}
        >
          {data.mbti === "INTP"}
          <div className="flex w-full items-center justify-between top-0 left-0 text-xs border-stone-500 border-b-2 p-2">
            <p className="font-bold text-slate-400">{data.mbti.toUpperCase()}</p>
            <p className="font-bold text-slate-400">{MBTI_DESCRIPTIONS[data.mbti].keyword}</p>
          </div>
          <div className="pl-1 pr-1">
            <p className="text-slate-400 text-xs">▷ {MBTI_DESCRIPTIONS[data.mbti].description}</p>
          </div>

          <div className="flex justify-between items-center pb-2 pl-1 pr-1">
            <div className="flex gap-4 items-start text-slate-400 text-xs">
              <p>{data.nickname}</p>
              <p>{data.todayMonth}</p>
            </div>

            {data.userId === userinfo.id ? (
              <div className="flex gap-1 items-start">
                <button
                  onClick={() => mutateDeleteTestResult(data.id)}
                  className="w-[50px] h-[20px] text-white bg-black text-xs rounded-s-md rounded-e-md"
                >
                  삭제
                </button>
                {data.visible && (
                  <button
                    onClick={() => mutatePatchVisible({ id: data.id, visible: data.visible })}
                    className="w-[50px] h-[20px] text-white bg-red-500 rounded-s-md rounded-e-md text-xs"
                  >
                    숨기기
                  </button>
                )}
                {!data.visible && (
                  <button
                    onClick={() => mutatePatchVisible({ id: data.id, visible: data.visible })}
                    className="w-[50px] h-[20px] text-white bg-blue-500 rounded-s-md rounded-e-md text-xs"
                  >
                    보이기
                  </button>
                )}
              </div>
            ) : (
              <div className="h-[20px]"></div>
            )}
          </div>
        </li>
      )}
    </>
  );
};

export default MbtiCard;
