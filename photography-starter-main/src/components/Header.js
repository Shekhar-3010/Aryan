import React from "react";
import Socials from "./Socials";
import logo from "../img/header/logo3.png";
import MobileNav from "./MobileNav";
//componets import

//import links which we will be using
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header
      className="   fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center"
      style={{ backgroundColor: props.color }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo*/}
        <Link to={"/"} className="max-w-[200px] ">
          <img src={logo} style={{ height: "130px" }} />
        </Link>
        {/* nav initally hidden show on desktop mode */}
        <nav className="hidden  xl:flex gap-x-12 font-semibold  ">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition hover:scale-125"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-primary transition hover:scale-125"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary transition hover:scale-125"
          >
            Contact
          </Link>
          <Link
            to={"/portfolio"}
            className="text-[#696c6d] hover:text-primary transition hover:scale-125"
          >
            Portfolio
          </Link>

          {/*socils*/}
        </nav>
      </div>
      <Socials />
      <MobileNav />

      {/*Mobile nav bar */}
    </header>
  );
};

export default Header;
