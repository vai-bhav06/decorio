import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">
          <h2>Decorio</h2>

          <p>
            Transform your home with elegant interior designs,
            premium furniture, and personalized living spaces.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#rooms">Rooms</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Services */}

        <div className="footer-box">
          <h3>Services</h3>

          <a href="#">Living Room Design</a>
          <a href="#">Bedroom Design</a>
          <a href="#">Office Interior</a>
          <a href="#">Kitchen Design</a>
          <a href="#">Consultation</a>
        </div>

        {/* Contact */}

        <div className="footer-box">
          <h3>Contact Us</h3>

          <p><FaPhoneAlt /> +91 98765 43210</p>

          <p><FaEnvelope /> decorio@gmail.com</p>

          <p><FaMapMarkerAlt /> Mumbai, Maharashtra, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Decorio. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;