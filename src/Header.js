// Header.js
import './Header.css';

function Header() {
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
    </header>
  );
}

export default Header;
