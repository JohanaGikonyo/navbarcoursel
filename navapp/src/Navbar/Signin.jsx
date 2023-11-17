import  { useEffect } from 'react'
import { useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import scroll from '../Helpers/products'


import './home.css'
import React from 'react';



function Signin(){
    return(

<div className='userinput'>
    <form action='post'>
    <div>
    <label>Email</label>
    <input type='email' name='email' required autoFocus placeholder='Email...'/>
    </div>
    <div>
    <label>Phone Number</label>
    <input type='number' name='number' required placeholder='Phone...'/>
    </div>
    <div>
    <label>Message</label>
        <textarea  placeholder='Message...' rows={5} />
    </div>
<div>
    <button type='submit'>Send</button>
</div>
    </form>
</div>

    );
}

export default Signin