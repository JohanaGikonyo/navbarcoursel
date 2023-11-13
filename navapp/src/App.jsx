import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Navbar/Home'
import Contact from './Navbar/Contact'
import About from './Navbar/About'
import Products from './Navbar/Products'
import { Link, Route, Routes,NavLink } from 'react-router-dom'

function App() {
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Adds smooth scrolling behavior
    });
  };

  return (
    <>
      <Navbar/>
      <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          <Route path='/' element={<Products/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            
        </Routes>
        <div className='upwardbtn'>
        <box-icon name='chevrons-up' onClick={scrollToTop}></box-icon>
        </div>
        <footer>
        <nav>
        <NavLink to='/home' onClick={scrollToTop}>Home</NavLink>
        <NavLink to='/' onClick={scrollToTop}>Products</NavLink>
        <NavLink to='/about' onClick={scrollToTop}>About</NavLink>
        <NavLink to='/contact' onClick={scrollToTop}>Contact</NavLink>
     
    </nav>
    
    <div class="contact-info">
      <p>Email: info@jktechs.com</p>
      <p>Phone: +254 (10) 819-619</p>
    </div>

    <p> @copywrite; {new Date().toDateString()} JKTECHS Traders. All rights reserved.</p>
        </footer>
    </>
  )
}

export default App
