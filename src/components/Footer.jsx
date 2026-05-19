import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col brand-col">
          <h2>Puranik <span className="text-primary">Catering</span></h2>
          <p className="footer-desc">
            35+ Years of trusted pure vegetarian catering excellence in Shivamogga. 
            Delivering authentic South Indian taste with modern hospitality.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-col services-col">
          <h3>Our Services</h3>
          <ul>
            <li>Wedding Catering</li>
            <li>Griha Pravesha</li>
            <li>Event Catering</li>
            <li>Institutional Catering</li>
            <li>Bulk Food Ordering</li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>Lakshmi Narasimha nilaya, opposite to milk dairy, Hosudi, Shivamogga, Karnataka 577222</p>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <p>+91 94486 40029</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>info@puranikcatering.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Puranik Catering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
