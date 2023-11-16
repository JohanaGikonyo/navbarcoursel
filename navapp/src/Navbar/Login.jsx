import  { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import './home.css'
import React from 'react';



function Login(){

    const settings={
            autoplay:true,            // Auto-play the carousel
            dots: true,                // Show navigation dots
           prevArrow: false, // Provide the custom LeftArrow component
            nextArrow: false,         // Hide the next arro
    }


    return(
<div>
<div class="slider">
    <Slider {...settings}>
    <div><img src={img1} alt="Image 1"/></div>
    <div><img src={img2} alt="Image 2"/></div>
    <div><img src={img3} alt="Image 3"/></div>
    <div><img src={img4} alt="Image 3"/></div>
    <div><img src={img5} alt="Image 3"/></div>
    <div><img src={img6} alt="Image 3"/></div>
    </Slider>
</div>
</div>
    );
}

export default Login