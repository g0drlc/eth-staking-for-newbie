import { TokenList } from "../SvgList";

const Description = () => {
  return (
    <div className="max-w-[596px] w-full flex flex-col mt-[122px]">
      {detail.map((item, index) => (
        <div
          key={index}
          className="py-[25px] flex items-center justify-start gap-[12px]
          border-t-[1px] border-[#202020]"
        >
          <div className="w-[24px] h-[24px]">
            <TokenList color={item.color} />
          </div>
          <p className="text-[16px] font-extrabold text-white uppercase leading-5">
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

const detail = [
  { color: "#F7B278", content: "5% will be on Teams treasury wallet" },
  { color: "#99DD74", content: "13% For future CEX Listing" },
  {
    color: "#22D5FE",
    content:
      "10% Will go on the liquitidy pool ( we will add a sell limit so we will not have have a high violation on the price of the token )",
  },
  {
    color: "#3FB7F4",
    content:
      "10% ( That includes Zealy leaderboard , extra airdrops for specific traits we mention to the community )",
  },
  {
    color: "#017FF0",
    content: "5% (Will go to marketing Team )",
  },
  {
    color: "#4C3DE1",
    content:
      "S1 27% (Nft holders. To claim your rewards your Nfts must be staked)",
  },
  {
    color: "#4C3DE1",
    content:
      "S2 30% ( That includes rewards for staking of our Token, and from gambling activities through our website. S2 Rewards will start from End of January )",
  },
];

export default Description;
