import React from 'react';
import './Footer.css';
import logo from '../img/logo-green-white-2-1.png'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="UrpanTech Logo" className="footer-logo" />
          <p className="footer-description">
            UrpanTech has been providing staffing and recruitment services to businesses in the IT industry since 2000. As a reliable and resourceful organization, we aim to be your talent partner with the focus on your present and future business goals.
          </p>
        </div>
        <div className="footer-center">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> 39355 California Street, #303, Fremont, CA 94538</li>
            <li><FaEnvelope /> info@urpantech.com</li>
            <li><FaEnvelope /> Career@urpantech.com</li>
            <li><FaPhone /> +1 408-744-6750</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© UrpanTech. all rights reserved.</p>
        <ul className="footer-bottom-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
