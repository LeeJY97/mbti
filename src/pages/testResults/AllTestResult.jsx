import { useGetAllTestResultsQuery } from "../../hooks/testQueries";
import MbtiCard from "./MbtiCard";

const AllTestResult = () => {
  const { data: testResults, isPending: isTestResultsPending } = useGetAllTestResultsQuery();

  if (isTestResultsPending) {
    return <div>로딩중. . . </div>;
  }

  return (
    <ul className="flex flex-row flex-wrap gap-10 justify-center">
      {testResults.map((result) => (
        <MbtiCard key={result.id} data={result} />
      ))}
    </ul>
  );
};

export default AllTestResult;
