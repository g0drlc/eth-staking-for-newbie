/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useWindowSize } from "../../hooks/use-window-size";

const CircleProcess = () => {
  const { width } = useWindowSize();
  return (
    // <div className="rounded-full mt-[101px] bg-gradient-to-b from-black to-[#000000D9] border-[2px] border-[#414040]">
    <div className="flex items-center justify-center w-full">
      <div className="relative mt-[80px] flex items-center justify-center w-[350px] md:w-full">
        <img
          src="/imgs/chart.png"
          className="relatvie z-[99]] w-[266px] md:w-auto"
          alt=""
        />
        {circleData.map((item, index) => (
          <div
            key={index}
            className={`absolute flex flex-col items-start justify-start gap-[1px] shadow-token lg:px-[16px] px-[7px] md:px-[12px] py-1 md:py-3
          md:rounded-tl-[15px] md:rounded-tr-[20px] md:rounded-br-[15px] md:rounded-bl-[20px]
          rounded-tl-[6.66px] rounded-tr-[8.87px] rounded-br-[4.44px] rounded-bl-[8.87px]  z-[100]`}
            style={
              width > 760
                ? {
                    top: item.position.y,
                    left: item.position.x + "%",
                    background: item.color,
                  }
                : {
                    top: item.mobilePosition.y,
                    left: item.mobilePosition.x + "%",
                    background: item.color,
                  }
            }
          >
            <p className="lg:text-[24px] text-[12px] md:text-[16px] font-extrabold uppercase text-white">
              {item.percent}%
            </p>
            <p className="lg:text-[16px] text-[7px] md:text-[16px] font-extrabold uppercase text-white">
              {item.title}
            </p>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const circleData = [
  {
    color: "#Fab677",
    title: "team",
    percent: "5",
    position: { x: "55", y: "-40px" },
    mobilePosition: { x: "55", y: "-24px" },
  },
  {
    color: "#99DD74",
    title: "cex listing",
    percent: "13",
    position: { x: "73", y: "100px" },
    mobilePosition: { x: "73", y: "28px" },
  },
  {
    color: "#22D5FE",
    title: "liquidity pool",
    percent: "10",
    position: { x: "76", y: "250px" },
    mobilePosition: { x: "77", y: "107px" },
  },
  {
    color: "#3FB7F4",
    title: "community",
    percent: "10",
    position: { x: "72", y: "370px" },
    mobilePosition: { x: "76", y: "164px" },
  },
  {
    color: "#017FF0",
    title: "marketing",
    percent: "5",
    position: { x: "65", y: "510px" },
    mobilePosition: { x: "65", y: "224px" },
  },
  {
    color: "#4C3DE1",
    title: "s1 rewards",
    percent: "27",
    position: { x: "40", y: "530px" },
    mobilePosition: { x: "16", y: "205px" },
  },
  {
    color: "#B397D6",
    title: "s2 rewards",
    percent: "30",
    position: { x: "15", y: "70px" },
    mobilePosition: { x: "7", y: "32px" },
  },
];

export default CircleProcess;
