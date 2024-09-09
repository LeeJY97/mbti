import { useTest, useTestAction } from "../../zustand/testStore";
import { useUser } from "../../zustand/authStore";
import { getSummaryTest, validateTest } from "../../utils";
import { useGetTestsQuery } from "../../hooks/testQueries";
import { useAddTestResult } from "../../hooks/testMutates";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import TestList from "./TestList";

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
  // const { setSelected } = useTestAction();
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

  if (isError) {
    return <>데이터 조회 에러</>;
  }

  return (
    <>
      <div className="h-[200px] bg-dark-color"></div>
      {isPending && <Loading />}
      {!isPending && <TestList data={tests} />}
      <div className="w-[650px]  flex justify-center mx-auto">
        <button className="bg-slate-500" onClick={handleTestResult}>
          제출
        </button>
      </div>
    </>
  );
};

export default Test;
