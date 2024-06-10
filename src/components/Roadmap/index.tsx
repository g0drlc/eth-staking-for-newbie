/* eslint-disable @next/next/no-img-element */
import { RoadmapLogoIcon, RoadmapYearIcon } from "../SvgList";

const RoadMap = () => {
  return (
    <div className="w-full mt-[179px] flex flex-col justify-center items-center ">
      <div className="relative flex items-center justify-center">
        <div className="absolute md:top-[105px] top-[0px] w-full flex items-center justify-center">
          <p className="uppercase text-white text-[40px] font-extrabold z-[3]">
            roadmap
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <img src="/imgs/roadmap.png" className="" alt="roadmap" />
        </div>
        <div className="absolute md:top-[45px] top-[-30px] w-full flex items-center justify-center">
          <RoadmapLogoIcon />
        </div>
      </div>
      <div className="flex flex-col w-full gap-[24px]">
        {roadMapData.map((data, index) => (
          <div
            className="relative flex flex-col items-center justify-center gap-[24px]"
            key={index}
          >
            <RoadmapYearIcon />
            <div className="absolute flex flex-col items-center justify-center leading-5 top-7">
              <p className="text-[20px] font-extrabold text-white">
                {data.month}
              </p>
              <p className="text-[20px] font-extrabold text-white">
                {data.year}
              </p>
            </div>
            <div className="w-[1px] h-[244px] bg-[#d9d9d931] lg:block hidden" />
            <div
              className={`lg:absolute text-center text-white flex flex-col ${
                index % 2 === 0
                  ? `lg:items-start lg:text-left`
                  : `lg:items-end  lg:text-right`
              } items-center justify-center text-[20px] bottom-0 top-32 gap-[24px] max-w-[464px]`}
              style={index % 2 !== 0 ? { left: 0 } : { right: 0 }}
            >
              {data.detail.map((item, index) => (
                <p
                  className="leading-6 uppercase text-[20px] font-bold"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;

const roadMapData = [
  {
    month: "Nov",
    year: "2023",
    position: { right: "0", left: "" },
    detail: [
      "NFT: Mid-End November",
      "Token: Announcement of blockchain",
      "Investors and partnerships: Expanding our network and collaborating with companies",
      "Sportsbook and Casino: Getting lisence and developing the platform",
    ],
  },
  {
    month: "Dec",
    year: "2023",
    position: { right: "", left: "0" },
    detail: [
      "Anouncing our official tokenomics",
      "Token launch: Early-Mid December",
      "Staking of our token",
      "Anouncing our investors and collaborators",
    ],
  },
  {
    month: "Jan",
    year: "2024",
    position: { right: "0", left: "" },
    detail: [
      "Revenue sharing announcement",
      "Token CEX listing",
      "Expanding our network and parternships",
      "Official launch of our sportsbook and gaming website",
    ],
  },
  {
    month: "Feb",
    year: "2025",
    position: { right: "", left: "0" },
    detail: [
      "Anouncing our 2nd product and utilities",
      "Expanding our licence",
      "Token CEX listing",
    ],
  },
];
