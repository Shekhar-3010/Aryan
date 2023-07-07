import React from "react";
import Home from "../pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AnimRoutes = () => {
  return(
  
  <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
  </Routes> 
  );
  
};

export default AnimRoutes;
