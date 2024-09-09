import { useTest, useTestAction } from "../../zustand/testStore";
import { useUser } from "../../zustand/authStore";
import { getSummaryTest, validateTest } from "../../utils";
import { useGetTestsQuery } from "../../hooks/testQueries";
import { useAddTestResult } from "../../hooks/testMutates";
import { useEffect } from "react";

// const testTestResult = {
//   e: 20,
//   s: 20,
//   f: 20,
//   j: 20,
//   i: 0,
//   n: 0,
//   t: 0,
//   p: 0,
//   mbti: "esfj",
//   userId: "mbti-test-admin",
//   nickname: "푸른여우"
// };

const Test = () => {
  const { selected } = useTest();
  const { setSelected } = useTestAction();
  const { isLoggedIn, userinfo } = useUser();

  const { data: tests, isPending, isError } = useGetTestsQuery();

  const mutateAddTestResult = useAddTestResult();

  async function handleTestResult() {
    if (validateTest(tests, selected)) {
      if (isLoggedIn) {
        const testResult = getSummaryTest(tests, selected);
        testResult.userId = userinfo.id;
        testResult.nickname = userinfo.nickname;

        mutateAddTestResult(testResult);
      }
    }
  }

  useEffect(() => {
    console.log("선택");
  }, [selected]);

  if (isPending) {
    return <div>로딩중. . .</div>;
  }
  if (isError) {
    return <>데이터 조회 에러</>;
  }

  return (
    <>
      <ul className="flex flex-col items-center gap-4">
        {tests.map((test) => (
          <li key={test.id} className="flex flex-col items-center">
            <h2>{test.question}</h2>
            <div className="flex justify-center gap-10">
              <button
                onClick={() => setSelected(test.id, "y")}
                className={selected[test.id] === "y" ? "bg-blue-400" : ""}
              >
                네
              </button>
              <button
                onClick={() => setSelected(test.id, "n")}
                className={selected[test.id] === "n" ? "bg-blue-400" : ""}
              >
                아니요
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mx-auto">
        <button className="bg-slate-500" onClick={handleTestResult}>
          제출
        </button>
      </div>
    </>
  );
};

export default Test;
