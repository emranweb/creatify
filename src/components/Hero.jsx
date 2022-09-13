import React from "react";
import hand from "../assets/hand.svg";
import arrowRight from "../assets/arrow-right.svg";
import HeroImg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <div className="hero flex">
      <div className="left pt-[270px] bg-[#FAFBFC] flex-1">
        <div className="container">
          <div>
            <h5 className="flex text-[18px] tracking-[0.24em] uppercase text-[#717171] mb-[40px]">
              <img className="mr-[10px]" src={hand} alt="hand" /> hi! everyone
            </h5>
            <h1>
              simon john <br /> brand designer
            </h1>
            <p className="max-w-[533px] mb-[79px]">
              Make designs mainly logos, visual identities, apps & websites,
              social media and magazines.
            </p>
            <button className="text-[16px] leading-[34px] tracking-[0.1em] uppercase font-semibold font-manrope border-2 border-[#E2E2E2] py-[12px] pl-[40px] pr-[80px] rounded-[40px] relative text-left ">
              get in touch
              <span className="w-[60px] h-[60px] flex justify-center items-center text-white bg-dark rounded-full absolute right-0 top-[-1px] pt-[5px]">
                <img src={arrowRight} alt="arrow right" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className={`right flex-1 bg-[url('./src/assets/hero-bg.jpg')]`}>
        {/* <img className="w-full h-full" src={HeroImg} alt="hero-img" /> */}
      </div>
    </div>
  );
};

export default Hero;
