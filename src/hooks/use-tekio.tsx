import { getContract } from "wagmi/actions";
import { Abi } from "viem";

import { write, read } from "./utils";
import { STAKINGCONTRACT_ADDR } from "../config";
import STAKINGCONTRACT_ABI from "../../public/abis/stakingContractABI.json";

export function useTekio() {
  const getApprovedState = async (wallet: string, stakingAddr: string) => {
    try {
      const contract: any = getContract({
        address: STAKINGCONTRACT_ADDR as `0x${string}`,
        abi: STAKINGCONTRACT_ABI as Abi,
      });
      const res = await contract.read.isApprovedForAll({
        args: [wallet, stakingAddr],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const getStakedNFTDatas = async (wallet: string) => {
    try {
      const contract: any = getContract({
        address: STAKINGCONTRACT_ADDR as `0x${string}`,
        abi: STAKINGCONTRACT_ABI as Abi,
      });

      const res = await contract.read.getStakedNFTList({
        args: [wallet],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };
  const getOwnNFTs = async (wallet: string) => {
    try {
      const contract: any = getContract({
        address: STAKINGCONTRACT_ADDR as `0x${string}`,
        abi: STAKINGCONTRACT_ABI as Abi,
      });

      const res = await contract.read.userOwnedTokens({
        args: [wallet],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const getMyBoxes = async (wallet: string) => {
    try {
      const contract: any = getContract({
        address: STAKINGCONTRACT_ADDR as `0x${string}`,
        abi: STAKINGCONTRACT_ABI as Abi,
      });

      const res = await contract.read.getBoxids({
        args: [wallet],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const getBoxType = async (id: Number) => {
    try {
      const contract: any = getContract({
        address: STAKINGCONTRACT_ADDR as `0x${string}`,
        abi: STAKINGCONTRACT_ABI as Abi,
      });

      const res = await contract.read.boxNumToType({
        args: [id],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const tokenClaimedAmount = async (address: string) => {
    try {
      return await read({
        address: STAKINGCONTRACT_ADDR as `0x${string}`,
        abi: STAKINGCONTRACT_ABI as Abi,
        functionName: "tokenClaimedAmount",
        args: [address],
      });
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const boxClaimable = async (address: string) => {
    try {
      const contract: any = getContract({
        address: STAKINGCONTRACT_ADDR as `0x${string}`,
        abi: STAKINGCONTRACT_ABI as Abi,
      });

      const res = await contract.read.boxClaimable({
        args: [address],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const tokenLaunched = async () => {
    try {
      const contract: any = getContract({
        address: STAKINGCONTRACT_ADDR as `0x${string}`,
        abi: STAKINGCONTRACT_ABI as Abi,
      });

      const res = await contract.read.tokenLaunched({
        args: [],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const totalStaked = async () => {
    try {
      const contract: any = getContract({
        address: STAKINGCONTRACT_ADDR as `0x${string}`,
        abi: STAKINGCONTRACT_ABI as Abi,
      });

      const res = await contract.read.totalStakedNFTCount({
        args: [],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const userLastClaimed = async (address: string) => {
    try {
      const contract: any = getContract({
        address: STAKINGCONTRACT_ADDR as `0x${string}`,
        abi: STAKINGCONTRACT_ABI as Abi,
      });

      const res = await contract.read.userLastClaimedTime({
        args: [address],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching JSON:", error);
    }
  };

  const setApproveAll = async () => {
    try {
      return await write({
        address: STAKINGCONTRACT_ADDR,
        abi: STAKINGCONTRACT_ABI as Abi,
        functionName: "setApprovalForAll",
        args: [STAKINGCONTRACT_ADDR, true],
      });
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };

  const stakeNFTs = async (nfts: Number[]) => {
    try {
      return await write({
        address: STAKINGCONTRACT_ADDR,
        abi: STAKINGCONTRACT_ABI as Abi,
        functionName: "stakeNFT",
        args: [nfts],
      });
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };

  const unStakeNFTs = async (nfts: Number[]) => {
    try {
      return await write({
        address: STAKINGCONTRACT_ADDR,
        abi: STAKINGCONTRACT_ABI as Abi,
        functionName: "unStakeNFT",
        args: [nfts],
      });
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };

  const claimMyBox = async (id: number) => {
    try {
      return await write({
        address: STAKINGCONTRACT_ADDR,
        abi: STAKINGCONTRACT_ABI as Abi,
        functionName: "claim",
        args: [id],
      });
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };

  const getBox = async () => {
    try {
      return await write({
        address: STAKINGCONTRACT_ADDR,
        abi: STAKINGCONTRACT_ABI as Abi,
        functionName: "claimBox",
        args: [],
      });
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };

  return {
    fetchData,
    getApprovedState,
    getStakedNFTDatas,
    getOwnNFTs,
    setApproveAll,
    stakeNFTs,
    unStakeNFTs,
    claimMyBox,
    boxClaimable,
    getMyBoxes,
    getBoxType,
    getBox,
    tokenLaunched,
    userLastClaimed,
    totalStaked,
    tokenClaimedAmount,
  };
}
