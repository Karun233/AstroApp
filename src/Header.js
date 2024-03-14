import './Header.css';
// Header.js
import React, { useState } from 'react';

const Header = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = () => {
    onSearch(searchTerm);

  }
  return (
    <header className="header">
      <div className="header-left">
        <div className="hamburger-menu">
          {/* Hamburger menu icon */}
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="header-right">
        {/* Search bar */}
        <input className="search-bar" value={searchTerm} type="text" onChange={handleInputChange} placeholder="   Search for Location..." />
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
};

export default Header;