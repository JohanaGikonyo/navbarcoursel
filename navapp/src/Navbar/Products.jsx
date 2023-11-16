import React from 'react';
import { products,scroll } from '../Helpers/products';
import img1 from './images/picture.jpg'
import './products.css';

function Products() {
  return (
    <>
<div className='info'>
  <img src={img1} alt='image'/>
  <div className='info-child'>
    <h3>JKTECHS Is an electronic shop that offers electronic Services</h3>
  <h4>We offer Sales Country wide. We also do Cyber Services<br/> Such as Printing,
  Scanning, Photocopying, Forms Applications and photo Printing.
  </h4>
  <p>Our costs are Affordable <i>To Each Customer.</i></p>
  <h5>Come one, come all</h5>
  </div>
</div>

    <div className='scroll-container'>
    {scroll.map((items) => (
        <div key={items.id} className='eachitem-scroll'>
          <img src={items.image} alt={items.description} />
          <h3 className='desc'>{items.description}</h3>
            <h4 className='cost'>$ {items.cost}</h4>
            <button className='cart'>Add Cart</button>
          <div className='descriptions'>
        
            
          </div>
         
        </div>
      ))}
      
    </div>
    
      <div className='products'>
      {products.map((item) => (
        <div key={item.id} className='eachitem'>
          <img src={item.image} alt={item.name} />
          <div className='descriptions'>
          <h3 className='desc'>{item.name}</h3>
            <h4 className='costs'>$ {item.cost}</h4>
            <h5>Orders left :{"  "+item.remaining}</h5>
            <button className='cart'>Add Cart</button>
          </div>
         
        </div>
      ))}
    </div>

    
    </>
  );
}

export default Products;
