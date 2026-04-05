import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <img src={logo} alt="Arise Labs Logo" className="footer-logo" />
          <h2>Arise Labs</h2>
          <p><i className="icon-phone"></i> +233 54453934390</p>
          <p><i className="icon-mail"></i> Arise@gmail.com</p>
          <p><i className="icon-map"></i> Accra Digital Centre</p>
        </div>
        
        <div className="footer-section">
          <h3>Site</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/why">Why Arise Labs</Link></li>
            <li><Link to="/aday">A Day in A Tech</Link></li>
            <li><Link to="/team">Team</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved, Arise Ltd.</p>
        <div className="social-links">
          <span>Connect with us:</span>
          {/* Social icons would go here */}
          <a href="#"><i className="icon-linkedin"></i></a>
          <a href="#"><i className="icon-facebook"></i></a>
          <a href="#"><i className="icon-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
