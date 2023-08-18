import React from "react";

const BlogItem = ({ children }) => {
    return (
        <div>
            <p className="text-[18px] leading-[31px] font-medium font-manrope tracking-[0.0rem] capitalize text-[#282828] pb-[20px]">
                {children}
            </p>
            <button className="text-[14px] leading-[19px] font-normal tracking-[0.02em] text-[#4D4D4D] flex items-center">
                <span>Read More</span>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </span>
            </button>
        </div>
    );
};

export default BlogItem;
