import  { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import scroll from '../Helpers/products'
import { NavLink } from 'react-router-dom';

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

<div className='userinput'>
    <form action='post'>
    <div>
    <label>Email</label>
    <input type='email' name='email' required autoFocus placeholder='Email...'/>
    </div>
    <div>
    <label>Phone Number</label>
    <input type='number' name='email' required placeholder='Phone...'/>
    </div>
    <div>
    <label>Message</label>
        <textarea  placeholder='Message...' rows={5} />
    </div>
<div>
    <button type='submit'>Send</button>
    <p>or</p>
    <h5><NavLink to='/signin'>Signin</NavLink></h5>
</div>

    </form>
</div>

    );
}

export default Login