import  { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import scroll from '../Helpers/products'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'redaxios'
import Cart from './Cart';
import './home.css'
import React from 'react';



function Login(){

    // const settings={
    //         autoplay:true,            // Auto-play the carousel
    //         dots: true,                // Show navigation dots
    //        prevArrow: false, // Provide the custom LeftArrow component
    //         nextArrow: false,         // Hide the next arro
    // }
    const [email,setEmail]=useState('')
    const [phone, setPhone]=useState()
    const [message, setMessage]=useState('')
    const history=useNavigate();
    const handleSubmit=async(e)=>{
        if(email!==''&& message!=='' ){
        e.preventDefault();
try{ await axios.post('http://localhost:8000/login',
{email,phone,message}

)
.then((res)=>{
    console.log('Response:', res.data);
    history('/cart', { state: { id: email, mes:message } });
})
.catch((e)=>{
    alert("Error")
})

}


catch(e){
console.log(`Error submitting the form`)
}}
else{
    alert("You must fill all the details")
}

    }


    return(

<div className='userinput'>
    <form action='post'>
    <p>Put order</p>
    <div>
    <label>Email</label>
    <input type='email' name='email' onChange={(e)=>{setEmail(e.target.value)}} required autoFocus placeholder='Email...'/>
    </div>
    <div>
    <label>Phone Number</label>
    <input type='number' name='number' required placeholder='Phone...' onChange={(e)=>{setPhone(e.target.value)}}/>
    </div>
    <div>
    <label>Message</label>
        <textarea  placeholder='Message...' rows={5} name='message' onChange={(e)=>{setMessage(e.target.value)}} required/>
    </div>
<div>
    <button type='submit' onClick={handleSubmit}>Send</button>
    <p>or</p>
    <h5><NavLink to='/signin'>Become member</NavLink></h5>
</div>

    </form>
</div>

    );
}

export default Login