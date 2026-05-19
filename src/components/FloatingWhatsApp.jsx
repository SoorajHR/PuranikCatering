import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919448640029" 
      className="floating-wa"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="wa-icon" />
    </a>
  );
};

export default FloatingWhatsApp;
