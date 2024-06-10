export type StakedNFTDatas = {
  tokenId: number;
  imgUrl: string;
  staked: boolean;
};

export type WalletNFTDatas = {
  tokenId: number;
  imgUrl: string;
  staked: boolean;
};

export type BoxDatas = {
  boxId: number;
  boxType: number;
};

export type GetNFTDataContextValue = {
  stakedNFTs: WalletNFTDatas[] | undefined;
  walletNFTs: WalletNFTDatas[] | undefined;
  getDataLoadingState: boolean;
  isApprovedAllState: boolean | unknown;
  boxClaimableState: boolean;
  tokenLaunchedState: boolean;
  userLastClaimedTime: number;
  totalClaimedTokenAmount: number;
  totalStakedCounts: number;
  boxCounts: BoxDatas[] | undefined;
  getWalletNFTs: () => Promise<void>;
  getStakedNFTs: () => Promise<void>;
  // getInfo: () => void;
  // reFetchOwnNFTs: () => Promise<any>;
};
