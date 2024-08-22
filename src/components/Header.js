import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My Website Header!</h1>
      <div className="button-container">
        <Link to="/page1" className="nav-button">Dad joke</Link>
        <Link to="/page2" className="nav-button">Pokemons</Link>
        <Link to="/page3" className="nav-button">Images</Link>
      </div>
    </header>
  );
}

export default Header;

