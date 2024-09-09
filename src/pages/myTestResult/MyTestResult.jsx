import { useUser } from "../../zustand/authStore";
import { useGetPrivateTestResultsQuery } from "../../hooks/testQueries";
import MbtiCard from "../allTestResult/MbtiCard";

const MyTestResult = () => {
  const { userinfo } = useUser();

  const { data: testResults, isPending: isTestResultsPending } = useGetPrivateTestResultsQuery(userinfo.id);

  if (isTestResultsPending) {
    return <>로딩중 . . .</>;
  }

  return (
    <ul className="flex flex-row flex-wrap  gap-10">
      {testResults.map((result) => (
        <MbtiCard key={result.id} data={result} />
      ))}
    </ul>
  );
};

export default MyTestResult;
