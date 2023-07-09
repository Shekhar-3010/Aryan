import React from 'react'
import Header from "./Header";
import n1 from "../img/Nature/1.jpg";
import n2 from "../img/Nature/2.jpg";
import n3 from "../img/Nature/3.jpg";
import n4 from "../img/Nature/4.jpg";
import n5 from "../img/Nature/5.jpg";
import n6 from "../img/Nature/6.jpg";
import n7 from "../img/Nature/7.jpg";
import n8 from "../img/Nature/8.jpg";
import n9 from "../img/Nature/9.jpg";
import n10 from "../img/Nature/10.jpg";



const Nature = () => {
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
        <img src={n1} alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src={n2} alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src={n3} alt=""/>
      </div>
      <div class="picture_wrapper">
       <img src={n4} alt=""/> 
      </div>
      <div class="picture_wrapper">
        <img src={n5} alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src={n6} alt=""/>
      </div>
      <div class="picture_wrapper">
        <img src={n7} alt=""/>
      </div>
      <div class="picture_wrapper">
      <img src={n8} alt=""/>
      </div>
      <div class="picture_wrapper">
      <img src={n9} alt=""/>
      </div>
      <div class="picture_wrapper">
      <img src={n10} alt=""/>
      </div>
      <div class="picture_wrapper">
      <img src={n1} alt=""/>
      </div>
      <div class="picture_wrapper">
      <img src={n2} alt=""/>
      </div>
      
      
  </div>
  
  </>
  )
}

export default Nature
