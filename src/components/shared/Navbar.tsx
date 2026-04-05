import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Arise Logo" />
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/about">About Arise</Link></li>
          <li><Link to="/why">Why Arise</Link></li>
          <li><Link to="/aday">A Day in A Tech</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
