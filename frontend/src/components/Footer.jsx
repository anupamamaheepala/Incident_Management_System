import React from 'react';
import '../css/footer.css';
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/privacy-policy">Privacy Policies</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li><a href="/contact-us">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/live-chat">Live Chat</a></li>
              <li><a href="/complaint">Complaint</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Payment</h4>
            <div className="payment-links">
              <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer"><i className="ri-visa-fill"></i></a>
              <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer"><i className="ri-mastercard-fill"></i></a>
              <a href="https://www.americanexpress.com" target="_blank" rel="noopener noreferrer"><i className="ri-bank-card-2-fill"></i></a>
              <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer"><i className="ri-paypal-fill"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill"></i></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-fill"></i></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-box-fill"></i></a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="ri-youtube-fill"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© Mobitel (Pvt) Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
