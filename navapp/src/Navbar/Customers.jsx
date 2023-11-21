import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'redaxios';
import './cart.css';

function Customers() {
  const location = useLocation();
  const [user, setUser] = useState([]);
  const [password, setpassword]=useState('');



  const handledelete=(id)=>{
    axios.delete(`https://jkserver-delta.vercel.app/delete/${id}`)
    .then(res=>{console.log(res) ,window.location.reload()})
    .catch(e=>{console.error(e)})
  }

  useEffect(() => {
    axios.get('https://jkserver-delta.vercel.app/getcustomers')
      .then(user => {
          console.log('Data from server:', user.data);
        setUser(user.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  

  return (
    
    <div className='customer d-flex justify-content-center flex-wrap'>
    <form ><input className='p-2' type='password' required onChange={(e)=>{setpassword(e.target.value)}} autoFocus placeholder='password...'/>
  
    </form>
   
    {
        password==='juli'?(<div>
  <table className='border'>
   <th><Link className='btn btn-success m-1 ' to='/login' >Add+1</Link></th>
    <thead >
      <tr className='border'>
        <th>Email</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
      {
        user.map((item, index) => {
         return <tr key={index} className=' border'>
            <td className=' border'>{item.email}</td>
            <td className=' border'>{item.message}</td>
            
            
            
            <td className=' border'><Link to='/login' className='btn btn-danger m-1'>Update</Link></td>
            <td ><button className='btn btn-primary m-1 border' onClick={()=>{handledelete(item._id)}}>Delete</button></td>
            
          </tr>
      })
      }
    </tbody>
  </table>
</div>):(<h3>Only Owner can access this page</h3>)
    }
      
    </div>
  );
}

export default Customers;
