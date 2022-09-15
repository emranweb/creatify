import React from "react";
import LineTitle from "./LineTitle";
import ProgressBar from "./ProgressBar";
const Skill = () => {
  return (
    <div className="pt-[230px] pb-[250px] xl:pt-[200px] xl:pb-[200px] md:pt-[150px] md:mb-[150px] bg-[#FAFBFC]">
      <div className="container">
        <div className="flex lg:flex-col">
          <div className="w-1/2 lg:w-full lg:mb-[50px]">
            <LineTitle>my skill</LineTitle>
            <h2>
              Skills that I have so far, to provide my clients best products.
            </h2>
          </div>
          <div className="w-1/2 lg:w-full">
            <p className="pb-[40px]">
              Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae.
            </p>
            <div className="mb-[60px]">
              <ProgressBar width="95%" text="Design" cssStyle="mb-[60px]" />
              <ProgressBar
                width="93%"
                text="Art Direction"
                cssStyle="mb-[60px]"
              />
              <ProgressBar width="93%" text="Branding" cssStyle="mb-[60px]" />
              <ProgressBar width="80%" text="Website Design" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
