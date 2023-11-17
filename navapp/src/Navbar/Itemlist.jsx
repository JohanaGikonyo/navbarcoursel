import React, { useState, useEffect, useRef } from 'react';
import { products, scroll } from '../Helpers/products';

const ItemList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setShowResults(true);
  };

  const closeResults = () => {
    setShowResults(false);
  };

  const filteredItems = products.filter((item) =>
    item.name?.toLowerCase().includes(searchTerm)
  );
  const scrollSearch = scroll.filter((item) =>
    item.description?.toLocaleLowerCase().includes(searchTerm)
  );

  useEffect(() => {
    // Add event listener to handle clicks outside the search component
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeResults();
      }
    };

    // Attach the event listener to the document body
    document.body.addEventListener('click', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='search' ref={searchRef}>
      <div>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Type to search..."
        />
        <box-icon name='search'></box-icon>
      </div>

      {showResults && (
        <div className='searchitem'>
          {searchTerm !== '' ? (
            filteredItems.map((item) => (
              <div key={item.id} className="item">
                {item.name}
                <img src={item.image} style={{ height: '50px', width: '50px' }} />
              </div>
            ))
          ) : (
            <p></p>
          )}

          {searchTerm !== '' ? (
            scrollSearch.map((item) => (
              <div key={item.id} className="item">
                {item.description}
                <img src={item.image} style={{ height: '50px', width: '50px' }} />
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemList;
