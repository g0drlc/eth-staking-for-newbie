import CircleProcess from "./circleProcess";
import Description from "./description";

const Tokenomics = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-[90px] relative z-50">
      <div className="flex flex-col items-center justify-center leading-8">
        <p
          className="text-[12px] font-extrabold uppercase text-white"
          style={{ textShadow: "0 4px 4px rgba(0, 25, 66, 0.4)" }}
        >
          tekio
        </p>
        <h1
          className="text-[40px] font-extrabold uppercase text-white"
          style={{ textShadow: "0 4px 4px rgba(0, 25, 66, 0.4)" }}
        >
          Tokenomics
        </h1>
      </div>
      <CircleProcess />
      <Description />
    </div>
  );
};

export default Tokenomics;
