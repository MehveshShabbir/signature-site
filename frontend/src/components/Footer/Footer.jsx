import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-title">Get in Touch</h2>
          <p className="footer-description">
            Ecosystem bootstrapping learning curve lean startup disruptive.
            Marketing long tail disruptive agile development partner.
          </p>
          <div className="footer-social-icons">
            <a href="https://instagram.com" className="social-icon instagram" aria-label="Instagram"></a>
            <a href="https://linkedin.com" className="social-icon linkedin" aria-label="LinkedIn"></a>
            <a href="https://pinterest.com" className="social-icon pinterest" aria-label="Pinterest"></a>
            <a href="https://twitter.com" className="social-icon twitter" aria-label="Twitter"></a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-contact-card">
            <div className="contact-icon dribbble" aria-label="Dribbble"></div>
            <p className="contact-info">dribbble.com/example</p>
          </div>
          <div className="footer-contact-card">
            <div className="contact-icon email" aria-label="Email"></div>
            <p className="contact-info">contact@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
