import React, { useEffect, useState } from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
//import { box-icon } from 'boxicons';

import './navbar.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'

function Navbar() {
    const [isopen, setIsOpen]=useState(false)
    const toggleNavbar=()=>{
        setIsOpen(!isopen)
    }
    useEffect(()=>{
        const handleOutsideClick=(event)=>{
if(isopen && event.target.closest('.navbar')===null)
{
setIsOpen(false);
}
        };
        if (isopen){
            document.addEventListener('click',handleOutsideClick);
        }
    
    return ()=>{
document.removeEventListener('click', handleOutsideClick);
    };
}
    )
   const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Optional: Adds smooth scrolling behavior
        });
      };
  return (
    <nav className='navbar'>
    <div className='navbar-brand'>
        
        <NavLink className='navbar-title' to='/' onClick={scrollToTop}>JKTECHS</NavLink>
       
    </div>
    <span className='toggle' onClick={toggleNavbar}>
{isopen?<box-icon name='x'></box-icon>:<box-icon name='menu-alt-right'></box-icon>}
        </span>
    <ul className={`links ${isopen?'open':''}`}>
    <box-icon name='home' ></box-icon><li><Link to='/home'onClick={scrollToTop}>Home</Link></li>
    <box-icon name='chat' type='solid' ></box-icon><li><Link to='/about' onClick={scrollToTop}>About</Link></li>
    <box-icon name='chat' type='solid' ></box-icon><li><Link to='/' onClick={scrollToTop}>Products</Link></li>
    <box-icon name='phone-call' ></box-icon> <li><Link to='/contact' onClick={scrollToTop}>Contact</Link></li>
        </ul>  
    </nav>
  )
}

export default Navbar