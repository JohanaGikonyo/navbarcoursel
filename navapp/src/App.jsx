import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Navbar/Home'
import Contact from './Navbar/Contact'
import About from './Navbar/About'

import { Link, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </>
  )
}

export default App
