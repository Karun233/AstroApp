// Header.js
import './Header.css';
function Header(){
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
      <input className="search-bar"  type="text"  placeholder="   Search for Location..." />
      <button>Search</button>
    </div>
  </header>
);
};

export default Header