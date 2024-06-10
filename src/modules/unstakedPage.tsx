import { StakedNFTDatas, WalletNFTDatas } from "../components/DataTypes";
import NftCard from "../components/nftCard";

type pageProps = {
  data: StakedNFTDatas[];
  data4Func: WalletNFTDatas[];
  handleAddData: (data: any) => void;
};
const UnStakedPage: React.FC<pageProps> = ({
  data,
  data4Func,
  handleAddData,
}) => {
  return (
    <div className="w-full flex items-center justify-start gap-2 flex-col">
      <div className="w-full max-w-[1446px] grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-[20px]">
        {data?.map((data, index) => (
          <NftCard
            key={index}
            tokenId={data.tokenId}
            imgUrl={data.imgUrl}
            staked={data.staked}
            isSelected={
              data4Func &&
              data4Func.find((item) => item.tokenId === data.tokenId)
                ? true
                : false
            }
            onClick={() => handleAddData(data)}
          />
        ))}
      </div>
      {data.length === 0 && (
        <p className="text-gray-300 uppercase font-bold">Nothing to show</p>
      )}
    </div>
  );
};

export default UnStakedPage;
