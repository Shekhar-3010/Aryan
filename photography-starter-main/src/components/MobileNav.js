import React, { useState } from "react";
import {Im500Px, ImTwitter, ImWhatsapp, ImTelegram, ImSkype,ImInstagram, ImFacebook, ImPhone} from 'react-icons/im';


//Import Icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

//Import Link
import { Link } from "react-router-dom";

//Import Motion
import { motion } from "framer-motion";
import Socials from "./Socials";

//Menu Variants
const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="text-primary xl:hidden">
      {/* Nav Open Button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>

      {/* Mobile Nav */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 h-screen z-20 max-w-xs"
      >
        {/* Icons */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 right-5 top-8 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>

        {/* List Of Menus */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <ul className="flex gap-x-4 ">
              <li className="hover:scale-150">
                <a
                  href="https://www.instagram.com/__aryan__kapoor__/?igshid=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                >
                  <ImInstagram />
                </a>
              </li>
              <li className="hover:scale-150">
                <a
                  href="https://api.whatsapp.com/send?phone=917249992499&text=Hey!%20Saw%20your%20work%20Can%20You%20please%20Provide%20some%20info%20regarding...."
                  target="_blank"
                >
                  <ImWhatsapp />
                </a>
              </li>
              <li className="hover:scale-150">
                <a
                  href="https://www.facebook.com/people/Mayank-Kapoor/pfbid0ZNqEuQAfAKFpGniZXsKySqAky9sAN4b5yFabCPvviRjbDUszHUPLij672toVk3MEl/"
                  target="_blank"
                >
                  <ImFacebook />
                </a>
              </li>
              <li className="hover:scale-150">
                <a href="tel:+917249992499" target="_blank">
                  <ImPhone />
                </a>
              </li>
              <li className="hover:scale-150">
                <a href="mailto:Mayankkapoormk2000@gmail.com " target="_blank">
                  <ImSkype />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
