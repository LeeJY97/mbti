import { useTest, useTestAction } from "../../zustand/testStore";

const TestList = ({ data }) => {
  const { selected } = useTest();
  const { setSelected } = useTestAction();

  return (
    <ul className="flex flex-col items-center gap-4 bg-light-color ">
      {data.map((test) => (
        <li
          key={test.id}
          className={`w-[650px] h-[150px] flex flex-col items-center justify-around border-b p-4 ${
            selected[test.id] && "opacity-60"
          }`}
        >
          {/* TODO 검사 결과 어둡게 처리 */}
          {/* {selected[test.id] && <div className="w-[650px] h-[150px] absolute bg-slate-100 opacity-55"></div>} */}
          <h2>{test.question}</h2>
          <div className="flex justify-center gap-10">
            <span>네</span>
            <button
              onClick={() => setSelected(test.id, "y")}
              className={
                selected[test.id] === "y"
                  ? "w-[30px] h-[30px] border-2 border-sub-color bg-main-color rounded-full"
                  : "w-[30px] h-[30px] border-2 border-sub-color rounded-full"
              }
            ></button>
            <button
              onClick={() => setSelected(test.id, "n")}
              className={
                selected[test.id] === "n"
                  ? "w-[30px] h-[30px] border-2 border-purple-600 bg-purple-400 rounded-full"
                  : "w-[30px] h-[30px] border-2 border-purple-600 rounded-full"
              }
            ></button>
            <span>아니요</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TestList;
