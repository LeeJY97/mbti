import { useQuery } from "@tanstack/react-query";
import { useTest } from "../../zustand/testStore";
import { useUser } from "../../zustand/authStore";
import testApi from "../../axios/test";
import { MBTI_DESCRIPTIONS } from "../../utils/constants";

const MyTestResult = () => {
  const { userinfo } = useUser();

  const { data: testResults, isPending: isTestResultsPending } = useQuery({
    queryKey: ["testResults"],
    queryFn: () => fetchTestResults(userinfo.id)
  });

  async function fetchTestResults(userId) {
    const { data } = await testApi.get(`/testResults?userId=${userId}`);
    return data;
  }

  if (isTestResultsPending) {
    return <>로딩중 . . .</>;
  }

  console.log("MyTestREsult", testResults);

  return (
    <ul className="flex flex-row flex-wrap  gap-10">
      {testResults.map((result) => {
        return (
          <li
            key={result.id}
            className="flex flex-col items-center gap-3 p-4 border border-grey-500 rounded-lg w-52 h-52"
          >
            <h2>❝{result.mbti.toUpperCase()}❞</h2>
            <p>{MBTI_DESCRIPTIONS[result.mbti].keyword}</p>
            <p>{MBTI_DESCRIPTIONS[result.mbti].description}</p>
            <p>{result.nickname}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MyTestResult;
