import "./Footer.scss";

import {
  FaCcAmex,
  FaCcApplePay,
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
  FaTwitter
} from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links-container">
        <div className="footer-link"><Link to="/our-story">Our Story</Link></div>
        <div className="footer-link"><Link to="">Privacy Policy</Link></div>
        <div className="footer-link"><Link to="">Refund Policy</Link></div>
        <div className="footer-link"><Link to="">Terms of Service</Link></div>
        <div className="footer-link"><Link to="">FAQ</Link></div>
        <div className="footer-link"><Link to="/care-information">Care information</Link></div>
        <div className="footer-link"><Link to="">Size Guide</Link></div>
        <div className="footer-link"><Link to="">Contact Us</Link></div>
      </div>
      <div className="footer-icons">
        <div className="footer-icons-payments">
          <FaCcVisa size="30px" className="footer-icons-payments-icon" />
          <FaCcAmex size="30px" className="footer-icons-payments-icon" />
          <FaCcMastercard size="30px" className="footer-icons-payments-icon" />
          <FaCcApplePay size="30px" className="footer-icons-payments-icon" />
          <FaCcDiscover size="30px" className="footer-icons-payments-icon" />
        </div>
        <div className="footer-icons-socials">
          <FaTwitter size="30px" className="footer-icons-socials-icon" />
          <AiFillInstagram size="30px" className="footer-icons-socials-icon" />
        </div>
      </div>
      <div className="footer-copyright">© 2021, Snuggle Bunny</div>
    </footer>
  );
};

export default Footer;
