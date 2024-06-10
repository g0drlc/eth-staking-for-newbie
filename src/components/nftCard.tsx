/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import CheckBox from "./checkBox";
import { CircleSpinner } from "react-spinners-kit";
import { GetNFTDataContext } from "../contexts/NFTDataContext";
import { useTekio } from "../hooks/use-tekio";
import { errorAlert, successAlert } from "./toastGroup";

type NftCardProps = {
  tokenId: number;
  imgUrl: string;
  staked: boolean;
  isSelected: boolean;
  onClick: () => void;
};

const NftCard: React.FC<NftCardProps> = ({
  tokenId,
  imgUrl,
  staked,
  isSelected,
  onClick,
}) => {
  const [loading, setLoading] = useState(false);
  const { getWalletNFTs, getStakedNFTs } = useContext(GetNFTDataContext);
  const { claimMyBox } = useTekio();

  const handleClaim = async (): Promise<void> => {
    setLoading(true);

    try {
      const result2 = await claimMyBox(tokenId);
      if (result2) {
        await getWalletNFTs();
        await getStakedNFTs();
        successAlert("Claimed Successful!");
      } else {
        errorAlert("Claimed Canceled!");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      errorAlert("Claimed Error!");
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={`w-full flex flex-col bg-black bg-opacity-30 rounded-md p-[10px] relative ${
          isSelected ? "border-[2px] border-[#2CE6FF]" : ""
        }`}
      >
        <div className="relative shadow-nftImgShadow">
          <div className="absolute z-[12] top-0 left-0 bottom-[6px] right-0">
            <Skeleton
              height={"100%"}
              width={"100%"}
              baseColor="#454646"
              borderRadius={"6px"}
              highlightColor="#313131"
            />
          </div>
          <img
            src={imgUrl}
            className="relative z-[13] w-full aspect-square rounded-md bottom-0"
            alt=""
          />
          <div className="absolute top-[10px] left-[10px] py-[7px] px-[10px] bg-black bg-opacity-80 rounded-md text-[14px] font-extrabold text-white z-[13]">
            TEKIO #{tokenId}
          </div>
          {staked && (
            <div
              className="absolute bottom-[10px] right-[10px] py-[7px] px-[10px] bg-pink-500 cursor-pointer rounded-md text-[14px] font-extrabold text-white z-[13]"
              onClick={() => handleClaim()}
            >
              Claim Reward
            </div>
          )}
        </div>
        <div className="flex items-center justify-end w-full p-[20px] absolute right-3 z-[13]">
          <CheckBox
            isSelected={isSelected}
            tokenId={tokenId}
            onClick={() => onClick()} // Pass the onClick handler to CheckBox
          />
        </div>
      </div>
      {loading && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25 backdrop-blur-md z-[9999] items-center justify-center flex">
          <CircleSpinner size={50} />
        </div>
      )}
    </>
  );
};

export default NftCard;
