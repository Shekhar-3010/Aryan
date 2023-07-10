import React from "react";
//here images are imported
import aryanabout from "../img/about/aryan99.png";
import { Link } from "react-router-dom";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";
import Header from "../components/Header";


const About = () => {
  return (
    <>
    <Header  color="white"/>
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative overflow-y-auto">
        {/**  Image and text wrapper*/}
        <div className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 over overflow-hidden">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden
          ">
            <img src={aryanabout} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About Me</h1>
            <p className="mb-12 max-w-sm">
              Amelia Allen is a lifestyle, portrait and documentary photographer
              from Somerset who now lives and works in London. Starting her
              career in fashion photography at the age of 18, it was on the sets
              of high end brand campaigns and fashion shows that Amelia learnt
              the technicalities of what has become her signature style. Having
            </p>
            <Link to="/portfolio" className="btn">
              My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default About;
