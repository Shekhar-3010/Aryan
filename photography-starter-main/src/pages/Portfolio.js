import React, { useContext } from "react";

// Import Images
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.jpg";
import Image3 from "../img/portfolio/3.jpg";
import Image4 from "../img/portfolio/4.jpg";

// Import Link
import { Link } from "react-router-dom";

//Import Motion
import { motion } from "framer-motion";

//Import Transition
import { transition1 } from "../transitions";
import Header from "../components/Header";

const Portfolio = () => {
  return (
    <>
      <Header />
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="section"
      >
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
            {/* text */}
            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={transition1}
              className="flex flex-col lg:items-start"
            >
              <h1 className="h1">Portfolio</h1>
              <p className="mb-12 max-w-sm">
                This portfolio is a glimpse at the way I design and prototype in
                code. Design something familiar, program it to do something
                unexpected.
                <br />
                <br />
                Make sure people feel something. Available for the right
                project.
              </p>
              <Link
                to={"/contact"}
                className="btn mb-[30px] mx-auto lg:mx-0 hover:bg-slate-500"
              >
                Hire me
              </Link>
            </motion.div>
            {/* image grid */}
            <div className="grid grid-cols-2 lg:gap-2">
              {/* image */}
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <Link to="/animal">
                  <img
                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                    src={Image1}
                    alt=""
                  />
                </Link>
              </div>

              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <Link to="/nature">
                  <img
                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                    src={Image2}
                    alt=""
                  />
                </Link>
              </div>
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <Link to="/portrait">
                  <img
                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                    src={Image3}
                    alt=""
                  />
                </Link>
              </div>
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <Link to="/bestclicks">
                  <img
                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                    src={Image4}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Portfolio;
