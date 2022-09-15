import React from "react";
import hand from "../assets/hand.svg";
import arrowRight from "../assets/arrow-right.svg";

const Hero = () => {
  return (
    <div
      className="hero w-full h-full bg-no-repeat pt-[270px] pb-[180px] 2xl:pt-[200px] 2xl:pb-[60px] xl:pt-[150px] xl:pb-[30px] lg:pb-[840px] md:pb-[640px] sm:pb-[500px] bg-[#FAFBFC]"
      style={{
        backgroundImage: "url('images/pattern.svg'), url('images/hero-bg.jpg')",
        backgroundPosition: "left top, right top",
      }}
    >
      <div className="container">
        <div>
          <h5 className="flex text-[18px] tracking-[0.24em] uppercase text-[#717171] mb-[40px] xl:mb-[20px]">
            <img className="mr-[10px]" src={hand} alt="hand" /> hi! everyone
          </h5>
          <h1>
            simon john <br /> brand designer
          </h1>
          <p className="max-w-[533px] mb-[79px] xl:mb-[30px]">
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
  );
};

export default Hero;
