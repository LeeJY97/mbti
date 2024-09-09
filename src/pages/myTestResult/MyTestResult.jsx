import { useUser } from "../../zustand/authStore";
import { MBTI_DESCRIPTIONS } from "../../utils/constants";
import { useGetPrivateTestResultsQuery } from "../../hooks/testQueries";

const MyTestResult = () => {
  const { userinfo } = useUser();

  const { data: testResults, isPending: isTestResultsPending } = useGetPrivateTestResultsQuery(userinfo.id);

  if (isTestResultsPending) {
    return <>로딩중 . . .</>;
  }

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
