import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import motion from "framer-motion";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
