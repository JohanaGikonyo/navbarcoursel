import React from 'react';
import { products } from '../Helpers/products';
import './products.css';

function Products() {
  return (
    <>
    <div className='scroll-container'>
    {products.map((item) => (
        <div key={item.id} className='eachitem'>
          <img src={item.image} alt={item.description} />
          <div className='descriptions'>
            <h3>{item.description}</h3>
            <h4>$ {item.cost}</h4>
            <h4>{item.discount}</h4>
            <h5>Orders left :{"  "+item.remaining}</h5>
          </div>
         
        </div>
      ))}
    </div>
    
      <div className='products'>
      {products.map((item) => (
        <div key={item.id} className='eachitem'>
          <img src={item.image} alt={item.description} />
          <div className='descriptions'>
            <h3>{item.description}</h3>
            <h4>$ {item.cost}</h4>
            <h4>{item.discount}</h4>
            <h5>Orders left :{"  "+item.remaining}</h5>
          </div>
         
        </div>
      ))}
    </div>

    
    </>
  );
}

export default Products;
