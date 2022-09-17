import React from "react";
import BlogItem from "./BlogItem";
import LineTitle from "./LineTitle";

const Blog = () => {
  return (
    <div className="bg-[#FAFAFA] py-[200px]">
      <div className="container">
        <LineTitle />
        <h2 className="mb-[80px]">Latest News</h2>
        <div className="columns-4">
          <BlogItem>Graphic Designing Useful Tips & Best Practices</BlogItem>
          <BlogItem>basic typography rules for ui designing</BlogItem>
          <BlogItem>top 10 graphic designs review in 2021</BlogItem>
          <div>
            <p className="text-[16px] leading-[37px] tracking-[0.1em] uppercase text-dark font-manrope font-semibold flex items-center">
              view all works
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
