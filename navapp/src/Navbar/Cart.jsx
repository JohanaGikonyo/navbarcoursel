import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'redaxios';
import './cart.css';

function Cart() {
  const location = useLocation();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('https://jktechsserver.vercel.app/getcustomers')
      .then(user => {
          console.log('Data from server:', user.data);
        setUser(user.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='customer'>
      <h2>Dear <p>{location.state.id}</p></h2>
      <h3>You are our beloved Customer</h3>
      <h4>Your order Message is: <p>{location.state.mes}</p></h4>
      <h5>We really appreciate your Support</h5>
      <div>
  <table>
    <thead>
      <tr>
        <th>Email</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
      {Array.isArray(user) && user.length > 0 ? (
        user.map((item, index) => (
          <tr key={index}>
            <td>{item.email}</td>
            <td>{item.message}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="2">No data available</td>
        </tr>
      )}
    </tbody>
  </table>
</div>

    </div>
  );
}

export default Cart;
