import { useQuery } from "@tanstack/react-query";
import { MBTI_DESCRIPTIONS } from "../../utils/constants";
import { useGetAllTestResultsQuery } from "../../hooks/testHooks";

const AllTestResult = () => {
  const { data: testResults, isPending: isTestResultsPending } = useGetAllTestResultsQuery();

  if (isTestResultsPending) {
    return <div>로딩중. . . </div>;
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

export default AllTestResult;
