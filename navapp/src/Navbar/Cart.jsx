import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './cart.css';
import { helperContext } from '../Helpers/context';

function Cart() {
  const location = useLocation();
  const {cost, setcost, page, setpage}=useContext(helperContext)
  return (
    <div className='customer d-flex justify-content-center flex-wrap'>
      {/* <h2>Dear <p>{location.state.id}</p></h2>
      <h3>You are our beloved Customer</h3>
      <h4>Your order Message is: <p>{location.state.mes}</p></h4>
      <h5>We really appreciate your Support</h5>
       */}
       <h5>Total Cost is:
       <ul>
       {cost+" "+'\nl'}
       </ul>
        </h5><br/>
       <button onClick={()=>{setpage("product")}} className='btn btn-danger'>Add More</button>
    </div>
  );
}

export default Cart;
