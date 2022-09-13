import React from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";

const Header = () => {
  return (
    <div className="header absolute top-[64px] w-full">
      <div className="container">
        <div className="flex flex-row justify-between">
          <img src={logo} alt="creatify" />
          <img src={menu} alt="menu icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
