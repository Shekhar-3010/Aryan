import React from 'react'
import Header from "./Header";
import a1 from "../img/BestClicks/1.jpg";
import a2 from "../img/BestClicks/2.jpg";
import a3 from "../img/BestClicks/3.jpg";
import a4 from "../img/BestClicks/4.jpg";



import a5 from "../img/BestClicks/5.jpg";
import a7 from "../img/BestClicks/7.jpg";
import a8 from "../img/BestClicks/6.jpg";

import a6 from "../img/BestClicks/8.jpg";
import a9 from "../img/BestClicks/9.jpg";
import a10 from "../img/BestClicks/10.jpg";
import a11 from "../img/BestClicks/11.jpg";

const BestClick = () => {
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
        <img src={a11} alt="" />
      </div>
      <div class="picture_wrapper">
        <img src={a2} alt="" />
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
      
    </div>
  </>
  )
}

export default BestClick
