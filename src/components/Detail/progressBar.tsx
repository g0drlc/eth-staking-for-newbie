const ProgressBar = (props: { percent: number }) => {
  return (
    <div className="w-full rounded-full p-[6px] bg-black">
      <div
        style={{ width: props.percent + "%" }}
        className={`rounded-full bg-gradient-to-r from-[#17C99E] to-[#A461FF] border-t-[1px] border-b-[1px] border-black border-opacity-20 py-[3px] shadow-progress`}
      />
    </div>
  );
};

export default ProgressBar;
