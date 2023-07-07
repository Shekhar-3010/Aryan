import React from "react";
//import images
import WomanImg from "../img/home/woman.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section bg-blue-200">
      <div className="container mx-auto h-full relative">
        {/* text and image wrapper */}
        <div className="flex flex-col justify-center">
          {/* text  */}
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              {" "}
              Designer <br /> & Photographer
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Ahmedabad,India
            </p>
            <Link to="/contact" className="btn mb-[30px] ">
              Hire me{" "}
            </Link>
          </div>
          {/* Image  */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <div className="relative lg:-right-40 overflow-hidden">
              <img src={WomanImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
