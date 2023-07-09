import React from "react";
import Header from "./Header";
import a1 from "../img/Portrait/1.jpg";
import a2 from "../img/Portrait/2.jpg";
import a3 from "../img/Portrait/3.jpg";
import a4 from "../img/Portrait/4.jpg";
import a5 from "../img/Portrait/5.jpg";
import a7 from "../img/Portrait/7.jpg";
import a8 from "../img/Portrait/6.jpg";

import a6 from "../img/Portrait/8.jpg";
import a9 from "../img/Portrait/9.jpg";
import a10 from "../img/Portrait/10.jpg";
import a11 from "../img/Portrait/11.jpg";
import a12 from "../img/Portrait/12.jpg";
import a13 from "../img/Portrait/13.jpg";
import a14 from "../img/Portrait/14.JPG";
import a15 from "../img/Portrait/15.JPG";


const Portrait = () => {
  return (
    <>
      <Header color="white" />
      <div class="top_banner">
        <div class="content_title">
          <h1 class="title h1">
            <small class="d-block"></small>Aimals
          </h1>
        </div>
      </div>
      <div class="main_content">
        <div class="picture_wrapper ">
          <img src={a2} alt="" />
        </div>
        <div class="picture_wrapper">
          <img src={a1} alt="" />
        </div>
        <div class="picture_wrapper">
          <img src={a3} alt="" />
        </div>
        <div class="picture_wrapper">
          <img src={a4} alt="" />
        </div>
        <div class="picture_wrapper">
          <img src={a5} alt="" />
        </div>
        <div class="picture_wrapper">
          <img src={a6} alt="" />
        </div>
        <div class="picture_wrapper">
          <img src={a7} alt="" />
        </div>
        <div class="picture_wrapper">
          <img src={a8} alt="" />
        </div>
        <div class="picture_wrapper">
          <img src={a9} alt="" />
        </div>
        <div class="picture_wrapper">
          <img src={a10} alt="" />
        </div>
        <div class="picture_wrapper">
          <img src={a11} alt="" />
        </div>
        <div class="picture_wrapper">
          <img src={a12} alt="" />
        </div>
        <div class="picture_wrapper">
        <img src={a13} alt="" />
      </div> <div class="picture_wrapper">
      <img src={a14} alt="" />
    </div> <div class="picture_wrapper">
    <img src={a15} alt="" />
  </div>
      </div>
    </>
  );
};

export default Portrait;
