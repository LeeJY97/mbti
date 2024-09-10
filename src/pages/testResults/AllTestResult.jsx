import Loading from "../../components/Loading";
import { useGetAllTestResultsQuery } from "../../hooks/testQueries";
import MbtiCard from "./MbtiCard";

const AllTestResult = () => {
  const { data: testResults, isPending: isTestResultsPending } = useGetAllTestResultsQuery();

  if (isTestResultsPending) {
    return <Loading />;
  }

  return (
    <ul className="flex flex-row flex-wrap gap-1">
      {testResults.map((result) => (
        <MbtiCard key={result.id} data={result} />
      ))}
    </ul>
  );
};

export default AllTestResult;
