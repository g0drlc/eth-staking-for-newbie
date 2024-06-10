const Button = (props: { type: boolean }) => {
  const getBackgroundColor = (type: boolean) => {
    switch (type) {
      case true:
        return "bg-[#EA6F75]";
      case false:
        return "bg-[#61BAF3]";
    }
  };

  const getBoxShadow = (type: boolean) => {
    switch (type) {
      case true:
        return {
          boxShadow:
            "0 0 6px #cc434a, inset 0px 9px 9px 0px #ffffff8c, inset 0 -5px 4px 0px #c03c44",
        };
      case false:
        return {
          boxShadow:
            "0 0 6px #2A88C1, inset 0px 9px 9px 0px #ffffffb3, inset 0 -5px 4px 0px #1677BA",
        };
    }
  };

  const getTextColor = (type: boolean) => {
    switch (type) {
      case true:
        return "text-[#871118]";
      case false:
        return "text-[#0B47AD]";
    }
  };

  const getText = (type: boolean) => {
    switch (type) {
      case false:
        return "Normal";
      case true:
        return "Special";
    }
  };

  return (
    <div
      className={`nftButton rounded-md ${getBackgroundColor(
        props.type
      )} cursor-default `}
      style={getBoxShadow(props.type)}
    >
      <p
        className={`${getTextColor(
          props.type
        )} py-[7px] px-[10px] font-extrabold text-[12px] uppercase`}
        style={{ textShadow: "0 1px 4px #00000040" }}
      >
        {getText(props.type)}
      </p>
    </div>
  );
};

export default Button;
