import { Link } from "react-router-dom";

const PageCard = ({ text, link }) => {
  return (
    <Link to={link}>
      {/* <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]">
        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]"> */}
      <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#6b6a6b]">
        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#4e4e4e]">
          <p>{text}</p>
        </div>
        <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
      </div>
    </Link>
  );
};

const Index = () => {
  return (
    <div className="w-full h-full absolute top-0 flex justify-center items-center gap-10">
      <PageCard text="검사하기" link="/test" />
      <PageCard text="내 결과 보기" link="/my-test-result" />
      <PageCard text="모든 결과 보기" link="/all-test-result" />
    </div>
  );
};

export default Index;
