import React from 'react';
import logo from '../../assets/Logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Arise Logo" />
        </a>
        <ul className="navbar-menu">
          <li><a href="/about">About Arise</a></li>
          <li><a href="/why">Why Arise</a></li>
          <li><a href="/aday">A Day in A Tech</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
