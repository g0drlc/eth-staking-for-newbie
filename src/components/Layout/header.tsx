/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { CloseIcon, MobileMenuIcon } from "../SvgList";
import Link from "next/link";
import { useRouter } from "next/router";
import WalletConnectBtn from "../walletConnectButton";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="w-full xl:flex hidden items-center justify-between h-[80px]">
        <div className="w-full border-[1px] border-white opacity-10" />
        <div className="px-20 xl:min-w-[1200px] w-full flex items-center justify-between z-0">
          <div className="flex gap-[30px] items-center justify-center">
            <Link href={"/"}>
              <li
                className={`text-[14px] font-bold text-white uppercase border-r-2 duration-300 transition-all
                border-white list-none border-opacity-10 pr-[30px] hover:text-yellow-200 ${
                  router.pathname === "/" && "text-yellow-400"
                }`}
              >
                home
              </li>
            </Link>
            <Link href={"/stake"}>
              <li
                className={`text-[14px] font-bold text-white uppercase border-r-2 duration-300 transition-all
                border-white list-none border-opacity-10 pr-[30px] hover:text-yellow-200 ${
                  router.pathname === "/stake" && "text-yellow-400"
                }`}
              >
                stake now
              </li>
            </Link>
          </div>
          <WalletConnectBtn />
        </div>
        <div className="w-full border-[1px] border-white opacity-10" />
        <div className="flex items-center justify-center top-[24px] absolute left-0 right-0 -z-[3]">
          <img
            src="/imgs/logo.png"
            className="w-[60px] h-[60px] lg:w-[106px] lg:h-[112px]"
            alt=""
          />
        </div>
      </div>
      <div className="relative flex items-center justify-between w-full p-7 border-b-[1px] border-white border-opacity-10 xl:hidden">
        <div
          className="relative flex items-center justify-center cursor-pointer z-[1]"
          onClick={() => setShowMenu(true)}
        >
          <MobileMenuIcon />
        </div>
        <div className="absolute left-0 right-0 z-0 flex items-center justify-center w-full">
          <img
            src="/imgs/logo.png"
            alt=""
            className="w-[48px] h-[50px] object-cover"
          />
        </div>
        <div className="flex items-center gap-[20px] ">
          <img src="/imgs/magiceden.png" alt="" />
          <img src="/imgs/discord.png" alt="" />
        </div>
      </div>
      {showMenu && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-start w-full bg-black bg-opacity-80 backdrop-blur-md z-[9999] flex-col animate__animated animate__fadeIn animate__faster  ">
          <p className="text-white text-[50px] font-bold uppercase mt-[72px]">
            Navigation
          </p>
          <div className="flex flex-col items-center justify-center w-full mt-10 gap-7">
            <Link href={"/"} onClick={() => setShowMenu(false)}>
              <p
                className={`text-white text-[30px] font-bold uppercase ${
                  router.pathname === "/" && "text-yellow-400"
                }`}
              >
                Home
              </p>
            </Link>

            <span className="w-[1px] h-[30px] bg-white bg-opacity-20" />
            <Link href={"/stake"} onClick={() => setShowMenu(false)}>
              <p
                className={`text-white text-[30px] font-bold uppercase ${
                  router.pathname === "/stake" && "text-yellow-400"
                }`}
              >
                stake
              </p>
            </Link>
            <WalletConnectBtn />
          </div>
          <div className="w-full flex items-center justify-center gap-[20px] mt-[60px]">
            <img src="/imgs/opensea.png" alt="" className="cursor-pointer" />
            <img src="/imgs/magiceden.png" alt="" className="cursor-pointer" />
            <img src="/imgs/discord.png" alt="" className="cursor-pointer" />
            <img src="/imgs/twitter.png" alt="" className="cursor-pointer" />
          </div>
          <div
            className={`absolute bottom-[33px] text-white w-full flex items-center justify-center`}
          >
            <button
              className="bg-transparent rounded-md px-[10px] py-[14px] border-[1px] border-white border-opacity-25 flex items-center justify-between gap-[9px] cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <CloseIcon />
              <span className="text-white">CLOSE NAVIGATION</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
