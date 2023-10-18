import  { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from './images/pexels-agung-pandit-wiguna-3401403.jpg'
import img2 from './images/pexels-cottonbro-studio-4709832.jpg'
import img3 from './images/pexels-linkedin-sales-navigator-1251861.jpg'
import img4 from './images/pexels-mikhail-nilov-7776963.jpg'
import img5 from './images/pexels-rdne-stock-project-7713135.jpg'
import img6 from './images/pexels-tam-hoang-1007066.jpg'
import './home.css'
import React from 'react';



function Home(){

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

export default Home