import React from "react";
import { MBTI_DESCRIPTIONS } from "../../utils/constants";
import IntpCard from "./IntpCard";

const test = "border-intp";

const MbtiCard = ({ data }) => {
  console.log(data.mbti);
  const colorVariants = {
    istp: "[#FF8343]",
    istj: "[#FF8C00]",
    isfj: "[#FF4500]",
    isfp: "[#8B4513]",
    intj: "[#0D98BA]",
    intp: "[#003366]",
    infj: "[#4B0082]",
    infp: "[#6B5B95]",
    estp: "[#00FFFF]",
    estj: "[#7FFF00]",
    esfp: "[#77DD77]",
    esfj: "[#228B22]",
    enfp: "[#615550]",
    enfj: "[#BFB5B2]",
    entp: "[#7F5A83]",
    entj: "[#D3D3D3]"
  };

  const mbtiColor = colorVariants[data.mbti];

  console.log("mbtiColor", mbtiColor);

  return (
    // <li className="flex flex-col items-center gap-3 p-4 border border-grey-500 rounded-lg w-52 h-52">
    <>
      {data.mbti !== "intp" ? (
        <li
          className={`w-[190px] h-[254px] flex flex-col items-center justify-between gap-3 p-4 border-4 border-${data.mbti} rounded-lg`}
        >
          <div>
            <div className={`flex flex-col items-center text-${colorVariants[data.mbti]}`}>
              <div>
                <span className={`text-2xl text-${data.mbti}`}>{data.mbti.toUpperCase()}</span>
              </div>
              <p className={`text-2xl text-${data.mbti}`}>{MBTI_DESCRIPTIONS[data.mbti].keyword}</p>
            </div>
          </div>
          <div>
            <p>{MBTI_DESCRIPTIONS[data.mbti].description}</p>
          </div>
          <div>
            <p>{data.nickname}</p>
          </div>
        </li>
      ) : (
        <IntpCard></IntpCard>
      )}
    </>
  );
};

export default MbtiCard;
