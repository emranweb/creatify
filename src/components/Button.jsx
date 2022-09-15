import React from "react";

const Button = ({ children, css }) => {
  return (
    <button
      className={`text-[16px] leading-[34px] tracking=[0.1em] uppercase font-semibold font-manrope text-white bg-dark py-[12px] px-[48px] ${css}`}
    >
      {children}
    </button>
  );
};

export default Button;
