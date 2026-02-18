import React from "react";
import "./Footer.css";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">Apex Mart</h2>
            <p className="footer-tagline">
              Redefining the standard of premium shopping experiences.
            </p>

            <div className="footer-socials">
              <Facebook size={18} />
              <Twitter size={18} />
              <Instagram size={18} />
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>SHOP</h4>
              <ul>
                <li>Computers</li>
                <li>Audio & Music</li>
                <li>Smart Watch</li>
                <li>Home Theater</li>
                <li>Accessories</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>SUPPORT</h4>
              <ul>
                <li>Order Status</li>
                <li>Shipping Policy</li>
                <li>Returns & Warranty</li>
                <li>Store Locator</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>COMPANY</h4>
              <ul>
                <li>About Apex Mart</li>
                <li>Sustainability</li>
                <li>Careers</li>
                <li>Newsroom</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Apex-Mart Market Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
