import  { useEffect } from 'react'
import { useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import scroll from '../Helpers/products'
import axios from 'redaxios'

import './home.css'
import React from 'react';



function Signin(){
    const [email,setEmail]=useState('')
    const [phone, setPhone]=useState();
     const handlesubmit= async(e)=>{
        e.PreventDefault();
        try{
            await axios.post('/signin',{email,phone})
            .then(()=>{console.log('Data Saved')})
            .catch(e=>{console.log("Error connecting")})
        }
        catch(e){
            console.log("Error",e)
        }


     }
    return(

<div className='userinput'>
    <form action='post'>
    <div>
    <label>Email</label>
    <input type='email' name='email' required autoFocus placeholder='Email...' onChange={(e)=>{setEmail(e.target.value)}} />
    </div>
    <div>
    <label>Phone Number</label>
    <input type='number' name='number' onChange={(e)=>{setPhone(e.target.value)}} required placeholder='Phone...'/>
    </div>
    
<div>
    <button>Send</button>
</div>
    </form>
</div>

    );
}

export default Signin