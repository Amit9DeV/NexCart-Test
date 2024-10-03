import Slider from "react-slick";
import ProductCard from "../components/ProductCard"
import React, { useState, useEffect, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home(){
  
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

   return (<>
        
        <section id="hero">

    
        <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/img/sliding/slider_1.jpg" alt="" />
        </div>
        <div>
          <img src="/img/sliding/slider_2.jpg" alt="" />
        </div>
        <div>
         <img src="/img/sliding/slider_3.jpg" alt="" />
        </div>
        <div>
          <img src="/img/sliding/slider_4.jpg" alt="" />
        </div>
        <div>
          <img src="/img/sliding/slider_5.jpg" alt="" />
        </div>
        <div>
          <img src="/img/sliding/slider_6.jpg" alt="" />
        </div>
      </Slider>
    </div>    

    </section>

    <section id="feature" class="section-p1" >

        <div class="fe-box">
            <img src="/img/features/f1.png" alt=""/>
            <h6>Free Shiping</h6>
        </div>
        <div class="fe-box">
            <img src="/img/features/f2.png" alt=""/>
            <h6>Fast Delivery</h6>
        </div>
        <div class="fe-box">
            <img src="/img/features/f3.png" alt=""/>
            <h6>Save Money</h6>
        </div>
        <div class="fe-box">
            <img src="/img/features/f4.png" alt=""/>
            <h6>Easy Order</h6>
        </div>
        <div class="fe-box">
            <img src="/img/features/f5.png" alt=""/>
            <h6>Happy Sell</h6>
        </div>
        <div class="fe-box">
            <img src="/img/features/f6.png" alt=""/>
            <h6>24/7 Support</h6>
        </div>
    </section>

    <section id="product1" class="section-p1" >
      <h2>Feature Collection</h2>
      <p>Summer Collection New Modern Design</p>

      <div class="pro-container" >

               <ProductCard/>
  
        </div>
  
      </section>

    <section id="sm-banner" class="section-p1" >

        <div class="banner-box">
            <h4>Crazy Deal</h4>
            <h2>Buy 1 Get one Free</h2>
            <p>The best classic dress is on sale at cara</p>
            <button class="white left">explore more</button>
        </div>

        <div class="banner-box banner-box2">
            <h4>spring/summer</h4>
            <h2>upcoming season</h2>
            <p>The best classic dress is on sale at cara</p>
            <button class="normal">explore more</button>
        </div>

    </section>

    <section id="banner3">
        <div class="banner-box banner-box1">
           <h2>SEASON SALE</h2>
           <h3>Winter Collection -59% off</h3>
        </div>
        <div class="banner-box banner-box2">
            <h2>NEW FOOTWEAR COLLECTION</h2>
            <h3>Spring/Summer 2024</h3>
        </div>
        <div class="banner-box banner-box3">
            <h2>T-SHIRT</h2>
            <h3>New Trendy Prints</h3>
        </div>
    </section>

    <section id="newsLetter" class="section-p1 section-m1" >
       <div class="newstext">
        <h4>Sign Up For newsLetter</h4>
        <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
       </div>
       <div class="form">
        <input type="email" placeholder="your E-mail address"/>
        <button class="normal" >submit</button>
       </div>
    </section>


        </>)
}