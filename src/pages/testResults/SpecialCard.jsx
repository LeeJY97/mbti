import React from "react";
import styled from "styled-components";

const StyledContainer = styled.li`
  background: rgb(216, 172, 109);
  background: linear-gradient(
    90deg,
    rgba(216, 172, 109, 1) 0%,
    rgba(254, 209, 134, 1) 33%,
    rgba(242, 197, 126, 1) 39%,
    rgba(186, 143, 88, 1) 100%
  );
`;

const StyledFont = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap");

  font-family: "Dela Gothic One", sans-serif;
  font-weight: 900;
  font-style: normal;
`;
const SpecialCard = ({ data, userinfo }) => {
  return (
    <StyledContainer
      className={`w-[326px] h-[204px] flex flex-col justify-between rounded-lg p-1 gap-3 p-4 rounded-lg relative`}
    >
      <div className="pl-1 pr-1 border-stone-500 border-b-2 pt-2 pb-1 flex justify-between">
        <p className="text-slate-600 text-xs ">Special</p>
        <p className="text-slate-600 text-xs ">{userinfo.nickname}</p>
      </div>
      <div>
        <StyledFont className="flex justify-center text-4xl text-gray-800 font-bold">INTP</StyledFont>
      </div>

      <div className="flex justify-between items-center pb-2 pl-1 pr-1">
        {/* <div className="flex gap-4 items-start text-slate-400 text-xs">
          <p>{data.nickname}</p>
          <p>{data.todayMonth}</p>
        </div> */}

        {data.userId === userinfo.id ? (
          <></>
        ) : (
          // <div className="flex gap-1 items-start">
          //   <button
          //     onClick={() => mutateDeleteTestResult(data.id)}
          //     className="w-[50px] h-[20px] text-white bg-black text-xs rounded-s-md rounded-e-md"
          //   >
          //     삭제
          //   </button>
          //   {data.visible && (
          //     <button
          //       onClick={() => mutatePatchVisible({ id: data.id, visible: data.visible })}
          //       className="w-[50px] h-[20px] text-white bg-red-500 rounded-s-md rounded-e-md text-xs"
          //     >
          //       숨기기
          //     </button>
          //   )}
          //   {!data.visible && (
          //     <button
          //       onClick={() => mutatePatchVisible({ id: data.id, visible: data.visible })}
          //       className="w-[50px] h-[20px] text-white bg-blue-500 rounded-s-md rounded-e-md text-xs"
          //     >
          //       보이기
          //     </button>
          //   )}
          // </div>
          <div className="h-[20px]"></div>
        )}
      </div>
    </StyledContainer>
  );
};

export default SpecialCard;
