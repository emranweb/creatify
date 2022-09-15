import React from "react";

const ProgressBar = ({ width, text, cssStyle }) => {
  return (
    <div className={`w-full h-[4px] bg-[#F0F0F0] ${cssStyle}`}>
      <div
        className={`w-[${width}] h-[4px] bg-dark-100 flex justify-between relative`}
      >
        <span className="font-manrope font-normal text-[19px]leading-[26px] tracking-[0.03em] capitalize absolute left-0 top-[-30px]">
          {text}
        </span>
        <span className="font-manrope font-normal text-[19px]leading-[26px] tracking-[0.03em] capitalize absolute top-[-30px] right-0">
          {width}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
