import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Navbar/Home'
import Contact from './Navbar/Contact'
import About from './Navbar/About'
import Products from './Navbar/Products'
import ItemList from './Navbar/ItemList'
import { Link, Route, Routes,NavLink } from 'react-router-dom'

function App() {
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Adds smooth scrolling behavior
    });
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleExpand1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const toggleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const toggleExpand3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  const additionalContent = isExpanded ? (
    <div>
      <h5>Ceo: 07 10 718 619</h5>
      <h5>Sales: 07 40 550 484</h5>
      <h5>Customer Services: Ceo: 07 10 718 619 </h5>
    </div>
  ) : null;

  const additionalContent1 = isExpanded1 ? (
    <div>
      <h5>Smart Watches</h5>
      <h5>Ladies Watches</h5>
      <h5>Phone Covers</h5>
      <h5>Bluetooth Radios/speakers</h5>
      <h5>Type C/B chargers</h5>
      <h5>Extension Cables</h5>
    </div>
  ) : null;

  const additionalContent2 = isExpanded2 ? (
    <div>
      <h5>Privacy Policy</h5>
      <h5>Terms and Conditions</h5>
      <h5>Shipping and Return Policy </h5>
      <h5> </h5>
      <h5>About us</h5>
      <h5>Electronic Blog</h5>
    </div>
  ) : null;

  const additionalContent3 = isExpanded3 ? (
    <div>
      <h5>Facebook</h5>
      <h5>Instagram</h5>
      <h5>Twitter</h5>
      <h5>Youtube</h5>
      <h5>Whatsapp</h5>
    </div>
  ) : null;
  return (
    <>
    
      <Navbar/>
      <ItemList/>
      <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          <Route path='/' element={<Products/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            
        </Routes>
       
        <div className='upwardbtn'>
        <box-icon name='chevrons-up' onClick={scrollToTop}></box-icon>
        </div>
        <div className='description-container'>
      <h3>Details</h3>
      <div className='expandable-content'>
        <div className='expand-toggle' onClick={toggleExpand}>
         <h4>Call us Now</h4> {isExpanded ? <box-icon name='chevron-up'></box-icon>:<box-icon name='chevron-down'></box-icon>  }
        </div>
        {additionalContent}
        <div className='expand-toggle' onClick={toggleExpand1}>
         <h4>Top Brands</h4> {isExpanded1 ? <box-icon name='chevron-up'></box-icon>:<box-icon name='chevron-down'></box-icon>  }
        </div>
        {additionalContent1}
        <div className='expand-toggle' onClick={toggleExpand2}>
         <h4>Customer Services</h4> {isExpanded2 ? <box-icon name='chevron-up'></box-icon>:<box-icon name='chevron-down'></box-icon>  }
        </div>
        {additionalContent2}
        <div className='expand-toggle' onClick={toggleExpand3}>
         <h4>Connect With us</h4> {isExpanded3 ? <box-icon name='chevron-up'></box-icon>:<box-icon name='chevron-down'></box-icon>  }
        </div>
        {additionalContent3}
      
      </div>
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
      <p>Phone: +254 (10) 718-619</p>
    </div>

    <p> @copywrite; {new Date().toDateString()} JKTECHS Traders. All rights reserved.</p>
        </footer>
    </>
  )
}

export default App
