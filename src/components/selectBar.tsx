import React, { useContext, useState } from "react";
import { GetNFTDataContext } from "../contexts/NFTDataContext";
import { errorAlert, successAlert, warningAlert } from "./toastGroup";
import { useTekio } from "../hooks/use-tekio";
import { useLockedBody } from "../hooks/use-locked-body";
import { CircleSpinner } from "react-spinners-kit";

interface SelectBarProps {
  pageState: string;
  clearAll: () => void;
  selectAll: () => void;
  selectedNFTs: Number[];
}

const SelectBar: React.FC<SelectBarProps> = ({
  selectedNFTs,
  pageState,
  clearAll,
  selectAll,
}) => {
  const { setLocked } = useLockedBody();
  const [loading, setLoading] = useState(false);

  const { isApprovedAllState, getWalletNFTs, getStakedNFTs } =
    useContext(GetNFTDataContext);
  const { setApproveAll, stakeNFTs, unStakeNFTs } = useTekio();

  const handleStakeNFTs = async (): Promise<void> => {
    try {
      if (selectedNFTs.length === 0) {
        warningAlert("Please select the NFTs to stake!");
        return;
      }

      setLoading(true);
      setLocked(true);

      if (isApprovedAllState) {
        const result = await stakeNFTs(selectedNFTs);
        if (result) {
          await getWalletNFTs();
          await getStakedNFTs();
          successAlert("Staked Successful!");
        } else {
          errorAlert("Stake Canceled!");
        }
        setLoading(false);
        setLocked(false);
      } else {
        const result1 = await setApproveAll();
        if (result1) {
          const result2 = await stakeNFTs(selectedNFTs);
          if (result2) {
            await getWalletNFTs();
            await getStakedNFTs();
            successAlert("Staked Successful!");
          } else {
            errorAlert("Stake Canceled!");
          }
        } else {
          errorAlert("Approve Canceled!");
        }
        setLoading(false);
        setLocked(false);
      }
    } catch (error) {
      console.log(error);
      errorAlert("Stake Error!");
      setLoading(false);
      setLocked(false);
    }
  };

  const handleUnStakeNFTs = async () => {
    if (selectedNFTs.length === 0) {
      warningAlert("Please select the NFTs to stake!");
      return;
    } else {
      setLoading(true);
      setLocked(true);

      try {
        const result = await unStakeNFTs(selectedNFTs);
        if (result) {
          await getStakedNFTs();
          await getWalletNFTs();
          successAlert("Unstaked Successful!");
        } else {
          errorAlert("Unstake Canceled!");
        }
        setLoading(false);
        setLocked(false);
      } catch (error) {
        console.log(error);
        errorAlert("Stake Error!");
        setLoading(false);
        setLocked(false);
      }
    }
  };

  return (
    <div
      className={`w-full max-w-[1446px] ${
        selectedNFTs.length === 0 && "hidden"
      }`}
    >
      <div className="w-full p-[16px] bg-gray-800 rounded-xl flex flex-col md:flex-row gap-2 items-center justify-between relative z-[50]">
        <div className="flex items-center justify-center gap-[5px]">
          <div
            className="text-white rounded-md border-2 border-white border-opacity-20 px-[16px] py-[10px] uppercase cursor-pointer hover:text-gray-400 duration-300
            transition-all font-bold"
            onClick={() => selectAll()}
          >
            select all
          </div>
          <div
            className="text-white rounded-md border-2 border-white border-opacity-20 px-[16px] py-[10px] uppercase cursor-pointer hover:text-gray-400 duration-300
            transition-all font-bold"
            onClick={() => clearAll()}
          >
            clear
          </div>
        </div>
        <div
          className="text-white uppercase font-bold border-[1px] border-[#7e7e7e] rounded-md px-[16px] py-[10px] text-[16px] cursor-pointer
                      bg-gradient-to-br from-[#18C8FF] to-[#DB01FF] w-full md:w-auto flex items-center justify-center duration-300 transition-all hover:text-gray-300"
          onClick={
            pageState === "unstake" ? handleStakeNFTs : handleUnStakeNFTs
          }
        >
          confirm and {pageState === "unstake" ? "stake" : "unstake"}
        </div>
      </div>
      {loading && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25 backdrop-blur-md z-[9999] items-center justify-center flex">
          <CircleSpinner size={50} />
        </div>
      )}
    </div>
  );
};

export default SelectBar;
