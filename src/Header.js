import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-title">Astronomy Weather App</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">About</li>
          <li className="nav-item">Today's Weather</li>
          <li className="nav-item">Moonphase</li>
          <li className="nav-item">Cloud Coverage</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header