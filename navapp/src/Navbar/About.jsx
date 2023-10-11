import React from 'react'
import  { useEffect } from 'react'
import { useState } from 'react'
import './about.css'
import img1 from './images/pexels-agung-pandit-wiguna-3401403.jpg'
import img2 from './images/pexels-cottonbro-studio-4709832.jpg'
import img3 from './images/pexels-linkedin-sales-navigator-1251861.jpg'
import img4 from './images/pexels-mikhail-nilov-7776963.jpg'
import img5 from './images/pexels-rdne-stock-project-7713135.jpg'
import img6 from './images/pexels-tam-hoang-1007066.jpg'


function About() {
    const images=[
        img1,img2,img3,img4,img5,img6
    ];
    const animationDuration=3000;
    
const [currentIndex, setCurrentIndex] = useState(0);
useEffect(()=>{
    const timer=setInterval(()=>{
        setCurrentIndex((prevIndex)=>(prevIndex===images.length-1?
            0:prevIndex+1));

    },animationDuration)
    return ()=>{
        clearInterval(timer);
    };
    
    
},[])
const currentImage = images[currentIndex];

  return (
    <>
<div className='image-slider'>
<div
        className="image"
        style={{ backgroundImage: `url(${currentImage})` }}
      />
</div>
    </>
  )
}

export default About