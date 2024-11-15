import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-form-section">
        <h2>Fill the details and we will get back to you!</h2>
        <form className="contact-form">
          <input type="text" placeholder="First and last name" />
          <input type="email" placeholder="Email address" />
          <input type="tel" placeholder="Contact number" />
          <button type="submit">Contact us now ➔</button>
        </form>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Your Partner In <span>Progress</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
          </div>
          <div className="footer-links">
            <h4>Important <span>Links</span></h4>
            <ul>
              <li>✓ Support center</li>
              <li>✓ Privacy policy</li>
              <li>✓ Terms and conditions</li>
              <li>✓ Site map</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact <span>Us</span></h4>
            <p>📞 123 456 7890</p>
            <p>📞 123 456 7890</p>
            <p>✉️ Info@Yourcompany.com</p>
            <div className="footer-socials">
              <span>📘</span>
              <span>📸</span>
              <span>🎥</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
