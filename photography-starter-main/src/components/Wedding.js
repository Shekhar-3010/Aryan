import React from "react";
import { useState } from "react";
import "./weddingStyles.css";
import Header from "./Header";
import a1 from "../img/Animals/1.jpg";
import a2 from "../img/Animals/2.jpg";
import a3 from "../img/Animals/3.jpg";
import a4 from "../img/Animals/4.jpg";
import a5 from "../img/Animals/5.jpg";
import a6 from "../img/Animals/6.jpg";
import a7 from "../img/Animals/7.jpg";
import a8 from "../img/Animals/8.jpg";
import a9 from "../img/Animals/9.jpg";
import a10 from "../img/Animals/10.jpg";
import a11 from "../img/Animals/11.jpg";
import a12 from "../img/Animals/12.jpg";

const Wedding = () => {
  return (
    <>
      <Header  color="white"/>
      <div class="top_banner">
      <div class="content_title">
        <h1 class="title h1">
          <small class="d-block"></small>Aimals
        </h1>
      </div>
    </div> 
    <div class="main_content">
      <div class="picture_wrapper " >
          <img src={a1} alt=""/>
        </div>
        <div class="picture_wrapper">
          <img src={a2} alt=""/>
        </div>
        <div class="picture_wrapper">
          <img src={a3} alt=""/>
        </div>
        <div class="picture_wrapper">
         <img src={a4} alt=""/> 
        </div>
        <div class="picture_wrapper">
          <img src={a5} alt=""/>
        </div>
        <div class="picture_wrapper">
          <img src={a6} alt=""/>
        </div>
        <div class="picture_wrapper">
          <img src={a7} alt=""/>
        </div>
        <div class="picture_wrapper">
        <img src={a8} alt=""/>
        </div>
        <div class="picture_wrapper">
        <img src={a9} alt=""/>
        </div>
        <div class="picture_wrapper">
        <img src={a10} alt=""/>
        </div>
        <div class="picture_wrapper">
        <img src={a11} alt=""/>
        </div>
        <div class="picture_wrapper">
        <img src={a12} alt=""/>
        </div>
        
        
    </div>
    
    </>
  );
};

export default Wedding;
