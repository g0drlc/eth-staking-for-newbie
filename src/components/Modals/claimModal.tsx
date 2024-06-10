import { useModal } from "../../contexts/ModalContext";
import { CSSTransition } from "react-transition-group";
import { WarningIcon } from "../SvgList";

const ClaimModal = () => {
  const { closeClaimModal, isOpenClaimModal } = useModal();

  if (!isOpenClaimModal) return null;

  return (
    <div
      className={`fixed z-50 w-full h-full min-h-screen top-0 backdrop-blur-sm bg-black/70 flex items-center justify-center animate__animated animate__fadeIn`}
    >
      <CSSTransition timeout={1000} classNames="fade">
        <div className="flex items-center justify-center bg-black rounded-md p-[32px] flex-col gap-[32px]  animate__animated animate__fadeInDown animate__faster">
          <WarningIcon />
          <div className="flex items-center justify-center gap-[6px] flex-col text-center">
            <p className="text-white uppercase text-[18px] font-semibold">
              you are going to unstake
            </p>
            <span className="text-white text-[14px]">
              Remember! when you unstake NFT before the time lock in ended you
              are losing the reward
            </span>
          </div>
          <div
            className="text-white uppercase font-extrabold border-[1px] border-[#7e7e7e] rounded-md px-[16px] py-[12px] text-[16px] cursor-pointer
      bg-gradient-to-br from-[#18C8FF] to-[#DB01FF] flex items-center justify-center w-full"
            style={{
              textShadow: "0 1px 0px rgba(0, 25, 66, 0.4)",
            }}
          >
            confirm and unstake
          </div>
          <div
            className="font-extrabold text-white text-opacity-25 uppercase cursor-pointer"
            onClick={closeClaimModal}
          >
            never mind
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ClaimModal;
