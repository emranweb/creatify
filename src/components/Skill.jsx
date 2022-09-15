import React from "react";
import Line from "../assets/line.svg";
import Button from "./Button";
const Skill = () => {
  return (
    <div className="pt-[230px] pb-[250px] xl:pt-[200px] xl:pb-[200px] md:pt-[150px] md:mb-[150px] bg-[#FAFBFC]">
      <div className="container">
        <div className="flex lg:flex-col">
          <div className="w-1/2 lg:w-full lg:mb-[50px]">
            <h4 className="sub-title">
              <img className="mr-[20px]" src={Line} alt="line" />
              my skills
            </h4>
            <h2>
              Skills that I have so far, to provide my clients best products.
            </h2>
          </div>
          <div className="w-1/2 lg:w-full">
            <p className="pb-[40px]">
              Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae.
            </p>
            <div className="pb-[60px]">
              <div className="w-full h-[4px] bg-[#F0F0F0] mb-[60px]">
                <div className="w-[90%] h-[4px] bg-dark-100 flex justify-between relative">
                  <span className="font-manrope font-normal text-[19px]leading-[26px] tracking-[0.03em] capitalize absolute left-0 top-[-30px]">
                    Design
                  </span>
                  <span className="font-manrope font-normal text-[19px]leading-[26px] tracking-[0.03em] capitalize absolute top-[-30px] right-0">
                    90%
                  </span>
                </div>
              </div>
              <div className="w-full h-[4px] bg-[#F0F0F0] mb-[60px]">
                <div className="w-[95%] h-[4px] bg-dark-100 flex justify-between relative">
                  <span className="font-manrope font-normal text-[19px]leading-[26px] tracking-[0.03em] capitalize absolute left-0 top-[-30px]">
                    art direction
                  </span>
                  <span className="font-manrope font-normal text-[19px]leading-[26px] tracking-[0.03em] capitalize absolute top-[-30px] right-0">
                    95%
                  </span>
                </div>
              </div>
              <div className="w-full h-[4px] bg-[#F0F0F0] mb-[60px]">
                <div className="w-[93%] h-[4px] bg-dark-100 flex justify-between relative">
                  <span className="font-manrope font-normal text-[19px]leading-[26px] tracking-[0.03em] capitalize absolute left-0 top-[-30px]">
                    branding
                  </span>
                  <span className="font-manrope font-normal text-[19px]leading-[26px] tracking-[0.03em] capitalize absolute top-[-30px] right-0">
                    93%
                  </span>
                </div>
              </div>
              <div className="w-full h-[4px] bg-[#F0F0F0]">
                <div className="w-[80%] h-[4px] bg-dark-100 flex justify-between relative">
                  <span className="font-manrope font-normal text-[19px]leading-[26px] tracking-[0.03em] capitalize absolute left-0 top-[-30px]">
                    website design
                  </span>
                  <span className="font-manrope font-normal text-[19px]leading-[26px] tracking-[0.03em] capitalize absolute top-[-30px] right-0">
                    80%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
