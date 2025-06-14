import React from "react";
import "./style.css";
import logo from "../assets/logo.png"; // Make sure logo.png is in the same folder or adjust the path

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="Gym Rock Logo" width="60" height="60" />
            <h3>Gym Rock</h3>
            <p>Transforming lives through fitness.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#categories">Workouts</a></li>
              <li><a href="#categories">Nutrition</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <address>
              <p><i className="fas fa-envelope"></i> support@gymrock.com</p>
              <p><i className="fas fa-phone"></i> +123-456-7890</p>
              <p><i className="fas fa-map-marker-alt"></i> 123 Fit Street, Muscle City</p>
            </address>
          </div>
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <form>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Gym Rock. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;