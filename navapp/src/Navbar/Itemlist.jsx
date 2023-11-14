import React, { useState } from 'react';
import { products, scroll } from '../Helpers/products';
const ItemList = () => {
  const [searchTerm, setSearchTerm] = useState('');
 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setSearchTerm(term);
  };

  const filteredItems = products.filter((item) =>
  item.name?.toLowerCase().includes(searchTerm)
);
const scrollsearch=scroll.filter((item)=>item.description?.toLocaleLowerCase().includes(searchTerm))


  return (
    <div className='search'>
      <div >
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Type to search..."
        /><box-icon name='search'></box-icon>
      </div>

      <div className='searchitem'>
        {searchTerm !== '' ? (
          filteredItems.map((item) => (
            <div key={item.id} className="item">
            {item.name}
            <img src={item.image} style={{height:"50px", width:"50px"}}/>
            
            </div>
          )) 
        ) : (
          <p></p>
        )}

        {searchTerm !== '' ? (
            scrollsearch.map((item) => (
            <div key={item.id} className="item">
            {item.description}
            <img src={item.image} style={{height:"50px", width:"50px"}}/>
            </div>
          ))
        ) : (
          <p></p>
        )}
        
      </div>
    </div>
  );
};

export default ItemList;
