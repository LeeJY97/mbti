import { useTest, useTestAction } from "../../zustand/testStore";

const TestList = ({ data }) => {
  const { selected } = useTest();
  const { setSelected } = useTestAction();

  return (
    <ul className="flex flex-col items-center gap-4 bg-white ">
      {data.map((test) => (
        <li key={test.id} className="w-[800px] h-[100px] flex flex-col items-center justify-around bg-blue-50">
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
            >
              {/* 네 */}
            </button>
            <button
              onClick={() => setSelected(test.id, "n")}
              className={
                selected[test.id] === "n"
                  ? "w-[30px] h-[30px] border-2 border-purple-600 bg-purple-400 rounded-full"
                  : "w-[30px] h-[30px] border-2 border-purple-600 rounded-full"
              }
            >
              {/* 아니요 */}
            </button>
            <span>아니요</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TestList;
