import Loading from "../../components/Loading";
import { useGetAllTestResultsQuery } from "../../hooks/testQueries";
import MbtiCard from "./MbtiCard";

const AllTestResult = () => {
  const { data: testResults, isPending: isTestResultsPending } = useGetAllTestResultsQuery();

  if (isTestResultsPending) {
    return <Loading />;
  }

  console.log("testResults", testResults);
  debugger;

  return (
    <ul className="flex flex-wrap gap-[48px] max-w-[1448px] mx-auto">
      {testResults.map((result) => (
        <MbtiCard key={result.id} data={result} />
      ))}
    </ul>
  );
};

export default AllTestResult;
