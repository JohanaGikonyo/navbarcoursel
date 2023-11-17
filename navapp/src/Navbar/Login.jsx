import  { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import scroll from '../Helpers/products'


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
    {/* <Slider {...settings}>
    
    </Slider> */}
    <h1>Waiting...</h1>
</div>
</div>
    );
}

export default Login