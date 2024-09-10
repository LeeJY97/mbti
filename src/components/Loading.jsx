import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <div>잠만요</div> */}
      <MoonLoader color="#48CFCB" />
    </div>
  );
};

export default Loading;
