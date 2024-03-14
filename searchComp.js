// SearchComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const apiKey = '0eb6fccdfb4dc326cd05c87f99c91444';
      const apiUrl = `https://api.geocoding.com/geocode?q=${searchTerm}&apikey=${apiKey}`;

      const response = await axios.get(apiUrl);
      const { lat, lon } = response.data.results[0].geometry;
      
      // Pass the coordinates to the parent component
      onSearch({ lat, lon });
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleInputChange} 
        placeholder="Enter country or location..." 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;