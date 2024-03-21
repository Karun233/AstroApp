import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
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
          <li><Link to="/">Home</Link></li> {/* Use Link instead of a */}
          <li><Link to="/AstroData">AstroData</Link></li> {/* Use Link instead of a */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
