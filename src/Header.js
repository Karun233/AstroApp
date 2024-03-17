// Header.js
import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {/* Hamburger menu icon */}
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <nav className={`header-right ${menuOpen ? 'open' : ''}`}>
        {/* Additional menu items */}
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
