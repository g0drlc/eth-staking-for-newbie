import React from "react";
import { SelectIcon } from "./SvgList";

type CheckBoxProps = {
  tokenId: number;
  isSelected: boolean;
  onClick: () => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ isSelected, onClick }) => {
  return (
    <div className="flex gap-[10px] items-center justify-between">
      <p
        className={`font-extrabold uppercase text-[12px] ${
          isSelected ? "text-[#2CE6FF]" : "text-white  text-opacity-25"
        }`}
      >
        select
      </p>
      <div
        className={`w-[24px] h-[24px] rounded-[2px] border-[1px]  ${
          isSelected ? "border-[#2CE6FF]" : "border-white border-opacity-25"
        } bg-black cursor-pointer flex items-center justify-center`}
        onClick={() => onClick()}
      >
        {isSelected && <SelectIcon />}
      </div>
    </div>
  );
};

export default CheckBox;
