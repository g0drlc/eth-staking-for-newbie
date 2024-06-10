import type { NextPage } from "next";
import Detail from "../components/Detail";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center transition-all duration-300">
      <div className="w-full max-w-[1000px] flex md:mt-[172px] mt-[49px] items-center justify-center p-3 relative flex-col animate__animated animate__fadeIn">
        <Detail />
      </div>
    </div>
  );
};

export default Home;
