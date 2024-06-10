/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { GetNFTDataContext } from "../contexts/NFTDataContext";

const MysteryBox = (props: {
  boxId: number;
  boxType: number;
  onClick: () => void;
}) => {
  const { tokenLaunchedState } = useContext(GetNFTDataContext);
  return (
    <div className="relative flex flex-col items-center justify-center bg-black rounded-lg bg-opacity-40">
      <div
        className={`absolute px-2 py-2 text-white bg-black bg-opacity-25 rounded-md right-2 top-4 font-bold text-[12px] uppercase ${
          tokenLaunchedState ? " cursor-pointer" : "cursor-not-allowed"
        }`}
        onClick={() => tokenLaunchedState && props.onClick()}
      >
        Reveal Box
      </div>
      {props.boxType === 1 ? (
        <img src="/imgs/box1.png" alt="" className="absolute w-[150px]" />
      ) : props.boxType === 2 ? (
        <img src="/imgs/box2.png" alt="" className="absolute w-[150px]" />
      ) : props.boxType == 3 ? (
        <img src="/imgs/box3.png" alt="" className="absolute w-[150px]" />
      ) : (
        <img src="/imgs/box4.png" alt="" className="absolute w-[150px]" />
      )}

      <img src="/imgs/boxTable.png" alt="" className="w-full" />
    </div>
  );
};

export default MysteryBox;
