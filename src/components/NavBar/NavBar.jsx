import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">🎬 MovieHub</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#trending">Trending</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
