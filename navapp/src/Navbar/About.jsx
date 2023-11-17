import React, { useEffect, useState } from 'react';
import { aboutimages,scroll } from '../Helpers/products';

import './about.css';

function About() {
  const animationDuration = 3000;
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
   
      <div className='image-slider'>
        <div className='columns '>
          {aboutimages.map((item,index) => (
            <div key={item.id} className='aboutimages'>
            <img  src={item.image} alt={`image-${index}`} />
            <h3 className='desc'>{item.description}</h3>
            <h4 className='costs'>$ {item.cost}</h4>
            <h5>Orders left :{"  "+item.remaining}</h5>
            <button className='cart'>Add Cart</button>
            </div>
          ))}
          
        </div>
        
        <div className='columndesc'>
        
        <h2>JKTECHS iS a Business that was started in the Year 2020.</h2>
         <h3>It was started by the CEO Madam Julia Kihiu, in Laikipia County, and it has now grown, slowly.</h3> 
         <div>
          <h3>We are Grad to announce that we are at your Gate, Country Wide.
          You need just kindly put your order, then we shall come back to you instantly.
          </h3>
          <p>Our products are Oringinal copies, directly from manufactures</p>
          <h3>Visit us at Nyahururu Shopping center, or contact us.</h3>
         </div>
         {scroll.map((item,index) => (
            <div key={item.id} className='aboutimages'>
            <img  src={item.image} alt={`image-${index + aboutimages.length}`} />
            <h3 className='desc'>{item.description}</h3>
            <h4 className='costs'>$ {item.cost}</h4>
            <h5>Orders left :{"  "+item.remaining}</h5>
            <button className='cart'>Add Cart</button>
            
            </div>
          ))}  
        </div>
        
      </div>
   
  );
}

export default About;
