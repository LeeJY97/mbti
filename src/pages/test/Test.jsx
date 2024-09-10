import { useTest, useTestAction } from "../../zustand/testStore";
import { useUser } from "../../zustand/authStore";
import { getSummaryTest, getTodayMonth, validateTest } from "../../utils";
import { useGetTestsQuery } from "../../hooks/testQueries";
import { useAddTestResult } from "../../hooks/testMutates";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import TestList from "./TestList";
import "./test.css";
import { useNavigate } from "react-router-dom";

const getProgressBarWidth = (tests, selected) => {
  const totalLength = tests ? tests.length : 0;
  let targetLength = 0;
  if (selected) {
    targetLength = Object.keys(selected).length;
  }

  return Math.round((targetLength / totalLength) * 100);
};

const Test = () => {
  const { selected } = useTest();
  const { initSelected } = useTestAction();
  // const { setSelected } = useTestAction();
  const { isLoggedIn, userinfo } = useUser();
  const { data: tests, isPending, isError } = useGetTestsQuery();
  const mutateAddTestResult = useAddTestResult();
  const navigate = useNavigate();
  const [progressBarWidth, setProgressBarWidth] = useState(() => {
    return getProgressBarWidth(tests, selected);
  });

  async function handleTestResult() {
    if (validateTest(tests, selected)) {
      if (isLoggedIn) {
        const testResult = getSummaryTest(tests, selected);
        testResult.userId = userinfo.id;
        testResult.nickname = userinfo.nickname;
        testResult.visible = true;
        testResult.todayMonth = getTodayMonth();

        mutateAddTestResult(testResult);
        initSelected();

        navigate("/my-test-result");
      }
    }
  }

  // TODO progressBar 커스텀 훅으로 분리 ?
  useEffect(() => {
    const percentage = getProgressBarWidth(tests, selected);
    setProgressBarWidth(percentage);
  }, [selected]);

  if (isError) {
    return <>데이터 조회 에러</>;
  }

  return (
    <>
      <div className="h-[20px] bg-dark-color fixed w-full top-[40px] left-0 z-50">
        <div
          className={`custom-progress-bar transition-all duration-700 ease-in-out`}
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>
      {isPending && <Loading />}
      {!isPending && (
        <>
          <TestList data={tests} />
          <div className="w-[650px] mt-10 flex justify-center mx-auto">
            <button
              className="w-[50px] h-[30px] bg-black text-white rounded-s-xl rounded-e-xl"
              onClick={handleTestResult}
            >
              완료!
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Test;
