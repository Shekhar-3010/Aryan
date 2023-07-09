import React from "react";
import Home from "../pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { AnimatePresence } from "framer-motion";
import Wedding from "./Wedding";
import Nature from "./Nature";
import Portrait from "./Portrait";
import BestClick from "./BestClick";

const AnimRoutes = () => {
  const location=useLocation();

  return(
  <AnimatePresence initial={true} mode="wait ">
  <Routes key={location.pathname}>
    
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
   
  </Routes> 
  <Routes>
  <Route path="/animal" element={<Wedding />} />
  <Route path="/nature" element={<Nature />} />
  <Route path="/portrait" element={<Portrait />} />
  <Route path="/bestclicks" element={<BestClick />} />


  
  </Routes>
  </AnimatePresence>
  );
  
};

export default AnimRoutes;
