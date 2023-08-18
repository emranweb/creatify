import React from "react";
import Line from "../assets/line.svg";

const LineTitle = ({ children, css = "" }) => {
    return (
        <h4 className={`sub-title ${css}`}>
            <img className="mr-[20px]" src={Line} alt="line" />
            {children}
        </h4>
    );
};

export default LineTitle;
