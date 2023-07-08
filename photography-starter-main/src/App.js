import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import motion from "framer-motion";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import Home from "./pages/Home";
import Wedding from "./components/Wedding";

const App = () => {
  return (
    <>
      <Router>
        
        <AnimRoutes />
       
      </Router>
      
    </>
  );
};

export default App;
