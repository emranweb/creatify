import React from "react";
import Line from "../assets/line.svg";
import Button from "./Button";

const Info = () => {
  return (
    <div className="pt-[230px] pb-[250px] xl:pt-[200px] xl:pb-[200px] md:pt-[150px] md:mb-[150px]">
      <div className="container">
        <div className="flex lg:flex-col">
          <div className="w-1/2 lg:w-full lg:mb-[50px]">
            <h4 className="sub-title">
              <img className="mr-[20px]" src={Line} alt="line" />
              who am i
            </h4>
            <h2>
              I'm Art Director & Brand Designer based in Los Angeles, USA.
            </h2>
          </div>
          <div className="w-1/2 lg:w-full">
            <p className="pb-[40px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta explicabo.
            </p>
            <p className="pb-[60px]">
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis
              doloribus asperiores repellat quia voluptas sit aspernatur te
              natus error sit voluptatem accusan.{" "}
            </p>
            <Button>about me</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;