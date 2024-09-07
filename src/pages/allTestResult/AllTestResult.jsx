import { useQuery } from "@tanstack/react-query";
import testApi from "../../axios/test";
import { MBTI_DESCRIPTIONS } from "../test/constants";

const AllTestResult = () => {
  const { data: testResults, isPending: isTestResultsPending } = useQuery({
    queryKey: ["testResults"],
    queryFn: fetchTestResults
  });

  async function fetchTestResults() {
    const { data } = await testApi.get("/testResults");
    console.log("data", data);
    return data;
  }

  if (isTestResultsPending) {
    return <div>로딩중. . . </div>;
  }

  return (
    <ul className="flex flex-col gap-10">
      {testResults.map((result) => {
        return (
          <li key={result.id} className="flex flex-col items-center gap-3 border border-grey-500 rounded-lg w-52 h-52">
            <h2>❝{result.mbti.toUpperCase()}❞</h2>
            <p>{MBTI_DESCRIPTIONS[result.mbti].keyword}</p>
            <p>{MBTI_DESCRIPTIONS[result.mbti].description}</p>
            <p>사용자 1</p>
          </li>
        );
      })}
    </ul>
  );
};

export default AllTestResult;
