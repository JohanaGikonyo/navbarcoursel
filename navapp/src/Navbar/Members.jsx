import  { useEffect } from 'react'
import { useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import scroll from '../Helpers/products'
import axios from 'redaxios'

import './home.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';



function Signin(){
    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [phone, setPhone]=useState();
     const handlesubmit= async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:8000/signin',{email,phone})
            .then((res)=>{console.log('Data Saved')
        if(res.data==='exist'){
            alert("You are already a member,Put Order")
            history('/login')
        }
        else if(res.data==='notexist'){
            alert("Thank you, successively Joined")
            history('/login')
        }
        })
            .catch(e=>{console.log("Error connecting",e)})
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
    <button onClick={handlesubmit}>Join</button>
</div>
    </form>
</div>

    );
}

export default Signin