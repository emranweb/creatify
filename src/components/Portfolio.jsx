import React from "react";
import LineTitle from "./LineTitle";
import GridImage1 from "../assets/grid-layout-1.jpg";
import GridImage2 from "../assets/grid-layout-2.jpg";
import GridImage3 from "../assets/grid-layout-3.jpg";
import GridImage4 from "../assets/grid-layout-4.jpg";
import GridImage5 from "../assets/grid-layout-5.jpg";
import GridImage6 from "../assets/grid-layout-6.jpg";
import GridImage7 from "../assets/grid-layout-7.jpg";
import GridImage8 from "../assets/grid-layout-8.jpg";
import GridImage9 from "../assets/grid-layout-9.jpg";
import Button from "./Button";

const Portfolio = () => {
    return (
        <div className="py-[200px] sm:py-[60px]">
            <div className="container">
                <div className="text-center">
                    <LineTitle css="items-center justify-center">
                        portfolio
                    </LineTitle>
                    <h2 className="mb-[70px]">Latest Works</h2>
                    <ul className="flex text-[16px] leading-[34px] font-manrope uppercase tracking-[0.1em] justify-center space-x-12 sm:space-x-0 font-semibold mb-16">
                        <li>all</li>
                        <li>magazines</li>
                        <li>package</li>
                        <li>branding</li>
                        <li>web</li>
                        <li>logo</li>
                    </ul>
                    <div className="columns-3 gap-4 sm:gap-2 sm:columns-2">
                        <img
                            src={GridImage1}
                            className="w-full aspect-video mb-4"
                            alt="cup"
                        />
                        <img
                            src={GridImage2}
                            className="w-full aspect-square mb-4"
                            alt="cup"
                        />
                        <img
                            src={GridImage3}
                            className="w-full aspect-video mb-4"
                            alt="cup"
                        />
                        <img
                            src={GridImage4}
                            className="w-full aspect-square mb-4"
                            alt="cup"
                        />
                        <img
                            src={GridImage5}
                            className="w-full aspect-video mb-4"
                            alt="cup"
                        />
                        <img
                            src={GridImage6}
                            className="w-full aspect-video mb-4"
                            alt="cup"
                        />
                        <img
                            src={GridImage7}
                            className="w-full aspect-video mb-4"
                            alt="cup"
                        />
                        <img
                            src={GridImage8}
                            className="w-full aspect-square mb-4"
                            alt="cup"
                        />
                        <img
                            src={GridImage9}
                            className="w-full aspect-video mb-4"
                            alt="cup"
                        />
                    </div>
                    <Button css="mt-[70px]">View all Works</Button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
