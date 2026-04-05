import React from 'react';
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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/why">Why Arise Labs</a></li>
            <li><a href="/aday">A Day in A Tech</a></li>
            <li><a href="/team">Team</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><a href="/contact">Contact us</a></li>
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
