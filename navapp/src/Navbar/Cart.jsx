import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './cart.css';

function Cart() {
  const location = useLocation();
  return (
    <div className='customer d-flex justify-content-center flex-wrap'>
      <h2>Dear <p>{location.state.id}</p></h2>
      <h3>You are our beloved Customer</h3>
      <h4>Your order Message is: <p>{location.state.mes}</p></h4>
      <h5>We really appreciate your Support</h5>
      
    </div>
  );
}

export default Cart;
