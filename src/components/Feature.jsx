import React from "react";

const Feature = ({ title, text }) => {
  return (
    <div className="border-b border-[#E2E2E2] pb-[20px] mb-[50px]">
      <h6 className="font-manrope font-medium text-[20px] leading-[30px] capitalize text-dark">
        {title}
      </h6>
      <p className="text-[19px] font-manrope font-light leading-[35px] tracking-[0.02em] text-[#282828]">
        {text}
      </p>
    </div>
  );
};

export default Feature;
