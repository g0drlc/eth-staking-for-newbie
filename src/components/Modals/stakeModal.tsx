import { useState } from "react";
import { useModal } from "../../contexts/ModalContext";
import { CSSTransition } from "react-transition-group";
const StakeModal = () => {
  const { closeStakeModal, isOpenStakeModal } = useModal();
  const [stakingType, setStakingType] = useState(0);

  const stakeMethodData = [
    { month: 1, reward: 10.3 },
    { month: 3, reward: 14.1 },
    { month: 5, reward: 120.6 },
  ];
  if (!isOpenStakeModal) return null;

  return (
    <div
      className={`fixed z-50 w-full h-full min-h-screen top-0 backdrop-blur-sm bg-black/70 flex items-center justify-center animate__fadeIn animate__animated`}
    >
      <div className="flex items-center justify-center bg-black rounded-md p-[32px] flex-col gap-[32px] animate__animated animate__fadeInDown animate__faster">
        <div className="flex items-center justify-start gap-[6px] flex-col text-center">
          <p className="text-white uppercase text-[18px] font-semibold">
            choose the stake period
          </p>
          <span className="text-white text-[14px] text-left">
            Remember! when you choose higher period, you will get more profit
          </span>
        </div>
        <div className="w-full flex items-center justify-start gap-[16px] flex-col">
          {stakeMethodData.map((data, index) => (
            <div
              className={`rounded-md p-[12px] w-full relative cursor-pointer ${
                stakingType === index
                  ? "border-[#2CE6FF] border-2 "
                  : "border-white border-opacity-25 border-[1px] "
              }`}
              key={index}
              onClick={() => setStakingType(index)}
            >
              <div className="flex gap-[10px] flex-col">
                <p className="font-extrabold text-white text-[20px] uppercase">
                  {data.month} month
                </p>
                <span className="text-white uppercase text-[16px] font-semibold">
                  daily reward rate
                </span>
              </div>
              <p className="uppercase absolute right-[16px] bottom-[12px] text-[#FFC012] font-semibold">
                {data.reward} tek
              </p>
            </div>
          ))}
        </div>
        <div
          className="text-white uppercase font-extrabold border-[1px] border-[#7e7e7e] rounded-md py-[12px] text-[16px] cursor-pointer
      bg-gradient-to-br from-[#18C8FF] to-[#DB01FF] flex items-center justify-center w-full"
          style={{
            textShadow: "0 1px 0px rgba(0, 25, 66, 0.4)",
          }}
        >
          confirm and stake
        </div>
        <div
          className="font-extrabold text-white text-opacity-25 uppercase cursor-pointer"
          onClick={closeStakeModal}
        >
          Reject Staking
        </div>
      </div>
    </div>
  );
};

export default StakeModal;
