/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { PercentCircleIcon } from "../SvgList";
import ProgressBar from "./progressBar";
import { GetNFTDataContext } from "../../contexts/NFTDataContext";

const Detail = () => {
  const { totalStakedCounts, totalClaimedTokenAmount } =
    useContext(GetNFTDataContext);
  const percent = (totalStakedCounts / 100) * 100;
  const alpha = 2.4 * percent;
  const delta = percent < 50 ? 3 : 0;
  const top = 35 * (1 - Math.sin(((30 - alpha) * Math.PI) / 180));
  const left = 35 * (1 - Math.cos(((30 - alpha) * Math.PI) / 180)) - delta;

  return (
    <div className="w-full">
      <div>
        <p className="text-center text-white font-extrabold text-[18px] uppercase">
          Unlock Rewards Every 7 Days
        </p>
        <h1 className="text-[48px] text-center text-white font-extrabold leading-[48px] uppercase">
          Explore the Thrill of Mystery
          <br /> Boxes and Earn $TEK
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full gap-6 md:mt-[52px] mt-[27px]">
        <div className="flex flex-col items-center justify-between w-full md:p-8 p-[16px] xl:bg-black bg-white rounded-md xl:bg-opacity-30  bg-opacity-5 gap-[16px] min-h-[200px]">
          <div className="w-full text-left">
            <h1 className="text-white md:text-[20px] text-[16px] font-bold uppercase text-left">
              Distributed Tekio tkn
            </h1>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <p className="lg:text-lg text-sm font-extrabold uppercase text-white">
                Claimed
              </p>
              <p className="md:text-[20px] text-[14px] text-gray-400 font-bold">
                {totalClaimedTokenAmount.toString()}
              </p>
            </div>
            <div className="flex flex-col text-right">
              <p className="lg:text-lg text-sm font-extrabold uppercase text-white">
                total supply
              </p>
              <p className="md:text-[20px] text-[14px] text-gray-400 font-bold">{`4,000,000,000`}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full md:p-8 p-[16px] xl:bg-black bg-white rounded-md xl:bg-opacity-30  bg-opacity-5 gap-[16px] min-h-[200px]">
          <div className="w-full text-left">
            <h1 className="text-white md:text-[20px] text-[16px] font-bold uppercase text-left">
              Total Staked NFTs
            </h1>
          </div>
          <div className="relative flex items-center justify-between w-full">
            <div className="flex gap-[18px] relative w-full">
              <div className="">
                <p className="text-[10px] font-extrabold uppercase text-gray-600">
                  staked
                </p>
                <p className="md:text-[20px] text-[14px] text-white font-bold">
                  {totalStakedCounts}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase text-gray-600">
                  total
                </p>
                <p className="md:text-[20px] text-[14px] text-white font-bold">
                  100
                </p>
              </div>
            </div>
            <div className="absolute -top-[51px] right-0">
              <div className="w-[76px] h-[76px]">
                <PercentCircleIcon />
              </div>
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
                <p className="text-[#2CE6FF] text-[22px] font-extrabold">
                  {percent.toFixed(1)}
                </p>
                <p className="text-[#2CE6FF] text-[10px] uppercase font-bold">
                  percent
                </p>
              </div>
              <div
                className={`absolute w-[10px] h-[10px] rounded-full bg-[#2CE6FF] bottom-[${Math.floor(
                  top
                )}px] left-[${Math.floor(left)}px]`}
                style={{
                  bottom: Math.floor(top) + "px",
                  left: Math.floor(left) + "px",
                }}
              />
            </div>
          </div>
          <ProgressBar percent={percent} />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <img src="/imgs/homebox.png" alt="" />
      </div>
    </div>
  );
};

export default Detail;
